using Microsoft.AspNetCore.Mvc;

namespace comment.Models
{
    public class CommentRoute
    {
        [BindProperty]
        public int BlogId { get; set; }
        [BindProperty]
        public string CommentId { get; set; } = String.Empty;

    }
}