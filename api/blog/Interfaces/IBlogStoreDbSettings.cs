namespace blog.Interfaces
{
    public interface IBlogStoreDbSettings
    {
        string ConnectionString { get; set; }
        string BlogCollectionName { get; set; }
        string DatabaseName { get; set; }
    }
}