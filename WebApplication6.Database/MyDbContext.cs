using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication6.Collumns;

namespace WebApplication6.Database
{
    public class MyDbContext : DbContext
    {

        public DbSet<Animal> Animals { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("myDB");
        }
    }
}
