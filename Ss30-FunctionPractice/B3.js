function sort(a) {
    let result = [];
    let letters = [];
    let numbers = [];
    let symbols = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= "A" && a[i] <= "Z" || a[i] >= "a" && a[i] <= "z") {
            letters.push(a[i]);
        }else if (a[i] >= "0" && a[i] <= "9") {
            numbers.push(a[i]);
        }else {
            symbols.push(a[i]);
        }
    }
    for (let i = 0; i < letters.length; i++) {
        result.push(letters[i]);
    }
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i]);
    }
    for (let i = 0; i < symbols.length; i++) {
        result.push(symbols[i]);
    }
    console.log(result);
    // let b = result.join("");
    // console.log(b)
}
  
let a = prompt("Nhập vào 1 chuỗi bất kỳ:");
sort(a)

  