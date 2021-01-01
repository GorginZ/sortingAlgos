using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace sortingAlgos.Controllers
{
    [ApiController]
    [Route("[controller]")]

  public class SortingController : ControllerBase
  {
    [HttpGet]
    public IEnumerable<int[]> Get()
    {
      var collectionItterations = Sorter.BubbleSort(new int[]{0,4,3,2,34,4});
      // return Enumerable.Range(1, 5).Select(index => new WeatherForecast
      // {
        // collection = collectionItterations;
      // }
      return collectionItterations;
    }
    [HttpPost]
    public IEnumerable<int[]> Post(string collection)
    {
      var intCollection = Sorter.StringToIntArr(collection);
      return Sorter.BubbleSort(intCollection);
      // var jsonItterations = JsonSerializer.Serialize(sortedItteration);
      // return jsonItterations;
    }

    // [HttpPost]
    // public IEnumerable<int[]> Post(string collection)
    // {
    //   var collectionCharArray = collection.Split(",");
    //   var collectionIntArray = new int[collectionCharArray.Length];

    //   // foreach(string no in collectionCharArray)
    //   for (int i = 0; i < collectionCharArray.Length; i++)
    //   {
    //     var didParse = int.TryParse(collectionCharArray[i], out int result);
    //     if (didParse)
    //     {
    //       collectionIntArray[i] = result;
    //     }
    //   }
    //   var collectionItterations = Sorter.BubbleSort(collectionIntArray);
    //   return collectionItterations;
    // }
  }
}
