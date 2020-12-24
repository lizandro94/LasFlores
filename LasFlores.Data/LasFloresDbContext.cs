using LasFlores.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;

namespace LasFlores.Data
{
    public class LasFloresDbContext : DbContext
    {
        public DbSet<Member> Members { get; set; }

        public LasFloresDbContext(DbContextOptions<LasFloresDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
