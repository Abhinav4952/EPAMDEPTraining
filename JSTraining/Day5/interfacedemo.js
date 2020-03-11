/*
We need to implement a method which checks for this interface.

Rules
The SantaClausable interface is implemented, if all of the following methods are defined on an object
*/

function isSantaClausable(obj) {
 return (
   (typeof obj.sayHoHoHo==='function')
   &&(typeof obj.distributeGifts=== 'function')
   &&(typeof obj.goDownTheChimney==='function')
   );
}

