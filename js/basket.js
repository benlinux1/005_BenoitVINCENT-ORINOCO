// Pointage vers la section "basket"
let basket = document.getElementById("basket");
basket.classList.add("col-12");
basket.classList.add("text-center");

// Message concernant le détail du panier
let message = document.createElement("p");
message.innerText = "Voici le détail de votre panier :";
message.classList.add("basket-message");
message.classList.add("col-12")
basket.append(message);

// Création d'une TABLE contenant la liste des produits + ajout à la section Basket
let productList = document.createElement("table");
productList.classList.add("col-12");
productList.classList.add("table");
basket.append(productList);

// Création du Thead
let thead = document.createElement("thead");
productList.append(thead);

// Création d'un "tr" contenant la description du produit
let productDescription = document.createElement("tr");
productDescription.classList.add("col-12");
thead.append(productDescription);

// Création d'un "td" IMAGE
let productImage = document.createElement("td");
document.createElement("productImage");
productImage.classList.add("col-2");
productImage.classList.add("border-top");
productImage.classList.add("border-bottom");
productImage.classList.add("border-dark");
productImage.classList.add("text-info");
productImage.style.fontWeight = 'bold';
productImage.innerText = "Photo";
productDescription.appendChild(productImage);

// Création d'un "td" NOM
let productName = document.createElement("td");
document.createElement("productName");
productName.classList.add("col-2");
productName.classList.add("not-for-mobile");
productName.classList.add("border-top");
productName.classList.add("border-bottom");
productName.classList.add("border-dark");
productName.classList.add("text-info");
productName.style.fontWeight = 'bold';
productName.innerText = "Modèle";
productDescription.append(productName);

// Création d'un "td" COULEUR
let productColor = document.createElement("td");
document.createElement("productColor");
productColor.classList.add("col-1");
productColor.classList.add("border-top");
productColor.classList.add("border-bottom");
productColor.classList.add("border-dark");
productColor.classList.add("text-info");
productColor.style.fontWeight = 'bold';
productColor.innerText = "Couleur";
productDescription.append(productColor);

// Création d'un "td" PRIX UNITAIRE
let productPrice = document.createElement("td");
document.createElement("productPrice");
productPrice.classList.add("col-2");
productPrice.classList.add("not-for-mobile");
productPrice.classList.add("border-top");
productPrice.classList.add("border-bottom");
productPrice.classList.add("border-dark");
productPrice.classList.add("text-info");
productPrice.style.fontWeight = 'bold';
productPrice.innerText = "Prix unitaire";
productDescription.appendChild(productPrice);

// Création d'un "td" QUANTITE
let productQuantity = document.createElement("td");
document.createElement("productQuantity");
productQuantity.classList.add("col-2");
productQuantity.classList.add("border-top");
productQuantity.classList.add("border-bottom");
productQuantity.classList.add("border-dark");
productQuantity.classList.add("text-info");
productQuantity.style.fontWeight = 'bold';
productQuantity.innerText = "Quantité";
productDescription.appendChild(productQuantity);

// Création d'un "td" PRIX TOTAL
let totalPrice = document.createElement("td");
let totalPriceAmount = `${productQuantity}` * `${productPrice}`;
document.createElement("totalPrice");
totalPrice.classList.add("col-2");
totalPrice.classList.add("border-top");
totalPrice.classList.add("border-bottom");
totalPrice.classList.add("border-dark");
totalPrice.classList.add("text-info");
totalPrice.style.fontWeight = 'bold';
totalPrice.innerText = "Prix total";
productDescription.appendChild(totalPrice);

// Création du Tbody
let tbody = document.createElement("tbody");
productList.append(tbody);

// Identification du Panier d'articles depuis le Local Storage
let listOfArticles = localStorage.getItem("basket");
let listOfArticlesJSON = JSON.parse(listOfArticles);

// Implémentation d'un tableau dans le Local Storage pour stocker les prix
let priceTable= [];
let totalPriceTable = JSON.stringify(priceTable);
localStorage.setItem("prices", totalPriceTable);

// Implémentation d'un tableau dans le Local Storage pour stocker les Id de produits
let productIdArray = [];
localStorage.setItem("productsId", JSON.stringify(productIdArray));

// Fonction permettant de calculer automatiquement la somme des prix du tableau
function calculateTotalOrder(listToCalculate) {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalOrder = listToCalculate.reduce(reducer);
    totalOrderPriceText.innerText = "Montant total de votre commande : " + totalOrder + " €";
}

