using Microsoft.EntityFrameworkCore;

namespace Test2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            using (var context = new MyDbContext())
            {
                var animal = new Animal()
                {
                    Name = "Tiger"
                };

                context.Animals.Add(animal);
                context.SaveChanges();
            }
        }
    }
}