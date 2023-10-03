using System;

namespace Dziedziczenie_konstruktorow
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Tiger tiger = new Tiger();
            tiger.ShowName();
            Console.ReadKey();
        }
    }

    class Animal
    {
        private string name = "Little Animal";

        public string Name
        {
            get { return name; }
            private set { name = value; }
        }


        public Animal()
        {
            // Konstruktor klasy Animal bez argumentów
        }
    }

    class Tiger : Animal
    {
        public Tiger() : base()
        {
        }

        public void ShowName()
        {
            Console.WriteLine("My name is a: " + Name);
        }
    }
}
