using Microsoft.AspNetCore.Mvc;

namespace blog.Params
{
    [BindProperties]
    public class GetBlogParam
    {
        public string Status { get; set; } = string.Empty;
        public string Action { get; set; } = string.Empty;
    }
}