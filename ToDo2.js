

function reverse(arr){

    //start from front and back,swapping across
    var temp = arr[0];
    for(var i = 0; i < arr.length / 2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }


    return arr;
}

myArr = [1,2,3,4,5,6];
//      [3,4,5,5,1,2]
// console.log(reverse(myArr));



// function rotate2(arr, offset){
//     //shift everything right
//     var end = arr.length - 1;
//     var temp = arr[end];
//     for(var j = 0; j < offset; j++){
//         for(var i = 0; i < arr.length; i++){
//             arr[end- i] = arr[end - i - 1]
//         }
//         arr[offset-1] = temp;
//     }
//     return arr;
// }

function rotate(arr, offset){
    var temp = arr[0];

    for(var j = 0; j < offset; j++){
        for(var i = 0; i < arr.length - 1; i++){
            temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}


// console.log(rotate2(myArr,2));
var myArr2 = [4,19,3995,1,2,1,1,332,66,34,3,3]

function filterRange(arr, min, max){

    //loop throuhg locating anything outside of range
    //when found, move to end and pop off
    //reset index to found number

    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min || arr[i] > max){
            var temp = arr[i];
            for(var j = i; j < arr.length - 1; j++){
                temp = arr[j+1];
                arr[j + 1] = arr[j]
                arr[j] = temp;
            }
            arr.pop();
            i--;
        }
        
    }

    return arr;
}


// console.log(filterRange(myArr2, 3,1000));

function concat(arr1,arr2){
    var newArr = [];

    for(var i = 0; i < arr1.length; i++){
        newArr.push(arr1[i]);
    }
    for(var i = 0; i < arr2.length; i++){
        newArr.push(arr2[i]);
    }
    return newArr;
}


console.log(concat(myArr,myArr2));












