//require("dotenv").config();

var config = require("./config.js");
var mysql = require("mysql");
var inquirer = require("inquirer");
//console.log(config);
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
  var sql = "SELECT * FROM products";
  connection.query(sql, function(err, res) {
    if (err) throw err;
    console.log("======================= BAMAZON =====================");
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
    askQuestion();
  });
}

function askQuestion() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message:
          "Please enter the ID of the Product you would like to purchase",
        validate: function(value) {
          if (value === "" || isNaN(value) || value < 0) return false;
          else return true;
        }
      },
      {
        type: "input",
        name: "qty",
        message: "How many units of the product you would like to buy?",
        validate: function(value) {
          if (value === "" || isNaN(value) || value < 0) return false;
          else return true;
        }
      }
    ])
    .then(function(answer) {
      var id = parseInt(answer.id);
      var qty = parseInt(answer.qty);
      var sql = "SELECT * FROM products WHERE ?";
      connection.query(sql, [{ item_id: id }], function(err, res) {
        if (err) throw err;

        if (res.length === 0) {
          console.log("INVALID Product ID, please enter a valid ID");
          askQuestion();
        } else {
          if (qty > parseInt(res[0].stock_quantity)) {
            console.log("-------------------------------------------");
            console.log("SORRY we don't have enough products!");
            console.log("-------------------------------------------");
          } else {
            var nqty = parseInt(res[0].stock_quantity) - qty;
            var totaltoPay = res[0].price * qty;
            var sql = "UPDATE products SET ? WHERE ?";

            connection.query(
              sql,
              [{ stock_quantity: nqty }, { item_id: res[0].item_id }],
              function(err, res) {
                if (err) throw err;
                console.log(
                  "-------------------------------------------------"
                );
                console.log(" The total amount to pay is $", totaltoPay);
                console.log("   Thank you for your purchase!");
                console.log(
                  "-------------------------------------------------"
                );
              }
            );
          }
          connection.end();
          //start();
        }
      });
    });
}
