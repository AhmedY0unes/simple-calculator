let op =null ;
let current ='0';
let total = 0;
let pervOp = null;
const calcScreen = document.querySelector('.screen');

document.querySelector(".key-pad").addEventListener("click", function(event) {
    checkButton(event.target.innerText);
  });

function checkButton(buttonText)
{
    if(isNaN(parseInt(buttonText)))
        handleText(buttonText);
    else
        handleNumber(buttonText);
}


function handleNumber(value)
{
    if(current ==='0')
        current = value;
    else
        current += value;

    calcScreen.innerText = current; // rewrite screen.

}
  
function handleText(text)
{

    if(text === "C")
    {
        
        current = '0';
        calcScreen.innerText = current;
        total =0;
        op = null;
    }
    else if(text === '←')
    {
        if(calcScreen.innerText ==='infinity')
        {
            current ='0';
            calcScreen.innerText = current;
        }
        else if(current.length > 1)
        {   current = current.substr(0,current.length - 1);

        }
        else
        {
            current = '0';
            calcScreen.innerText = current;
        }

    }
    else if(text ==='=')
    {
        if(op === null){return}//handle if equal clicked without the existing of two numbers to equate
        else
        {    
            handleMath(op); //do the math
            calcScreen.innerText = total; //print result
            
        }
    }
    else if(op !== null)
    {
        op = text;
        handleMath(op);

    }
    else //in case an operand button been clicked
     {
        op =text;
        total = parseInt(current);
        current ='0';
        calcScreen.innerText = current;
     }

}  
function handleMath(op)
{

    if(op ==='÷')
    {
        total /= current;
        current ='0';
        calcScreen.innerText = current;           
    }
    else if(op ==='x')
    {
        total *= current;
        current ='0';
        calcScreen.innerText = current;

    }
    else if(op ==='+')
    {
        total += parseInt(current);
        current ='0';
        calcScreen.innerText = current;

    }
    else if(op ==='-')
    {
        total -= parseInt(current);
        current ='0';
        calcScreen.innerText = current;

    }
    
}


