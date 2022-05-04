// https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-6.0&tabs=visual-studio-code
using Microsoft.AspNetCore.SignalR;

namespace blog.Hubs
{
    // The Hub class manages connections, groups, and messaging.
    public class BlogHub : Hub
    {

        // The SendMessage method can be called by a connected client to send a message to all clients.
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}