namespace comment.Interfaces
{
    public interface ICommentStoreDbSetting
    {
        string Collection { get; set; }
        string Server { get; set; }
        string Port { get; set; }
        string Database { get; set; }
    }
}