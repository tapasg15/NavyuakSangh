document.getElementById('payNowBtn').addEventListener('click', function() {
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    if (paymentMethod) {
        var selectedMethod = paymentMethod.value;
        // Redirect to the payment processing page based on selected method
        switch (selectedMethod) {
            case 'credit_card':
                window.location.href = 'credit_card_payment.html';
                break;
            case 'paypal':
                window.location.href = 'paypal_payment.html';
                break;
            case 'upi':
                window.location.href = 'upi_payment.html';
                break;
            default:
                // Handle other payment methods or provide a default action
                break;
        }
    } else {
        alert('Please select a payment method.');
    }
});
