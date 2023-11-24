using _00AngularCourse.Entities;
using Microsoft.EntityFrameworkCore;

namespace _00AngularCourse.Data
{
    public class MyDbContext : DbContext
    {
        DbSet<AppUser> Users { get; set; }
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
                
        }
    }
}
