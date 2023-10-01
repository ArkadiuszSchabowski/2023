using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadOnlyVSConst
{
    class Person
    {
        public const int myConst = 9;
        public readonly int myReadOnly; // Pierwsza roznica - readonly nie musi byc przypisane przy inicjalizacji.

        public Person(int number)
        {
            this.myReadOnly = number; //Trzecia roznica wartosc readonly mozemy zmienic za pomoca konstruktora
            //Natomiast nie ma dostepu do const dlatego ze odwolujemy sie do niego z poziomu klasy, a nie obiektu.
        }
        public void GetValues()
        {
            const int newConst = 10; //Czwarta roznica const mozemy zadeklarowac w metodzie oraz jako pole, natomiast
                                     //readonly musimy zadeklarowac jako pole.
            Console.WriteLine(Person.myConst + this.myReadOnly);
        }
    }
}
