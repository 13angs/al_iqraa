namespace blog.Services
{
    public class BlogStoreDbSettings
    {
        public string ConnectionString { get; set; } = String.Empty;
        public string DatabaseName { get; set; } = String.Empty;
        public string BlogCollectionName { get; set; } = String.Empty;
    }
}