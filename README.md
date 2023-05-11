# nestjs-typescript-starter-b6ttrj

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/nestjs-typescript-starter-b6ttrj)


**Test technique - Application e-commerce avec architecture hexagonale**

Veuillez réaliser les tâches suivantes en utilisant le framework NestJS avec MariaDB comme base de données, en respectant l'architecture hexagonale :

1. Mettez en place un nouveau projet NestJS avec MariaDB comme base de données.

2. Créez une entité `Product` avec les attributs suivants :

   - `id` (auto-generated uuid, primary key)
   - `name` (string, required, unique)
   - `code` (string, required, unique)
   - `price` (number, required)
   - `quantity` (number, required)
   - `description` (string)
   - `createdAt` (timestamp, auto-generated)

3. Implémentez les opérations CRUD (Create, Read, Update, Delete) pour l'entité `Product` en utilisant une couche d'application distincte :

   - Créez un nouveau produit.
   - Récupérez la liste de tous les produits, triés par nom par ordre croissant.
   - Récupérez un produit spécifique par son ID.
   - Mettez à jour un produit par son ID.
   - Supprimez un produit par son ID.

4. Créez une entité `Order` avec les attributs suivants :

   - `id` (auto-generated uuid, primary key)
   - `customerName` (string, required)
   - `totalAmount` (number, required)
   - `products` (array of `Product` IDs, required)
   - `createdAt` (timestamp, auto-generated)

5. Implémentez les opérations CRUD pour l'entité `Order` en utilisant une couche d'application distincte :

   - Créez une nouvelle commande avec la possibilité de sélectionner plusieurs produits et quantités.
   - Récupérez la liste de toutes les commandes, y compris les détails des produits associés.
   - Récupérez une commande spécifique par son ID, y compris les détails des produits associés.
   - Mettez à jour une commande par son ID, y compris la possibilité d'ajouter ou de supprimer des produits et des quantités.
   - Supprimez une commande par son ID.

6. Implémentez un service d'application pour le calcul du chiffre d'affaires total généré par l'ensemble des commandes.

7. Implémentez un service d'application pour récupérer les 5 produits les plus vendus avec les quantités de vente les plus élevées.

8. Écrivez des tests unitaires pour les opérations CRUD implémentées, les services d'application de calcul du chiffre d'affaires et de récupération des meilleurs produits.

9. Implémentez la pagination pour la liste des produits et des commandes, permettant au client de spécifier la taille de la page et de récupérer les résultats en conséquence.

Si vous avez des questions ou avez besoin d'aide supplémentaire, n'hésitez pas à me le faire savoir.
