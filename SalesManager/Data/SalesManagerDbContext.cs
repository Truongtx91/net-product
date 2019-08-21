using Microsoft.EntityFrameworkCore;
using SalesManager.Models;

namespace SalesManager.Data
{
    public class SalesManagerDbContext : DbContext
    {
        public SalesManagerDbContext(DbContextOptions<SalesManagerDbContext> options)
            : base(options)
        {

        }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            SetupUser(modelBuilder);
        }
        private void SetupUser(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasKey(x => x.Id);

            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique(true);

            modelBuilder.Entity<User>()
                .Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(255);

            modelBuilder.Entity<User>()
                .Property(u => u.Password)
                .IsRequired()
                .HasMaxLength(255);
        }
    }
}
