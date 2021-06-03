// Récupérer l'id du produit cliqué dans l'Index grâce à Search Params
let params = (new URL(document.location)).searchParams;
let id = params.get("id");

// Création d'une variable pointant vers la section de page "Product"
const product = document.getElementById('product');


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
        console.log(data);
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
            <h2 class="col-12 text-center">${data.name}</h2>
            <p class="col-12 text-center"><strong>Choisissez votre coloris</strong><br /></p>
            <select id="color-choice" name=select class="mx-auto"></select>
            <p class="col-12 text-center">Prix : ${data.price / 100} €</p>
            <p class="col-9 mx-auto my-2 text-center"><strong>Description du produit</strong><br />${data.description}</p>
            <button type="submit" id="btn-basket" href="" data-id="${id}">Ajouter au panier</button>
        `
        // Insère l'article dans la variable Product
        product.append(article);

        // PERSONNALISATION DU BOUTON "Ajouter au Panier"     
        // Création d'une variable button pour designer le bouton
        const button = document.getElementById("btn-basket"); 
        button.classList.add("btn");
        button.classList.add("btn-info");
        button.classList.add("mx-auto");
        button.classList.add("my-2");
        
        // FONCTIONNALITÉ POUR PERSONNALISER LE PRODUIT (ici la couleur) 
        const colorChoice = document.getElementById("color-choice")
        const colors = data.colors;
        colors.forEach(element => {
            const option = document.createElement("option");
            colorChoice.append(option);
            option.append(element);
        })

        // AJOUT DE MARGES AUTOUR DU SELECTEUR DE COULEURS
        colorChoice.classList.add("mt-2");
        colorChoice.classList.add("mb-3");

        // Création du format d'un objet
        class productInBasket {
            constructor(articleImage, articleName, articleColor, articlePrice) {
                this.articleImage = data.imageUrl;
                this.articleName = data.name;
                this.articleColor = `${colorChoice.value}`; 
                this.articlePrice = data.price;
            }
        }

        // CREATION DE LA FONCTION PERMETTANT D'AJOUTER LE PRODUIT AU PANIER
        function addToBasket(selectedColor) {
            let basketContent = JSON.parse(localStorage.getItem("basketContent"));
            if (basketContent === null) {
                basketContent = [];
            }
            let newProduct = new productInBasket;
            basketContent.push(newProduct);
            localStorage.setItem("basketContent", JSON.stringify(basketContent));
        }

        // STOCKAGE DU PRODUIT + COULEUR (en objet) dans l'array "Basket"
        button.addEventListener("click", function() {
            // Création d'une variable pour stocker la couleur choisie par l'utilisateur
            let selectedColor = (colorChoice.value);
            console.log(data.name, selectedColor);
            addToBasket(selectedColor);
            alert("Vous venez d'ajouter " + data.name + " en " + `${selectedColor}` + " au panier");
            if (localStorage.getItem("`${selectedColor}`")) {
                
            }
        })
    });