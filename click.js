// Function to update the timer
function updateTimingTimer() {
    const now = new Date();
    const targetDate = new Date('2024-04-14'); // April 14th, 2024

    // Check if the current date is before or on April 14th
    if (now <= targetDate) {
        document.getElementById('timingTimer').innerHTML = `Printing services are currently Open. Shop will remain open until April 14th.`;
        document.getElementById('timingTimer').style.color = 'green';
    } else {
        document.getElementById('timingTimer').innerHTML = `Printing services are currently closed.`;
        document.getElementById('timingTimer').style.color = 'red';
    }
}

// Update the timer every second
setInterval(updateTimingTimer, 1000);

// Initial call to update the timer immediately
updateTimingTimer();

                                         /*    Calculte money */
                                         // Function to calculate price based on the number of pages
function calculatePrice(type) {
    const singlePrice = 10; // Price per single page
    const doublePrice = 15; // Price per double page
  
    // Get the input field and price paragraph based on type
    const inputField = type === 'single' ? document.getElementById('singlePageInput') : document.getElementById('doublePageInput');
    const priceParagraph = type === 'single' ? document.getElementById('singlePagePrice') : document.getElementById('doublePagePrice');
  
    // Get the number of pages entered by the user
    const numberOfPages = inputField.value;
  
    // Calculate the total price based on the number of pages
    let totalPrice;
    if (type === 'single') {
      totalPrice = numberOfPages * singlePrice;
    } else {
      totalPrice = numberOfPages * doublePrice;
    }
  
    // Display the total price
    priceParagraph.textContent = `Total Price: Rs. ${totalPrice}`;
  }
  
                                        //Whatsapp

function decryptPhoneNumber(encryptedPhoneNumber) {
  var decryptedNumber = atob(encryptedPhoneNumber); 
  return decryptedNumber;
}


var pehlaPyar = decryptPhoneNumber("OTIzMTY5NjMzNTE0"); 


var dosraPyar = decryptPhoneNumber("MTI3NDUyNjM="); 
function openWhatsApp() {
 
  window.open("https://wa.me/" + pehlaPyar, "_blank");
}



function decryptNumber(encryptedNumber) {
  try {
   
    return atob(encryptedNumber);
  } catch (error) {
    
    return encryptedNumber;
  }
}




function redirectToFlagPageIfCorrectNumberPassed(encryptedNumber) {
 
  var expectedEncryptedNumber = "MTI3NDUyNjM=";
  var expectedEncryptedNumber = atob(expectedEncryptedNumber); 


  if (encryptedNumber === expectedEncryptedNumber) {
    // Redirect to flag.html with the encrypted number as query parameter
    window.location.href = "a.html?number=" + encryptedNumber;
  } else {
    console.log("Incorrect parameter or no number provided.");
  }
}


var urlParams = new URLSearchParams(window.location.search);


var encryptedNumber = urlParams.get("number");


if (encryptedNumber !== null) {
  redirectToFlagPageIfCorrectNumberPassed(encryptedNumber);
}
