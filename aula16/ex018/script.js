let num = document.getElementById('num')
let list = document.getElementById('list')
let res = document.getElementById('res')
let arr = []
function adc(){
    
    if(isNum(num.value) && !InList(num.value, arr)){
        arr.push(Number(num.value))
        let opt = document.createElement('option')
        opt.text = `Valor ${num.value} adicionado.`
        list.appendChild(opt)
        
    }
    else{
        window.alert('[ERRO] Digite um valor válido!')
    }
    num.value = ''
    num.focus()
}

function InList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function finalizar(){
    if(arr.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = arr.length
        let maior = arr[0]
        let menor = arr[0]
        let soma = 0
        let media = 0
        for(let pos in arr){
            soma += arr[pos]
            if (arr[pos] > maior){
                maior = arr[pos]
            }if(arr[pos] < menor){
                menor = arr[pos]
            }
                
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} número(s) cadastrado(s).</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média do(s) valor(es) digitado(s) é ${media}</p>`
    }
    

   
}
