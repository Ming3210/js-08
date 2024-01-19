function check(b,arr){
    let count = 0
    let array = []
    for(let j = 0; j<b; j++){
        for(let i = 1;i<=arr[j];i++){
            
            if(arr[j]%i==0){
                count++
            }
        }
        if(count==2){
            array.push(arr[j]);
        }
        count = 0
    }
    console.log("Các số nguyên tố",array)
}
let a = prompt("mảng gồm ? phần tử")
let arr = []
for (let i = 0; i < a; i++) {
    arr[i] = prompt()
}
check(a,arr)