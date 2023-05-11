# nestjs-typescript-starter-b6ttrj

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/nestjs-typescript-starter-b6ttrj)


**Test technique - Application e-commerce**

Veuillez réaliser les tâches suivantes en utilisant le framework NestJS avec sqlite comme base de données: 

l'entité `Product` avec les attributs suivants :
   - `id` (auto-generated uuid, primary key)
   - `name` (string, required, unique)
   - `code` (string, required, unique)
   - `price` (number, required)
   - `quantity` (number, required)
   - `description` (string)
   - `createdAt` (timestamp, auto-generated)
1. Tapez le path `/products` dans la navigation à droite, comment vous resolvez l'erreur `404`.  

2. Implémentez les opérations CRUD pour l'entité `Product` en utilisant une couche d'application distincte :

   - Récupérez un produit spécifique par son nom 
   - Récupérez la liste de tous les produits, triés par nom par ordre croissant.
   - Récupérez la liste de tous les produits, sans les doublons en se basant sur le code de produit
   - Comment evitez vous l'enregistrement des duplications pour les future post (en utilisant une functionalité `TypeORM`) 
> ⚠️ **à tout moment si besoin des data faut juste que vous jouez la commande suivante: `npm run migration:run`**
<br>

2. Créez une entité `Order` avec les attributs suivants :

   - `id` (auto-generated uuid, primary key)
   - `customerName` (string, required)
   - `totalAmount` (number, required)
   - `products` (array of `Product` IDs, required)
   - `createdAt` (timestamp, auto-generated)

3. Implémentez un service d'application pour le calcul du chiffre d'affaires total généré par l'ensemble des commandes.

4. Implémentez un service d'application pour récupérer les 5 produits les plus vendus avec les quantités de vente les plus élevées.

5. Écrivez des tests unitaires pour les opérations CRUD implémentées, les services d'application de calcul du chiffre d'affaires et de récupération des meilleurs produits.

Si vous avez des questions ou avez besoin d'aide supplémentaire, n'hésitez pas à me le faire savoir.
