using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using MVC_3September.Models;
using System.Collections;
using System.Security.Cryptography.Xml;

namespace MVC_3September.Controllers
{
    public class FirstQuestionsController : Controller
    {
        //B - 1
        static string question1 = "1. Jak wygląda operator inkrementacji?";
        static string[] question1Answers = new string[4] { "A. ==", "B. ++", "C. --", "D. =" };

        static string question2 = "1. Jak wygląda operator dekrementacji?";
        static string[] question2Answers = new string[4] { "A. ==", "B. --", "C. ++", "D. =" };

        //C - 2
        static string question3 = "2. Jak wygląda operator przypisania?";
        static string[] question3Answers = new string[4] { "A. ==", "B. --", "C. =", "D. ++" };

        static string question4 = "2. Klasa zapieczętowana, po której nie można dziedziczyć to?";
        static string[] question4Answers = new string[4] { "A.Static", "B.Abstract", "C.Sealed", "D.Dynamic" };

        //A - 0
        static string question5 = "3. Który typ nie jest typem referencyjnym?";
        static string[] question5Answers = new string[4] { "A.Boolean", "B.Lista", "C.Tablica", "D.Kolejka" };

        static string question6 = "3. Metoda, która służy do usuwania pustych znaków na początku i końcu tekstu to?";
        static string[] question6Answers = new string[4] { "A.Trim", "B.Reverse", "C.Concat", "D.Replace" };

        //D - 3
        static string question7 = "4. Jakie jest domyślne zachowanie modyfikatora dostępu w C# dla elementów klasy?";
        static string[] question7Answers = new string[4] { "A.Internal", "B.Protected", "C.Public", "D.Private" };

        static string question8 = "4. Która instrukcja jest używana do obsługi wyjątków w C#?";
        static string[] question8Answers = new string[4] { "A.if-else", "B.for", "C.switch", "D.try-catch" };

        //A - 0
        static string question9 = "5. Który modyfikator dostępu w C# oznacza, że element jest dostępny tylko w obrębie tego samego namespace?";
        static string[] question9Answers = new string[4] { "A.Internal", "B.Private", "C.Protected", "D.Public" };

        static string question10 = "5. Co to jest delegat w C#?";
        static string[] question10Answers = new string[4] { "A.Typ reprezentujący wskaznik do metody.", "B.Typ reprezentujący listę elementów.", "C.Typ reprezentujący wyjatek.", "D.Typ reprezentujący klasę abstrakcyjną." };


        //A - 0
        static string question11 = "6. Jakie jest zastosowanie kolekcji `HashSet` w języku C#?";
        static string[] question11Answers = new string[4] { "A. Przechowywanie unikalnych elementów.", "B. Implementacja stosu danych.", "C. Przechowywanie elementów w kolejności wstawiania.", "D. Przechowywanie elementów w porządku alfabetycznym." };


        static string question12 = "6. W języku C#, co oznacza termin 'boxing'?";
        static string[] question12Answers = new string[4] { "A. Proces konwertowania typu wartościowego na typ referencyjny.", "B.Tworzenie kopii obiektu.", "C. Kompilator C#.", "D. Optymalizacja kodu." };

        //C - 2


        static string question13 = "7. Który z poniższych operatorów w C# służy do tworzenia nowych obiektów?";
        static string[] question13Answers = new string[4] { "A. +", "B. -", "C. new", "D. /" };

        static string question14 = "7. Co oznacza słowo kluczowe 'base' w języku C#?";
        static string[] question14Answers = new string[4] { "A. Wywołanie metody bazowej w klasie pochodnej.", "B. Tworzenie nowej instancji obiektu", "C.Deklaracje nowej klasy bazowej .", "D. Przekazanie wartości do konstruktora." };

        //B - 1

        static string question15 = "8. Jaki jest wynik działania operatora 'is' w C#?";
        static string[] question15Answers = new string[4] { "A. Porównuje dwie liczby całkowite.", "B. Sprawdza, czy obiekt jest instancją określonej klasy lub interfejsu.", "C. Wywołuje wyjątek w przypadku błędu.", "D. Oznacza przypisanie do zmiennej." };

        static string question16 = "8. Jakie jest zastosowanie interfejsów w języku C#?";
        static string[] question16Answers = new string[4] { "A. Dziedziczenie wielokrotne", "B. Określanie kontraktu, który musi być spełniony przez implementujące klasy", "C. Implementacja wielu klas bazowych", "D. Tworzenie abstrakcyjnych klas" };

        //D - 3
        static string question17 = "9. Co to jest LINQ w języku C#?";
        static string[] question17Answers = new string[4] { "A. Biblioteka do pracy z plikami XML", "B. Framework do tworzenia interfejsów użytkownika", "C. Technologia do zarządzania pamięcią", "D. Język zapytań do baz danych" };

        static string question18 = "9. Jakie jest zastosowanie modyfikatora 'static' w języku C#?";
        static string[] question18Answers = new string[4] { "A. Tworzenie instancji klasy", "B. Określanie dostępu do elementów klasy z innych przestrzeni nazw", "C. Zmniejszanie rozmiaru plików wykonywalnych", "D. Tworzenie elementów, które nie wymagają instancji klasy",  };

        //C - 2
        static string question19 = "10. Jakie jest zastosowanie słowa kluczowego 'async' w języku C#?";
        static string[] question19Answers = new string[4] { "A. Określanie klas abstrakcyjnych", "B. Określanie klasy zapieczętowanej", "C. Tworzenie asynchronicznych metod", "D. Tworzenie interfejsów" };

        static string question20 = "10. Jakie jest zastosowanie słowa kluczowego 'using' w języku C#?";
        static string[] question20Answers = new string[4] { "A. Tworzenie pętli", "B. Określanie dostępu do elementów klasy", "C. Importowanie przestrzeni nazw", "D. Tworzenie klas generycznych" };


        private readonly List<FirstQuestions> _questions = new List<FirstQuestions>
        {
            new FirstQuestions(question1, question1Answers , 1),
            new FirstQuestions(question2, question2Answers, 1),

            new SecondQuestions(question3, question3Answers, 2),
            new SecondQuestions(question4, question4Answers, 2),

            new ThirdQuestions(question5, question5Answers, 0),
            new ThirdQuestions(question6, question6Answers, 0),

            new FourthQuestions(question7, question7Answers, 3),
            new FourthQuestions(question8, question8Answers, 3),

            new FifthQuestions(question9, question9Answers, 0),
            new FifthQuestions(question10, question10Answers, 0),

            new SixthQuestions(question11, question11Answers, 0),
            new SixthQuestions(question12, question12Answers, 0),

            new SeventhQuestions(question13, question13Answers, 2),
            new SeventhQuestions(question14, question14Answers, 2),

            new EighthQuestions(question15, question15Answers, 1),
            new EighthQuestions(question16, question16Answers, 1),

            new NinethQuestions(question17, question17Answers, 3),
            new NinethQuestions(question18, question18Answers, 3),

            new TenthQuestions(question19, question19Answers, 2),
            new TenthQuestions(question20, question20Answers, 2)
        };

        public IActionResult Index()
        {
            return View(_questions);
        }

        public IActionResult GetQuestions()
        {
            return Json(_questions);
        }
    }
}
