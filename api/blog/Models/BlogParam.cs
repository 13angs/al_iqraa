using Microsoft.AspNetCore.Mvc;

namespace blog.Models
{
    [BindProperties]
    public class BlogParam
    {
        public string Status { get; set; } = string.Empty;
    }
}