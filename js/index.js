 
     
  
  //verifica 

function visit() {
firebase
.database().ref("pesquisa/visita").on("value", (sanpshot) => {
 
     
 if (sessionStorage.visit == undefined) { 
      sessionStorage.visit = (sanpshot.val()) //verifica quantidade de visita registradas
      current_visit();
 }



  
 });
 }
   
  
  
  
   
 function current_visit() { //registra visita atual
const number_visit =  Number(sessionStorage.visit) +1 ;
console.log(number_visit)
  
let objPesquisa = {
visita: number_visit,
 };
 firebase.database().ref("pesquisa/").update(objPesquisa);
  
 user_device()
  
 }
      
  


      
//dados do qual tamanha do dispositivo dos usuarios
function user_device() {
var altura = screen.height;
var largura = screen.width;
  
let objPesquisa = {
altura: altura,
largura: largura,
};

firebase.database().ref(`pesquisa/${sessionStorage.visit}`).update(objPesquisa);
  
}
  
  

 function send_form() {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
 var resposta = document.getElementById('resposta').value;
  
  
  let objPesquisa = {
         nome: nome,
         email: email,
         resposta: resposta,
   };
 firebase.database().ref(`pesquisa/${sessionStorage.visit}/${sessionStorage.visit}`).update(objPesquisa);
 window.open("sucesso.html");
  
  
  }
  
  
  
  
  
    
    
    
    
    