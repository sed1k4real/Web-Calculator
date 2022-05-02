///// clear
function clearScreen()
{
    document.getElementById("history").value = document.getElementById("result").value = "";   
}

//// insert values
function insert(value) 
{
    document.getElementById("result").value += value;
}

//// divide by 100
function percent(value)
{
    var p = document.getElementById("result").value;
    p /= 100;
    document.getElementById("result").value = p;
}

//// sign -/+ 
function sign(value)
{
    var s = document.getElementById("result").value;
    s *= -1;
    document.getElementById("result").value = s;
}

//// calculate
function calculate() 
{
    var v = document.getElementById("result").value;
    var q = eval(v);
    //Note: Eval() is particularly dangerous. This is because it allows one to execute code with the same privileges as the caller of eval().
    document.getElementById("result").value = q;
    document.getElementById("history").value = v;
}

