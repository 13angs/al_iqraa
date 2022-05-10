using Microsoft.AspNetCore.SignalR;

namespace hub.Hubs
{
    public class IQHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}