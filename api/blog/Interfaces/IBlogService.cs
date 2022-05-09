using blog.DTOs;
using blog.Models;

namespace blog.Interfaces
{
    public interface IBlogService
    {
        Blog Create(AddBlogModel model);
        IEnumerable<GetBlogModel> Get(BlogParam param);
    }
}