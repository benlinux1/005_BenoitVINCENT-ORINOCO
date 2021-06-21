// Création d'une variable pointant vers la section de page "all-teddies" 
let section = document.getElementById('all-teddies');

//     Utilisation de l'API avec FETCH pour récupérer les données
fetch("http://localhost:3000/api/teddies")
    // TEST DU SERVEUR    
    .then(function(res) {
        if (res.ok) {     
            // Si réponse serveur ok, transforme les données en json
            return res.json(); 
        }
        else {
            // Message en cas d'erreur Serveur
            console.log("Problème de connexion au serveur"); 
        }
    })
    // Promise pour les éléments reçus du server  
    .then(data => { 
        /* console.log("Voici les données renvoyées par le serveur");
        // Montre les données converties => Array(5) dans la console
        console.log(data); */

        // INSERTION DES DONNEES DE L'API DANS UNE BOUCLE POUR CHAQUE ELEMENT RECUS  
        data.forEach(product => {
            // Création d'une variable article pour stocker chaque produit
            let article = document.createElement("article");
            // Création d'un élément article à l'intérieur de la section all-teddies
            document.createElement("article");
            // Ajoute la class col-md-6 à chaque card pour affichage 2*2 en MD et +
            article.classList.add("col-md-6");
            // Création d'un objet en HTML : la carte et son contenu
            article.innerHTML = 
            `
                <div class="card" id="cliquable" title="Voir la description du produit" onclick="document.location.href = 'product.html?id=${product._id}';">
                    <img class="card-img-top text-center" src='${product.imageUrl}' alt="Photo de l'ours en peluche ${product.name}" title="Ours en peluche ${product.name}"/>
                    <h2 class="col-12 text-center">${product.name}</h2>
                    <p class="col-12 text-center"><strong>Coloris disponibles : </strong><br />${product.colors}<p>
                    <p class="col-12 text-center">Prix : ${product.price / 100} €</p>
                    <button type="submit" class="btn btn-info mx-auto my-2" href="">Voir le produit en détail</button>
                </div>
            `
            // Insère l'ensemble des articles dans la variable Section
            section.append(article);    
        })
    })
    //   MESSAGE D'ERREUR EN CAS DE NON-FONCTIONNEMENT DE L'INSERTION DES DONNÉES
    .catch(function(err) {
        console.log("Les données récupérées sur le serveur n'ont pas pu être insérées dans la section")
    })
