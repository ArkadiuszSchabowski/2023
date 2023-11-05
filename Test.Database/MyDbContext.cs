using Microsoft.EntityFrameworkCore;
using Test.Database.Entities;

namespace Test.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<GuineaPig> GuineaPigs { get; set; }
        public DbSet<Person> People { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("myDb");
        }
    }
}
