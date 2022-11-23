function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("ERRO")
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homen'
            if (idade >= 0 && idade < 15){
                //criança
                img.setAttribute('src', 'menino.png')
            }else if (idade < 25){
                //jovem
                img.setAttribute('src', 'adolecente-h.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homen.png')
            }else{
                //velho
                img.setAttribute('src', 'velho.png')
            }    
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 15){
                //criança
                img.setAttribute('src', 'menina.png')
            }else if (idade < 25){
                //jovem
                img.setAttribute('src', 'adolecente-m.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.png')
            }else{
                //velho
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}