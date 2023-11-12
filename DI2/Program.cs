using DI2.Database;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using DI2.Service;

namespace DI2
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<MyDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DbConnectionString")));

            // Dodaj usługę AnimalService
            builder.Services.AddScoped<IAnimalService, AnimalService>();

            var app = builder.Build();

            // Inicjalizacja bazy danych
            using (var scope = app.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                var animalService = services.GetRequiredService<IAnimalService>();
                animalService.AddAnimal();
            }

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
