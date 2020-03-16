/*
We need to implement a method which checks for this interface.

Rules
The SantaClausable interface is implemented, if all of the following methods are defined on an object
*/

function isSantaClausable(obj) {
    
  var objProperties=Object.getOwnPropertyNames(obj);
  return (
      (objProperties.includes('sayHoHoHo'))&&(objProperties.includes('distributeGifts'))&&(objProperties.includes('goDownTheChimney'))
  )
 }