using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace sortingAlgos
{
  public class Program
  {
    public static void Main(string[] args)
    {
      CreateHostBuilder(args).Build().Run();
      // var sorter = new Sorter();
      // // for (int i = 0; i < 10; i++)
      // // {
      //   // var current = sorter.SortCollection(new int[] { 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 });
      //   var current = sorter.BubbleSort(new int[] { 4, 9, 8, 7, 2, 5, 4, 3, 2, 1 });

      //   foreach (int[] item in current)
      //   {
      //     Console.WriteLine(item[0].ToString() + " " + item[1].ToString() + item[2].ToString() + item[3].ToString() + item[4].ToString() + item[5].ToString() + item[6].ToString() + item[7].ToString() + item[8].ToString() + item[9].ToString());
      //   }
        // Console.WriteLine(current.ToString());

      // }
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
              webBuilder.UseStartup<Startup>();
            });
  }
}
