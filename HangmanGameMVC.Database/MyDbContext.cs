using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HangmanGameMVC.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<HangmanDatabase> Databases { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.;Database=myDb;Trusted_Connection=True;Encrypt=False;");

        }
    }
}
