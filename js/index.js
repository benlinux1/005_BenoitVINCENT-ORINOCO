// Création d'une variable pointant vers la section
const section = document.getElementById('all-teddies');


fetch("http://localhost:3000/api/teddies") // Requête fetch vers API
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
        console.log(data); // Montre les données converties => Array(5) dans la console
        data.forEach(element => { // Utilisation des données de chaque élément de l'array
            const article = document.createElement("article"); // Création d'une variable article pour stocker chaque nounours
            document.createElement("article"); // Création d'un élément article à l'intérieur de la section all-teddies
            article.classList.add("col-md-6"); // Ajoute la class col-md-6 à chaque card pour affichage 2*2 en MD et +
            article.innerHTML = // Création d'un objet en HTML : la carte et son contenu
            `
                <div class="card" id="cliquable" title="Voir la description du produit" onclick="document.location.href = 'products.html?id=${element._id}';">
                    <img class="card-img-top text-center" src='${element.imageUrl}' alt="Photo de l'ours en peluche ${element.name}" title="Ours en peluche ${element.name}"/>
                    <h2 class="col-12 text-center">${element.name}</h2>
                    <p class="col-12 text-center"><strong>Coloris disponibles : </strong><br />${element.colors}<p>
                    <p class="col-12 text-center">Prix : ${element.price / 100} €</p>
                    <button type="submit" class="btn btn-info mx-auto my-2" href="">Voir le produit en détail</button>
                </div>
            `
            section.append(article); // Insère l'ensemble des articles dans la variable Section   
        })
    })
    .catch(function(err) {
        console.log("L'affichage des articles n'a pas fonctionné")
    })
