function display(inputnumber){
    document.getElementById('result').value += inputnumber
    return
    
}
function solve(){
    let x = document.getElementById('result').value 

    let y = eval(x);

    document.getElementById('result').value = y

    return y
}

function clearscreen(){
    document.getElementById('result').value = ""

}