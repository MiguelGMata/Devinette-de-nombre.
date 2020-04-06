// buscamos un numero aleatorio entre 1 y 100
var numeroDevinette=Math.floor((Math.random()*100)+1);
var compteursResultat=0;

function devinette()
{
    // obtenemos el numero de respuestas posibles
    var numeroResultat=document.getElementById("numeroResultat").value;

    if(document.getElementById("numeroResultat").disabled==false)
    {
        if(isNumber(numeroResultat) && numeroResultat>0)
        {
            document.getElementById("numeroResultat").disabled=true;
            document.getElementById("numero").disabled=false;
            document.getElementById("numero").focus();
        }
    }else{
        // obtenemos el contenido del div que contiene las respuestas
        var reponses=document.getElementById("reponses").innerHTML;

        if(compteursResultat<numeroResultat)
        {
            // obtenemos el numero introducido por el usuario
            var numero=document.getElementById("numero").value;

            if(isNumber(numero) && numero>0 && numero<100)
            {
                // aumentanos el numero de la respuesta dada
                compteursResultat+=1;

                if(numero>numeroDevinette)
                {
                    // El numero es superior

                    // Añadimos un texto a las respuestas
                    reponses+="<br>"+numero+" - Le nombre que vous recherchez est inférieur";
                    document.getElementById("numero").focus();
                }else if(numero<numeroDevinette){
                    // El numero es inferior

                    // Añadimos un texto a las respuestas
                    reponses+="<br>"+numero+" - Le nombre que vous recherchez est superieur";
                    document.getElementById("numero").focus();
                }else{
                    // has acertado

                    // Añadimos un texto a las respuestas
                    reponses+="<br><span class='acertado'>"+numero+" - BRAVO!!! VOUS AVEZ DEVINÉ!!!</span>";

                    fin()
                }
                // vaciamos el valor del numero
                document.getElementById("numero").value="";
            }else{
                reponses+="<br><span class='error'>"+numero+" - Il doit s'agir d'une valeur numérique comprise entre 1 et 100</span>";
            }
        }else{
            reponses+="<br><span class='fin'> VOUS N'AVEZ PAS DEVINÉ!!! Le nombre c'est "+numeroDevinette+"</span>";

            fin()
        }

        // ponemos nuevamente todas las respuestas
        document.getElementById("reponses").innerHTML=reponses;
    }

    // devolvemos false para que el formulario no envie los valores
    return false;
}

// Funcion que se ejecuta al finalizar el juego
// ya sea por haber descubierto el numero o por finalizar el numero de
// intentos
function fin()
{
    // deshabilitamos el casilla de entrar el numero, y el
    // boton de enviar
    document.getElementById("numero").disabled=true;
    document.getElementById("btnEnviar").disabled=true;
}

// Simple función para validar un numero
function isNumber(n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}

