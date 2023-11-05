using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.EntityFrameworkCore;
using WebApplication8.Entities;

namespace WebApplication8
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddAuthorization();

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddAuthorization();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<MyBoardsContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("MyBoardsConnectionString"));
            });

            using (var context = new MyBoardsContext(builder.Services.BuildServiceProvider().GetService<DbContextOptions<MyBoardsContext>>()))
            {
                var firstAdress = new Adress()
                {
                    City = "Chorzów",
                    Country = "Polska",
                    PostalCode = "41-500",
                    Street = "Nowa",
                };
                context.Adresses.Add(firstAdress);
                context.SaveChanges();
            }

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            //app.UseAuthorization();

            app.Run();
        }
    }
}