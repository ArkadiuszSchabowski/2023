using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Connect.Database;

namespace Connect
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Dodaj usługi do kontenera.
            builder.Services.AddControllersWithViews();

            // Konfiguracja bazy danych
            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

            builder.Services.AddDbContext<MyDbContext>(options =>
                options.UseSqlServer(connectionString));

            // Utwórz instancję klasy kontekstu bazy danych.
            using (var serviceScope = builder.Services.BuildServiceProvider().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<MyDbContext>();

                // Upewnij się, że baza danych istnieje lub zostanie utworzona.
                context.Database.EnsureCreated();
            }

            var app = builder.Build();

            // ...

            app.Run();
        }
    }
}