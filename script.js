function btnclick(val){
    document.getElementById('txtbox').value += val;
}
function btnclear(){
    document.getElementById('txtbox').value='';
}
function equalClick(){
    var text1 = document.getElementById('txtbox').value;
    var result = eval(text1);
    document.getElementById('txtbox').value = result
}