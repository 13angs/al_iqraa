using comment.Models;
using comment.Services;
using Microsoft.AspNetCore.Mvc;

namespace comment.Controllers
{
    [ApiController]
    [Route("api/v1/blogs/{blogId}/[controller]")]
    public class CommentsController : ControllerBase
    {
        private readonly CommentService commentService;

        public CommentsController(CommentService commentService)
        {
            this.commentService = commentService;
        }


        [HttpPost]
        public ActionResult<Comment> Post([FromBody] Comment comment, [FromRoute] CommentRoute route)
        {
            comment.BlogId = route.BlogId;
            Comment model = commentService.Create(comment);
            return Ok(model);
        }

        [HttpDelete]
        [Route("{commentId}")]
        public ActionResult<Comment> Delete([FromRoute] CommentRoute route)
        {
            commentService.Delete(route.CommentId);
            return Ok();
        }

        [HttpGet]
        public ActionResult<IEnumerable<Comment>> Get([FromRoute] CommentRoute route, [FromQuery] string sort)
        {
            IEnumerable<Comment> comments = commentService.Get(route.BlogId);
            return Ok(comments);
        }


        [HttpGet]
        [Route("{commentId}")]
        public ActionResult<Comment> Get([FromRoute] CommentRoute route)
        {
            return Ok(commentService.Get(route.CommentId));
        }


        [HttpPut]
        [Route("{commentId}")]
        public ActionResult Update([FromRoute] CommentRoute route, [FromBody] Comment comment)
        {
            commentService.Update(route.CommentId, comment);
            return Ok();
        }

    }
}