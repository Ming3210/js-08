function find(n){
    let sum = 0
    let arr = []
    for(let i = 1; i <= n; i++){
        if(i % 2 == 1){
            arr.push(i)
            sum += i
        }
        if( i == n && sum %2 == 0){
            arr.pop()
        }
    }
    console.log(arr)
}
let n = prompt("Nhâp n bất kì")

find(n)
