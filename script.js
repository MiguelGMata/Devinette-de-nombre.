// on cherche un nombre aléatoire entre 1 et 100
var numeroDevinette=Math.floor((Math.random()*100)+1);
var compteursResultat=0;

function devinette()
{
    // on obtient le nombre de réponses possibles
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
        // nous obtenons le contenu de la div qui contient les réponses
        var reponses=document.getElementById("reponses").innerHTML;

        if(compteursResultat<numeroResultat)
        {
            // nous obtenons le numéro entré par l'utilisateur
            var numero=document.getElementById("numero").value;

            if(isNumber(numero) && numero>0 && numero<100)
            {
                // augmenter le nombre de réponses données
                compteursResultat+=1;

                if(numero>numeroDevinette)
                {
                    // Le nombre est plus élevé

                    // Nous ajoutons un texte aux réponses
                    reponses+="<br>"+numero+" - Le nombre que vous recherchez est inférieur";
                    document.getElementById("numero").focus();
                }else if(numero<numeroDevinette){
                    // Le nombre est inférieur

                    // Nous ajoutons un texte aux réponses
                    reponses+="<br>"+numero+" - Le nombre que vous recherchez est superieur";
                    document.getElementById("numero").focus();
                }else{
                    // has acertado

                    // Nous ajoutons un texte aux réponses
                    reponses+="<br><span class='deviné'>"+numero+" - BRAVO!!! VOUS AVEZ DEVINÉ!!!</span>";

                    fin()
                }
                // on vide la valeur du nombre
                document.getElementById("numero").value="";
            }else{
                reponses+="<br><span class='erreur'>"+numero+" - Il doit s'agir d'une valeur numérique comprise entre 1 et 100</span>";
            }
        }else{
            reponses+="<br><span class='fin'> VOUS N'AVEZ PAS DEVINÉ!!! Le nombre c'est "+numeroDevinette+"</span>";

            fin()
        }

        // on remet toutes les réponses
        document.getElementById("reponses").innerHTML=reponses;
    }

    // Nous retournons false pour que le formulaire n'envoie pas les valeurs
    return false;
}

// Fonction qui s'exécute à la fin du jeu
// soit pour avoir découvert le nombre, soit pour finaliser le nombre de
// tentatives
function fin()
{
    // désactive la case pour saisir le numéro et le
    // bouton soumettre
    document.getElementById("numero").disabled=true;
    document.getElementById("btnEnvoi").disabled=true;
}

// Fonction simple pour valider un nombre
function isNumber(n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}

