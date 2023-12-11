using System.ComponentModel.DataAnnotations.Schema;

namespace LunchingProjectMVC.Database.Entities
{
    public class Dish
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }

        [ForeignKey("Restaurant")]
        public int RestaurantId { get; set; }

        public Restaurant Restaurant { get; set; }
    }
}
