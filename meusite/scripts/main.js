var myImage = document.querySelector('img');

myImage.onclick = function() {

    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/imagem.jpg') {
        myImage.setAttribute('src','images/imagem2.jpg');
      } 
    else {
        myImage.setAttribute('src','images/imagem.jpg');
      }
  }

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt(' entre com seu nome');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mario is cool, ' + myName;
    
    if (!localStorage,getItem('name')) {
        setUserName();
    }
    else {
        var storedName = localStorage.getItem('name');
        myHeading.innerHTML = 'Mario is cool ,' + storedName;
    }
    
}

myButton.onclick =  function() {
    setUserName();
}
