using LunchingProject.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace LunchingProject.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<Restaurant> Restaurants { get; set; }

        public MyDbContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Restaurant>().HasData(
                new Restaurant
                {
                    Id = 1,
                    Name = "Malinowy Dwór",
                    Description = "Przepyszne jedzenie dla koneserów"
                },
                new Restaurant
                {
                    Id = 2,
                    Name = "Bourbon",
                    Description = "Smacznie i tanio"
                },
                new Restaurant
                {
                    Id = 3,
                    Name = "Pizzeria u Batmana",
                    Description = "Najlepsza pizza, szybki dowóz"
                }

            );
        }
    }
}
