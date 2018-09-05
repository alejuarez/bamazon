# bamazon

### Node.js & MySQL

#### Customer

- Amazon-like storefront app that will take in orders from customers and deplete stock from the store's inventory.

- To input you need to run the following commands :
  npm install
  npm installer --save mysql

- There are 10+ records of products that you would like to buy. The app will ask you 2 questions:
  1 - Is for the Product's ID that you would like to buy
  2 - How many units of the product that you chose would like to buy

- Then the app will fulfill the request by checking the inventory. If there isn't enough units you have requested it will appear the following message "Not Enough Products". Otherwise it will update the database to reflect the remaining quantities along with the total cost of their purchase.

Here are some screen shots:

Initial Screen

Enter invalid Id

Not enough merchandise to buy

#### Manager

- The Manager has the ability to:
  view the inventory,
  view low inventory (when there are less than 5 products)
  add new units to the inventory
  add a new product

Here are some screen shots:

Initial screen

View Inventory

View Low Inventory

Add Inventory

Add New Product
