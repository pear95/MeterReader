using Grpc.Net.Client;
using MeterReader.gRPC;
using static MeterReader.gRPC.MeterReaderService;

namespace MeterReadingClient
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;
        private readonly ReadingGenerator _readingGenerator;
        private readonly int _customerId;
        private readonly string _serviceUrl;

        public Worker(ILogger<Worker> logger, ReadingGenerator readingGenerator, IConfiguration configuration)
        {
            _logger = logger;
            _readingGenerator = readingGenerator;
            _customerId = configuration.GetValue<int>("CustomerId");
            _serviceUrl = configuration["ServiceUrl"];
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                if (_logger.IsEnabled(LogLevel.Information))
                {
                    _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
                }

                var channel = GrpcChannel.ForAddress(_serviceUrl);
                var client = new MeterReaderServiceClient(channel);
                var package = new ReadingPackage()
                {
                    Successful = ReadingStatus.Success,
                };

                for (int i = 0; i < 3; i++)
                {
                    var reading = await _readingGenerator.GenerateAsync(_customerId);
                    package.Readings.Add(reading);
                }

                var status = client.AddReading(package);

                if (status.Success == ReadingStatus.Success)
                {
                    _logger.LogInformation("Called GRPC was successful");
                }
                else
                {
                    _logger.LogError("Called GRPC was failed");
                }

                await Task.Delay(5000, stoppingToken);
            }
        }
    }
}
