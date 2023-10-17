using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccessModifiers
{
    //ZADANIE - rozroznic:

    //private protected od private
    //inernal od internal protected
    internal class Program
    {
        static void Main(string[] args)
        {
            A a = new A();
            //Nie widac privateInt 
            //Nie widac protectedInt
            //Nie widac private protected
            a.protectedInternalInt = 10;
            Console.WriteLine(a.protectedInternalInt);
            Console.ReadKey();
        }
    }
    public class A
    {
        private int privateInt = 1;
        protected int protectedInt = 2;
        internal int internalInt = 3;
        public int publicInt = 4;

        protected internal int protectedInternalInt = 5;
        private protected int privateProtectedInt =6;
    }
    public class B : A
    {
        void Test()
        {
            //Nie widac privateInt
        }
    }
}
