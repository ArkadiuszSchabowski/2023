using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OwnTests
{
    public static class Operations
    {
        public static  int Substraction(int number1, int number2)
        {
            return number1 - number2;
        }
        static void Main(string[] args)
        {
            int result = Substraction(9, 3);
            Console.WriteLine(result);
            Console.ReadKey();
        }
    }
}
