CALCULO = (function () {
    const calculadora = { 
        display: 0,
    }

    calculadora.somar = function () {
        let somaTotal = 0;
        for ( let i = 0; i < arguments.length; i++) {
            somaTotal += arguments[i];
        }
        if (isNaN(somaTotal)) {
            return 'Por favor insira numeros';
        }
        return calculadora.display = somaTotal;
    }

    calculadora.subtrair = function () {
        let subTotal = arguments[0];
        for ( let i = 1; i < arguments.length; i++) {
            subTotal -= arguments[i];
        }
        if (isNaN(subTotal)) {
            return 'Por favor insira numeros';
        }
        return calculadora.display = subTotal;
    }

    calculadora.multi = function () {
        let multiTotal = 1;
        for ( let i = 0; i < arguments.length; i++) {
            multiTotal *= arguments[i];
        }
        if (isNaN(multiTotal)) {
            return 'Por favor insira numeros';
        }
        return calculadora.display = multiTotal;
    }

    calculadora.div = function () {
        let divTotal = arguments[0];
        for ( let i = 1; i < arguments.length; i++) {
            divTotal /= arguments[i];
        }
        if (isNaN(divTotal)) {
            return 'Por favor insira numeros';
        }
        return calculadora.display = divTotal;
    }

    return {
        add: calculadora.somar,
        sub: calculadora.subtrair,
        multi: calculadora.multi,
        div: calculadora.div
    };
}())