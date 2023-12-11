using LunchingProjectMVC.Database.Entities;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace LunchingProjectMVC.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<Restaurant> Restaurants { get; set; }
        public DbSet<Dish> Dishes { get; set; }

        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Restaurant>(x =>
            {
                x.Property(x => x.Name).
                IsRequired().HasMaxLength(25);
                x.Property(x => x.Description).HasMaxLength(100);
                x.HasMany(r => r.Dishes)
                 .WithOne(d => d.Restaurant)
                    .HasForeignKey(d => d.RestaurantId)
                    .IsRequired();

            });
            modelBuilder.Entity<Restaurant>().HasData(new Restaurant
            {
                Id = 1,
                Name = "Malinowy Dwór",
                OpenHour = 6,
                CloseHour = 20,
                HasDelivery = false,
                Description = "Dania dla koneserów"
            },
            new Restaurant
            {
                Id = 2,
                Name = "Bourbon",
                OpenHour = 7,
                CloseHour = 22,
                HasDelivery = true,
                Description = "Smaczne i tanio"
            },
            new Restaurant
            {
                Id = 3,
                Name = "Pizzeria u Batmana",
                OpenHour = 11,
                CloseHour = 23,
                HasDelivery = true,
                Description = "Najlepsza pizza w mieście, szybki dojazd"
            });

            modelBuilder.Entity<Dish>(x =>
            {
                x.Property(x => x.RestaurantId).
                IsRequired()
                .HasPrecision(4);
            });

            modelBuilder.Entity<Dish>().HasData(new Dish
            {
                Id = 1,
                RestaurantId = 1,
                Name = "Zupa krewetkowa",
                Price = 9.99,
                Description = "Zupa ala krem - krewetkowa"
            });
            modelBuilder.Entity<Dish>().HasData(new Dish
            {
                Id = 2,
                RestaurantId = 2,
                Name = "Naleśniki z dżemem+dodatki",
                Price = 8.50,
                Description = "Dwa duże naleśniki polane czekoladą i bitą śmietaną"
            });
            modelBuilder.Entity<Dish>().HasData(new Dish
            {
                Id = 3,
                RestaurantId = 3,
                Name = "Pizza hawajska",
                Price = 29.99,
                Description = "Pizza z ananasem"
            },
            new Dish
            {
                Id = 4,
                RestaurantId = 3,
                Name = "Pizza peperoni",
                Price = 34.99,
                Description = "Pizza z salami"
            });
        }
    }
}
