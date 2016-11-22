angular.module("calculator", [])
  .controller("calcController", [CalcControllerCallback])

function CalcControllerCallback(){
  this.reset = () => {
    this.firstNumber = []
    this.secondNumber = []
    this.operator = null
  }
  this.reset()
  this.numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  this.operators = ["+", "-", "*", "/"]
  this.addNumber = (number) => {
    !this.operator ? this.firstNumber.push(number) : this.secondNumber.push(number)
  } 
  this.addOperator = (operator) => {
    this.operator = this.operator || operator
  }
  this.evaluate = () => {
    this.solution = evalEq(this.firstNumber, this.secondNumber, this.operator)
    this.firstNumber = this.solution.toString().split('')
    this.secondNumber = []
    this.operator = null
  }
  this.resetCalc = () => {
    this.reset()
    this.solution = null
  }
}

function convert(array) {
  return parseFloat(array.join(""))
}

function evalEq(firstNumArray, secondNumArray, operator) {
  return eval(`${convert(firstNumArray)} ${operator} ${convert(secondNumArray)}`)
}
