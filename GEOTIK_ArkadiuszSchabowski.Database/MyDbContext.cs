using Microsoft.EntityFrameworkCore;

namespace GEOTIK_ArkadiuszSchabowski.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
               
        }
    }
}
