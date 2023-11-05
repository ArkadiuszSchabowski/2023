using Microsoft.EntityFrameworkCore;

namespace OwnEntityFrameWork.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<Animal> Animals { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("myDb");
        }
    }
}
