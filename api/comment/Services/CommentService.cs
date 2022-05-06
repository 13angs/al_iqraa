using comment.Interfaces;
using comment.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;


namespace comment.Services
{
    public class CommentService : ICommentService
    {
        private readonly IMongoCollection<Comment> _comment;
        public CommentService(IOptions<CommentStoreDbSetting> settings)
        {
            var mongoClient = new MongoClient(
                settings.Value.ConnectionString
            );

            var mongoDb = mongoClient.GetDatabase(
                settings.Value.DatabaseName
            );

            _comment = mongoDb.GetCollection<Comment>(
                settings.Value.CommentsCollectionName
            );
        }

        public void Delete(string id)
        {
            _comment.DeleteOne(c => c.Id == id);
        }

        public Comment Create(Comment comment)
        {
            _comment.InsertOne(comment);
            return comment;
        }

        public IEnumerable<Comment> Get(int blogId)
        {
            return _comment.Find(c => c.BlogId == blogId).ToList();
        }

        public Comment Get(string id)
        {
            return _comment.Find(c => c.Id == id).FirstOrDefault();
        }

        public void Update(string id, Comment comment)
        {
            _comment.ReplaceOne(c => c.Id == id, comment);
        }
    }
}