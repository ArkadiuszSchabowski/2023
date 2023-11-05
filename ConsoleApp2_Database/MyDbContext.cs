using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ConsoleApp2_Common;

namespace ConsoleApp2_Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<Animal> Animals { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("myDb");
        }

    }
}
