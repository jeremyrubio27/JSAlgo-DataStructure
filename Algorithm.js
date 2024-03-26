
// =============================+++  Binary Search +++================================================== 
//let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//et arr   = [1,5,7,8,13,19,20,23,29]
//let arr = [1,2,3,7,8,10]
// function binarySearch(arr, target){ 
//     let rightIndex  = arr.length - 1
//     let leftIndex   = 0
//     while(leftIndex <= rightIndex){
//     let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//         console.log(`${arr[middleIndex]}   : ${target}  : ${middleIndex}`);     
//         if(target == arr[middleIndex]){
//             return middleIndex
//         }else if(arr[middleIndex] < target){              
//             leftIndex = middleIndex + 1;            
//         }else {           
//             rightIndex = middleIndex - 1;          
//         }
//     }
//     return -1
// }
// console.log(binarySearch(arr,8))

// =============================+++  Binary Search +++================================================== 



//==============================+++  Insertion Sort +++================================================= 

//let arr = [1,30,20,60,50,40]
// let arr  =  [60,30,40,50,70]
// function insertionSort(arr){
//  for(let i = 1; i < arr.length; i++ ){
//     let pointer = arr[i]
//     let j = i -1;
//     while( j >=0 && arr[j] > pointer){
//         arr[j+1] = arr[j] 
//         j--
//     }
//     arr[j+1] = pointer
//  }
// return arr
// }
// console.log(insertionSort(arr))


//==============================+++  Insertion Sort +++================================================= 


