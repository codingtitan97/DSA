// array implementation of stack
class Stack {
    constructor() {
        this.arr = [];
    }
    push(data) {
        this.arr.push(data);
        return this.arr;
    }
    pop() {
        if (this.arr.length === 0) {
            return "stack is empty";
        }
        return this.arr.pop();
    }
    size() {
        return this.arr.length;
    }
    clear() {
        this.arr = [];
    }
}
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack.size()); // Output: 3
console.log(myStack.pop()); // Output: 30
console.log(myStack.pop()); // Output: 20
console.log(myStack.pop()); // Output: 10
console.log(myStack.pop()); // Output: Stack is empty.

// is valid parenthesis sequence problem

function isValidParentheses(str) {
    let opening = "{([";
    let closing = "})]";
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (opening.includes(char)) {
            stack.push(char);
        }
        else {
            let top = stack.pop();
            let correspondingParenthesis = opening[closing.indexOf(char)];

            if (top !== correspondingParenthesis) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// Test cases
console.log(isValidParentheses("(){}[]")); // Output: true
console.log(isValidParentheses("{[()]}")); // Output: true
console.log(isValidParentheses("{[)}"));   // Output: false
console.log(isValidParentheses("{[]()}"));

// rpn problem reverse polish notation

function calculateRpn(arr) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i];
        if (["*", "-", "+", "/"].includes(token)) {
            let op2 = stack.pop();
            let op1 = stack.pop();
            stack.push(calRpn(token, op1, op2))
        } else {
            stack.push(parseFloat(token))
        }
    }
    return stack.pop()
}

function calRpn(operator, op1, op2) {
    switch (operator) {
        case "+":
            return op1 + op2;
        case "-":
            return op1 - op2;
        case "*":
            return op1 * op2;
        case "/":
            return Math.trunc(op1 / op2)

    }
}

console.log(calculateRpn(["4", "13", "5", "/", "+"]))