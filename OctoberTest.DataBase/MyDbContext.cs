using Microsoft.EntityFrameworkCore;

namespace OctoberTest.DataBase
{
    public class MyDbContext : DbContext
    {
        public DbSet<Animal> Animals { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.;Database=OctoberTest;Trusted_Connection=True;");
        }
    }
}
