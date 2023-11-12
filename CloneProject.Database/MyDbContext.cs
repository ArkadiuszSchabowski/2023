using Microsoft.EntityFrameworkCore;

namespace CloneProject.Database
{
    public interface IShowAllUsers
    {
        List<User> GetUsers();
    }
    public class MyDbContext : DbContext, IShowAllUsers
    {
        public MyDbContext()
        {

        }
        public DbSet<User> Users { get; set; }
    }
}
