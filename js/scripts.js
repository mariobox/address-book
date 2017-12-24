'use strict'

// Classes

class Contact {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Address {
  constructor(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
  }
  fullAddress() {
    return `${this.street}, ${this.city}, ${this.state}`
  }
}

// Variables

var contact;
var address;

// Functions

function printContact() {
  clearContact();
  document.getElementById('show-contact').style.display = 'block';  
  // Display name:
  document.getElementById('show-contact').getElementsByTagName('H2')[0].innerHTML = contact.fullName();
  document.getElementById('show-contact').getElementsByTagName('SPAN')[0].innerHTML = contact.firstName;
  document.getElementById('show-contact').getElementsByTagName('SPAN')[1].innerHTML = contact.lastName;
  // Display addresses:
  for (let i = 0; i < contact.addresses.length; i++) {
    let address_bullets = document.createElement('LI');
    address_bullets.innerHTML =
      `${contact.addresses[i].street}, ${contact.addresses[i].city}, ${contact.addresses[i].state}`
    document.getElementById('addresses').appendChild(address_bullets);
  }
}

function resetFields() {
  // Clears input fields in original form
  document.getElementById('new-first-name').value = "";
  document.getElementById('new-last-name').value = "";
  for (let i = 0; i < 3; i++) {
    document.getElementById('new-addresses').getElementsByTagName('input')[i].value = "";
  }
}

function resetAddressForm() {
  // Removes the extra addresses fields from previous contact
  document.getElementById('new-addresses').innerHTML =
    `<div class="new-address">
              <div class="form-group">
                <label for="new-street">Street</label>
                <input type="text" class="form-control new-street">
              </div>
              <div class="form-group">
                <label for="new-city">City</label>
                <input type="text" class="form-control new-city">
              </div>
              <div class="form-group">
                <label for="new-state">State</label>
                <input type="text" class="form-control new-state">
              </div>
            </div>`;
}

function clearContact() {
  // Clears the contact displayed to the right of our page so a new contact can be displayed
  document.getElementById('show-contact').getElementsByTagName('H2')[0].innerHTML = "";
  document.getElementById('show-contact').getElementsByTagName('SPAN')[0].innerHTML = "";
  document.getElementById('show-contact').getElementsByTagName('SPAN')[1].innerHTML = "";
  document.getElementById('addresses').innerHTML = "";
}

// Program Logic

  // Add Address:
let add_address_button = document.getElementById('add-address');
add_address_button.addEventListener('click', () => {
  let new_address_fields = `<div class="form-group">
                  <label for="new-street">Street</label>
                  <input type="text" class="form-control new-street">
                </div>
                <div class="form-group">
                  <label for="new-city">City</label>
                  <input type="text" class="form-control new-city">
                </div>
                <div class="form-group">
                  <label for="new-state">State</label>
                  <input type="text" class="form-control new-state">
                </div>`;
  // add new address fields to web form:
  const add_address_link = document.createElement('div');
  add_address_link.className = 'new-address';
  add_address_link.innerHTML = new_address_fields;
  document.getElementById('new-addresses').appendChild(add_address_link);
});

  // Submit Form:
var contact_list = []; // contacts will be stored in this array
const go = document.getElementById('submit-data');
go.addEventListener('click', (e) => {
  e.preventDefault(); // prevents the page from refreshing itself on submission
  var inputFirstName = document.getElementById('new-first-name').value;
  let inputLastName = document.getElementById('new-last-name').value;
  contact = new Contact(
    inputFirstName,
    inputLastName
  );
  var all_addresses = document.getElementsByClassName('new-address').length;
  for (let j = 0; j < all_addresses; j++) {
    var inputStreet = document.getElementsByClassName('new-address')[j].getElementsByTagName('input')[0].value;
    var inputCity = document.getElementsByClassName('new-address')[j].getElementsByTagName('input')[1].value;
    var inputState = document.getElementsByClassName('new-address')[j].getElementsByTagName('input')[2].value;
    address = new Address(
      inputStreet,
      inputCity,
      inputState
    );
    contact.addresses.push(address);
  }
  contact_list.push(contact); 
  console.log(contact_list); // useful for debugging
  
  // create a link for each contact:
  let contact_link = document.createElement('LI');
  contact_link.className = 'contact';
  contact_link.innerHTML = contact.fullName();
  document.getElementById('contacts').appendChild(contact_link);

  // display contact info to the right of page when clicking link to contact
  document.getElementById('contacts').addEventListener('click', (e) => {
    clearContact();
    for (let m = 0; m < contact_list.length; m++) {
      if (e.target.innerHTML === contact_list[m].fullName()) {
        document.getElementById('show-contact').style.display = 'block';
        document.getElementById('show-contact').getElementsByTagName('H2')[0].innerHTML = contact_list[m].fullName();
        document.getElementById('show-contact').getElementsByTagName('SPAN')[0].innerHTML = contact_list[m].firstName;
        document.getElementById('show-contact').getElementsByTagName('SPAN')[1].innerHTML = contact_list[m].lastName;
        // iterate through all addresses for this contact and display un unordered list
        for (let i = 0; i < contact_list[m].addresses.length; i++) {
          let address_bullets = document.createElement('LI');
          address_bullets.innerHTML =
            `${contact_list[m].addresses[i].street}, ${contact_list[m].addresses[i].city}, ${contact_list[m].addresses[i].state}`
          document.getElementById('addresses').appendChild(address_bullets);
        }
      }
    }
  });
  resetAddressForm(); // remove extra address fields
  resetFields(); // clear values in all input fields
});