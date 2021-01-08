using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
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
    public IEnumerable<int[]> Post([FromBody] string collection)
    {
      var sorter = new Sorter(Sorter.StringToIntArr(collection));
      return sorter.ListSortedCollection;
    }
  }
}
