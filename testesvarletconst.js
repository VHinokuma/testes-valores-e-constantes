alert("Cahamei o JS de exemplos de var, let e const");

//define uma variável x = 10
var x = 10;
document.getElementById('var1').innerHTML += x;
alert(x);

//declara novamente x com um conteúdo string
var x = 'ABCD';
document.getElementById('var2').innerHTML += x;
alert(x);

let y = 10;
document.getElementById('let1').innerHTML += y;

for (let z = 0; z<=10; z++)
    document.getElementById('let2').innerHTML += z + ',' ;

const PI = 3.14159;
document.getElementById('cosnt1').innerHTML += PI;