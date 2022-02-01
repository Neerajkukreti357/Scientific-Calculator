var button = document.getElementsByClassName("but_1");
var text = document.getElementById('text');

const history = [];

//isoperator function
function isOperator(operator) {
    if (operator == '+' || operator == '-' || operator == '*' || operator == '/'
        || operator == '^' || operator == '(' || operator == ')'
        || operator == 'sqr(' || operator == 'cbr('
        || operator == '%' || operator == 'deg(' || operator == 'rad(' || operator == 'log(') {
        return true;
    }
    else {
        return false;
    }
}

//checking if sin,cos,tan etc are present on the string or not
function Checkif(check_string) {
    if (check_string.includes('sin(') || check_string.includes('cos(') || check_string.includes('tan(')
        || check_string.includes('asin(') || check_string.includes('acos(') || check_string.includes('atan(')
        || check_string.includes('pi') || check_string.includes('log(') || check_string.includes('sqr(')
        || check_string.includes('cbr(') || check_string.includes('^') || check_string.includes('!')
        || check_string.includes('%') || check_string.includes('deg(') || check_string.includes('rad(')
        || check_string.includes('ex(') || check_string.includes('nCr(')) {
        return true;
    }
    else {
        return false;
    }
}

//function for checking power operator or not
function isPower(ch) {
    if (ch === '^') {
        return true;
    }
    else {
        return false;
    }
}

