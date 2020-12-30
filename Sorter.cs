using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace sortingAlgos
{
  public class Sorter : IEnumerable<int[]>
  {
    public IEnumerator<int[]> GetEnumerator()
    {
      return this.GetEnumerator();
    }

    public IEnumerable<int[]> BubbleSort(int[] collection)
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
