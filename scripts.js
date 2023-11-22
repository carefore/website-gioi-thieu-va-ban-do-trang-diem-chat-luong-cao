<?php
// Process form data and save to the database

// Retrieve form data
$productName = $_POST['productName'];
$price = $_POST['price'];
$description = $_POST['description'];

// Perform necessary validations, sanitation, and database connection

// For example, assuming you have a database connection established
// Insert data into the database
// Replace 'your_host', 'your_username', 'your_password', and 'your_db' with actual database credentials
$mysqli = new mysqli('your_host', 'your_username', 'your_password', 'your_db');

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// SQL query to insert product into the database
$sql = "INSERT INTO products (product_name, price, description) VALUES ('$productName', '$price', '$description')";

if ($mysqli->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}

$mysqli->close();
?>
$(document).ready(function() {
  // Handle form submission
  $('#makeupForm').submit(function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    var formData = $(this).serialize();

    // Send form data to server using AJAX
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: formData,
      success: function(response) {
        // Upon successful submission, update product list
        $('#productList').append('<div class="product">' + response + '</div>');
        // Clear form fields
        $('#makeupForm')[0].reset();
      }
    });
  });

  // Load initial product list on page load
  $.ajax({
    type: 'GET',
    url: 'get_products.php',
    success: function(response) {
      $('#productList').html(response);
    }
  });
});
