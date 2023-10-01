using System;
using System.IO;
using Newtonsoft.Json;

public class MyObject
{
    public string Name { get; set; }
    public int Age { get; set; }
}

class myProgram
{
    static void Main(string[] args)
    {
        MyObject myObject = new MyObject
        {
            Name = "John",
            Age = 30
        };

        string json = JsonConvert.SerializeObject(myObject);

        // Zapisz JSON do pliku
        File.WriteAllText("myObject.json", json);

        Console.WriteLine("Obiekt zapisano jako JSON.");
    }
}
