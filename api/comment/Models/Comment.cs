using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace comment.Models
{
    [BsonIgnoreExtraElements]
    public class Comment
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("id")]
        public string Id { get; set; } = String.Empty;

        [BsonElement("description")]
        public string Description { get; set; } = String.Empty;

        [BsonElement("blog_id")]
        public int BlogId { get; set; }

        [BsonElement("status")]
        public string Status { get; set; } = String.Empty;

    }
}