using Microsoft.EntityFrameworkCore;
using WordMaster.Database.Entities;

namespace WordMaster.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<Word> Words { get; set; }
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
                
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Word>().HasData(new Word
            {
                Id = 1,
                PolishWord = "Pies",
                EnglishWord = "Dog"
            },
            new Word
            {
                Id=2,
                PolishWord = "Kot",
                EnglishWord ="Cat"
            },
            new Word
            {
                Id=3,
                PolishWord = "Samochód",
                EnglishWord = "Car"
            }
            );
        }
    }
}
