namespace server.Models
{
    public class TaskDTO
    {
        public int Id { get; set; }
        public string? Text { get; set; }
        public bool Reminder { get; set; }
        public DateTime Date { get; set; }
    }
}
