var firebaseConfig = {
  apiKey: "AIzaSyBbv3wN9oq1abF4B4FCAP8nnO0Jfsrl10o",
  authDomain: "projectpcaccessories.firebaseapp.com",
  projectId: "projectpcaccessories",
  storageBucket: "projectpcaccessories.appspot.com",
  messagingSenderId: "46684307682",
  appId: "1:46684307682:web:ff406dc18e14873a2cdebb"
};

var firebase = firebase.initializeApp(firebaseConfig)

// console.log(firebase.database());

function home(){
window.location.assign("./index.html")
}
function about(){
    window.location.assign("./about.html")
   
}
function product(){
    window.location.assign("./products.html")
}
function contact(){
    window.location.assign("./contact.html")
}
// 
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    // '   <button type="button" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Your response has been recorded!', 'success')
  })
}


function send()
{
  try{
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var message = document.getElementById('message');
    
    var UserObj = {
      name:name.value,
      email:email.value,
      phone:phone.value,
      message:message.value,
    }
    
    var result = firebase.database().ref('/').child('/userData').push(UserObj);
    console.log(result);

    name.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";

  }
  catch{
    console.log(error)
  }
}