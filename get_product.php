<?php
// Retrieve products from the database and display as HTML
// Replace 'your_host', 'your_username', 'your_password', and 'your_db' with actual database credentials
$mysqli = new mysqli('your_host', 'your_username', 'your_password', 'your_db');

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Select all products from the database
$sql = "SELECT * FROM products";
$result = $mysqli->query($sql);

// Display products as HTML
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo '<div class="product">';
        echo '<h3>' . $row['product_name'] . '</h3>';
        echo '<p><strong>Price:</strong> $' . $row['price'] . '</p>';
        echo '<p><strong>Description:</strong> ' . $row['description'] . '</p>';
        echo '</div>';
    }
} else {
    echo 'No products available';
}

$mysqli->close();
?>
