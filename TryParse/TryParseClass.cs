using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TryParse
{
    internal class TryParseClass
    {
        static void Main(string[] args)
        {
            TryParse();
        }
        public static void TryParse()
        {
            string userInput = Console.ReadLine();
            int number;

            if (int.TryParse(userInput, out number))
            {
                // Konwersja się powiodła, a wartość liczby została przypisana do zmiennej "number".
                Console.WriteLine("Wprowadzona liczba to: " + number);
            }
            else
            {
                // Konwersja nie powiodła się, użytkownik wprowadził niepoprawny format liczby.
                Console.WriteLine("To nie jest poprawna liczba całkowita.");
            }

            Console.WriteLine(number);
            Console.ReadKey();
        }
    }
}

