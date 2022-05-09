using blog.DTOs;
using blog.Interfaces;
using blog.Models;
using blog.Services;
using Microsoft.AspNetCore.Mvc;

namespace blog.Controllers
{
    [Route("api/v1/blogs")]
    [ApiController]
    public class BlogsController : ControllerBase
    {
        private readonly BlogService blogService;

        public BlogsController(BlogService blogService)
        {
            this.blogService = blogService;
        }

        [HttpPost]
        public ActionResult Post([FromBody] AddBlogModel model)
        {
            Blog blog = blogService.Create(model);
            return Ok(blog);
        }


        [HttpGet]
        public ActionResult<IEnumerable<GetBlogModel>> Get([FromQuery] BlogParam param)
        {
            IEnumerable<GetBlogModel> models = blogService.Get(param);
            return Ok(models);
        }
    }
}