using CourseEntity.Entitties;
using Microsoft.EntityFrameworkCore;

namespace CourseEntity
{
    public class MyBoardsContext : DbContext
    {
        public MyBoardsContext(DbContextOptions<MyBoardsContext>options) : base(options)
        {

        }

        public DbSet<Animal> Animals { get; set; }
        public DbSet<Car> Cars { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Animal>(eb =>
            {
                eb.Property(x => x.Name).HasColumnName("Animal Name");
                eb.Property(x => x.Predator).IsRequired();
                eb.Property(x => x.Name).HasDefaultValue("-");
            });
            modelBuilder.Entity<Car>(eb =>
            {
                eb.Property(x => x.Brand).HasMaxLength(30);
            });
        }
    }
}
