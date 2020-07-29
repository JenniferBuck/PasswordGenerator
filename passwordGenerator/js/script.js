// alert('Aloha');

const charRange = document.getElementById('charRange');
const charNumber = document.getElementById('charNumber');
const my_btn_pwgen = document.getElementById("pw-gen");
const my_form = document.querySelector("form");
const my_pw_chars = document.querySelectorAll(".char-type");
const my_pw_container = document.querySelector(".pw-frame");
console.log(my_pw_container);

function syncCharacterAmount(e) {
	const value = e.target.value;
  charNumber.value = value;
  charRange.value = value;
}
charNumber.addEventListener('input', syncCharacterAmount);
charRange.addEventListener('input', syncCharacterAmount);

my_btn_pwgen.addEventListener('click', e => {
  //alert("button clicked");
	e.preventDefault;
  my_form.classList.remove("me-hide");
	my_btn_pwgen.classList.add("me-hide");
	my_pw_container.setAttribute('hidden', 'true');
  addPWGenCharsListener();
});

function generatePW( thisCharSet, thisLength) {
	console.log( 'generatePW from: ' + thisCharSet + ' | ' + thisLength);
	let i = 1;
	let x = 0; // Holds our random number.
	let myPW = '';

	//console.log(myCharSetLength);

	for (i = 1; i < thisLength; i++) {
		// Generate a random number from 1 to the total number of Characters in the charset.
		x = Math.floor( Math.random() * thisCharSet.length ) + 1;
	
		// Pull that character from thisCharSet and add it to the pw string.
		myPW += thisCharSet.substring( ( x-1 ), x );
		
	}
	console.log(myPW);	
	my_pw_container.innerText = myPW;
	my_pw_container.removeAttribute('hidden');
	my_form.classList.add("me-hide");
  my_btn_pwgen.classList.remove("me-hide");

} // end function generatePW()

function validate() {
  // console.log("function validate()");
	let i = 0;
	// Since these are radio buttons that retain their state 
	// we can empty the string and recreate it anew on each validation.
	let myPWLibrary = '';

	// Lowercase.
	if (document.getElementById("include-lower-y").checked) {
		myPWLibrary += 'abcdefghijklmnopqrstuvwxyz';
		i++;
	}
	if (document.getElementById("include-lower-n").checked) {
		i++;
	}
	// Uppercase.
	if (document.getElementById("include-upper-y").checked) {
		i++;
		myPWLibrary += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}
	if (document.getElementById("include-upper-n").checked) {
		i++;
	}
	// Numbers.
	if (document.getElementById("include-numbers-y").checked) {
		i++;
		myPWLibrary += '0123456789';
	}
	if (document.getElementById("include-numbers-n").checked) {
		i++;
	}
	// Special.
	if (document.getElementById("include-special-y").checked) {
		i++;
		myPWLibrary += '#@!%&()/';
	}
	if (document.getElementById("include-special-n").checked) {
		i++;
	}

	if ( i === 4 ) {
		if ( myPWLibrary.length > 0 ) {
			generatePW( myPWLibrary, charNumber.value ); 
		} else {
			alert("You must choose at least one of Character sets");
		}
	console.log( 'validation: ' + myPWLibrary);
	}
}	// end function validate()

function addPWGenCharsListener(){
    //loop through my_pwchars and add an event listener to each input
    document.getElementById("include-lower-y").addEventListener("click", validate);
    document.getElementById("include-lower-n").addEventListener("click", validate);
    document.getElementById("include-upper-y").addEventListener("click", validate);
    document.getElementById("include-upper-n").addEventListener("click", validate);
    document.getElementById("include-numbers-y").addEventListener("click", validate);
    document.getElementById("include-numbers-n").addEventListener("click", validate);
    document.getElementById("include-special-y").addEventListener("click", validate);
    document.getElementById("include-special-n").addEventListener("click", validate);
}
