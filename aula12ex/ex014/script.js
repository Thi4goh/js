var agora = new Date();
var hora = agora.getHours();
var min = agora.getMinutes();
var txt = document.getElementById('txt');
var foto = document.getElementById('foto');
var img = document.createElement('img');

txt.innerHTML  = `Agora são ${hora}:${min}`
if(hora >= 6 && hora < 12){
    //manhã
    img.setAttribute('src', 'manha.jpg');
    document.body.style.backgroundColor = 'lightseagreen'
}
else if(hora < 18){
    //tarde
    img.setAttribute('src', 'tarde.jpg');
    document.body.style.backgroundColor = 'peru'
}
else{
    //noite
    img.setAttribute('src', 'noite.jpg');
    document.body.style.backgroundColor = 'steelblue'
}
foto.appendChild(img);
