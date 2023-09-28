using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit;
using NUnit.Framework;

namespace UnitTestsSeptember
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int result = Operations.Addition(5, 7);
            Console.WriteLine(result);
            Console.ReadKey();
        }
    }
}
