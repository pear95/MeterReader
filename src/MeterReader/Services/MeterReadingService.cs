using Google.Protobuf.WellKnownTypes;
using Grpc.Core;
using MeterReader.gRPC;
using static MeterReader.gRPC.MeterReaderService;

namespace MeterReader.Services
{
    /// <summary>
    /// Should be also installed in Nuget Package: 1.Google Protobuf 2. Grpc.Tools 3. Grpc.Aspnetcore
    /// </summary>
    public class MeterReadingService : MeterReaderServiceBase
    {
        private readonly IReadingRepository _repository;
        private readonly ILogger<MeterReadingService> _logger;

        public MeterReadingService(IReadingRepository repository, ILogger<MeterReadingService> logger)
        {
            _repository = repository;
            _logger = logger;
        }
        public override async Task<StatusMessage> AddReading(ReadingPackage request, ServerCallContext context)
        {
            if (request.Successful == ReadingStatus.Success)
            {
                foreach (var reading in request.Readings)
                {
                    var readinigValue = new MeterReading()
                    {
                        CustomerId = reading.CustomerId,
                        Value = reading.ReadingValue,
                        ReadingDate = reading.ReadingTime.ToDateTime(),

                    };

                    _logger.LogInformation($"Adding: {readinigValue.Id} -> value: {readinigValue.Value}");
                    _repository.AddEntity(readinigValue);
                }

                if (await _repository.SaveAllAsync())
                {
                    _logger.LogInformation("Added to DB correctly");
                    return new StatusMessage()
                    {
                        Success = ReadingStatus.Success,
                        Message = "Added to DB correctly"
                    };
                }
            }
            _logger.LogInformation("Failed to inject data to db");
            return new StatusMessage()
            {
                Success = ReadingStatus.Success,
                Message = "Failed to inject data to db"
            };
        }

        public override Task<Empty> AddReadingsStream(IAsyncStreamReader<ReadingMessage> requestStream, ServerCallContext context)
        {
            return base.AddReadingsStream(requestStream, context);
        }
    }
    
}
