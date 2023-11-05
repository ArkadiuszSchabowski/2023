using ExamMVCDatabase.TestModel;
using Microsoft.EntityFrameworkCore;

namespace ExamMVCDatabase.Database
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
