using Microsoft.EntityFrameworkCore;

namespace blog.Models
{
    public class IQContext : DbContext
    {
        public IQContext(DbContextOptions option) : base(option)
        {
        }

        public DbSet<Blog> IQBlogs { get; set; } = null!;
    }
}