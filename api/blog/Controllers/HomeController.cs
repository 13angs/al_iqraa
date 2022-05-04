using Microsoft.AspNetCore.Mvc;

namespace blog.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomeController : ControllerBase
    {
        public HomeController()
        {

        }

        [Produces("text/html")]
        [HttpGet]
        public ActionResult<string> Get()
        {
            string response = @"
            <html>
                <head>
                    <style type='text/css'>
                        .container{
                            padding: 20px;
                            border-radius: 20px;
                            border: 1px solid black;
                            text-align: center;
                            width: 200px;
                            margin: auto;
                        }
                    </style>
                </head>
                <body>
                    <div class='container'>
                        <div>
                            <h1>Do not disturb</h1>
                        </div>
                        <div>
                            <h2>Api</h2>
                        </div>
                        <div>
                            <p>Is Running...</p>
                        </div>
                    </div>
                </body>
            </html>
            ";
            return Content(response, "text/html");
        }
    }
}