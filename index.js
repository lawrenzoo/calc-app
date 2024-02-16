let toggle1 = document.getElementsByClassName('circle1')[0];
let toggle2 = document.getElementsByClassName('circle2')[0];
let toggle3 = document.getElementsByClassName('circle3')[0];
//main background, togglebackground, keypadbackground and screen background
let mainBkground = document.body
let toggleBkground = document.getElementsByClassName('circles')[0];
let keypadBkground = document.getElementsByClassName('btn-bkground')[0];
let screenBkground = document.getElementsByClassName('screen')[0];
//key :- btnshadow-btnbackground(btn,delete,equal and reset), textcolor
let btnBkground = document.querySelectorAll('.btn');
let btnValue = document.getElementsByClassName('.btn');
let deleteBkground = document.getElementsByClassName('delete')[0];
let equalBkground = document.getElementsByClassName('equal')[0];
let resetBkground = document.getElementsByClassName('reset')[0];
//text
let text = document.querySelectorAll('p')

function change1(){
    toggle1.style.backgroundColor='hsl(6, 63%, 50%)'
    toggle2.style.backgroundColor='transparent'
    toggle3.style.backgroundColor='transparent'

    mainBkground.style.backgroundColor='hsl(222, 26%, 31%)'
    toggleBkground.style.backgroundColor=' hsl(223, 31%, 20%)'
    keypadBkground.style.backgroundColor='hsl(223, 31%, 20%)'
    screenBkground.style.backgroundColor='hsl(224, 36%, 15%)'

    btnBkground.forEach(btn => {
        btn.style.backgroundColor='hsl(30, 25%, 89%)'
        btn.style.boxShadow ='0px 5px 0px 0px hsl(28, 16%, 65%)'
        btn.style.color='hsl(221, 14%, 31%)'
    });

    deleteBkground.style.backgroundColor=' hsl(225, 21%, 49%)'
    deleteBkground.style.boxShadow='0px 5px 0px 0px hsl(224, 28%, 35%)'
    deleteBkground.style.color='white'

    resetBkground.style.backgroundColor='hsl(225, 21%, 49%)'
    resetBkground.style.boxShadow='0px 5px 0px 0px hsl(224, 28%, 35%)'
    resetBkground.style.color='white'

    equalBkground.style.backgroundColor='hsl(6, 63%, 50%)'
    equalBkground.style.boxShadow='0px 5px 0px 0px hsl(6, 70%, 34%)'
    equalBkground.style.color='white'
    screenBkground.style.color='white'

    text.forEach(colour=>{
        colour.style.color='white'
    })
}
function change2(){
    toggle1.style.backgroundColor='transparent'
    toggle2.style.backgroundColor='hsl(25, 98%, 40%)'
    toggle3.style.backgroundColor='transparent'
    mainBkground.style.backgroundColor='hsl(0, 0%, 90%)'
    toggleBkground.style.backgroundColor='hsl(0, 5%, 81%)'
    keypadBkground.style.backgroundColor='hsl(0, 5%, 81%)'
    screenBkground.style.backgroundColor='hsl(0, 0%, 93%)'
    btnBkground.forEach(btn => {
        btn.style.backgroundColor='hsl(45, 7%, 89%)'
        btn.style.boxShadow ='0px 5px 0px 0px hsl(35, 11%, 61%)'
        btn.style.color='hsl(60, 10%, 19%)'
    });
    deleteBkground.style.backgroundColor='hsl(185, 42%, 37%)'
    deleteBkground.style.boxShadow='0px 5px 0px 0px hsl(185, 58%, 25%)'
    deleteBkground.style.color='white'
    resetBkground.style.backgroundColor='hsl(185, 42%, 37%)'
    resetBkground.style.boxShadow='0px 5px 0px 0px hsl(185, 58%, 25%)'
    resetBkground.style.color='white'
    equalBkground.style.backgroundColor='hsl(25, 98%, 40%)'
    equalBkground.style.boxShadow='0px 5px 0px 0px hsl(25, 99%, 27%)'
    equalBkground.style.color='white'
    screenBkground.style.color='hsl(60, 10%, 19%)'
    text.forEach(colour=>{
        colour.style.color='hsl(60, 10%, 19%)'
    })
}

function change3(){
    toggle1.style.backgroundColor='transparent'
    toggle2.style.backgroundColor='transparent'
    toggle3.style.backgroundColor='hsl(176, 100%, 44%)'
    
    mainBkground.style.backgroundColor='hsl(268, 75%, 9%)'
    toggleBkground.style.backgroundColor=' hsl(268, 71%, 12%)'
    keypadBkground.style.backgroundColor='hsl(268, 71%, 12%)'
    screenBkground.style.backgroundColor='hsl(268, 71%, 12%)'

    btnBkground.forEach(btn => {
        btn.style.backgroundColor='hsl(268, 47%, 21%)'
        btn.style.boxShadow ='0px 5px 0px 0px hsl(290, 70%, 36%)'
        btn.style.color='hsl(52, 100%, 62%)'
    });

    deleteBkground.style.backgroundColor='hsl(281, 89%, 26%)'
    deleteBkground.style.boxShadow='0px 5px 0px 0px hsl(285, 91%, 52%)'
    deleteBkground.style.color='white'

    resetBkground.style.backgroundColor='hsl(281, 89%, 26%)'
    resetBkground.style.boxShadow='0px 5px 0px 0px hsl(285, 91%, 52%)'
    resetBkground.style.color='white'

    equalBkground.style.backgroundColor=' hsl(176, 100%, 44%)'
    equalBkground.style.boxShadow='0px 5px 0px 0px hsl(177, 92%, 70%)'
    equalBkground.style.color='hsl(198, 20%, 13%)'
    screenBkground.style.color='hsl(52, 100%, 62%)'

    text.forEach(colour=>{
        colour.style.color='hsl(52, 100%, 62%)'
    })
}

//display on the screen
screenBkground.addEventListener('input', showText)
function showText(){
    console.log(screenBkground.value)
}
//number to show on screen 
// let num7 = document.getElementById('numb7').textContent;
// console.log(num7)
// function show7(){
//     console.log( screenBkground.value += num7)
// }


// Select all div elements with class "number"
const numbValue = document.querySelectorAll('.btn');

// Add event listener to each div
numbValue.forEach(div => {
    div.addEventListener('click', () => {
        // Get the text content of the clicked div
        const content = div.textContent;
    if (div.classList.contains('delete')){
        screenBkground.value= screenBkground.value.slice(0, -1)
    }
    else if (div.classList.contains('reset')) {
        screenBkground.value ='';
    }
    else if (div.classList.contains('equal')){
        screenBkground.value = eval(screenBkground.value)
    }
    else{
        screenBkground.value += content;
    }
        
    });
});






