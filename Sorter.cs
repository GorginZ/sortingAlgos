using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace sortingAlgos
{
  public class Sorter : IEnumerable<int[]>
  {
    public IEnumerable<int[]> SortedCollection;
    public List<int[]> ListSortedCollection;
    public Sorter(int[] collection)
    {
      SortedCollection = BubbleSort(collection);
      var ListSortedCollection = new List<int[]>();

      foreach (int[] itteration in SortedCollection)
      {
        ListSortedCollection.Append(itteration);
      }
    }
    public IEnumerable<int[]> Collection;


    public IEnumerator<int[]> GetEnumerator()
    {
      return this.GetEnumerator();
    }
    // public static int[] StringToIntArr(string collection)
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
    //   return collectionIntArray;
    // }

    public static IEnumerable<int[]> BubbleSort(int[] collection)
    {
      int temp;
      yield return collection;
      for (int j = 0; j <= collection.Length - 2; j++)
      {
        for (int i = 0; i <= collection.Length - 2; i++)
        {
          if (collection[i] > collection[i + 1])
          {
            temp = collection[i + 1];
            collection[i + 1] = collection[i];
            collection[i] = temp;
          }
        }
        // Console.WriteLine(collection);
        yield return collection;
      }
    }
    //     public string TempToString(IEnumerable<int[]> collection)
    //     {
    //       var sb = new StringBuilder();
    //       foreach (int[] item in collection)
    //       {
    // sb.Append(item)
    //       }

    //     }

    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
  }
}
