function lengthOfString(){
 let str= 'finding the length of this string';
 let number= str.length;
 document.getElementById('stringLength').innerHTML= "the button has a string length of " + number ;
}

function everyOtherLetter(){
  let msg = 'apple';
  let str= " ";
  for(let i= 0; i<msg.length; i++){
     if (i%2==0){
      str= str + msg[i].toUpperCase();
     }
      else {
        str= str + msg[i].toLowerCase();
      
      }
  }
   document.getElementById('stringUpper').innerHTML= str;
  }
 