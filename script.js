function getFormvalue() {
    //Write your code here
 var form = document.getElementById('myForm');


  var firstName = form.elements['firstName'].value;
  var lastName = form.elements['lastName'].value;

  
  alert('First Name: ' + firstName + '\nLast Name: ' + lastName);
}
