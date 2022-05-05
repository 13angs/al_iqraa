using blog.DTOs;
using blog.Interfaces;
using blog.Models;
using blog.Params;
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
            Blog blog = await blogService.Create(model);
            return Ok(blog);
        }

        [HttpGet]
        public ActionResult<IEnumerable<GetBlogModel>> Get([FromQuery] GetBlogParam param)
        {
            IEnumerable<GetBlogModel> models = blogService.Get(param);

            return Ok(models);
        }
    }
}