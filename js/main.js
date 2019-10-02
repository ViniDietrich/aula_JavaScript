function botão() {
    document.getElementById("agradecimento").innerHTML = "<b>WHY YOU SO SERIOUS?</b>";
    //console.log(document.getElementById("agradecimento"));    
    //alert("Obrigado")
}

function redirecionar() {
    window.open("https://github.com/");
    //Window.location.href = "https://github.com/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "HeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHe"
    elemento.innerHTML = "HeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHeHe"
    //alert ("Trocar Texto");
}
function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA"
    elemento.innerHTML = "HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA"
}

function load(){
    alert ("Serious?")
}

function funcaoChange(elemento) {
    console.log(elemento.value);
    
}

/*
function soma(n1, n2) {
    return n1 + n2    
}
*/
/*
var validar = 0

function validaIdade(idade) {
    if(idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}*/

/*alert(soma(5, 10))*/

/*alert(setReplace("Vai Japão", "Japão", "Brasil"));*/


/*
var d = new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay()+1);
alert(d.getMonth()+1);
alert(d.getYear()+1);
*/

/*
var count;
for (count=1; count<=5; count++){
    alert(count) 
};
*/

/*
var count = 0;
while (count<=5) {
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    count = count + 1;
}
*/

//var idade = prompt("Qual sua idade?");
//if(idade >= 18){
//   alert("Maior de idade");
//}else{
//    alert("Menor de idade");
//}

//var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);

//var arma = {nome:"maça", cor:"cinza"}
//console.log(arma.nome)

//var lista = ["maça", "espada", "lança"]
//console.log(lista[2]);
//alert(lista[2]);
//lista.push("adaga");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "))

//var name = "Vin";
//var age = 24;
//var frase = "I don't know what to do"
//alert("Bem vindo " + name);
//alert(name + " tem " + age + " anos");
//alert(age * 100)
//console.log(name);
//console.log(age);
//console.log(frase.replace("don't","do"));
//alert(frase.replace("don't","do"))
//console.log(frase.toUpperCase())
//console.log(name.toLowerCase())
//console.log(age * 100)
//console.log(ag * 100)