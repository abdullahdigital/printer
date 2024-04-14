// Set the opening and closing times for printing services
const openingTimeWeekdays = 17; // 5:00 PM
const closingTimeWeekdays = 21.5; // 9:30 PM
const openingTimeWeekends = 6; // 6:00 AM

// Function to update the timer
function updateTimingTimer() {
    const now = new Date();
    const currentDay = now.getDay();
    let isOpen = false;

    // Check if it's a weekday or weekend
    if (currentDay === 0 || currentDay === 6) {
        // Weekend
        if (now.getHours() >= openingTimeWeekends && now.getHours() < closingTimeWeekdays) {
            isOpen = true;
        }
    } else {
        // Weekday
        if (now.getHours() >= openingTimeWeekdays && now.getHours() < closingTimeWeekdays) {
            isOpen = true;
        }
    }

    // Display message based on shop status
    if (isOpen) {
        const remainingTime = closingTimeWeekdays - now.getHours();
        const minutes = 60 - now.getMinutes();
        const seconds = 60 - now.getSeconds();

        document.getElementById('timingTimer').innerHTML = `Printing services are currently Open. Closing in ${remainingTime} hours, ${minutes} minutes, ${seconds} seconds.`;
        document.getElementById('timingTimer').style.color = 'green';
    } else {
        const nextOpeningTime = currentDay === 0 || currentDay === 6 ? openingTimeWeekends : openingTimeWeekdays;
        const timeUntilNextOpening = nextOpeningTime - now.getHours();
        const minutes = 60 - now.getMinutes();
        const seconds = 60 - now.getSeconds();

        document.getElementById('timingTimer').innerHTML = `Printing services are currently closed. Reopening in ${timeUntilNextOpening} hours, ${minutes} minutes, ${seconds} seconds.`;
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
  const singlePriceEven = 15; // Price per single page for even number of pages
  const singlePriceOdd = 20; // Price per single page for odd number of pages
  const doublePrice = 20; // Price per double page

  // Get the input field and price paragraph based on type
  let inputField, priceParagraph;
  if (type === 'single') {
      inputField = document.getElementById('singlePageInput');
      priceParagraph = document.getElementById('singlePagePrice');
  } else if (type === 'double') {
      inputField = document.getElementById('doublePageInput');
      priceParagraph = document.getElementById('doublePagePrice');
  }

  // Get the number of pages entered by the user
  const numberOfPages = inputField.value;

  // Calculate the total price based on the number of pages
  let totalPrice;
  if (type === 'single') {
      if (numberOfPages % 2 === 0) {
          // Even number of pages
          totalPrice = numberOfPages * singlePriceEven;
      } else {
          // Odd number of pages
          totalPrice = numberOfPages * singlePriceOdd;
      }
  } else if (type === 'double') {
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
