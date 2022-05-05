using blog.DTOs;
using blog.Models;
using blog.Params;

namespace blog.Interfaces
{
    public interface IBlog
    {
        Task<Blog> Create(AddBlogModel model);

        // get all blogs
        // by query params
        IEnumerable<GetBlogModel> Get(GetBlogParam param);
    }
}