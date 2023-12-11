using DatabaseRelation.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace DatabaseRelation.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
                
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasOne(x => x.Address)
                .WithOne(x => x.User)
                .HasForeignKey<Address>(a => a.UserId);

            modelBuilder.Entity<User>().HasData(new User
            {
                Id = 1,
                Name = "Dominika",
                Age = 21,            
            });
            modelBuilder.Entity<Address>().HasData(new Address
            {
                Id = 1,
                City = "Chorzów",
                Country = "Polska",
                PostalCode = "41-506",
                UserId = 1
            });


        }
    }
}
