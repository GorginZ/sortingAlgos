using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace sortingAlgos.Controllers
{
  [ApiController]
  [Route("[controller]")]

  public class SortingController : ControllerBase
  {
    private readonly ILogger<SortingController> _logger;

    public SortingController(ILogger<SortingController> logger)
    {
      _logger = logger;
    }

    [HttpGet]
    public IEnumerable<int[]> Get()
    {
      var collectionItterations = new Sorter(new int[] { 5, 4, 3, 2 });
      return collectionItterations.Collection;
    }

    [HttpPost]
    public IEnumerable<int[]> Post()
    {
      // var collection = request.ToString();
      //   var intCollection = Sorter.StringToIntArr(collection);
      //   var sortedCollection = new Sorter(intCollection);
      //   return sortedCollection.Collection.ToArray();

      // var collectionItterations = new Sorter(new int[] { 3, 3, 3, 2 });
      var sorted = Sorter.BubbleSort(new int[] { 4, 4, 3, 2, 5, 5 });
      var listOfItterations = new List<int[]>();

      foreach (int[] collection in sorted)
      {
        listOfItterations.Append(collection);
      }
      return listOfItterations;
      // var listOfItterations = new List<int[]>();
      // foreach (int[] collection in collectionItterations.Collection)
      // {
      //   listOfItterations.Append(collection);
      // }
      // return collectionItterations.ListSortedCollection;

      // return new List<int[]>{
      //   new int[]{5,4,3,2},
      //   new int[]{4,3,2,1},
      //   new int[]{5,4,3,4}
      // }; 
    }

  }
}
