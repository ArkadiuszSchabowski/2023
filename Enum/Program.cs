using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Enum
{
    enum Color
    {
        White, Brown, Black
    };
    internal class Program
    {
        static void Main(string[] args)
        {
            //Dog dog1 = new Dog("Tosia", 3, Color.Black);
            //Console.WriteLine(dog1.name + " "+ dog1.age + " " + dog1.color);
            LinqTraining linqTraining = new LinqTraining();
            linqTraining.Numbers();
            Console.ReadKey();
        }
    }
    class Dog
    {
        public string name;
        public int age;
        public Color color;
        public Dog(string name, int age, Color color)
        {
            this.name = name;
            this.age = age;
            this.color = color;
        }
    }
    public class LinqTraining
    {
        int[] numbers = new[]
        {
            1,4,-5,-11,20,40,100,-96,18,24
        };
        public void Numbers()
        {
            int numberMax = numbers.Max();
            int numberMin = numbers.Min();
            double numberAverage = numbers.Average();
            int numbersSum = numbers.Sum();
            int[] numbersPositiveMultiplicationTwo = numbers.Where(x => x > 0).Select(x => x * 2).ToArray();
            Console.WriteLine(numberMax);
            Console.WriteLine(numberMin);
            Console.WriteLine(numberAverage);
            Console.WriteLine($"{numbersSum}\n");
            int[] numbersX2 = numbers.Select(x => x * 2).ToArray();

            //NumbersPositive
            foreach (var item in numbersPositiveMultiplicationTwo)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine();

            foreach (int item in numbersX2)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine();
            Console.ReadKey();
        }
    }
}
