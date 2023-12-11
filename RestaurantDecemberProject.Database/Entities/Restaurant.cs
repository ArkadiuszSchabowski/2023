namespace RestaurantDecemberProject.Database.Entities
{
    public enum Category
    {
        Vegetarian, FastFood, Other
    }
    public class Restaurant
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Category Category { get; set; }
        public Address Address { get; set; }
        public Dish Dish { get; set; }
        public bool HasDelivery { get; set; }
    }
}