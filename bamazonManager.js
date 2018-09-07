//require("dotenv").config();

var config = require("./config.js");
var mysql = require("mysql");
var inquirer = require("inquirer");
//var table = require("table");

// create the connection information for the sql database
var connection = mysql.createConnection(config);

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: [
          "View Products for Sale",
          "View Low Inventory",
          "Add Inventory",
          "Add New Product"
        ]
      }
    ])
    .then(function(user) {
      switch (user.options) {
        case "View Products for Sale":
          viewSale();
          break;

        case "View Low Inventory":
          viewLow();
          break;

        case "Add Inventory":
          addInventory();
          break;

        case "Add New Product":
          addNewProd();
          break;
      }
    });
}

function viewSale() {
  var sql = "SELECT * FROM products";
  connection.query(sql, function(err, res) {
    if (err) throw err;
    console.log("======================= Inventory =====================");
    var val = "";
    for (var i = 0; i < res.length; i++) {
      val = " ID: " + res[i].item_id;
      val += "  | Product: " + res[i].product_name;
      val += " | Dept: " + res[i].department_name;
      val += " | $" + res[i].price;
      val += " | Qty: " + res[i].stock_quantity;
      console.log(val);
      console.log("-------------------------------------------------------");
    }
  });
  connection.end();
}

function viewLow() {
  var sql = "SELECT * FROM products WHERE stock_quantity < 5";
  connection.query(sql, function(err, res) {
    if (err) throw err;
    console.log(
      "======================= Low Inventory (Products with Quantity < 5) ====================="
    );
    var val = "";
    for (var i = 0; i < res.length; i++) {
      val = " ID: " + res[i].item_id;
      val += "  | Product: " + res[i].product_name;
      val += " | Dept: " + res[i].department_name;
      val += " | Qty: " + res[i].stock_quantity;
      console.log(val);
      console.log("-------------------------------------------------------");
    }
  });
  connection.end();
}

function addInventory() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "Please enter the ID of the Product",
        validate: function(value) {
          if (value === "" || isNaN(value) || value < 0) return false;
          else return true;
        }
      },
      {
        type: "input",
        name: "qty",
        message: "Please enter the Quantity",
        validate: function(value) {
          if (value === "" || isNaN(value) || value < 0) return false;
          else return true;
        }
      }
    ])
    .then(function(answer) {
      var id = parseInt(answer.id);
      var qty = parseInt(answer.qty);
      var sql = "SELECT * FROM products WHERE item_id = ?";

      connection.query(sql, [id], function(err, res) {
        if (err) throw err;
        if (res.length === 0) {
          console.log("INVALID Product ID, please enter a valid ID");
          addInventory();
        } else {
          var newqty = qty + parseInt(res[0].stock_quantity);
          var prod = res[0].product_name;

          if (res.length === 0) {
            console.log("INVALID Product ID, please enter a valid ID");
            addInventory();
          } else {
            var sql = "UPDATE products SET ? WHERE ?";
            connection.query(
              sql,
              [{ stock_quantity: newqty }, { item_id: id }],
              function(err, res) {
                if (err) throw err;

                console.log("----------------------------------------------");
                console.log(
                  "  ID: ",
                  id,
                  " New Stock: ",
                  newqty,
                  " Product: ",
                  prod
                );
                console.log(" Success Product Updated ");
                console.log("----------------------------------------------");
                connection.end();
              }
            );
          }
        }
      });
    });
}

function addNewProd() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the Name of the Product",
        validate: function(value) {
          if (value === "") return false;
          else return true;
        }
      },
      {
        type: "input",
        name: "dept",
        message: "Please enter the Department",
        validate: function(value) {
          if (value === "") return false;
          else return true;
        }
      },
      {
        type: "input",
        name: "price",
        message: "Please enter the Price per unit",
        validate: function(value) {
          if (value === "" || isNaN(value) || value < 0) return false;
          else return true;
        }
      },
      {
        type: "input",
        name: "qty",
        message: "Please enter the Quantity",
        validate: function(value) {
          if (value === "" || isNaN(value) || value < 0) return false;
          else return true;
        }
      }
    ])
    .then(function(answer) {
      var sql = "INSERT INTO products SET ?";
      connection.query(
        sql,
        [
          {
            product_name: answer.name,
            department_name: answer.dept,
            price: answer.price,
            stock_quantity: answer.qty
          }
        ],
        function(err, res) {
          if (err) throw err;

          console.log("---------------------------------------------------");
          console.log("       Success! New Product Added  ID: ", res.insertId);
          console.log("---------------------------------------------------");
          connection.end();
        }
      );
    });
}
