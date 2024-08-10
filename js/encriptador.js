const ingresoTexto = document.getElementById
("ingresoTexto")

const botonEncriptar = document.getElementById
("botonEncriptar")

const botonDesencriptar = document.getElementById
("botonDesencriptar")

const botonCopiar = document.getElementById
("botonCopiar")

const mensajeFinal = document.getElementById
("mensajeFinal")

const buho = document.getElementById("buho")
const informacion = document.getElementById("informacion")
const encriptado = document.getElementById("encriptado")


//e - enter
//i - imes
//a - ai
//o - ober
//u - ufat

let reemplazar = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],

 ]

 const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    buho.classList.add("oculto");
    ingresoTexto.value="";
    informacion.style.display = "none";
    botonCopiar.style.display ="block";
    encriptado.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

 }

const reset = () => {
    mensajeFinal.innerHTML = "";
    buho.classList.remove("oculto");
    informacion.style.display = "block";
    botonCopiar.style.display ="none";
    encriptado.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
}


botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != ""){
        function encriptar(newText) {
            for(let i = 0; i < reemplazar.length; i++) {
                if(newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
            return newText
        };

    }else{
        alert("Ingrese texto a encriptar");
        reset(botonCopiar,botonEncriptar,botonDesencriptar);
    
    }
    reset(botonEncriptar,botonDesencriptar,botonCopiar);
    //const textoEncriptado = encriptar(texto);
    remplace(encriptar(texto));
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != ""){
        function desencriptar(newText) {
            for( let i = 0; i < reemplazar.length; i++){
                if(newText.includes(reemplazar [i][1])){
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                };
            };
            return newText   
        };

    } else{
        alert("Ingrese texto a Desencriptar");
    }
    
    remplace(desencriptar(texto));
});

botonCopiar.addEventListener("click",() =>{
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand("copy");
    alert("Texto Copiado");
    reset();
} );