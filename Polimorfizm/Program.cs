using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polimorfizm
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Animal animal = new Animal("Bialy");
            animal.PrintAnimal();
            Dog dog = new Dog("Czarny","Warczenie");
            dog.PrintAnimal();
            animal.PrintAnimal();

            Console.ReadLine();
        }
    }
    public class Animal
    {
        private string _color;
        public Animal(string color)
        {
            _color = color;
        }
        public void PrintAnimal()
        {
            Console.WriteLine("Twoj pies ma kolor: " + _color);
        }
    }

    public class Dog
    {
        string _color;
        string _voice;
        public Dog(string color, string voice)
        {
            _color = color;
            _voice = voice;
        }
        public void PrintAnimal()
        {
            Console.WriteLine("Twoj pies ma kolor:" + _color);
            Console.WriteLine("Twoj pies wydaje dzwiek: " + _voice);
        }
    }
}
