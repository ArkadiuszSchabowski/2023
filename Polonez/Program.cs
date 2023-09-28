using System;

namespace Polonez
{
    public class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] inputArr = input.Split(' ');
            int number = int.Parse(inputArr[0]);
            int year = int.Parse(inputArr[1]);

            int result = TheBestNumber(number, year);
            Console.WriteLine(result); // Wypisujemy rocznikowy wiek.
            Console.ReadKey();
        }

        static int TheBestNumber(int number, int year)
        {
            int resultFirstStep = ((number % 10) * 2) + 5;
            int resultSecondStep = (resultFirstStep * 50) + 1771;
            int result = resultSecondStep - year;
            return result;
        }
    }
}
