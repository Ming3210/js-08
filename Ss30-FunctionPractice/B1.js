function reverse(array,){
    let count = 0
    for(let i = 0; i < Math.floor((array.length/2)); i++){
        if(array[i] == array[array.length-i-1]){
            count++
        } 
    
    }
    if(count == Math.floor((array.length/2))) alert("True")
    else return false
}
let arr = []
let a = prompt("Nhập số phần tử của mảng")

for(let i = 0; i < a; i++){
    arr[i] = prompt()
}
reverse(arr)
