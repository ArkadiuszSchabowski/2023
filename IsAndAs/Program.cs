using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IsAndAs
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] array = new int[]
            {
                10,5,11,90,-16,20,34
            };

            int minValue = array.Min();
            Console.WriteLine(minValue);
            int maxValue = array.Max();
            Console.WriteLine(maxValue);
            Console.WriteLine();
            int[] positiveNumbers = array.Where(x => x > 0).ToArray();
            foreach (var item in positiveNumbers)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine();
            int[] arrX2 = array.Select(x => (x * 2)).ToArray();
            foreach (var item in arrX2)
            {
                Console.WriteLine(item);
            }
            Console.ReadKey();
        }
    }
}
