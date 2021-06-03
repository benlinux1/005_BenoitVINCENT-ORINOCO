// Récupérer l'id du produit cliqué dans l'Index grâce à Search Params
let params = (new URL(document.location)).searchParams;
let id = params.get("id");

// Pointage vers la section "basket"
const basket = document.getElementById("basket");
basket.classList.add("col-12");
basket.classList.add("text-center");

// Message concernant le détail du panier
const message = document.createElement("p");
message.innerText = "Voici le détail de votre panier :";
message.classList.add("basket-message");
message.classList.add("col-12")
basket.append(message);

// Consultation du local Storage
window.onload = () => {
    if(localStorage.color != null) {
        let color = localStorage.getItem("color");
    } else {
        message.innerText = "Votre panier est vide";
    }
}

// Création d'un tableau contenant la liste des produits + append à la section Basket
const productList = document.createElement("table");
productList.classList.add("col-md-12");
productList.classList.add("table");
basket.append(productList);

// Création d'un "tr" contenant la description des produits + append au tableau
let productDescription = document.createElement("tr");
productDescription.classList.add("col-md-12");
productList.append(productDescription);

// Création d'un "td" contenant l'image du produit
let productImage = document.createElement("td");
document.createElement("productImage");
productImage.classList.add("col-md-2");
productImage.innerText = "Photo du produit";
productDescription.appendChild(productImage);

// Récupération du nom de produit dans le localStorage
let productName = localStorage.getItem("productName");
console.log(productName);
const product = document.createElement("td");
document.createElement("product");
product.classList.add("col-md-2");
product.append(productName);
productDescription.append(product);

// Récupération de la couleur dans le localStorage
let selectedColor = localStorage.getItem("color");
console.log(selectedColor);
const productColor = document.createElement("td");
document.createElement("productColor");
productColor.classList.add("col-md-2");
productColor.append(selectedColor);
productDescription.append(productColor);

// Création d'un "td" contenant la quantité du produit
let productQuantity = document.createElement("td");
document.createElement("productQuantity");
productQuantity.classList.add("col-md-2");
productQuantity.innerText = "Quantité";
productDescription.appendChild(productQuantity);

// Création d'un "td" contenant le prix du produit
let productPrice = document.createElement("td");
document.createElement("productPrice");
productPrice.classList.add("col-md-2");
productPrice.innerText = "Prix du produit";
productDescription.appendChild(productPrice);

// Création d'un "td" contenant le prix du produit
let totalPrice = document.createElement("td");
let totalPriceAmount = `${productQuantity}` * `${productPrice}`;
document.createElement("totalPrice");
totalPrice.classList.add("col-md-2");
totalPrice.innerText = `${totalPriceAmount}`;
productDescription.appendChild(totalPrice);


///////////      CREER UNE BOUCLE SUR CHAQUE ELEMENT AJOUTÉ POUR INCRÉMENTER LE TABLEAU      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VERIFIER POSSIBILITÉ D'AJOUTER PLUSIEURS FOIS LE MEME ARTICLE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR LOCALSTORAGE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR GET ATTRIBUTE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR SET ATTRIBUTE      \\\\\\\\\\\\\\\\\\\\\\\