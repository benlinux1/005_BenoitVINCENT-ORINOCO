// Récupérer l'id du produit cliqué dans l'Index grâce à Search Params
let params = (new URL(document.location)).searchParams;
let id = params.get("id");


/////////// Création d'une variable pointant vers la section de page "Product" \\\\\\\\\\\\\\\\\\\\\\\
const product = document.getElementById('product');


///////////////////////     METHODE FETCH pour récupérer les données       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
fetch(`http://localhost:3000/api/teddies/${id}`)


     ////////////////     TEST DU SERVEUR     \\\\\\\\\\\\\\\\\\\\\\\
    .then(function(res) {
        if (res.ok) {     
            console.log("Connexion au serveur réussie"); 
            return res.json(); // Si réponse serveur ok, transforme les données en json
        }
        else {
            console.log("Problème de connexion au serveur"); // Message en cas d'erreur Serveur
        }
    })


    ///////////////////////     UTILISATION DES DONNEES DU SERVEUR       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    .then(data => {                         // Promise pour les éléments reçus du server
        console.log("Voici les données renvoyées par le serveur");
        console.log(data);                  // Montre les données converties => l'objet et ses attributs dans la console
        const article = document.createElement("article"); // Création d'une variable article pour stocker le produit
        document.createElement("article");  // Création de l'élément article à l'intérieur de la section "product"
        article.classList.add("card");      // Ajoute la class card à l'article
        article.style.margin = "auto";
        article.innerHTML =                 // Création de l'objet en HTML : la carte et son contenu
        `
            <img class="card-img-top text-center" src='${data.imageUrl}' alt="Photo de l'ours en peluche ${data.name}" title="Ours en peluche ${data.name}"/>
            <h2 class="col-12 text-center">${data.name}</h2>
            <p class="col-12 text-center"><strong>Choisissez votre coloris</strong><br /></p>
            <select id="color-choice" name=select class="mx-auto"></select>
            <p class="col-12 text-center">Prix : ${data.price / 100} €</p>
            <button type="submit" id="btn-basket" href="">Ajouter au panier</button>
        `
        product.append(article); // Insère l'article dans la variable Product


        ////////////////////     PERSONNALISATION DU BOUTON      \\\\\\\\\\\\\\\\\\\

        const button = document.getElementById("btn-basket"); // Création d'une variable button pour designer le bouton
        button.classList.add("btn");
        button.classList.add("btn-info");
        button.classList.add("mx-auto");
        button.classList.add("my-2");


        ///////////////////////     FONCTIONNALITÉ POUR PERSONNALISER LE PRODUIT   (ici la couleur)      \\\\\\\\\\\\\\\\\\\\\\

        const colorChoice = document.getElementById("color-choice")
        const colors = data.colors;
        colors.forEach(element => {
            const option = document.createElement("option");
            colorChoice.append(option);
            option.append(element);

        ///////////////////////     AJOUT DE MARGES AUTOUR DU SELECTEUR DE COULEURS   (ici la couleur)      \\\\\\\\\\\\\\\\\\\\\\

            colorChoice.classList.add("mt-2");
            colorChoice.classList.add("mb-3");
        })
    })
