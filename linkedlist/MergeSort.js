function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
let mid=Math.floor(arr.length/2);

let leftArr=arr.slice(0,mid);
let rightArr=arr.slice(mid);
let sortedLeftArr=mergeSort(leftArr);
let sortedRightArr=mergeSort(rightArr);

return merge(sortedLeftArr,sortedRightArr)
}

function merge(leftArr,rightArr){
    let sortArr=[];
    let leftIndex=0;
    let rightIndex=0;
    
    while(leftIndex<leftArr.length && rightIndex <rightArr.length){
        if(leftArr[leftIndex]<rightArr[rightIndex]){
            sortArr.push(leftArr[leftIndex]);
            leftIndex++;
        }else{
            sortArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
        
    }
    
    sortArr=sortArr.concat(leftArr.slice(leftIndex));
    sortArr=sortArr.concat(rightArr.slice(rightIndex));
    
    return sortArr;
}

let result= mergeSort([3,4,2,1,55,33,666,22]);
console.log(result)