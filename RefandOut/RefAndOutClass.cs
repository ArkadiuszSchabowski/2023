using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RefandOut
{
    internal class RefAndOutClass
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Before Addition:");
            int firstNumber = 6;
            int secondNumber = 7;
            Console.WriteLine($"firstNumber: {firstNumber}");
            Console.WriteLine($"secondNumber: {secondNumber}");

            int result = myReadOnlyClass.Addition(firstNumber, secondNumber);
            Console.WriteLine("After No-ref(Normal)Addition:");
            Console.WriteLine($"firstNumber: {firstNumber}");//dzialalismy na kopii takze bez zmian: 6
            Console.WriteLine($"secondNumber: {secondNumber}");//dzialalismy na kopii takze bez zmian: 7

            int result2 = myReadOnlyClass.ReferenceAddition(ref firstNumber, ref secondNumber);
            Console.WriteLine("After reference addition");
            Console.WriteLine($"firstNumber: {firstNumber}");  // 1 - dzialamy na referencji takze zmienna zmienila po wywolaniu metody referenceAddition();
            Console.WriteLine($"secondNumber: {secondNumber}"); // 2 - dzialamy na referencji takze zmienna zmienila sie 
            //po wywolaniu metody referenceAddition();
            Console.ReadKey();
        }
    }
    public class myReadOnlyClass
    {

        public static int Addition(int number1, int number2)
        {
            number1 = 1;
            number2 = 2;
            return number1 + number2;
        }
        public static int ReferenceAddition(ref int number1, ref int number2)
        {
            number1 = 1;
            number2 = 2;
            return number1 + number2;
        }

        //Roznice miedzy ref i out. Ref zachowuje sie troche jak const.
        //A out zachowuje sie troche jak readonly.

        //Jesli wysylamy argument do funkcji za pomoca ref to musimy wczesniej
        //przypisac jej wartosc.

        //Jesli wysylamy argument do funkcji za pomoca out to nie musimy wczesniej przypisywac wartosci, ale musimy ja
        //przypisac w metodzie do ktorej byla przekazana niezaleznie od tego czy wczesniej byla zainicjalizowana czy tez nie

        public void TryParse()
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
