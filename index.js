const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
 let PassOne = document.getElementById("pass-one");
 let PassTwo = document.getElementById("pass-two");

function generatePass(array,taille){
    let randomPassword1="";
    let randomPassword2 ="";
     while(randomPassword1.length<10){
         let randomIndex1 = Math.floor(Math.random()*taille);
         let randomIndex2 = Math.floor(Math.random()*taille);
         randomPassword1 +=array[randomIndex1];
         randomPassword2 +=array[randomIndex2];
     }
     PassOne.textContent =  randomPassword1;
     PassTwo.textContent =  randomPassword2;  
}

function generate(){
    generatePass(characters,89);
}

function copy1(){
   
let copyPass1 = document.getElementById("pass-one");
   

// Copy the text inside the text field
  navigator.clipboard.writeText(copyPass1.textContent);

  // Alert the copied text
  alert("Copied the text: " + copyPass1.textContent);

 
}
function copy2(){
   

   
let copyPass2 = document.getElementById("pass-two");  
// Copy the text inside the text field
  navigator.clipboard.writeText(copyPass2.textContent);

  // Alert the copied text

  alert("Copied the text: " + copyPass2.textContent);
 
}


  let buttonCond = document.getElementById('btn-cond');

 
  buttonCond.addEventListener('click', ()=>{
   
      const filteredCharacters = characters.filter(function(char) {
  // Check if the character is not a symbol
  return !(/[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g).test(char);
});

generatePass(filteredCharacters,32);
   
   
   
  
  });
    
    



