let a = prompt("mảng gồm ? phần tử")
let arr = []
for (let i = 0; i < a; i++) {
    arr[i] = +prompt()
}
let count = 0
function counter(a,arr){
    for (let i = 0; i < a; i++) {
        for (let j = i+1; j < a;j++) {
            for (let k = j+1; k<a;k++) {
                if(arr[i] + arr[j] > arr[k] && arr[j] + arr[k] > arr[i] && arr[i] + arr[k] > arr[j]){
                    let subarray = []
                    subarray.push(arr[i])
                    subarray.push(arr[j])
                    subarray.push(arr[k])
                    console.log(subarray)
                    count++
                }
            }
        }
    }
}
counter(a,arr)
console.log("Số tập con làm đc tam giác:"+count)
