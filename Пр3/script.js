function checkYear () {
    let input = document.getElementById ("yearInput");
    let value = input.value;
    console.log (value);
    if (value % 4 === 0 && value % 100 != 0) {
        alert ("Год високосный!");
    }
    else if (value % 4 === 0 && value % 100 === 0 && value % 400 === 0) {
        alert ("Год високосный!");
    }
    else {
        alert ("Год не високосный!")
    }
}