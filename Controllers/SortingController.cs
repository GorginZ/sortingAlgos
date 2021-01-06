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
    // var readOnlySpan = new ReadOnlySpan<byte>(jsonUtf8Bytes);
    // var decerializedInput = JsonSerializer.Deserialize<Sorter>(readOnlySpan);
    // return decerializedInput.ListSortedCollection;

    [HttpPost]
    public IEnumerable<int[]> Post([FromBody] string collection)
    {
      var sorter = new Sorter(Sorter.StringToIntArr(collection));
      // var sorter = new Sorter(collection);
      return sorter.ListSortedCollection;
      // var myList = new List<int[]> ();

      // myList.Add(collection.InputCollection);
      // return myList;
      // return sorter.ListSortedCollection;
    }

    // [HttpPost]
    // public IEnumerable<int[]> Post(byte[] jsonUtf8Bytes)
    // {
    //   var readOnlySpan = new ReadOnlySpan<byte>(jsonUtf8Bytes);
    //   var decerializedInput = JsonSerializer.Deserialize<JsonProperty>(readOnlySpan);
    //   string collection = decerializedInput.ToString();
    //   var intCollection = Sorter.StringToIntArr(collection);
    //   var sorter = new Sorter(intCollection);


    //   return sorter.ListSortedCollection;
    // }

  }
}
