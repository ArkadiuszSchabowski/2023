using System.ComponentModel.DataAnnotations;

namespace OctoberTest.DataBase
{
    public class Animal
    {
        public int? ID { get; set; }
        public string? Name { get; set; }
        public bool? Predator { get; set; }
    }
}
