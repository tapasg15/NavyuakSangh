document.getElementById('upiDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Example: You can fetch UPI ID from the form
    var upiId = document.getElementById('upiId').value;

    // Example: Log the UPI ID for demonstration
    console.log('UPI ID:', upiId);

    // You can perform further actions like AJAX submission or processing here

    // For demonstration, redirect to a success page after submission
    window.location.href = 'payment_success.html';
});
