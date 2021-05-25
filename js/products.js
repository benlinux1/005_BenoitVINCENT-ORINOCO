// Récupérer l'id du produit cliqué dans l'Index grâce à Search Params
let params = (new URL(document.location)).searchParams;
let id = params.get("id");

// Création d'une variable pointant vers la section de page "Product"
const product = document.getElementById('product');

fetch(`http://localhost:3000/api/teddies/${id}`)
    .then(function(res) {
        if (res.ok) {     
            console.log("Connexion au serveur réussie"); 
            return res.json(); // Si réponse serveur ok, transforme les données en json
        }
        else {
            console.log("Problème de connexion au serveur"); // Message en cas d'erreur Serveur
        }
    })
    .then(data => { // Promise pour les éléments reçus du server
        console.log("Voici les données renvoyées par le serveur");
        console.log(data); // Montre les données converties => l'objet et ses attributs dans la console
        console.log(data.imageUrl);
        console.log(data.name);
        console.log(data.colors);
        console.log(data.price);
        const article = document.createElement("article"); // Création d'une variable article pour stocker le nounours
        document.createElement("article"); // Création de l'élément article à l'intérieur de la section product
        article.classList.add("card"); // Ajoute la class card à l'article
        article.style.margin = "auto";
        article.innerHTML = // Création de l'objet en HTML : la carte et son contenu
        `
            <img class="card-img-top text-center" src='${data.imageUrl}' alt="Photo de l'ours en peluche ${data.name}" title="Ours en peluche ${data.name}"/>
            <h2 class="col-12 text-center">${data.name}</h2>
            <p class="col-12 text-center"><strong>Coloris disponibles : </strong><br /> ${data.colors}<p>
            <p class="col-12 text-center">Prix : ${data.price / 100} €</p>
            <button type="submit" id="btn-basket" href="">Ajouter au panier</button>
        `
        product.append(article); // Insère l'article dans la variable Product
        const button = document.getElementById("btn-basket"); // Création d'une variable button pour designer le bouton
        button.classList.add("btn-info");
        button.classList.add("mx-auto");
        button.classList.add("my-2");
    })
