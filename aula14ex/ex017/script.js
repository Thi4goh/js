function gerar(){
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')
    if(num.value < 0){
        window.alert('[ERRO] Número inválido')
    }
    else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1;c <= 10; c += 1){
            let opt = document.createElement('option')
            opt.text += `${n} x ${c} = ${n*c}`
            tab.appendChild(opt)
            opt.value = `v${c}`
        }
    num.value = ''
    num.focus()
    }
}
