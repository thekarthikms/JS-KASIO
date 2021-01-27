const result = document.querySelector("#result");

let op1 = oper = op2 = '';

function append(val){
    if(oper){
        op2 += val; 
    }else{
        op1 += val;
    }
    renderRes()
}



function assign(val){
    oper  = val;
    renderRes()
}

function disclr(){
    op1 = oper = op2 = '';
    renderRes()
}

function resdis(){
    op1 = parseInt(op1,10);
    op2 = parseInt(op2,10);

    switch(oper){
        case '+':
            op1 += op2;
            break;
        case '-':
            op1 -= op2;
            break;
        case '*':
            op1 *= op2;
            break;
        case '/':
            op1 /= op2;
            break;
        default:
            break;
    }
    op1 = parseFloat(op1).toString(10);
    oper = op2 = ''
    renderRes()
    
}

function renderRes(){
    result.innerHTML = op1 + oper + op2;
}