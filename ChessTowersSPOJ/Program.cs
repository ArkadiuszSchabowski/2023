using System;

namespace ChessTowersSPOJ
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] values = input.Split(' ');

            if (values.Length == 2)
            {
                string firstValue = values[0];
                string secondValue = values[1];

                string result = CheckIsTowerAttackTower(firstValue, secondValue);
                Console.WriteLine(result);
            }
            else
            {
                Console.WriteLine("Błąd wejścia. Wprowadź dwie współrzędne oddzielone spacją.");
            }
        }

        static string CheckIsTowerAttackTower(string firstValue, string secondValue)
        {
            char stringFirstValue = firstValue[0];
            char numberFirstValue = firstValue[1];

            char stringSecondValue = secondValue[0];
            char numberSecondValue = secondValue[1];

            if (stringFirstValue == stringSecondValue || numberFirstValue == numberSecondValue)
            {
                return "TAK";
            }
            else
            {
                return "NIE";
            }
        }
    }
}