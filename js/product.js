// Récupérer l'id du produit cliqué dans l'Index grâce à Search Params
let params = (new URL(document.location)).searchParams;
let id = params.get("id");
// Création d'une variable pointant vers la section de page "Product"
const productCard = document.getElementById('product-card');

// Création de la CLASSE PRODUIT
class product {
    constructor(articleId, articleImage, articleName, articleColor, articlePrice) {
        this.articleId = articleId;
        this.articleImage = articleImage;
        this.articleName = articleName;
        this.articleColor = articleColor;         
        this.articleQuantity = 1;                            
        this.articlePrice = articlePrice;                      
    }
}

//     Utilisation de l'API FETCH pour récupérer les données SUR L'ID en question
fetch(`http://localhost:3000/api/teddies/${id}`)
     //    TEST DU SERVEUR
    .then(function(res) {
        if (res.ok) {     
            console.log("Connexion au serveur réussie");
            // Si réponse serveur ok, transforme les données en JSON
            return res.json(); 
        }
        else {
            // Message en cas d'erreur Serveur
            console.log("Problème de connexion au serveur"); 
        }
    })
    // UTILISATION DES DONNEES DU SERVEUR
    // Promise pour les éléments JSON reçus du server
    .then(data => {                         
        console.log("Voici les données renvoyées par le serveur");
        // Montre les données converties => l'objet et ses attributs dans la console
        /* console.log(data); */
        // Création d'une variable article pour stocker le produit
        const article = document.createElement("article");
        // Création de l'élément article à l'intérieur de la section "product"
        document.createElement("article");
        // Ajoute de 2 classes bootstrap à l'article
        article.classList.add("card");     
        article.style.margin = "auto";
        // Création de l'objet en HTML : la carte et son contenu
        article.innerHTML =                 
        `
            <img class="card-img-top text-center" src='${data.imageUrl}' alt="Photo de l'ours en peluche ${data.name}" title="Ours en peluche ${data.name}"/>
            <h2 class="col-12 text-center" id="product-name">${data.name}</h2>
            <p class="col-12 text-center"><strong>Choisissez votre coloris</strong><br /></p>
            <select id="color-choice" name=select class="mx-auto colorchoice"></select>
            <p class="col-12 text-center">Prix : ${data.price / 100} €</p>
            <p class="col-9 mx-auto my-2 text-center"><strong>Description du produit</strong><br />${data.description}</p>
            <button type="submit" id="btn-basket" href="" data-id="${id}">Ajouter au panier</button>
        `
        // Insère l'article dans la variable Product
        productCard.append(article);
        // PERSONNALISATION DU BOUTON "Ajouter au Panier"     
        // Création d'une variable button pour designer le bouton
        const button = document.getElementById("btn-basket"); 
        button.classList.add("btn");
        button.classList.add("btn-info");
        button.classList.add("mx-auto");
        button.classList.add("my-2");
        
        // FONCTIONNALITÉ POUR PERSONNALISER LE PRODUIT (ici la couleur) 
        let colorChoice = document.getElementById("color-choice");
        let colors = data.colors;
        colors.forEach(color => {
            let option = document.createElement("option");
            option.text = color;
            option.value = color;
            colorChoice.append(option);
        });
        // AJOUT DE MARGES AUTOUR DU SELECTEUR DE COULEURS
        colorChoice.classList.add("mt-2");
        colorChoice.classList.add("mb-3");

        // Identification du panier
        let basket = localStorage.getItem("basket");
        let basketContent = JSON.parse(basket);

        // Fonction pour initialiser le panier
        function initBasket () {
            basketContent = [];
            alert("Panier initialisé")
        }

        // Stockage de la couleur à l'intérieur du produit pour chaque modification
        colorChoice.addEventListener("change", function() {
            console.log(colorChoice.value);
        })

        // Stockage de la couleur et du nom de produit (en page) dans une nouvelle variable
        let selectedColor = colorChoice.value;
        let productName = document.getElementById("product-name");

        // Création d'un nouveau produit
        let newProduct = new product;
        newProduct.articleId = data._id;
        newProduct.articleImage = data.imageUrl;
        newProduct.articleName = data.name;
        newProduct.articleColor = colorChoice.value;         
        newProduct.articleQuantity = 1;                           
        newProduct.articlePrice = data.price;

        let secondProduct = new product;
        secondProduct.articleId = data._id;
        secondProduct.articleImage = data.imageUrl;
        secondProduct.articleName = data.name;
        secondProduct.articleColor = colorChoice.value;         
        secondProduct.articleQuantity = 1;                           
        secondProduct.articlePrice = data.price;

        let thirdProduct = new product;
        thirdProduct.articleId = data._id;
        thirdProduct.articleImage = data.imageUrl;
        thirdProduct.articleName = data.name;
        thirdProduct.articleColor = colorChoice.value;         
        thirdProduct.articleQuantity = 1;                           
        thirdProduct.articlePrice = data.price;

        let forthProduct = new product;
        forthProduct.articleId = data._id;
        forthProduct.articleImage = data.imageUrl;
        forthProduct.articleName = data.name;
        forthProduct.articleColor = colorChoice.value;         
        forthProduct.articleQuantity = 1;                           
        forthProduct.articlePrice = data.price;


        // Fonction pour ajouter un produit au panier
        function addToBasket() { 
            newProduct.articleColor = colorChoice.value;
            basketContent.push(newProduct);
            localStorage.setItem("basket", JSON.stringify(basketContent));
            alert("Vous venez d'ajouter " + data.name + " (coloris " + colorChoice.value + ") au panier");
        }

        function addAnother(secondProduct) {
            secondProduct.articleColor = colorChoice.value;
            basketContent.push(secondProduct);
            localStorage.setItem("basket", JSON.stringify(basketContent));
            alert("Vous venez d'ajouter " + data.name + " (coloris " + colorChoice.value + ") au panier");
        }

        function addAnother(thirdProduct) {
            thirdProduct.articleColor = colorChoice.value;
            basketContent.push(thirdProduct);
            localStorage.setItem("basket", JSON.stringify(basketContent));
            alert("Vous venez d'ajouter " + data.name + " (coloris " + colorChoice.value + ") au panier");
        }

        function addAnother(forthProduct) {
            forthProduct.articleColor = colorChoice.value;
            basketContent.push(forthProduct);
            localStorage.setItem("basket", JSON.stringify(basketContent));
            alert("Vous venez d'ajouter " + data.name + " (coloris " + colorChoice.value + ") au panier");
        }
        
        function addNewRef() {
            basketContent.push(new product);
            localStorage.setItem("basket", JSON.stringify(basketContent));
            alert("Vous venez d'ajouter " + data.name + " (coloris " + colorChoice.value + ") au panier");
        }
        

        // STOCKAGE DU PRODUIT + COULEUR (en objet) dans l'array "BasketContent"
        button.addEventListener("click", function() {
            if (basketContent === null) {
                initBasket();
                addToBasket();
            // Si le produit personnalisé est déjà dans le "BasketContent" (nom + couleur) => On ajoute +1
            } else if ((newProduct.articleName === productName.textContent) && (newProduct.articleColor === colorChoice.value) && (basketContent.length =1)) {
                newProduct.articleQuantity += 1;
                localStorage.setItem("basket", JSON.stringify(basketContent));
                alert("Voici donc un LE PREMIER" + data.name + " (coloris " + colorChoice.value + ") de plus !!!");
            } else if ((secondProduct.articleName == productName.textContent) && (secondProduct.articleColor === colorChoice.value)) {
                secondProduct.articleQuantity += 1;
                localStorage.setItem("basket", JSON.stringify(basketContent));
                alert("Voici donc un LE DEUXIEME" + data.name + " (coloris " + colorChoice.value + ") de plus !!!");
            } else if ((newProduct.articleName === productName.textContent) && (newProduct.articleColor != colorChoice.value) && (basketContent.length <=1)) {
                alert("deuxième produit ajouté");
                addAnother(secondProduct);
            } else if ((thirdProduct.articleName === productName.textContent) && (thirdProduct.articleColor === colorChoice.value)) {
                thirdProduct.articleQuantity += 1;
                localStorage.setItem("basket", JSON.stringify(basketContent));
                alert("Voici donc un LE TROISIEME" + data.name + " (coloris " + colorChoice.value + ") de plus !!!");
            } else if ((productName.textContent === newProduct.articleName) && (colorChoice.value != newProduct.articleColor) && (productName.textContent === secondProduct.articleName) && (colorChoice.value != secondProduct.articleColor) && (basketContent.length <=2)) {
                alert("troisième produit ajouté");
                addAnother(thirdProduct);
            } else if ((forthProduct.articleName === productName.textContent) && (forthProduct.articleColor === colorChoice.value)) {
                forthProduct.articleQuantity += 1;
                localStorage.setItem("basket", JSON.stringify(basketContent));
                alert("Voici donc un LE QUATRIEME" + data.name + " (coloris " + colorChoice.value + ") de plus !!!");
            } else if ((productName.textContent === newProduct.articleName) && (colorChoice.value != newProduct.articleColor) && (productName.textContent === secondProduct.articleName) && (colorChoice.value != secondProduct.articleColor) && (productName.textContent === thirdProduct.articleName) && (colorChoice.value != thirdProduct.articleColor) && (basketContent.length <=3)) {
                alert("quatrième produit ajouté");
                addAnother(forthProduct);
            } else {    
                addNewRef();
            }
        })
    })