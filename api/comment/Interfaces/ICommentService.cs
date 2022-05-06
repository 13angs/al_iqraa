using comment.Models;

namespace comment.Interfaces
{
    public interface ICommentService
    {
        Comment Create(Comment comment);
        void Delete(string id);
        IEnumerable<Comment> Get(int blogId);
        Comment Get(string id);

        void Update(string id, Comment comment);
    }
}