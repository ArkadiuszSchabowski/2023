using Microsoft.EntityFrameworkCore;
using REST2.Models;

namespace REST2
{
    public class ApiContext : DbContext
    {
        public DbSet<HotelBooking> HotelBookings { get; set; }
        public ApiContext(DbContextOptions<ApiContext>options) : base(options)
        {

        }
    }
}
