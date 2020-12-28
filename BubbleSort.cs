using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;

namespace sortingAlgos
{
  public class BubbleSort : IEnumerable<int[]>
  {
    public IEnumerator<int[]> GetEnumerator()
    {
      return this.GetEnumerator();
    }

    public IEnumerable<int[]> SortCollection(int[] collection)
    {
      int temp;
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
        yield return collection;
      }
    }

    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
  }
}
