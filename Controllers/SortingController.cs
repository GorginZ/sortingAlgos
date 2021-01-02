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
      var sorted = Sorter.BubbleSort(new int[] { 4, 4, 3, 2, 5, 5 });
      var listOfItterations = new List<int[]>();

      foreach (int[] collection in sorted)
      {
        listOfItterations.Add(collection);
      }

      return listOfItterations;

      // return new List<int[]>{
      //   new int[]{5,4,3,2},
      //   new int[]{4,3,2,1},
      //   new int[]{5,4,3,4}
      // }; 
    }

  }
}
