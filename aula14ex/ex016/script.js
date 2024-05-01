function contar(){
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('pas')
    let res = document.getElementById('res')
    if(pas.value <= 0){
        window.alert('[ERRO] Verifique o valor do passo')
        
    }else{
        res.innerHTML= '<p>Contando...</p>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(i < f){
            
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}` 
            }
        }
       
        else{
            for( let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }
        res.innerHTML += `\u{1F3C1}`
}