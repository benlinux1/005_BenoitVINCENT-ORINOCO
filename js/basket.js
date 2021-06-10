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

// Création d'une TABLE contenant la liste des produits + ajout à la section Basket
const productList = document.createElement("table");
productList.classList.add("col-md-12");
productList.classList.add("table");
basket.append(productList);

// Création d'un "tr" contenant la description du produit
let productDescription = document.createElement("tr");
productDescription.classList.add("col-md-12");
productList.append(productDescription);

// Création d'un "td" "image du produit"
let productImage = document.createElement("td");
document.createElement("productImage");
productImage.classList.add("col-md-2");
productImage.innerText = "Photo du produit";
productDescription.appendChild(productImage);

// Récupération du nom de produit dans le localStorage
let productName = document.createElement("td");
document.createElement("productName");
productName.classList.add("col-md-2");
productName.innerText = "Nom";
productDescription.append(productName);

/* Récupération de la couleur dans le localStorage
let productColor = document.createElement("td");
document.createElement("productColor");
productColor.classList.add("col-md-1");
productColor.innerText = "Couleur";
productDescription.append(productColor); */

// Création d'un "td" contenant le prix du produit
let productPrice = document.createElement("td");
document.createElement("productPrice");
productPrice.classList.add("col-md-2");
productPrice.innerText = "Prix unitaire";
productDescription.appendChild(productPrice);

// Création d'un "td" contenant la quantité du produit
let productQuantity = document.createElement("td");
document.createElement("productQuantity");
productQuantity.classList.add("col-md-1");
productQuantity.innerText = "Quantité";
productDescription.appendChild(productQuantity);

// Création d'un "td" contenant le prix du produit
let totalPrice = document.createElement("td");
let totalPriceAmount = `${productQuantity}` * `${productPrice}`;
document.createElement("totalPrice");
totalPrice.classList.add("col-md-2");
totalPrice.innerText = "Prix total";
productDescription.appendChild(totalPrice);

// Création d'un "td" contenant le bouton supprimer
let deleteTd = document.createElement("td");
document.createElement("deleteTd");
deleteTd.classList.add("col-md-2");
deleteTd.innerText = "Suppression";
productDescription.appendChild(deleteTd);

// Identification du Panier d'article depuis le Local Storage
let listOfArticles = localStorage.getItem("basket");
let listOfArticlesJSON = JSON.parse(listOfArticles);


// Implémentation d'un tableau dans le LS pour stocker les prix
let priceTable= [];
let totalPriceTable = JSON.stringify(priceTable);
localStorage.setItem("tableauPrix", totalPriceTable);

// Implémentation d'un tableau dans le LS pour stocker les Id de produits
let productArray = [];
let products = localStorage.getItem("products");
let listofProducts = JSON.parse(products);
localStorage.setItem("products", JSON.stringify(productArray));


// RECUPERATION DE TOUS LES ARTICLES AU PANIER
// Message si panier vide
if (listOfArticles === '{}' || listOfArticles === '[]' || listOfArticles === null) {
    message.innerText = "Votre panier est vide";
// Construction du Tableau pour chaque au panier
} else {
    listOfArticlesJSON.forEach(article => {
        // Stockage de l'Id des produits dans le Local Storage
        productArray.push(article.articleId);
        localStorage.setItem("products", JSON.stringify(productArray));

        // Création de la ligne article dans un TR
        let ligneArticle = document.createElement("tr");
        document.createElement("ligneArticle");
        productList.append(ligneArticle);

        // Création de la colonne Image dans un TD
        let imageColumn = document.createElement("td");
        let imageProduct = document.createElement("img")
        document.createElement("imageColumn");
        document.createElement("imageProduct");
        imageProduct.src = article.articleImage;
        imageColumn.append(imageProduct);
        imageColumn.classList.add("col-md-2");
        ligneArticle.append(imageColumn);

        // Création de la colonne Name dans un TD
        let nameColumn = document.createElement("td");
        document.createElement("nameColumn");
        nameColumn.append(article.articleName);
        nameColumn.classList.add("col-md-2");
        ligneArticle.append(nameColumn);
        
        /* Création de la colonne Color dans un TD
        let colorColumn = document.createElement("td");
        document.createElement("colorColumn");
        colorColumn.append(article.articleColor);
        colorColumn.classList.add("col-md-1");
        ligneArticle.append(colorColumn); */

        // Création de la colonne Price dans un TD
        let priceColumn = document.createElement("td");
        document.createElement("priceColumn");
        priceColumn.append(article.articlePrice/100 + " €");
        priceColumn.classList.add("col-md-2");
        ligneArticle.append(priceColumn);

        // Création de la colonne Quantity dans un TD
        let quantityColumn = document.createElement("td");
        document.createElement("quantityColumn");
        let lessQuantityButton = document.createElement("button");
        document.createElement("lessQuantityButton");
        lessQuantityButton.innerText = "-";
        lessQuantityButton.classList.add("mr-2");
        lessQuantityButton.classList.add("btn");
        lessQuantityButton.classList.add("btn-info");
        lessQuantityButton.classList.add("rounded");
        lessQuantityButton.classList.add("btn-sm");
        quantityColumn.append(lessQuantityButton);
        quantityColumn.append(article.articleQuantity);
        quantityColumn.classList.add("col-md-2");
        ligneArticle.append(quantityColumn);

        // Création d'un "td" contenant le bouton +
        let addQuantityButton = document.createElement("button");
        document.createElement("addQuantityButton");
        addQuantityButton.innerText = "+";
        addQuantityButton.classList.add("ml-2");
        addQuantityButton.classList.add("btn");
        addQuantityButton.classList.add("btn-info");
        addQuantityButton.classList.add("rounded");
        addQuantityButton.classList.add("btn-sm");
        quantityColumn.append(addQuantityButton);

        // Création de la colonne Prix Total dans un TD
        let totalPriceColumn = document.createElement("td");
        let totalPriceColumnAmount = article.articleQuantity * article.articlePrice/100;
        document.createElement("totalPriceColumn");
        totalPriceColumn.classList.add("total-price");
        totalPrice.classList.add("col-md-2");
        totalPriceColumn.append(totalPriceColumnAmount + " €");
        ligneArticle.append(totalPriceColumn);
        priceTable.push(totalPriceColumnAmount);
        localStorage.setItem("tableauPrix", JSON.stringify(priceTable));

        // Création d'un "td" contenant le bouton supprimer
        let deleteButtonContainer = document.createElement("td");
        let deleteButton = document.createElement("button");
        document.createElement("deleteButtonContainer");
        document.createElement("deleteButton");
        deleteButtonContainer.classList.add("col-md-2");
        deleteButton.classList.add("rounded-pill");
        deleteButton.innerText = "Supprimer";
        deleteButton.classList.add("btn");
        deleteButton.classList.add("btn-info");
        deleteButton.classList.add("btn-sm");
        deleteButtonContainer.append(deleteButton);
        ligneArticle.appendChild(deleteButtonContainer);

        lessQuantityButton.addEventListener("click", function() {
            console.log(article.articleQuantity -= 1);
        })

        // STOCKAGE DU PRODUIT + COULEUR (en objet) dans l'array "BasketContent"
        deleteButton.addEventListener("click", function() {
            console.log(article.articleName);
            deleteFromBasket();
            alert("Vous venez de supprimer l'ours " + article.articleName + " du panier");
        })

        // FONCTION PERMETTANT DE SUPPRIMER LE PRODUIT AU PANIER dans le LocalStorage
        function deleteFromBasket() {               // NE FONCTIONNE PAS : supprime le premier élément du tableau
            for (let product in productList) {}
            let i=0; i < productList.length; i++;
            productList.deleteRow(`${i}`);
}

    })
}



