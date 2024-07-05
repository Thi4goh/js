var data = new Date()
var hrs = data.getHours()
var mnt = data.getMinutes()
var msg = document.getElementById('txt')
var foto = document.getElementById('foto')
var img = document.createElement('imagem')
if(hrs < 11 ){
    //manhã
    img.innerHTML='<img  src="noite.jpg" alt="">';
    document.body.style.backgroundColor = '#2c2b2b67'
}
else if(hrs < 18) {
    //tarde
    img.innerHTML='<img  src="noite.jpg" alt="">';
    document.body.style.backgroundColor = '#9b5f34'
}
else{
    //noite
    img.innerHTML='<img  src="noite.jpg" alt="">';
    document.body.style.backgroundColor = '#7e2335'
}

msg.innerHTML = `<p> Agora são ${hrs} horas e ${mnt} minutos </p>`