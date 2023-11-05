namespace OctoberTest.Models
{
    public class AnimalLogic
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public bool? Predator { get; set; }

        public AnimalLogic(string name, bool predator)
        {
            Name = name;
            Predator = predator;
        }

        public string GetLogicResult()
        {
            // Tutaj możesz dodać swoją logikę biznesową
            if (Predator == true)
            {
                return $"{Name} is a predator.";
            }
            else
            {
                return $"{Name} is not a predator.";
            }
        }
    }
}