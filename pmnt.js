document.getElementById('cardDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Validate card details here if needed

    // Example: You can log the card details for demonstration
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvv = document.getElementById('cvv').value;

    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);

    // You can perform further actions like AJAX submission or processing here

    // For demonstration, redirect to a success page after submission
    window.location.href = 'payment_success.html';
});
