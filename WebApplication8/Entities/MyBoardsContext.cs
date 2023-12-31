﻿using Microsoft.EntityFrameworkCore;

namespace WebApplication8.Entities
{
    public class MyBoardsContext : DbContext
    {
        public MyBoardsContext(DbContextOptions<MyBoardsContext> options) : base(options)
        {
        }

        public DbSet<WorkItem> WorkItems { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Adress> Adresses { get; set; }
    }
}
