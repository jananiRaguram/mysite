function secret(){
  let userInput = prompt("type your message here");
  let str = "";
  let sentance= userInput.split(" ");
  for(let i= 0 ; i<sentance.length; i++){
      let replaceVowels = sentance[i].replace(/a/g,"e").replace(/y/g,"a").replace(/i/g,"o").replace(/u/g,"y").replace(/A/g,"E").replace(/O/g,"U").replace(/U/g,"Y");
      if(replaceVowels!==sentance[i]){
        let otherVowels = replaceVowels.replace(/E/g,"I").replace(/O/g,"I").replace(/Y/g,"U");
        str += otherVowels + " ";
        document.getElementById("ciphertext").innerHTML= (str.trim());
       }else{
         str += replaceVowels.replace(/o/g,"u").replace(/e/g,"o")  + " ";
        document.getElementById("ciphertext").innerHTML= (str.trim());

    }
  }
}