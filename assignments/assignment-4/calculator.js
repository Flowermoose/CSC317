// // hello.js
// const greeting = "JavaScript";
//
// const createMessage = (name) => {
//     return `Hello, ${name}!`;
// };
//
// console.log(createMessage(greeting));
function secureEval(expression) {
    // Only allow numbers, operators, parentheses, and decimal points
    const safePattern = /^[0-9+*/%.()-]+$/;

    if (!safePattern.test(expression)) {
        throw new Error("Invalid characters in expression.");
    }

    try {
        // eslint-disable-next-line no-new-func
        return Function('"use strict"; return (' + expression + ')')();
    } catch (e) {
        throw new Error("Error evaluating expression.");
    }
}

function calculatorScreen()
{
    // flashButton(this.id);
    if (this.value === "c") {
        output.value = "";
    }
    else if (this.value === "="){
        let total = secureEval(output.value);
        output.value = total;
    }
    else if (this.value === "%"){
        let total = secureEval( output.value + "/100");
        output.value =  total
    }
    else{
        output.value += this.value;
    }
}

function flashButton(id) {
    const button = $(id);
    if (!button) return;

    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");
    }, 100);
}