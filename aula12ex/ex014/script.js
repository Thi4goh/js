var data = new Date()
var hrs = data.getHours()
var mnt = data.getMinutes()
var msg = document.getElementById('txt')
var foto = document.getElementById('foto')
var img = document.createElement('img')
if(hrs < 11 ){
    //manhã
    img.setAttribute('src','manha.jpg')
    document.body.style.backgroundColor = '#2c2b2b67'
}
else if(hrs < 18) {
    //tarde
    img.setAttribute('src','tarde.jpg')
    document.body.style.backgroundColor = '#9b5f34'
}
else{
    //noite
    img.setAttribute('src','noite.jpg')
    document.body.style.backgroundColor = '#7e2335'
}
foto.appendChild(img)
msg.innerHTML = `<p> Agora são ${hrs} horas e ${mnt} minutos </p>`