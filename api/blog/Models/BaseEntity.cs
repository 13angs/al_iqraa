using MongoDB.Bson.Serialization.Attributes;

namespace blog.Models
{
    public class BaseEntity
    {
        public BaseEntity()
        {
            CreatedDate = DateTime.Now;
            ModifiedDate = DateTime.Now;
        }
        [BsonElement("created_date")]
        public DateTime CreatedDate { get; set; }

        [BsonElement("modified_date")]
        public DateTime ModifiedDate { get; set; }
    }
}