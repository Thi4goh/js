function verificar(){
    var n = document.getElementById('txtn')
    var res = document.getElementById('res')
    var data = new Date()
    var atual = data.getFullYear()
    
    if(n.value < 0 || n.value > atual){
        window.alert('Digite uma idade válida')
    }
    else{
        var sex = document.getElementsByName('sex')
        var idade = atual - Number(n.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        if(sex[0].checked){
            gen = 'Homem'
            if(idade < 12 ){
                //criança
                img.setAttribute('src','bebe-m.jpg')
            }
            else if( idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            }
            else if( idade < 50){
                //adulto
                img.setAttribute('src','adulto-m.jpg')
            }
            else{
                //velho
                img.setAttribute('src','idoso-m.jpg')
            }
        }
        else{
            gen = 'Mulher'
            if( idade < 12){
                img.setAttribute('src','bebe-f.jpg')
            }
            else if( idade < 21){
                img.setAttribute('src','jovem-f.jpg')
            }
            else if(idade < 50){
                img.setAttribute('src','adulto-f.jpg')
            }
            else{
                img.setAttribute('src','idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ''
        res.innerHTML = `<p>Você é um ${gen} de ${idade} anos</p>` 
        res.appendChild(img) 
    }
    
}


