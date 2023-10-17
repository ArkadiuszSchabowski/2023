using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Delegaty
{
    internal class Program
    {
        

        static void Main(string[] args)
        {
            string myResult = ResultWithText(Add, 10, 6);
            Console.WriteLine(myResult);
        }
        static string ResultWithText(Func<int, int, int> func, int number1, int number2)
        {
            int result = func.Invoke(number1, number2);
            return "Wynik: " + result.ToString();
        }
        static int Add(int number1, int number2)
        {
            return number1 + number2;
        }
    }
}
