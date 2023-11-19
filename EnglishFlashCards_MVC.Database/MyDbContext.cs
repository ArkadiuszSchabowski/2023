using Microsoft.EntityFrameworkCore;

namespace EnglishFlashCards_MVC.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<Word> Words { get; set; }
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
                
        }
    }
}
