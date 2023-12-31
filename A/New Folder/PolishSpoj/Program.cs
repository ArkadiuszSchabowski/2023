﻿using System;
using System.Diagnostics.Eventing.Reader;
using System.Linq;

namespace PolishSpoj
{
    public class Person
    {
        string name;
        string surname;
        int age;
        public Person(string name, string surname, int age)
        {
            this.name = name;
            this.surname = surname;
            this.age = age;
        }
    }
    internal class Program
    {

        static void Main(string[] args)
        {
            Person person = new Person("Arek", "Swinka", 21);


            string text = "Dzisiaj jest czwartek, A jutro bedzie piatek.";

            string[] textArr = text.Split(' ');

            char firstSign;
            string restOfWord;
            string newWord = "";
            string newText = "";

            for (int i = 0; i < textArr.Length; i++)
            {
                newWord = textArr[i];

                firstSign = char.ToUpper(newWord[0]);
                restOfWord = newWord.Substring(1);
                newWord = firstSign + restOfWord;
                newText += newWord;
            }
            Console.Write(newText);
        }
    }
}