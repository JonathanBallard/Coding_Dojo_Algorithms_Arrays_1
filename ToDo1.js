
//ToDo1


//Push Front

function pushFront(arr, val){
    arr.push(val);
    var temp = 0;
    for(var i = 0; i < arr.length - 1; i++){

        //push val
        //save arr[3] in temp
        //set arr[3] to arr[4]
        //set arr[4] to temp

        //save arr[2] in temp
        //swap arr[3] with arr[2]
        temp = arr[arr.length - 2 - i];
        arr[arr.length - 2 - i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
        
    }
    return arr;
}

//[1,4,87,3,61]

myArr = [1,4,87,3,5,8,9];

// console.log(pushFront(myArr, 61));


//Pop Front

function popFront(arr){

    for(var i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;
}

// console.log(popFront(myArr));



function insertAt(arr, idx, val){

    arr.push(val);
    var temp = 0;
    for(var i = 0; i < arr.length - idx - 1; i++){

        //push val
        //save arr[3] in temp
        //set arr[3] to arr[4]
        //set arr[4] to temp

        //save arr[2] in temp
        //swap arr[3] with arr[2]
        temp = arr[arr.length - 2 - i];
        arr[arr.length - 2 - i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
        
    }
    return arr;




}


function removeAt(arr, idx){

    var temp = 0;
    for(var i = idx; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr;

}




// console.log(removeAt(myArr,2))




function swapPairs(arr){

    var temp = arr[0];
    for(var i = 0; i < arr.length - 1; i+=2){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }

    return arr;
}

// console.log(swapPairs(myArr));



function removeDuplicates(arr){
    var values = {};
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] in values){
            values[arr[i]] += 1;
        }
        else{
            values[arr[i]] = 1;
            newArr.push(arr[i]);
        }
    }

    return newArr;
}


var myArr2 = [1,3,3,3,56,56,98,1,3];

// console.log(removeDuplicates(myArr2));



