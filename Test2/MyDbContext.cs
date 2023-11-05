using Microsoft.EntityFrameworkCore;

namespace Test2
{
    public class MyDbContext : DbContext
    {
        public DbSet<Animal> Animals { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.;Database=MyDbContext;Trusted_Connection=True;");
        }
    }
}