// Fonction permettant de supprimer un article (page et Local Storage)
function deleteArticle(article) {
    let index = listOfArticlesJSON.indexOf(article);
    listOfArticlesJSON.splice(index, 1);
    localStorage.setItem("basket", JSON.stringify(listOfArticlesJSON));
    alert("Vous venez de supprimer l'ours " + article.articleName + " (coloris " + article.articleColor + ") du panier");
    location.reload();
}

// Fonction permettant de réduire la quantité d'un article
function reduceQuantity(product) {
    product.articleQuantity -= 1;
    priceTable.push(-product.articlePrice/100);
    localStorage.setItem("prices", JSON.stringify(priceTable));
    localStorage.setItem("basket", JSON.stringify(listOfArticlesJSON));
}

// Fonction permettant d'incrémenter la quantité d'un article
function addQuantity(product) {
    product.articleQuantity += 1;
    priceTable.push(product.articlePrice/100);
    localStorage.setItem("prices", JSON.stringify(priceTable));
    localStorage.setItem("basket", JSON.stringify(listOfArticlesJSON));
}

// Message si panier vide
if (listOfArticles === '{}' || listOfArticles === '[]' || listOfArticles === null) {
    message.innerText = "Votre panier est vide";
// Construction du Tableau pour chaque au panier
} else {
    // Pour chaque article stocké dans le Local Storage
    listOfArticlesJSON.forEach(article => {

        // Stockage de l'Id des produits dans le Local Storage pour future requête POST
        productIdArray.push(article.articleId);
        localStorage.setItem("productsId", JSON.stringify(productIdArray));

        // Création de la ligne article dans un TR puis insertion dans Tbody
        let ligneArticle = document.createElement("tr");
        document.createElement("ligneArticle");
        tbody.append(ligneArticle);

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
        colorColumn.classList.add("px-0");
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

        // Création de la colonne Quantity dans un TD
        let quantityColumn = document.createElement("td");
        document.createElement("quantityColumn");
        // Insertion du bouton - pour réduire la quantité
        let lessQuantityButton = document.createElement("button");
        document.createElement("lessQuantityButton");
        lessQuantityButton.innerText = "-";
        lessQuantityButton.style.width = "24px";
        lessQuantityButton.style.height = "24px";
        lessQuantityButton.classList.add("p-0");
        lessQuantityButton.classList.add("mr-2");
        lessQuantityButton.classList.add("btn");
        lessQuantityButton.classList.add("btn-info");
        lessQuantityButton.classList.add("rounded");
        lessQuantityButton.classList.add("btn-sm");
        quantityColumn.append(lessQuantityButton);
        let quantity = document.createElement("span");
        quantity.innerText = article.articleQuantity;
        quantity.classList.add("testQuantity");
        quantityColumn.append(quantity);
        quantityColumn.classList.add("col-sm-3");
        quantityColumn.classList.add("px-1");
        quantityColumn.classList.add("border-top");
        quantityColumn.classList.add("border-bottom");
        quantityColumn.classList.add("border-dark");
        quantityColumn.classList.add("large-for-mobile");
        ligneArticle.append(quantityColumn);

        // Insertion du bouton + pour augmenter la quantité
        let addQuantityButton = document.createElement("button");
        document.createElement("addQuantityButton");
        addQuantityButton.innerText = "+";
        addQuantityButton.style.width = "24px";
        addQuantityButton.style.height = "24px";
        addQuantityButton.classList.add("p-0");
        addQuantityButton.classList.add("ml-2");
        addQuantityButton.classList.add("btn");
        addQuantityButton.classList.add("btn-info");
        addQuantityButton.classList.add("rounded");
        addQuantityButton.classList.add("btn-sm");
        quantityColumn.append(addQuantityButton);

        // // Insertion du prix total (quantité X prix de l'article) dans un TD
        let totalPriceColumn = document.createElement("td");
        let totalPriceColumnAmount = article.articleQuantity * article.articlePrice/100;
        document.createElement("totalPriceColumn");
        totalPriceColumn.classList.add("total-price");
        totalPriceColumn.classList.add("col-2");
        totalPriceColumn.classList.add("border-top");
        totalPriceColumn.classList.add("border-bottom");
        totalPriceColumn.classList.add("border-dark");
        totalPriceColumn.classList.add("px-0");
        let totalArticlePrice = document.createElement("span");
        totalArticlePrice.classList.add("total-article-price");
        totalArticlePrice.innerText = totalPriceColumnAmount + " €";
        totalPriceColumn.append(totalArticlePrice);
        ligneArticle.append(totalPriceColumn);
        priceTable.push(totalPriceColumnAmount);
        localStorage.setItem("prices", JSON.stringify(priceTable));

        // Création et insertion du bouton supprimer pour chaque article
        let deleteButtonContainer = document.createElement("td");
        let deleteButton = document.createElement("button");
        document.createElement("deleteButtonContainer");
        document.createElement("deleteButton");
        deleteButtonContainer.classList.add("col-2");
        deleteButtonContainer.classList.add("not-for-mobile");
        deleteButtonContainer.classList.add("border");
        deleteButtonContainer.classList.add("border-start-1");
        deleteButtonContainer.classList.add("border-dark");
        deleteButton.classList.add("rounded-pill");
        deleteButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`
        // deleteButton.innerText = "Supprimer";
        deleteButton.classList.add("btn");
        deleteButton.classList.add("btn-info");
        deleteButton.classList.add("btn-sm");
        deleteButtonContainer.append(deleteButton);
        ligneArticle.appendChild(deleteButtonContainer);

        // Fonctionnalité pour réduire la quantité au clic sur Bouton -
        lessQuantityButton.addEventListener("click", function() {
            reduceQuantity(article);
            // Si la quantité passe à 0, l'article est supprimé
            if ((article.articleQuantity === 0)) {
                deleteArticle(article);
            }
            totalPriceColumnAmount = article.articleQuantity * article.articlePrice/100;
            totalArticlePrice.innerText = totalPriceColumnAmount + " €";
            quantity.innerText = article.articleQuantity;
            calculateTotalOrder(priceTable);
        })

        // Fonctionnalité pour augmenter la quantité au clic sur Bouton +
        addQuantityButton.addEventListener("click", function() {
            addQuantity(article);
            totalPriceColumnAmount = article.articleQuantity * article.articlePrice/100;
            totalArticlePrice.innerText = totalPriceColumnAmount + " €";
            quantity.innerText = article.articleQuantity;
            calculateTotalOrder(priceTable);
        })

        // Fonctionnalité pour supprimer l'objet au clic sur Bouton "supprimer"
        deleteButton.addEventListener("click", function() {
            deleteArticle(article);
        })
    })
}

// Création d'une ligne pour le total de la commande
let totalOrderPriceText = document.createElement("p");
document.createElement("totalOrderPrice");
totalOrderPriceText.classList.add("col-md-12");
totalOrderPriceText.style.fontWeight = 'bold';
totalOrderPriceText.classList.add("text-info");
basket.append(totalOrderPriceText);

// Calcul automatique du prix total
calculateTotalOrder(priceTable);

// Création des données de contact
class contact {
    constructor(firstName, lastName, address, city, email) {
        this.firstName = firstName;
        this.lastName = lastName;
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
    <input type="text" id="firstname" placeholder="Vincent" class="form-control" required autofocus title="Veuillez entrer votre prénom"/>
    <br />

    <label for="lastname">
        Quel est votre nom ?
    </label>
    <input type="text" id="lastname" placeholder="DUPONT" class="form-control" required title="Veuillez entrer votre nom"/>
    <br />

    <label for="address">
        Quelle est votre adresse ?
    </label>
    <input type="text" id="address" placeholder="Central Park" class="form-control" required title="Veuillez entrer votre adresse"/>
    <br />

    <label for="city">
        Dans quelle ville habitez-vous ?
    </label>
    <input type="text" id="city" placeholder="New York" class="form-control" required title="Veuillez entrer votre ville"/>
    <br />

    <label for="email">
        Quelle est votre adresse e-mail ?
    </label>
    <input type="email" name="mail" id="email" placeholder="abcdef@gmail.com" class="form-control" required title="Veuillez entrer votre adresse e-mail"/>
    <br />
    <button type="submit" id="btn-order";">Valider la commande</button>

`
form.append(fieldSet);

// PERSONNALISATION DU BOUTON "Valider la commande"     
let button = document.getElementById("btn-order"); 
button.classList.add("btn");
button.classList.add("btn-info");
button.classList.add("mx-auto");
button.classList.add("my-1");

// Ecoute de tous les champs de formulaire à chaque modifications PUIS envoi au LocalStorage
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let address = document.getElementById("address");
let city = document.getElementById("city");
let email = document.getElementById("email");
 
firstName.addEventListener("change",function() {
    newContact.firstName = firstName.value;
})
lastName.addEventListener("change",function() {
    newContact.lastName = lastName.value;
})
address.addEventListener("change",function() {
    newContact.address = address.value;
})
city.addEventListener("change",function() {
    newContact.city = city.value;
})   
email.addEventListener("change",function() {
    newContact.email = email.value;
})
let orderButton = document.getElementById("btn-order");
orderButton.addEventListener("click", function() {
    localStorage.setItem("contact", JSON.stringify(newContact));
})