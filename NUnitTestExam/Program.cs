using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NUnitTestExam
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int result = Operations.Addition(5, 10);
            Console.WriteLine(result);
            Console.ReadKey();
        }
    }
}
