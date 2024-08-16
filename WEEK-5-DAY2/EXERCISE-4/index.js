document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let radius = document.getElementById('radius').value; 
    
    if (radius === '' || isNaN(radius)) { 
        alert('Please enter a valid number for the radius.');
        return;
    }

    let volume = (4/3) * Math.PI * Math.pow(radius, 3); 
    document.getElementById('volume').value = volume.toFixed(2); 
});
