// Récupérer l'id du produit cliqué dans l'Index grâce à Search Params
let params = (new URL(document.location)).searchParams;
let id = params.get("id");


// CONSTRUCTION DU PANIER  

// Pointage vers la section "basket"
const basket = document.getElementById("basket");

// construction d'un tableau pour le contenu du Panier
let basketContent = [];

// construction d'un objet pour chaque produit du Panier
class productInBasket {
    constructor(image, title, color, totalPrice) {
        this.image = productImage;
        this.title = productName;
        this.color = productColor;
        this.totalPrice = productPrice * productQuantity;
    }
}

// Tableau : ProductList
let productList = document.createElement("table");
basket.appendChild(productList);

// Message : Panier vide / voici le détail de votre panier
let message = document.createElement("p");
message.innerHTML = "Voici le détail de votre panier";
if 

let productDescription = document.createElement("tr");
productDescription.classList.add("col-md-12");

let productImage = document.createElement("td");
productImage.classList.add("col-md-2");

let productName = document.createElement("td");
productName.classList.add("col-md-2")
productName.innerHTML = `data-id ="${id}"`;

let productColor = document.createElement("td");
productColor.classList.add("col-md-2");
productColor.innerHTML = `data-color ="${selectedColor}"`; 

let productPrice = document.createElement("td");
productPrice.classList.add("col-md-2");
productPrice.innerHTML = `data-price ="${price}"`;

let productDecrease = document.createElement("button");
productDecrease.classList.add("col-md-1");
for(let i = 0; i < 99; i--) {
    console.log("1 unité retirée")
};

let productQuantity = document.createElement("input");
productQuantity.classList.add("col-md-1");
for(let i = 1; i < 99; i = productIncrease - productDecrease);
if (i<=0) {
    console.log("suppression du produit");
    // fonction à créer pour supprimer l'article
}

let productIncrease = document.createElement("button");
prodcutIncrease.classList.add("col-md-1");
for(let i = 0; i < 99; i++) {
    console.log("1 unité ajoutée")
};

let prodcutDelete = document.createElement("button");
prodcutDelete.classList.add("col-md-1");

basket.appendChild(message);
productList.appendChild(productDescription);
productList.appendChild(productImage);
productList.appendChild(productName);
productList.appendChild(productColor);
productList.appendChild(productPrice);
productList.appendChild(prodcutQuantity);
productList.appendChild(productDecrease);
productList.appendChild(prodcutQuantity);
productList.appendChild(prodcutIncrease);
productList.appendChild(prodcutDelete);


///////////      CREER UNE BOUCLE SUR CHAQUE ELEMENT AJOUTÉ POUR INCRÉMENTER LE TABLEAU      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VERIFIER POSSIBILITÉ D'AJOUTER PLUSIEURS FOIS LE MEME ARTICLE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR LOCALSTORAGE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR GET ATTRIBUTE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR SET ATTRIBUTE      \\\\\\\\\\\\\\\\\\\\\\\