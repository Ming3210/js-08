let a = prompt("Nhập chuỗi")
let b = a.toUpperCase()
let arr = []
for(let i = 0; i <a.length;i++){
    if(a[i+1]== " " || a[i+1]== undefined){
        let c = b.charAt(i)
        arr.push(c)
    }else arr.push(a[i])
}
let result = arr.join("")
console.log(result)