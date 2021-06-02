// Récupérer l'id du produit cliqué dans l'Index grâce à Search Params
let params = (new URL(document.location)).searchParams;
let id = params.get("id");

// Construction d'un objet pour chaque produit du Panier
class productInBasket {
    constructor(image, title, color, totalPrice) {
        this.image = productImage;
        this.title = productName;
        this.color = productColor;
        this.totalPrice = productPrice * productQuantity;
    }
}

// Pointage vers la section "basket"
const basket = document.getElementById("basket");


// Message concernant le détail du panier
const message = document.createElement("p");
basket.append(message);
message.innerText = "Voici le détail de votre panier :";
message.classList.add("basket-message");


// Consultation du local Storage
window.onload = () => {
    if(localStorage.color != null) {
        let color = localStorage.getItem("color");
    } else {
        message.innerText = "Votre panier est vide";
    }
}

// Création d'un "table" contenant la liste des produits + append à la section Basket
const productList = document.createElement("table");
basket.appendChild(productList);

const basketContent = [];
for(let i = 0; i < 99; i++);
basket.append(basketContent);


// Création d'un "tr" contenant la description des produits + append au tableau
let productDescription = document.createElement("tr");
productDescription.classList.add("col-md-12");
productList.append(productDescription);

// Récupération du nom de produit dans le localStorage
let product = localStorage.getItem("productName");
console.log(product);
const productCreation = document.createElement("td");
document.createElement("productCreation");
productCreation.classList.add("col-md-2");
productCreation.append(product);
productDescription.append(productCreation);

// Récupération de la couleur dans le localStorage
let selectedColor = localStorage.getItem("color");
console.log(selectedColor);
const productColor = document.createElement("td");
document.createElement("productColor");
productColor.classList.add("col-md-2");
productColor.append(selectedColor);
productDescription.append(productColor);




///////////      CREER UNE BOUCLE SUR CHAQUE ELEMENT AJOUTÉ POUR INCRÉMENTER LE TABLEAU      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VERIFIER POSSIBILITÉ D'AJOUTER PLUSIEURS FOIS LE MEME ARTICLE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR LOCALSTORAGE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR GET ATTRIBUTE      \\\\\\\\\\\\\\\\\\\\\\\

///////////      VOIR POUR SET ATTRIBUTE      \\\\\\\\\\\\\\\\\\\\\\\