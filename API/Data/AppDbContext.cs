using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.Data;

public class AppDbContext : DbContext
{
    public DbSet<Imc> Imcs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=LuanSuldovski.db");
    }
}
