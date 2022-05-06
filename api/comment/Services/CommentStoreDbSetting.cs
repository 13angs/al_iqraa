using comment.Interfaces;

namespace comment.Services
{
    public class CommentStoreDbSetting
    {
        public string ConnectionString { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;
        public string CommentsCollectionName { get; set; } = string.Empty;

    }
}