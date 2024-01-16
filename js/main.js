let btnArr = document.querySelectorAll('.btn');
console.log(btnArr);
function clickOut () {
    let out = '';
    for(let key in btnArr){
        out = btnArr[key]
        console.log(btnArr[key]);

    }
}
btnArr.onclick = clickOut;