class calculator{

    constructor(history, result){
        this.history = history
        this.result = result
        this.clear()

    }

    clear(){
        this.currenthistory = ''
        this.currentresult = ''
        this.operator = undefined 
    }

    delete(){

    }

    appendNumber(number){
        this.currentresult = number
    }
    chooseOperation(operator){

    }

    compute(){

    }

    updatedisplay(){
        this.result.innerText = this.currentresult
    }
}



const number = document.querySelectorAll('[data-number]');
const operator = document.querySelectorAll('[data-operator]');
const equal = document.querySelectorAll('[data-equal]');
const history = document.querySelector('[data-history]');
const result = document.querySelector('[data-result]');
const clear = document.querySelector('[data-clear]');
const remove = document.querySelector('[data-delete]');

//define new object

const Calculator = new calculator(history,result)

number.forEach(element => {
    button.addEventListener('click',() =>{
        calculator.appendNumber(button.innerText)
        calculator.updatedisplay()
    })
});

