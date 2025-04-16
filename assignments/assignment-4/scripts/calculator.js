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
        output.value = "0";
    }
    else if (this.value === "="){
        output.value = secureEval(output.value);
        memory = output.value;
    }
    else if (this.value === "%"){
        output.value =  secureEval( output.value + "/100");
    }
    else if (this.value === "+-"){
        output.value =  secureEval( "-1*" + output.value);
    }
    else if (this.value === "M+"){
        output.value = secureEval( memory + "+" + output.value);
    }
    else if (this.value === "M-"){
        output.value = secureEval( memory + "-" + output.value);
    }
    else if (this.value === "MR"){
        output.value = memory;
    }
    else if (this.value === "MC"){
        memory = "";
    }
    else{
        if(output.value === "0"){
            output.value = this.value;
        }
        else {
            output.value += this.value;
        }
    }
}

function styleSwap() {
    let theme = document.getElementById('theme');
    let button = document.getElementById('styleSwapper');
    if (theme.href.includes("styles/calculator-ai.css")) {
        theme.setAttribute('href', 'styles/calculator-ai2.css');
        button.setAttribute('value','dark' )
        // value="&#9789"
    }
    else if (theme.href.includes("styles/calculator-ai2.css")) {
        theme.setAttribute('href', 'styles/calculator.css');
        button.setAttribute('value','bright' )
        // value="&#9789"
    }
    else{
        theme.setAttribute('href', 'styles/calculator-ai.css');
        button.setAttribute('value','light' )
        // theme.value="&#9790";
    }
}
