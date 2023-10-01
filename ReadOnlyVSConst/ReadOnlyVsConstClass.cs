using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadOnlyVSConst
{
    internal class ReadOnlyVsConstClass
    {
        static void Main(string[] args)
        {
            Person person = new Person(5);

            Console.WriteLine(Person.myConst); //Druga roznica do const odwolujemy sie tak jak do zmiennej statycznej
            Console.WriteLine(person.myReadOnly); //do readonly odwolujemy sie w obiekcie
        }
    }
}
