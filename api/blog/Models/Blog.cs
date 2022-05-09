
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace blog.Models
{
    public class Blog : BaseEntity
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("id")]
        public string Id { get; set; } = string.Empty;

        [BsonElement("status")]
        public string Status { get; set; } = string.Empty;

        [BsonElement("action")]
        public string Action { get; set; } = string.Empty;

        [BsonElement("description")]
        public string Description { get; set; } = string.Empty;

        [BsonElement("content")]
        public string Content { get; set; } = string.Empty;

        [BsonElement("title")]
        public string Title { get; set; } = string.Empty;

        [BsonElement("slug")]
        public string Slug { get; set; } = string.Empty;
    }
}