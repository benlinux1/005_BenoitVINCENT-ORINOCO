let section = document.getElementById("message");

let contactData = localStorage.getItem("contact");
let contactDataJSON = JSON.parse(contactData);

let firstName = contactDataJSON.firstname;
let lastName = contactDataJSON.lastname;
let address = contactDataJSON.address;
let city = contactDataJSON.city;
let email = contactDataJSON.email;

let thanks = document.createElement("h1");
thanks.innerText = "Merci pour votre commande " + firstName;
thanks.classList.add("text-center");
message.append(thanks);

let recap = document.createElement("div");
let recapMessage = document.createElement("p");
recapMessage.innerText = "Voici les produits que nous allons vous envoyer";
recapMessage.classList.add("text-center");
message.append(recapMessage);
section.append(recap);

// Identification du Panier d'article depuis le Local Storage
let listOfArticles = localStorage.getItem("basket");
let listOfArticlesJSON = JSON.parse(listOfArticles);

// Création d'une TABLE contenant la liste des produits + ajout à la section Basket
const productList = document.createElement("table");
productList.classList.add("col-12");
productList.classList.add("table");
recap.appendChild(productList);

// RECUPERATION DE TOUS LES ARTICLES stockés dans le Local Storage
listOfArticlesJSON.forEach(article => {

    // Création de la ligne article dans un TR puis insertion dans Tbody
    let ligneArticle = document.createElement("tr");
    document.createElement("ligneArticle");
    productList.append(ligneArticle);

    // Insertion de l'image de l'article dans un TD
    let imageColumn = document.createElement("td");
    let imageProduct = document.createElement("img")
    document.createElement("imageColumn");
    document.createElement("imageProduct");
    imageProduct.src = article.articleImage;
    imageColumn.append(imageProduct);
    imageColumn.classList.add("col-2");
    imageColumn.classList.add("border-top");
    imageColumn.classList.add("border-bottom");
    imageColumn.classList.add("border-dark");
    ligneArticle.append(imageColumn);

    // Insertion du nom de l'article dans un TD
    let nameColumn = document.createElement("td");
    document.createElement("nameColumn");
    nameColumn.append(article.articleName);
    nameColumn.classList.add("col-2");
    nameColumn.classList.add("not-for-mobile");
    nameColumn.classList.add("border-top");
    nameColumn.classList.add("border-bottom");
    nameColumn.classList.add("border-dark");
    ligneArticle.append(nameColumn);
    
    // Insertion de la couleur de l'article dans un TD
    let colorColumn = document.createElement("td");
    document.createElement("colorColumn");
    colorColumn.append(article.articleColor);
    colorColumn.classList.add("col-xs-1");
    colorColumn.classList.add("border-top");
    colorColumn.classList.add("border-bottom");
    colorColumn.classList.add("border-dark");
    ligneArticle.append(colorColumn);

    // Insertion du prix de l'article dans un TD
    let priceColumn = document.createElement("td");
    document.createElement("priceColumn");
    priceColumn.append(article.articlePrice/100 + " €");
    priceColumn.classList.add("col-2");
    priceColumn.classList.add("border-top");
    priceColumn.classList.add("border-bottom");
    priceColumn.classList.add("border-dark");
    priceColumn.classList.add("not-for-mobile");
    ligneArticle.append(priceColumn);

    // Insertion de la colonne Quantity dans un TD
    let quantityColumn = document.createElement("td");
    document.createElement("quantityColumn");
    quantityColumn.append(article.articleQuantity);
    quantityColumn.classList.add("border-top");
    quantityColumn.classList.add("border-bottom");
    quantityColumn.classList.add("border-dark");
    ligneArticle.append(quantityColumn);

    // Insertion du prix total (quantité x prix unitaire) dans un TD
    let totalPriceColumn = document.createElement("td");
    let totalPriceColumnAmount = article.articleQuantity * article.articlePrice/100;
    document.createElement("totalPriceColumn");
    totalPriceColumn.classList.add("total-price");
    totalPriceColumn.classList.add("col-sm-2");
    totalPriceColumn.style.width = '100px';
    totalPriceColumn.classList.add("border-top");
    totalPriceColumn.classList.add("border-bottom");
    totalPriceColumn.classList.add("border-dark");
    totalPriceColumn.classList.add("px-0");
    totalPriceColumn.append(totalPriceColumnAmount + " €");
    ligneArticle.append(totalPriceColumn);
})

// Calcul de la somme des prix du tableau
let priceTable = JSON.parse(localStorage.getItem("tableauPrix"));
let totalPriceTable = JSON.stringify(priceTable);
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let totalOrder = priceTable.reduce(reducer);

// Création d'une ligne pour le total de la commande
let totalOrderPriceText = document.createElement("p");
document.createElement("totalOrderPrice");
totalOrderPriceText.classList.add("col-md-12");
totalOrderPriceText.style.fontWeight = 'bold';
totalOrderPriceText.classList.add("text-info");
totalOrderPriceText.classList.add("text-center");
recap.append(totalOrderPriceText);
totalOrderPriceText.innerText = "Montant total de votre commande : " + totalOrder + " €";

// Variable pour récupérer les Coordonnées de contact dans le Local Storage, pour la requête POST
let contact = JSON.parse(localStorage.getItem("contact"));
console.log(contact);

// Variable pour récupérer le tableau contenant les ID de produits pour la requête POST
let products = JSON.parse(localStorage.getItem("products"));
console.log(products);

// Variable à envoyer à la requête POST
const toSend = {
    contact, products,
}
console.log(toSend);

fetch("http://localhost:3000/api/teddies/order", {
	method: "POST",
	headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json' 
    },
	body: JSON.stringify(toSend),
});