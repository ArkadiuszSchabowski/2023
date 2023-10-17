using System;
using System.Collections.Generic;
using System.Linq;
using System.Management.Instrumentation;
using System.Text;
using System.Threading.Tasks;
using AccessModifiers;

namespace ConsoleApp1
{
    public class B : A
    {
        void Test()
        {
            // B dziedziczy z klasy A, ale jest w innym zestawie (AnotherAssembly).
            // Możesz uzyskać dostęp do 'protectedInternalInt', ale nie do 'internalInt'.
            protectedInternalInt = 50; // Widoczne, ponieważ jest to modyfikator 'protected internal'.
            internalInt = 60; // Błąd kompilacji, ponieważ jest to modyfikator 'internal'.
        }
    }
}
//W tym przykładzie, klasa B znajduje się w innym zestawie (AnotherAssembly) niż klasa A. Dzięki temu możemy zauważyć różnicę: protected internal jest dziedziczone przez klasę B, ale internal nie jest dostępne poza zestawem AccessModifiers.

//To pokazuje różnicę między tymi dwoma modyfikatorami dostępu w kontekście dziedziczenia i oddzielnych zestawów.





