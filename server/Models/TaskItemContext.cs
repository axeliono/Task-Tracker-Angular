using Microsoft.EntityFrameworkCore;
namespace server.Models
{
    public class TaskItemContext : DbContext
    {
        public TaskItemContext(DbContextOptions<TaskItemContext> options) : base(options) { }

        public DbSet<TaskItem> Tasks { get; set; } = null!;
    }
}
