
document.addEventListener('DOMContentLoaded', function() {
    var letrasp = prompt("")
    var intentos = 6
    var tamañoP = 0
    function valores(){
        if (letrasp !=null || letrasp !=""){
            for (x in letrasp){
                if(letrasp[x] != " "){
                    tamañoP+=1
                }
            }
        }
    }
    valores()

    var adivinanzas = 0
    function comprobar(letra){ 
        let encontro = 0       
        for (x in letrasp){
            if (letra.toLowerCase()==letrasp[x].toLowerCase()){
                const elements = document.getElementById(letrasp[x].toLowerCase());
                elements.style.color="black"
                elements.id = letra+letra
                encontro += 1    
            }
        }
        if (encontro <1){
            let acierto = document.getElementById("aciertos")
            acierto.style.color = "red"
            acierto.innerHTML = "AYYYYYYYYYYYYYYYYYYYYYYYYYYY"
            intentos -=1
        }else{
            let acierto = document.getElementById("aciertos")
            acierto.style.color = "green"
            acierto.innerText = "BUENAAAAA"
            adivinanzas +=encontro
        }
        if (intentos<=0){
            alert("Tremendo perdedor, La palabra era: " +letrasp);
        }
        if (adivinanzas>=tamañoP){
            alert("GANASTE")
        }
        document.getElementById("intentos").innerText = "intentos restantes: "+intentos;
    }
    //toma los valores de las letras a y z
    var i = "a".charCodeAt(0), j = "z".charCodeAt(0);
    //agrega cada letra como boton de la a hasta la z
    for( ; i<=j; i++) {
        let letra = String.fromCharCode(i).toUpperCase()
        var letras = document.createElement("div");
        letras.classList.add("letras");
        letras.innerHTML = "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
        
        var pendingList = document.getElementById("letras");
        letras.addEventListener("click", function(){
            document.getElementById(letra).disabled = true;
            comprobar(letra)
        });
        pendingList.appendChild(letras);
        //añade la ñ
        if (i==110) {
            var letras = document.createElement("div");
            letras.classList.add("letras");
            letras.innerHTML= "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='Ñ'>Ñ</button>";

            
            var pendingList = document.getElementById("letras");
            letras.addEventListener("click", function(){
                document.getElementById("Ñ").disabled = true;
            });
            pendingList.appendChild(letras);

        }

    }
    //reinicia la palabra
    //var letrasp = prompt("")
    var palabra = document.getElementById("palabra")
        palabra.innerHTML ="";
    //separa las letras y las coloca
    for (i in letrasp) {
        var letre = letrasp[i];
        var palabra = document.getElementById("palabra")
        //sustituye los espacios por "/"
        if (letre == " "){
            palabra.innerHTML +="<div>/</div>"}
        else{
            palabra.innerHTML +="<span id="+ letre.toLowerCase() +">"+ letre.toUpperCase() +"</span>";}
    }









});