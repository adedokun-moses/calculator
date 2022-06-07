function getHistory(){
   return document.getElementById('history-value').innerText;
}
function printHistory(num){
    document.getElementById('history-value').innerText =num;
}

function getOutput(){
    return document.getElementById('output-value').innerText;
 }
 function printOutput(num){
     if (num == ""){
         document.getElementById("output-value").innerText = num;
     } else{
        document.getElementById('output-value').innerText = getFormattedNumber(num);
     }
    
 }

// printOutput("444252556")
 
 function getFormattedNumber(num){
     if (num =="-"){
         return "";
     }
     var n = Number(num);
     var value = n.toLocaleString("en");
     return value; 
 }

 function reverseNumberFormat(num){
    return Number (num.replace(/,/g, ''));

 }

 //alert(reverseNumberFormat(getOutput()))

 //Operator Manipulation 

 var operator = document.getElementsByClassName('operator');
 for (var i = 0; i < operator.length; i++){
        operator[i].addEventListener('click', function(){
          //  alert("the operator clicked "+this.id)
            if(this.id == "clear"){
                printHistory("");
                printOutput("");
            }

           else  if (this.id == "backspace"){
                var output = reverseNumberFormat(getOutput()).toString();
                if (output){ //if output has a value 
                    output = output.substring(0,output.length-1);
                    printOutput(output);
                }
            }
            else{
                var output = getOutput();
                var history = getHistory(); 
                if (output == "" &&history !=""){
                    if(isNaN(history[history.length-1])){
                        history = history.substring(0,history.length-1);
                    }
                }
                if (output != "" || history!= ""){
                    //condition?true:false 
                    output = output==""?output:reverseNumberFormat(output);
                    history = history+ output;
                    if (this.id == "="){
                        var result = eval(history);
                        printOutput(result);
                        printHistory("");
                    }
                    else{
                        history = history+this.id; 
                        printHistory(history);
                        printOutput("");    
                    }
                }
            }
          
        });
 }

 var number = document.getElementsByClassName('number');
 for (var i = 0; i < number.length; i++){
        number[i].addEventListener('click', function(){
           // alert("User clicked number "+this.id)
            var output = reverseNumberFormat(getOutput());
            if (output!=NaN){
                output= output+this.id;
                printOutput(output);
            }


        });
 }






















/* 
function getHistory() {
    return document.getElementById('history').innerText;
}

function printHistory(num) {
    document.getElementById('history').innerText = num;
} 
//printHistory("2+2")

function getResult() {
    return document.getElementById('result').innerText;
}

function printResult(num) {
  if (num == ""){
        document.getElementById('result').innerText=num;
    }
     else {  
        document.getElementById('result').innerText = getFormattedNumber(num);
    } 
   // document.getElementById("result").innerText = getFormattedNumber(num);
  
} 
printResult("511");

function getFormattedNumber(num){
    if (num =="-"){
        return "";
    }
    var n = Number (num);
    var value = n.toLocaleString("en");
    return value;
}
//printResult("2222");
 function reverseNumberFormat(num){
    //sssvar n = Number (num);
        return Number(num.replace(/,/g, ''))
}
//alert(reverseNumberFormat());



 
 var operator = document.getElementsByClassName("operator");
for (var i = 0; i<operator.length; i++ ){
    operator[i].addEventListener('click', function(){
       alert("the operator clicked "+ this.id);
    });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i<number.length; i++ ){
    number[i].addEventListener('click', function(){
       //alert("the number clicked "+ this.id);
       var output = reverseNumberFormat(getOutput());
        if(output!= NaN){ //if output is a number 
            output=output+this.id;
            printOutput(output);
        }

    });
}     */