using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PuppeteerSharp;
using ReactFileUploadDemo.Web.ViewModels;
using System.Text;

namespace ReactFileUploadDemo.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileUploadController : ControllerBase
    {
        [HttpPost("Upload")]
        public void Upload(UploadViewModel viewModel)
        {
            int indexOfComma = viewModel.Base64Data.IndexOf(',');
            string base64 = viewModel.Base64Data.Substring(indexOfComma + 1);
            byte[] bytes = Convert.FromBase64String(base64);
            System.IO.File.WriteAllBytes($"uploads/{viewModel.FileName}", bytes);
        }

        [HttpGet("View")]
        public IActionResult View(string fileName)
        {
            var bytes = System.IO.File.ReadAllBytes($"uploads/{fileName}");
            //return File(bytes, "image/jpeg");
            return File(bytes, "application/octet-stream", fileName);
        }

        [HttpGet("GeneratePdf")]
        public IActionResult GeneratePDF(string name)
        {
            var bytes = GeneratePdfAsync(name).Result;
            return File(bytes, "application/pdf", "hello.pdf");
        }


        [HttpGet("generatecsv")]
        public IActionResult GenerateCSV()
        {
            string csv = "FirstName,LastName,Age\n" +
                "John,Doe,45\n" +
                "Foo,Bar,55\n";
            byte[] csvBytes = Encoding.UTF8.GetBytes(csv);
            return File(csvBytes, "text/csv", "people.csv");

        }

        private static async Task<byte[]> GeneratePdfAsync(string name)
        {
            await new BrowserFetcher().DownloadAsync();

            using var browser = await Puppeteer.LaunchAsync(new LaunchOptions
            {
                Headless = true
            });
            using var page = await browser.NewPageAsync();
            await page.SetContentAsync($"<h1>Hello {name}</h1>");

            byte[] bytes = await page.PdfDataAsync(new PdfOptions
            {
                Format = PuppeteerSharp.Media.PaperFormat.A4
            });

            return bytes;
        }
    }
}
