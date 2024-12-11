document.addEventListener('DOMContentLoaded',()=>{
    let inputBox = document.getElementById('inputbox');
    let buttons = document.querySelectorAll('button');
    let string = ''
    buttons.forEach(btn=>{
        btn.addEventListener('click',(event)=>{
            
            if(event.target.innerHTML == 'C'){
                string = '';
                inputBox.value = string;
            }else if (event.target.classList.contains('fa-arrow-left')){
                string = string.substring(0,string.length-1);
                inputBox.value = string;
            }else if(event.target.innerHTML == '='){
                string = eval(string);
                inputBox.value = string;
            }else{
                string += event.target.innerHTML;
                inputBox.value = string;
            }
        })
    })
})