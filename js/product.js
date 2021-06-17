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
        /* Montre les données converties => l'objet et ses attributs dans la console
        console.log(data); */
        // Création d'une variable article pour stocker le produit
        const article = document.createElement("article");
        // Création de l'élément article à l'intérieur de la section "product"
        document.createElement("article");
        // Ajout de 2 classes bootstrap à l'article
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
            <p class="col-12 text-center"><strong>Couleur selectionnée : </strong><span id="selected-color"><span></p>
            <button type="submit" id="btn-basket" href="" data-id="${id}">Ajouter au panier</button>
        `
        // Insère l'article dans la variable Product
        productCard.append(article);

        // PERSONNALISATION DU BOUTON "Ajouter au Panier"     
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

        // Stockage de la couleur dans un SPAN
        let selectedColor = document.getElementById("selected-color");
        selectedColor.innerText = colorChoice.value;

        // Stockage de la couleur à l'intérieur du produit pour chaque modification
        colorChoice.addEventListener("change", function() {
            selectedColor.innerText = colorChoice.value;
        })

        // Identification du panier
        let basket = localStorage.getItem("basket");
        let basketContent = JSON.parse(basket);
        
        // Fonction qui créé un ARRAY vide dans le Local Storage, pour stocker les produits
        function initBasket () {
            let listOfArticles = [];
            localStorage.setItem("basket", JSON.stringify(listOfArticles));
        }

        // Si le panier est vide, on l'initialise
        if (basketContent === null) {
            initBasket();
        }

        // Fonction pour ajouter un produit au panier
        function addToBasket() { 
            basketContent.push(newProduct);
            localStorage.setItem("basket", JSON.stringify(basketContent));
            alert("Vous venez d'ajouter " + data.name + " (coloris " + colorChoice.value + ") au panier");
        }

        // Ecouteur sur le bouton au clic
        button.addEventListener("click", function() {
            // Configuration des attributs d'un nouveau produit
            newProduct = {
                articleId : data._id,
                articleImage : data.imageUrl,
                articleName : data.name,
                articleColor : selectedColor.textContent,         
                articleQuantity : 1,                            
                articlePrice : data.price   
            }
            // Si le produit est déjà dans le panier => Message
            if (basketContent.find(product => product.articleId == data._id) 
                && (basketContent.find(product => product.articleColor == selectedColor.textContent))) {
                alert("Ce produit est déjà dans votre panier!!!");
            }
            // Sinon => on l'ajoute au panier
            else {
                addToBasket();
            }
        })
    })