using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using MVC_3September.Models;
using System.Collections;
using System.Security.Cryptography.Xml;

namespace MVC_3September.Controllers
{
    public class FirstQuestionsController : Controller
    {
        static string question1 = "1. Jak wygląda operator inkrementacji?";
        static string[] question1Answers = new string[4] { "A. ==", "B. ++", "C. --", "D. =" };

        static string question2 = "1. Jak wygląda operator dekrementacji?";
        static string[] question2Answers = new string[4] { "A. ==", "B. --", "C. ++", "D. =" };

        static string question3 = "1. Jak wygląda operator przypisania?";
        static string[] question3Answers = new string[4] { "A. ==", "B. =", "C. --", "D. ++" };

        static string question4 = "2. Klasa zapieczętowana, po której nie można dziedziczyć to?";
        static string[] question4Answers = new string[4] { "A.Sealed", "B.Abstract", "C.Static", "D.Dynamic" };

        static string question5 = "2. Który typ nie jest typem referencyjnym?";
        static string[] question5Answers = new string[4] { "A.Boolean", "B.Lista", "C.Tablica", "D.Kolejka" };

        static string question6 = "2. Metoda, która służy do usuwania pustych znaków na początku i końcu tekstu to?";
        static string[] question6Answers = new string[4] { "A.Trim", "B.Reverse", "C.Concat", "D.Replace" };

        static string question7 = "3. Jakie jest domyślne zachowanie modyfikatora dostępu w C# dla elementów klasy?";
        static string[] question7Answers = new string[4] { "A.Internal", "B.Protected", "C.Public", "D.Private" };

        static string question8 = "3. Która instrukcja jest używana do obsługi wyjątków w C#?";
        static string[] question8Answers = new string[4] { "A.if-else", "B.for", "C.switch", "D.try-catch" };

        static string question9 = "3. Który modyfikator dostępu w C# oznacza, że element jest dostępny tylko w obrębie tego samego namespace?";
        static string[] question9Answers = new string[4] { "A.Public", "B.Private", "C.Protected", "D.Internal" };

        static string question10 = "4. Co to jest delegat w C#?";
        static string[] question10Answers = new string[4] { "A.Typ reprezentujący wskaznik do metody.", "B.Typ reprezentujący listę elementów.", "C.Typ reprezentujący wyjatek.", "D.Typ reprezentujący klasę abstrakcyjną." };

        static string question11 = "4. Jakie jest zastosowanie kolekcji `HashSet` w języku C#?";
        static string[] question11Answers = new string[4] { "A. Przechowywanie unikalnych elementów.", "B. Implementacja stosu danych.", "C. Przechowywanie elementów w kolejności wstawiania.", "D. Przechowywanie elementów w porządku alfabetycznym." };

        static string question12 = "5. W języku C#, co oznacza termin 'boxing'?";
        static string[] question12Answers = new string[4] { "A. Proces konwertowania typu wartościowego na typ referencyjny.", "B.Tworzenie kopii obiektu.", "C. Kompilator C#.", "D. Optymalizacja kodu." };


        static string question13 = "5. Który z poniższych operatorów w C# służy do tworzenia nowych obiektów?";
        static string[] question13Answers = new string[4] {"A. +", "B. -" , "C. new", "D. /"};

        static string question14 = "5. Co oznacza słowo kluczowe 'base' w języku C#?";
        static string[] question14Answers = new string[4] {"A. Wywołanie metody bazowej w klasie pochodnej.", "B. Deklarację nowej klasy bazowej.", "C. Tworzenie nowej instancji obiektu.", "D. Przekazanie wartości do konstruktora."};
        static string question15 = "5. Jaki jest wynik działania operatora 'is' w C#?";
        static string[] question15Answers = new string[4] {"A. Porównuje dwie liczby całkowite.", "B. Wywołuje wyjątek w przypadku błędu.", "C. Sprawdza, czy obiekt jest instancją określonej klasy lub interfejsu.", "D. Oznacza przypisanie do zmiennej." };


        private readonly List<FirstQuestions> _questions = new List<FirstQuestions>
        {
            new FirstQuestions(question1, question1Answers , 1),
            new FirstQuestions(question2, question2Answers, 1),
            new FirstQuestions(question3, question3Answers, 1),

            new SecondQuestions(question4, question4Answers, 0),
            new SecondQuestions(question5, question5Answers, 0),
            new SecondQuestions(question6, question6Answers, 0),

            new ThirdQuestions(question7, question7Answers, 3),
            new ThirdQuestions(question8, question8Answers, 3),
            new ThirdQuestions(question9, question9Answers, 3),

            new FourthQuestions(question10, question10Answers, 0),
            new FourthQuestions(question11, question11Answers, 0),
            new FourthQuestions(question12, question12Answers, 0),

            new FifthQuestions(question13, question13Answers, 2),
            new FifthQuestions(question14, question14Answers, 2),
            new FifthQuestions(question15, question15Answers, 2)
        };

        // To będzie działać jako domyślna akcja
        public IActionResult Index()
        {
            return View(_questions);
        }

        public IActionResult GetQuestions()
        {
            return Json(_questions); // Zwraca dane JSON
        }
    }
}
