namespace MeterReadingClient
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = Host.CreateApplicationBuilder(args);
            builder.Services.AddHostedService<Worker>();
            builder.Services.AddTransient<ReadingGenerator>();

            var host = builder.Build();
            host.Run();
        }
    }
}