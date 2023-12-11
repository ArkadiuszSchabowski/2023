using Microsoft.EntityFrameworkCore;
using RestaurantDecemberProject.Database.Entities;

namespace RestaurantDecemberProject.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<Restaurant> Restaurants { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Dish> Dishes { get; set; }

        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }
    }
}
