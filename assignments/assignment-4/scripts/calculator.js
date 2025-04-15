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
    if (this.value === "c") {
        output.value = "";
    }
    else if (this.value === "="){
        output.value = secureEval(output.value);
    }
    else if (this.value === "%"){
        output.value =  secureEval( output.value + "/100");
    }
    else if (this.value === "+-"){
        output.value =  secureEval( "-1*" + output.value);
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

function styleSwap() {
    let theme = document.getElementById('theme');
    if (theme.href.includes("styles/calculator-ai.css")) {
        theme.setAttribute('href', 'styles/calculator.css');
    }
    else{
        theme.setAttribute('href', 'styles/calculator-ai.css');
    }
}