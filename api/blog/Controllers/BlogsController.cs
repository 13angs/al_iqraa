using blog.DTOs;
using blog.Interfaces;
using blog.Models;
using Microsoft.AspNetCore.Mvc;

namespace blog.Controllers
{
    [Route("api/v1/blogs")]
    [ApiController]
    public class BlogsController : ControllerBase
    {
        private readonly IBlog blogService;

        public BlogsController(IBlog blogService)
        {
            this.blogService = blogService;
        }

        [HttpPost]
        public async Task<ActionResult<Blog>> AddBlog([FromBody] AddBlogModel model)
        {
            Blog blog = await blogService.AddBlog(model);
            return Ok(blog);
        }
    }
}