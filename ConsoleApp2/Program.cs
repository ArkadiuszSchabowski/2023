using Microsoft.EntityFrameworkCore;
using ConsoleApp2_Common;
using ConsoleApp2_Database;

namespace ConsoleApp2
{
    public class Program
    {
        public static void Main(string[] args)
        {
            using (var context = new MyDbContext())
            {
                var animal = new Animal()
                {
                    ID = 1,
                    Name = "Guinea Pig",
                    Predator = false,
                };
                context.Add(animal);
                context.SaveChanges();

                var allAnimals = context.Animals.ToList();
            }
        }
    }
}