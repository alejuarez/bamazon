# bamazon

### Node.js & MySQL

## Customer

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
<img src="https://github.com/alejuarez/bamazon/blob/master/Initialcustomer.PNG">

Enter invalid Id
<img src="https://github.com/alejuarez/bamazon/blob/master/Enter%20an%20invalid%20ID%20in%20customer.PNG">

Not enough merchandise to buy
<img src="https://github.com/alejuarez/bamazon/blob/master/not%20enough%20to%20buy%20customer.PNG">

## Manager

- The Manager has the ability to:
  view the inventory,
  view low inventory (when there are less than 5 products)
  add new units to the inventory
  add a new product

Here are some screen shots:

Initial screen

<img src="https://github.com/alejuarez/bamazon/blob/master/initialManager.PNG">

View Inventory
<img src="https://github.com/alejuarez/bamazon/blob/master/view%20inventory.PNG">

View Low Inventory
<img src="https://github.com/alejuarez/bamazon/blob/master/view%20low%20inventory%20manager.PNG">

Add Inventory
<img src="https://github.com/alejuarez/bamazon/blob/master/add%20inventory%20manager.PNG">

Add New Product

<img src="https://github.com/alejuarez/bamazon/blob/master/add%20new%20product%20manager.PNG">
