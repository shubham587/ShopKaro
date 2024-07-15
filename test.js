let arr = [5,3,4,1,2, 5, 4, 6]
let n= arr.length

function Merge(arr, low, high){
    if(low == high){
        return
    }
    let mid = Math.floor((low + high)/2)
    Merge(arr, low, mid)
    Merge(arr, mid+1, high)
    Sort(arr, low, mid, high)
}

function Sort(arr, low, mid, high){
    let left = low
    let right = mid + 1
    let temp = []
    while(left <= mid && right <= high){
        if(arr[left] <= arr[right]){
            temp.push(arr[left])
            left++
        }else{
            temp.push(arr[right])
            right++
        }
    }
    while(left <= mid){
        temp.push(arr[left])
        left++
    }
    while(right <= high){
        temp.push(arr[right])
        right++
    }
    for(let i=low; i<=high; i++){
        arr[i] = temp[i-low]
    }
}
// Merge(arr, 0, n-1)
// console.log(arr)

// Find the Largest element in an array

function largest(arr){
    let max = arr[0]
    for(let i=1; i<n; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
// console.log(largest(arr))

	
// Second Largest Element in an Array without sorting
function slarge(arr){
    let max = arr[0]
    let smax = 0
    for(let i=1; i<n; i++){
        if(arr[i] >= max){
            smax = max
            max = arr[i]
        }else if(arr[i] > smax){
            console.log(arr[i])
            smax = arr[i]
        }
    }
    return [max, smax]
}
// console.log(slarge(arr))
arr = [1,2,4,5,6]
function duplicate(arr){
    let i=0
    while(i != n){
        console.log(arr)
        if(arr[i+1] == undefined){
            break
        }
        if(arr[i] != arr[i+1]){
            i++
        }else{
            arr.splice(i, 1)
        }
        
    }
}

// console.log(arr, duplicate(arr))
arr = [1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1]
function conzero(arr){
    let max = 0
    let cnt = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 1){
            cnt++
        }else if(arr[i] == 0){
            if(cnt > max){
                max = cnt
            }
            cnt = 0
        }
    }
    if(cnt > max){
        max = cnt
    }
    console.log(max)
    return max
}
console.log(conzero(arr))



