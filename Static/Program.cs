using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Static
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Test test = new Test(5);
            Console.WriteLine(test.myReadOnly); //Wartosc readonly mozemy zmienic w konstruktorze nawet gdy wczesniej jest przypisana - 2 roznica
            Console.WriteLine(Test.myConst);
            Console.ReadKey();
        }
    }
    public class Test
    {
        public const int myConst = 2;
        public readonly int myReadOnly;

        public Test(int myReadOnly)

        {
            //myConst nie widac, poniewaz odwolujemy sie do niej z poziomu klasy a nie obiektu
            this.myReadOnly = myReadOnly;
        }
    }
}
