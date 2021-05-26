


///////////      CONSTRUCTION DU PANIER      \\\\\\\\\\\\\\\\\\\\\\\

const basketSection = document.getElementById("basket");

let productList = document.createElement("table");
basketSection.appendChild(productList);

let product = document.createElement("tr");
productList.appendChild(product);

let description = document.createElement("td");
productList.appendChild(description);



///////////      CREER UNE BOUCLE SUR CHAQUE ELEMENT AJOUTÉ POUR INCRÉMENTER LE TABLEAU      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VERIFIER POSSIBILITÉ D'AJOUTER PLUSIEURS FOIS LE MEME ARTICLE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR LOCALSTORAGE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR GET ATTRIBUTE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR SET ATTRIBUTE      \\\\\\\\\\\\\\\\\\\\\\\