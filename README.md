# Test technique - Application e-commerce

Veuillez réaliser les tâches suivantes en utilisant le framework NestJS avec SQLite comme base de données :

1. Corrigez vous les erreurs de compilation
2. Si vous essayez d’accéder à la route /products, vous aurez une erreur 404, corrigez ce problème.

3. Implémentez les opérations CRUD pour l'entité `Product` en utilisant une couche d'application distincte :
   ```typescript
      class Product {
         id: string
         name: string
         code: string
         quantity: number
         price: number
         createdAt: Date
      }
   ```
   - Récupérez un produit spécifique par son nom.
   - Récupérez la liste de tous les produits, triés par nom par ordre croissant.
   - Donnez la possibilité de récupérer la liste de produits sans doublons en vous basant sur le code du produit.
   - Empêchez l’enregistrement des produits en double pour les futurs POST /produits (en utilisant une fonctionnalité de TypeORM)?
   > ⚠️ **À tout moment, si vous avez besoin de données, exécutez simplement la commande suivante : `npm run migration:run`**

4. Créez l'entité `Order` avec les attributs suivants :
   - `id` (UUID auto-généré, clé primaire)
   - `customerName` (string, requis)
   - `totalAmount` (number, requis)
   - `products` (tableau d'IDs de `Product`, requis)
   - `createdAt` (timestamp, auto-généré)

5. Implémentez un service d'application pour le calcul du chiffre d'affaires total généré par l'ensemble des commandes.

6. Implémentez un service d'application pour récupérer les 5 produits les plus vendus avec les quantités de vente les plus élevées.

7. Écrivez des tests unitaires pour les opérations CRUD implémentées, ainsi que pour les services d'application de calcul du chiffre d'affaires et de récupération des meilleurs produits.

8. Structurez votre projet en suivant l'architecture hexagonal (onion architecture).

Si vous avez des questions ou avez besoin d'aide supplémentaire, n'hésitez pas à nous le faire savoir.

<br/>
<div align="center">Réalisé avec ❤️ par l'équipe API</div>