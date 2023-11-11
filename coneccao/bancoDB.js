   
var firebaseConfig = {
  apiKey: "AIzaSyBm02OzGxD_NkLRe7LDitezeYOnqR-9g7I",
  authDomain: "plataforma-evangelica.firebaseapp.com",
  databaseURL: "https://plataforma-evangelica-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "plataforma-evangelica",
  storageBucket: "plataforma-evangelica.appspot.com",
  messagingSenderId: "516992557622",
  appId: "1:516992557622:web:0a8c314edc91c9265eee97",
  measurementId: "G-3DJ6T16GZE"
};
    
    
    
firebase.initializeApp(firebaseConfig);
      
          
      
// Função para verificar se o Firebase foi inicializado
function isFirebaseInitialized() {
  return firebase.apps.length > 0; // Retorna true se o Firebase estiver inicializado
}

// Exemplo de uso
if (isFirebaseInitialized()) {
  console.log('O Firebase está conectado!');
  visit()
} else {
  console.error('Erro ao conectar ao Firebase.');
}






 
    
    
    
    
    
    
    
     