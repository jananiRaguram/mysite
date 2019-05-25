function secret(){
  let userInput = prompt("type your message here");
  let str = "";
  let sentance= userInput.split(" ");
  for(let i= 0 ; i<sentance.length; i++){
      let replaceVowels = sentance[i].replace(/a/g,"e").replace(/i/g,"o").replace(/u/g,"y").replace(/I/g,"O").replace(/A/g,"E").replace(/U/g,"Y");
      if(replaceVowels==sentance[i]){
        let otherVowels = replaceVowels.replace(/e/g,"a").replace(/o/g,"i").replace(/y/g,"u").replace(/E/g,"A").replace(/O/g,"I").replace(/Y/g,"U");
        str += otherVowels + " ";
        document.getElementById("ciphertext").innerHTML= (str.trim());
       }else{
         str += replaceVowels + " ";
        document.getElementById("ciphertext").innerHTML= (str.trim());
       }
  }
}

function decrypt(){
  let userInput = prompt("type your message here");
  let str = "";
  let sentance= userInput.split(" ");
  for(let i= 0 ; i<sentance.length; i++){
      let otherVowels = sentance[i].replace(/e/g,"a").replace(/o/g,"i").replace(/y/g,"u").replace(/E/g,"A").replace(/O/g,"I").replace(/Y/g,"U");
      if(otherVowels==sentance[i]){
      let replaceVowels = otherVowels.replace(/a/g,"e").replace(/i/g,"o").replace(/u/g,"y").replace(/I/g,"O").replace(/A/g,"E").replace(/U/g,"Y");
        str += replaceVowels + " ";
        document.getElementById("message").innerHTML=(str.trim());
       }else{
         str += otherVowels + " ";
        document.getElementById("message").innerHTML= (str.trim());
       }
  }
}

    