// Calcul de la somme des prix du tableau
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let totalOrder = priceTable.reduce(reducer);
console.log(priceTable.reduce(reducer));

// Création d'une ligne pour le total de la commande
let totalOrderPriceText = document.createElement("p");
document.createElement("totalOrderPrice");
totalOrderPriceText.classList.add("col-md-12");
totalOrderPriceText.style.fontWeight = 'bold';
totalOrderPriceText.classList.add("col-md-12");
basket.append(totalOrderPriceText);
totalOrderPriceText.innerText = "Montant total de votre commande : " + totalOrder + " €";


// Création des données de contact
class contact {
    constructor(firstname, lastname, address, city, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.city = city;
        this.email = email;
    }
}
let newContact = new contact;


// Création du formulaire
let formSection = document.getElementById("order-form");
let form = document.createElement("form");
form.classList.add("container");
form.classList.add("bgc-white");
form.classList.add("col-sm-5");
form.classList.add("text-center");
form.id = "form";
form.method = "GET";
form.action = "confirmation.html";
formSection.append(form);

let fieldSet = document.createElement("fieldset");
fieldSet. innerHTML =
`
    <legend class="mt-2">Formulaire de commande</legend>
    <label class="mt-2" for="firstname">
        Quel est votre prénom ?
    </label>
    <input type="text" id="firstname" placeholder="Vincent" class="form-control" required autofocus/>
    <br />

    <label for="lastname">
        Quel est votre nom ?
    </label>
    <input type="text" id="lastname" placeholder="DUPONT" class="form-control" required/>
    <br />

    <label for="address">
        Quelle est votre adresse ?
    </label>
    <input type="text" id="address" placeholder="Central Park" class="form-control" required />
    <br />

    <label for="city">
        Dans quelle ville habitez-vous ?
    </label>
    <input type="text" id="city" placeholder="New York" class="form-control" required />
    <br />

    <label for="email">
        Quelle est votre adresse e-mail ?
    </label>
    <input type="email" name="mail" id="email" placeholder="abcdef@gmail.com" class="form-control" required />
    <br />
    <button type="submit" id="btn-order";">Valider la commande</button>

`

form.append(fieldSet);

// PERSONNALISATION DU BOUTON "Valider la commande"     
const button = document.getElementById("btn-order"); 
button.classList.add("btn");
button.classList.add("btn-info");
button.classList.add("mx-auto");
button.classList.add("my-1");

// Ecoute de tous les champs de formulaire à chaque modifications PUIS envoi au LocalStorage
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let address = document.getElementById("address");
let city = document.getElementById("city");
let eMail = document.getElementById("email");


firstName.addEventListener("change",function() {
    newContact.firstname = firstName.value;
})
lastName.addEventListener("change",function() {
    newContact.lastname = lastName.value;
})
address.addEventListener("change",function() {
    newContact.address = address.value;
})
city.addEventListener("change",function() {
    newContact.city = city.value;
})   
eMail.addEventListener("change",function() {
    newContact.email = eMail.value;
    localStorage.setItem("contact", JSON.stringify(newContact));
})













///////////      VERIFIER POSSIBILITÉ D'AJOUTER PLUSIEURS FOIS LE MEME ARTICLE      \\\\\\\\\\\\\\\\\\\\\\\