//function for = operator
function solve() {

    let recent_string = '';

    //making copy of the string
    for (let i = 0; i < text.innerHTML.length; i++) {
        recent_string += text.innerHTML[i];
    }

    //checking if string is not '0' than perform operation 
    if (recent_string != '0' && text.innerHTML != 'No Input' && !Checkif(recent_string)) {
        history.push(recent_string);

        //evalution of the string take place here
        text.innerHTML = eval(text.innerHTML);
    }

    else if (Checkif(recent_string)) {
        history.push(recent_string);

        //reading logarithemic value
        while (recent_string.includes('log(')) {
            let first_ancounter = recent_string.indexOf('log(');
            let index = recent_string.indexOf('(', first_ancounter) + 1;
            var val = '';

            while (recent_string[index] != ')') {
                val += recent_string[index];
                index += 1;
            }
            recent_string = recent_string.replace(val, '');
            let solve_value = Math.log10(val);
            recent_string = recent_string.replace('log()', parseFloat(solve_value).toFixed(5));

        }

        //reading cos inverse value
        while (recent_string.includes('acos(')) {
            let first_ancounter = recent_string.indexOf('acos(');
            let index = recent_string.indexOf('(', first_ancounter) + 1;
            var val = '';

            while (recent_string[index] != ')') {
                val += recent_string[index];
                index += 1;
            }
            recent_string = recent_string.replace(val, '');
            let solve_value = Math.acos(val);
            recent_string = recent_string.replace('acos()', parseFloat(solve_value).toFixed(5));

        }

        //reading value of tan inverse
        while (recent_string.includes('atan(')) {
            let first_ancounter = recent_string.indexOf('atan(');
            let index = recent_string.indexOf('(', first_ancounter) + 1;
            var val = '';

            while (recent_string[index] != ')') {
                val += recent_string[index];
                index += 1;
            }
            recent_string = recent_string.replace(val, '');
            let solve_value = Math.atan(val);
            recent_string = recent_string.replace('atan()', parseFloat(solve_value).toFixed(5));

        }

        //reading value of sin inverse
        while (recent_string.includes('asin(')) {
            let first_ancounter = recent_string.indexOf('asin(');
            let index = recent_string.indexOf('(', first_ancounter) + 1;
            var val = '';

            while (recent_string[index] != ')') {
                val += recent_string[index];
                index += 1;
            }
            recent_string = recent_string.replace(val, '');
            let solve_value = Math.asin(val);
            recent_string = recent_string.replace('asin()', parseFloat(solve_value).toFixed(5));

        }

        //reading tangent value
        while (recent_string.includes('tan(')) {
            let first_ancounter = recent_string.indexOf('tan(');
            let index = recent_string.indexOf('(', first_ancounter) + 1;
            var val = '';

            while (recent_string[index] != ')') {
                val += recent_string[index];
                index += 1;
            }
            recent_string = recent_string.replace(val, '');
            let solve_value = Math.tan(val);
            recent_string = recent_string.replace('tan()', parseFloat(solve_value).toFixed(5));

        }

        //reading sin value
        while (recent_string.includes('sin(')) {
            let first_ancounter = recent_string.indexOf('sin(');
            let index = recent_string.indexOf('(', first_ancounter) + 1;
            var val = '';

            while (recent_string[index] != ')') {
                val += recent_string[index];
                index += 1;
            }
            recent_string = recent_string.replace(val, '');
            let solve_value = Math.sin(val);
            recent_string = recent_string.replace('sin()', parseFloat(solve_value).toFixed(5));

        }

        //reading cos value

        while (recent_string.includes('cos(')) {
            let first_ancounter = recent_string.indexOf('cos(');
            let index = recent_string.indexOf('(', first_ancounter) + 1;
            var val = '';

            while (recent_string[index] != ')') {
                val += recent_string[index];
                index += 1;
            }
            recent_string = recent_string.replace(val, '');
            let solve_value = Math.sin(val);
            recent_string = recent_string.replace('cos()', parseFloat(solve_value).toFixed(5));

        }

        //reading pi value
        while (recent_string.includes('pi')) {
            let pi_val = parseFloat(Math.PI).toFixed(5);
            recent_string = recent_string.replace('pi', pi_val);
        }

        //reading value of sruare root
        while (recent_string.includes('sqr(')) {
            let first_ancounter = recent_string.indexOf('sqr(');
            let index = recent_string.indexOf('(', first_ancounter) + 1;
            var val = '';

            while (recent_string[index] != ')') {
                val += recent_string[index];
                index += 1;
            }
            recent_string = recent_string.replace(val, '');
            let solve_value = Math.sqrt(val);
            recent_string = recent_string.replace('sqr()', parseFloat(solve_value).toFixed(5));

        }

        //reading cuberoot value
        while (recent_string.includes('cbr(')) {
            let first_ancounter = recent_string.indexOf('cbr(');
            let index = recent_string.indexOf('(', first_ancounter) + 1;
            var val = '';

            while (recent_string[index] != ')') {
                val += recent_string[index];
                index += 1;
            }
            recent_string = recent_string.replace(val, '');
            let solve_value = Math.cbrt(val);
            recent_string = recent_string.replace('cbr()', parseFloat(solve_value).toFixed(5));

        }

        //reading power of an operand
        if (recent_string.includes('^')) {
            //for making string reverse
            const operand_stack = [];
            const operator_stack = [];
            let power_expr = '';

            let index = recent_string.indexOf('^');

            operand_stack.push(recent_string[index - 1]);
            power_expr += recent_string[index - 1];

            while (isPower(recent_string[index])) {
                if (recent_string[index] == '^') {
                    operator_stack.push(recent_string[index]);
                    power_expr += recent_string[index];
                    index++;
                }
                operand_stack.push(recent_string[index]);
                power_expr += recent_string[index];
                index++;
            }

            while (operator_stack.length > 0) {
                let val2 = operand_stack.pop();
                let val1 = operand_stack.pop();
                operator_stack.pop();
                operand_stack.push(Math.pow(val1, val2));
            }

            recent_string = recent_string.replace(power_expr, operand_stack.pop());
        }

        //reding a factorial
        if (recent_string.includes('!')) {

            let index = recent_string.indexOf('!') - 1;
            let value = '';
            const value_stk = [];
            while (index >= 0) {
                value_stk.push(recent_string[index--]);
            }

            while (value_stk.length > 0) {
                value += value_stk.pop();
            }

            let i = 1;
            let fact = 1;
            while (i <= parseInt(value)) {
                fact *= i;
                i++;
            }
            recent_string = recent_string.replace('!', '');
            recent_string = recent_string.replace(value, fact);
        }

        //reading percentage 
        if (recent_string.includes('%')) {
            let index_after = recent_string.indexOf('%') + 1;
            let index_befor = index_after - 2;
            const val1 = [];

            let value1 = '';
            let value2 = ''

            while (index_befor >= 0) {
                val1.push(recent_string[index_befor--]);
            }

            while (index_after < recent_string.length) {
                value2 += recent_string[index_after++];
            }

            while (val1.length > 0) {
                value1 += val1.pop();
            }
            let result = (value1 / 100) * value2;
            recent_string = recent_string.replace(value1, '');
            recent_string = recent_string.replace(value2, '');
            recent_string = recent_string.replace('%', result);

        }
        //change degree to radian
        while (recent_string.includes('deg(')) {
            let first_ancounter = recent_string.indexOf('deg(');
            let index = recent_string.indexOf('(', first_ancounter) + 1;
            var val = '';

            while (recent_string[index] != ')') {
                val += recent_string[index];
                index += 1;
            }
            recent_string = recent_string.replace(val, '');
            let solve_value = parseInt(val) * (Math.PI / 180);
            recent_string = recent_string.replace('deg()', parseFloat(solve_value).toFixed(5));

        }
        //change radian to degree
        while (recent_string.includes('rad(')) {
            let first_ancounter = recent_string.indexOf('rad(');
            let index = recent_string.indexOf('(', first_ancounter) + 1;
            var val = '';

            while (recent_string[index] != ')') {
                val += recent_string[index];
                index += 1;
            }
            recent_string = recent_string.replace(val, '');
            let solve_value = parseInt(val) * (180 / Math.PI);
            recent_string = recent_string.replace('rad()', parseFloat(solve_value).toFixed(5));

        }

        //reading eulars value
        while (recent_string.includes('ex(')) {
            let first_ancounter = recent_string.indexOf('ex(');
            let index = recent_string.indexOf('(', first_ancounter) + 1;
            var val = '';

            while (recent_string[index] != ')') {
                val += recent_string[index];
                index += 1;
            }
            recent_string = recent_string.replace(val, '');
            let solve_value = Math.exp(val);
            recent_string = recent_string.replace('ex()', parseFloat(solve_value).toFixed(5));

        }
        //calculating factorial for nCr
        function facto(value) {
            let fact = 1;
            let i = 1;
            while (i <= value) {
                fact *= i;
                i++;
            }
            return fact
        }
        //reading nCr
        if (recent_string.includes('nCr(')) {
            let first_ancounter = recent_string.indexOf('nCr(');
            let index = recent_string.indexOf('(', first_ancounter) + 1;
            var val1 = '';
            var val2 = '';

            while (recent_string[index] != '-') {
                val1 += recent_string[index];
                index += 1;
            }
            index++;
            while (recent_string[index] != ')') {
                val2 += recent_string[index];
                index += 1;
            }
            recent_string = recent_string.replace(val1, '');
            recent_string = recent_string.replace('-', '');
            recent_string = recent_string.replace(val2, '');
            let solve_value = facto(val1) / (facto(val2) * facto(val1 - val2));
            recent_string = recent_string.replace('nCr()', parseFloat(solve_value).toFixed(5));

        }
        //here final calculation in done
        text.innerHTML = eval(recent_string);
    }

    else {
        text.innerHTML = "No Input";
    }
    recent_string = '';
}

//initial function 
function init() {
    text.innerHTML = '0';
}
init();

//functions for changing the inner html of the input div
function change(val) {
    if (val == '.' && isOperator(text.innerHTML[text.innerHTML.length - 1])) {
        text.innerHTML += '0';
        text.innerHTML += val;
    }
    else if (val == '.' && text.innerHTML != '0') {
        text.innerHTML += val;
    }
    else if (text.innerHTML == '0' && val != '.') {
        text.innerHTML = val;
    }
    else {
        text.innerHTML += val;
    }
}

//back_button function
function back_but() {
    if (text.innerHTML == '0' || text.innerHTML.length == 1) {
        text.innerHTML = 0;
    }
    else {
        temp = "";
        for (let i = 0; i < text.innerHTML.length - 1; i++) {
            temp += text.innerHTML[i];
        }
        text.innerHTML = temp;
    }
}

//clear the screen of calculator
function clrScr() {
    text.innerHTML = '0';
}

//recent expression 
function recent_expr() {
    if (history.length < 1) {
        text.innerHTML = "Nothing";
    }
    else {
        text.innerHTML = history.pop()
    }
}