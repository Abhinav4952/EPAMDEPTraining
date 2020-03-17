/*
Write a function which partitions a list of items based on a given predicate.
After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).
NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.
*/

function partitionOn(pred, items) {
    var index=0;
    for(var i in items){
      if(!pred(i)){
        var temp=i;//Storing the false value in a temp variable
        items.splice(items.findIndex(i),1);//deleting the false value from array
        items.splice(index,0,temp);//inserting the false value in the begining
        index++;
      }
    }
    return index;
}

