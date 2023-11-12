using Microsoft.EntityFrameworkCore;

namespace DI2.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<Animal> Animals { get; set; }
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
                
        }
    }
}
