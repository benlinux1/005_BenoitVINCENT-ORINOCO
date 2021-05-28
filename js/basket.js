


// CONSTRUCTION DU PANIER  



const basketContent = document.getElementById("basket");


// Tableau : ProductList
let productList = document.createElement("table");
basketContent.appendChild(productList);

// Message : Panier vide / voici le détail de votre panier
let message = document.createElement("p");
basketContent.appendChild(message);



let productImage = document.createElement("tr");
productImage.classList.add("col-md-3")

let productName = document.createElement("td");
productName.classList.add("col-md-2")

let productColor = document.createElement("td");
productColor.classList.add("col-md-2")

let productPrice = document.createElement("td");
productPrice.classList.add("col-md-2")

let productDecrease = document.createElement("button");
productDecrease.classList.add("col-md-1")

let prodcutDelete = document.createElement("button")
prodcutDelete.classList.add("col-md-1")

let prodcutIncrease = document.createElement("button")
prodcutIncrease.classList.add("col-md-1")

productList.appendChild(productImage);
productList.appendChild(productName);
productList.appendChild(productColor);
productList.appendChild(productPrice);
productList.appendChild(prodcutQuantity);
productList.appendChild(productDecrease);
productList.appendChild(prodcutDelete);
productList.appendChild(prodcutIncrease);



///////////      CREER UNE BOUCLE SUR CHAQUE ELEMENT AJOUTÉ POUR INCRÉMENTER LE TABLEAU      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VERIFIER POSSIBILITÉ D'AJOUTER PLUSIEURS FOIS LE MEME ARTICLE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR LOCALSTORAGE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR GET ATTRIBUTE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR SET ATTRIBUTE      \\\\\\\\\\\\\\\\\\\\\\\