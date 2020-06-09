var val1, val2;
var count = 0;
var array = [];
var tempArray = [];
var total;
var test;
var length = 0;

function loadDisplay(num){
    document.getElementById('display2').value += num.value.toString();
}

function delFromRight(){
    document.getElementById('display2').value = document.getElementById('display2').value.slice(0, -1);
}

function clearDisplay(){
    document.getElementById('display2').value = "";
}

function setOperator(tag) {
    if(count > 0){
        val1 = val1 + "" + document.getElementById('display2').value + " " + tag.value;
        document.getElementById('display1').innerHTML = val1;
        document.getElementById('display2').value = " ";
    }
    else{
    val1 = document.getElementById('display2').value + " " + tag.value;
    document.getElementById('display1').innerHTML = val1;
    document.getElementById('display2').value = " ";
    count = count + 1;
    }
}


function doMath(){
    val1 = val1 + "" + document.getElementById('display2').value;
    array = val1.split(" ");
    length = array.length;

    

    while(array.length > 4){

        for( i = 2; i < length; i++){
            if(array[i] == "*"){
                result = parseInt(array[i-1]) * parseInt(array[i+1])
                array[i] = result.toString();
                array.splice(i+1,1);
                array.splice(i-1,1);
                i == 2;
    
            }
        }



    for( i = 2; i < length; i++){
        if(array[i] == "/"){
            result = parseInt(array[i-1]) / parseInt(array[i+1])
            array[i] = result.toString();
            array.splice(i+1,1);
            array.splice(i-1,1);
            i == 2;

        }
    }

   

    for( i = 2; i < length; i++){
        if(array[i] == "+"){
            result = parseInt(array[i-1]) + parseInt(array[i+1])
            array[i] = result.toString();
            array.splice(i+1,1);
            array.splice(i-1,1);
            i == 2;

        }
    }

    
    for( i = 2; i < length; i++){
        if(array[i] == "-"){
            result = parseInt(array[i-1]) - parseInt(array[i+1])
     
            array[i] = result.toString();

            array.splice(i+1,1);
            array.splice(i-1,1);
            i == 2;
        }
    }

/*
    val1 = array[0];
    val2 = array[2];

    switch(array[1]){
        case '+':
            result = parseInt(val1) + parseInt(val2);
            break;
        case '-':
            result = parseInt(val1) - parseInt(val2);
            break;
        case '*':
            result = parseInt(val1) * parseInt(val2);
            break;
        case '/':
            result = parseInt(val1) / parseInt(val2);
            break;
        case 's':
            result = Math.sqrt(parseInt(val1));
            break;
        case 'p':
            result = Math.pow(parseInt(val1), parseInt(val2));
            break;
    }
    
    

    document.getElementById('display1').innerHTML = " ";
    document.getElementById('display2').value = result;
    val1 = null;
    val2 = null;
    result = null;
    count = null;
    */
}

    val1 = array[0];
    val2 = array[2];

    switch(array[1]){
        case '+':
            result = parseInt(val1) + parseInt(val2);
            break;
        case '-':
            result = parseInt(val1) - parseInt(val2);
            break;
        case '*':
            result = parseInt(val1) * parseInt(val2);
            break;
        case '/':
            result = parseInt(val1) / parseInt(val2);
            break;
        case 's':
            result = Math.sqrt(parseInt(val1));
            break;
        case 'p':
            result = Math.pow(parseInt(val1), parseInt(val2));
            break;
    }

    result = result.toString();

    document.getElementById('display1').innerHTML = " ";
    document.getElementById('display2').value = result;
    val1 = null;
    val2 = null;
    result = null;
    count = null;
}
/*
function doMath() {
    val2 = document.getElementById('display2').value;
    var result;
    switch(val1.slice(-1)){
        case '+':
            result = parseInt(val1) + parseInt(val2);
            break;
        case '-':
            result = parseInt(val1) - parseInt(val2);
            break;
        case '*':
            result = parseInt(val1) * parseInt(val2);
            break;
        case '/':
            result = parseInt(val1) / parseInt(val2);
            break;
        case 's':
            result = Math.sqrt(parseInt(val1));
            break;
        case 'p':
            result = Math.pow(parseInt(val1), parseInt(val2));
            break;
    }
    document.getElementById('display1').innerHTML = " ";
    document.getElementById('display2').value = result;
    val1 = null;
    val2 = null;
    result = null;
    count = null;
    */
   