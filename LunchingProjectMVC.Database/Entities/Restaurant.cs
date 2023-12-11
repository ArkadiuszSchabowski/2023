using System.Collections.Generic;

namespace LunchingProjectMVC.Database.Entities
{
    public class Restaurant
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double OpenHour { get; set; }
        public double CloseHour { get; set; }
        public bool HasDelivery { get; set; }
        public string? Description { get; set; }

        public List<Dish> Dishes { get; set; } = new List<Dish>();
    }
}
