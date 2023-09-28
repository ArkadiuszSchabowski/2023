using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FindLargestNumberAndTests
{
    public static class Program
    {
            static int[] _arr = { 1, 3, 5, 7, 9 };
        static void Main(string[] args)
        {
            FindLargestNumber(_arr);
        }
        public static int FindLargestNumber(int[] arr)
        {

            int maxNumber = arr.Max();
            Console.WriteLine(maxNumber);
            Console.ReadLine();
            return maxNumber;
        }
    }
}
