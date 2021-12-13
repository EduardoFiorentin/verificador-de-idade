function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')

    var fAno = document.getElementById('txtano')

    var Ano = Number(fAno.value)  //o valor vem em string (Number())

    if(Ano == 0 || Ano > ano){
        window.alert("ERRO! Verifique os dados e tente novamente!")
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Ano

        var img = document.createElement('img') //criar uma tag img
        img.setAttribute('id', 'foto')          //com o id 'foto'

        var genero = ''
        if (fsex[0].checked){ //[0] por que no fsex tem duas checkbox - 1° pra
            genero = 'Homem'  //homem, 2° pra mulher 
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src','imagens/cria_menino.png')
            }else if (idade < 25) {
                //jovem
                img.setAttribute('src','imagens/jovem_h.png')
            }else if (idade < 65) { 
                //adulto 
                img.setAttribute('src','imagens/homem.png')
            }else{ 
                //idoso
                img.setAttribute('src','imagens/velho.png')
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/cria_menina.png')
            }else if (idade < 25) {
                //jovem
                img.setAttribute('src','imagens/jovem_m.png')
            }else if (idade < 65) { 
                //adulto 
                img.setAttribute('src','imagens/mulher.png')
            }else{ 
                //idoso
                img.setAttribute('src','imagens/velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos <br>`
        res.appendChild(img)
    }
}