const palavra = prompt("Informe a palavra: ");

let palindromo = false;
let i;
let j;

for(i=0, j=palavra.length; i<=palavra.length, j > 0; i++, j--){
    if(palavra[i] == palavra[j-1]){
        palindromo = true;
    }else{
        palindromo = false;
    }
} 

if(palindromo == true){
    alert("é um palindromo");
}else{
    alert("nu é");
}