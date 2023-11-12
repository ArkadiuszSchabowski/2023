using Microsoft.EntityFrameworkCore;

namespace DEPENDENCY.Database
{

    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
                
        }
        public DbSet<Animal> Animals { get; set; }
    }
}
