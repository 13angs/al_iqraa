using blog.DTOs;
using blog.Models;

namespace blog.Interfaces
{
    public interface IBlog
    {
        Task<Blog> AddBlog(AddBlogModel model);
    }
}