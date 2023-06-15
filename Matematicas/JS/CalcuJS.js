$(document).ready(function() {

    let num1 = '';
    let num2 = '';
    let operator = '';
    let total = '';
    let numLock = false;
    let btn = "";

    $('.calculadora').draggable();

    function tradBTN (inp)
    {
        if (btn >= '0' && btn <= '9') 
        {            
            handleNumber(btn);       
        } 
        else 
        {            
            if(btn == '=')
            {
                handleTotal();
            }
            else
            {
                if(btn == '.')
                {
                    handleNumber(btn);
                }
                else
                {
                    if(btn == '')
                    {
                        
                    }
                    else
                    {
                        operator = btn;
                        numLock = true;
                        displayButton(btn);
                    }
                }
            }
        }
        console.log(btn);
    }
    
    function handleNumber(num) 
    {    
        if (numLock == false) 
        {        
            num1 = num1 + num;
            displayButton(num1);    
        } 
        else 
        {        
           num2 = num2 + num;    
           displayButton(num2);
        }
    }
    
    function handleOperator(oper) 
    {    
        displayButton(oper);
    }

    function displayButton(btn) 
    {    
        $('.calc-result-input').html("<span>" + btn + "<span/>");
    }

    function handleTotal() 
    {    
        switch (operator) 
        {       
            case '+':            
                total = +num1 + +num2;            
            break;
            case '-':            
                total = +num1 - +num2;           
            break;  
            case 'x':            
                total = +num1 * +num2;           
            break;  
            case '÷':            
                total = +num1 / +num2;          
            break;     
        }
        let redondo = total.toFixed(2);
        displayButton(redondo);
        updateVariables();
    }

    function updateVariables() 
    {    
        num1 = '';    
        num2 = '';
        numLock = false;
    }


    $('.7').on('click', function(e) 
    {
        btn = "7"
        tradBTN(btn)
    });
    $('.8').on('click', function(e) 
    {
        btn = "8"
        tradBTN(btn)
    });
    $('.9').on('click', function(e) 
    {
        btn = "9"
        tradBTN(btn)
    });
    $('.4').on('click', function(e) 
    {
        btn = "4"
        tradBTN(btn)
    });
    $('.5').on('click', function(e) 
    {
        btn = "5"
        tradBTN(btn)
    });
    $('.6').on('click', function(e) 
    {
        btn = "6"
        tradBTN(btn)
    });
    $('.1').on('click', function(e) 
    {
        btn = "1"
        tradBTN(btn)
    });
    $('.2').on('click', function(e) 
    {
        btn = "2"
        tradBTN(btn)
    });
    $('.3').on('click', function(e) 
    {
        btn = "3"
        tradBTN(btn)
    });
    $('.x').on('click', function(e) 
    {
        btn = "x"
        tradBTN(btn)
    });
    $('.-').on('click', function(e) 
    {
        btn = "-"
        tradBTN(btn)
    });
    $('.plus').on('click', function(e) 
    {
        btn = "+"
        tradBTN(btn)
    });
    $('.punto').on('click', function(e) 
    {
        btn = "."
        tradBTN(btn)
    });
    $('.by').on('click', function(e) 
    {
        btn = "÷"
        tradBTN(btn)
    });
    $('.0').on('click', function(e) 
    {
        btn = "0"
        tradBTN(btn)
    });
    $('.eq').on('click', function(e) 
    {
        btn = "="
        tradBTN(btn)
    });
  });