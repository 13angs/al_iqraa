using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace comment.Models
{
    [BsonIgnoreExtraElements]
    public class Comment
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = String.Empty;

        [BsonElement("Description")]
        public string Description { get; set; } = String.Empty;

        [BsonElement("blog_id")]
        public int BlogId { get; set; }

        [BsonElement("Status")]
        public string Status { get; set; } = String.Empty;

    }
}