
function minToFront(arr){

    
    
    var minIdx = 0;
    var min = arr[0];
    var temp = arr[0];
    
    //find lowest element
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            minIdx = i;
        }
    }

    //loop through moving lowest elment towards front
    for(var j = minIdx; j > 0; j--){
        temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;

    }

return arr;

}

myArr = [51,9,39,11,2,945,60];

console.log(minToFront(myArr));

















