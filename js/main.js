const display = document.querySelector('.js-dispay');
let btns = document.querySelectorAll('.js-btn');
let btnsCalculate = document.querySelectorAll('.calculate');
console.log(btnsCalculate);
console.log(btns);

btns.forEach((item) => {
item.addEventListener('click', (e) =>{
let itemText = e.target.textContent
if(itemText === 'x'){
    itemText = '*';
}
if(itemText === '÷'){
    itemText = '/'; 
}
if(itemText !== 'AC' && itemText !== 'C' &&  itemText !== '='){
    display.value += itemText;
}
if(itemText === 'AC'){
    display.value = '';
}
if(itemText === 'AC'){
    display.value = '';
}
if(itemText === 'C'){
    display.value = display.value.slice(0, -1);
}
if(itemText === '='){
    display.value = eval(display.value).toFixed(4);
}
console.log(itemText);
});

});

const sin = () =>{
display.value = Math.sin(display.value*3.1415926535/180).toFixed(4);
}
const cos = () =>{
display.value = Math.cos(display.value*3.1415926535/180).toFixed(4);
}
const tan = () =>{
display.value = Math.tan(display.value*3.1415926535/180).toFixed(4);
}
const pow = () =>{
    display.value = Math.pow(display.value, 2).toFixed(4);
    }

btnsCalculate.forEach((item) => {
    item.addEventListener('click', (e) =>{
    let itemText = e.target.textContent
    
    if(itemText === 'sin'){
        sin();
    }
    if(itemText === 'cos'){
        cos();
    }
    if(itemText === 'tan'){
        tan();
    }
    if(itemText === 'Х²'){
        pow();
    }
    
    });
    
    });
    