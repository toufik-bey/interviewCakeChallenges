// encrypte a text with a 13 degree rotation for each letter 


// first solution 
function rot13(message){
    return (message + '')
      .replace(/[a-z]/gi, function(s) {
        return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
      });
  
  }

  // second solution 
  function rot13(message){
    return message.split('').map(l => {
      let charCode = l.charCodeAt(0);
      if(charCode >= 97 && charCode <= 122){
        charCode = (charCode - 97 + 13) % 26 + 97;
      }
      else if(charCode >= 65 && charCode <= 90){
        charCode = (charCode - 65 + 13) % 26 + 65;
      }
      return String.fromCharCode(charCode);
    }).join('');
  }