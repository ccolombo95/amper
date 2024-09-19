document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    
    alert(`Gracias, ${name}, por tu donación de $${amount}. Se enviará un recibo a ${email}.`);
});