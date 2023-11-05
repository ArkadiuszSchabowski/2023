using Microsoft.EntityFrameworkCore;

namespace SqlServer
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