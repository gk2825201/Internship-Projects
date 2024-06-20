let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
      buttonText = e.target.innerText;
      console.log('Button text is', buttonText)
      if(buttonText=='X'){
        buttonText = '*';
        screen.Value += buttonText; 
        screen.value = screen.Value;
      }
      else if(buttonText =='AC'){
        screen.Value = "";
        screen.value = screen.Value;
      }
      else if(buttonText == "DEL"){
         screen.Value = screen.Value.substring(0,screen.Value.length-1);
         screen.value = screen.Value;
      }
      else if(buttonText =='='){
       screen.value = eval(screen.Value) 
      }
      else{
        screen.Value = screen.Value == undefined ? "" : screen.Value;
        screen.Value += buttonText;
        screen.value = screen.Value;
      }

    })
}