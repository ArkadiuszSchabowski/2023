using WithoutDI.Database;
using WithoutDI.Controllers;
namespace WithoutDI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

                        if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
};

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

                        app.MapAnimalEndpoints();

            app.Run();
        }
    }


public static class AnimalEndpoints
{
	public static void MapAnimalEndpoints (this IEndpointRouteBuilder routes)
    {
        routes.MapGet("/api/Animal", async (MyDbContext db) =>
        {
            return await db.Animals.ToListAsync();
        })
        .WithName("GetAllAnimals")
        .Produces<List<Animal>>(StatusCodes.Status200OK);

        routes.MapGet("/api/Animal/{id}", async (int Id, MyDbContext db) =>
        {
            return await db.Animals.FindAsync(Id)
                is Animal model
                    ? Results.Ok(model)
                    : Results.NotFound();
        })
        .WithName("GetAnimalById")
        .Produces<Animal>(StatusCodes.Status200OK)
        .Produces(StatusCodes.Status404NotFound);

        routes.MapPut("/api/Animal/{id}", async (int Id, Animal animal, MyDbContext db) =>
        {
            var foundModel = await db.Animals.FindAsync(Id);

            if (foundModel is null)
            {
                return Results.NotFound();
            }

            db.Update(animal);

            await db.SaveChangesAsync();

            return Results.NoContent();
        })
        .WithName("UpdateAnimal")
        .Produces(StatusCodes.Status404NotFound)
        .Produces(StatusCodes.Status204NoContent);

        routes.MapPost("/api/Animal/", async (Animal animal, MyDbContext db) =>
        {
            db.Animals.Add(animal);
            await db.SaveChangesAsync();
            return Results.Created($"/Animals/{animal.Id}", animal);
        })
        .WithName("CreateAnimal")
        .Produces<Animal>(StatusCodes.Status201Created);


        routes.MapDelete("/api/Animal/{id}", async (int Id, MyDbContext db) =>
        {
            if (await db.Animals.FindAsync(Id) is Animal animal)
            {
                db.Animals.Remove(animal);
                await db.SaveChangesAsync();
                return Results.Ok(animal);
            }

            return Results.NotFound();
        })
        .WithName("DeleteAnimal")
        .Produces<Animal>(StatusCodes.Status200OK)
        .Produces(StatusCodes.Status404NotFound);
    }
}}