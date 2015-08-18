(function ( window ) {
  'use strict'

  // constructor is a most often used property
  var constructor = 'constructor'

  // JavaScript literals are capable of acting like objects with properties
  // The constructor property will return the function of which the literal is a prototype of
  // For the Function constructor, we simply get the constructor of constructor[constructor] which returns String, which is a function
  
  var Types = {
    Boolean : (false)[constructor],
    Number : 0[constructor],
    String : constructor[constructor],
    Array : [][constructor],
    Function : constructor[constructor][constructor],
    Object : ({})[constructor],
    RegExp : /0/[constructor]
  }

  window.Types = Types

})( window );
