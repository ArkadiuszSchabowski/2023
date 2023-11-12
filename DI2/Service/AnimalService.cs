using DI2.Database;
using Microsoft.EntityFrameworkCore;

namespace DI2.Service
{
    public interface IAnimalService
    {
        public void AddAnimal();
    }
    public class AnimalService : IAnimalService
    {
        private readonly MyDbContext _db;
        public AnimalService(MyDbContext db)
        {
            _db = db;
        }
        public void AddAnimal()
        {
            //var animal = new Animal
            //{
            //    Name = "",
            //    Predator = null
            //};
            //_db.Animals.Add(animal);
            //_db.SaveChanges();
        }
    }
}
