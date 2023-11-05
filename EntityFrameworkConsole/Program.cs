using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace EntityFrameworkConsole
{
    internal class Program
    {
        static void Main(string[] args)
        {
            using (var context = new MyDbContext())
            {
                var animal = new Animal()
                {
                    ID = 1,
                    Name = "Cow",
                    Color = "White",
                    Predator = false,
                };
                context.Animals.Add(animal);
                context.SaveChanges();

                var allAnimals = context.Animals.ToList();
            }
        }
    }
    public class MyDbContext : DbContext
    {
        public DbSet<Animal> Animals { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("myDb");
        }
    }
    public class Animal
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public bool Predator { get; set; }

    }
}