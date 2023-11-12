using Microsoft.EntityFrameworkCore;

namespace AnimalDbWithoutDI.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<Animal> Animals { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.;Database=AnimalsWithoutDI;Trusted_Connection=True;Encrypt=False");
        }
    }
}
