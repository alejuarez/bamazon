
CREATE DATABASE bamazon;
USE bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products
(
    item_id INTEGER(11)
    AUTO_INCREMENT NOT NULL,
	product_name VARCHAR
    (60) NOT NULL,
	department_name VARCHAR
    (20) NOT NULL,
	price DECIMAL
    (10,2) NOT NULL,
	stock_quantity INTEGER
    (11) NOT NULL,
	PRIMARY KEY
    (item_id)
);

    -- Insert data into the 'products' table --
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Samsonite Omni PC Hardside Spinner 28, Teal,  Size L", "Luggage", 131.80, 2),
        ("Samsonite Winfield 3 Spinner Exp, Black, Large", "Luggage", 189.99, 3),
        ("SharkNinja BL494 Ninja Kitchen with Auto-iQ Boost", "Kitchen", 219.99, 3),
        ("Pyrex 1-Cup Measuring Cup, Clear/Red Measurements", "Kitchen", 3.97, 11),
        ("Harry Potter The complete collection", "Books", 63.30, 29),
        ("12 Rules for Life: An Antidote to Chaos Hardcover", "Books", 10.29, 44),
        ("Bounty select-a-size paper towels, 12 giant rolls", "Personal Care", 14.88, 44),
        ("Infrared Digital Thermometer Backlight Display w/Fever Alarm", "Personal Care", 14.88, 4),
        ("Ping pong paddle Carry Case for free by Sport Game Pro", "Sports", 38.75, 8),
        ("Apple Watch Series 1 38mm Space Gray Aluminum Case", "Watches", 369.99, 3),
        ("Apple iPhone 7 Plus Factory Unlocked Smartphone 32GB Rose G", "Electronics", 749.95, 2);
