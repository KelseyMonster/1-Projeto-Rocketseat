function togglemode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    //pegar a tag img
    const img = document.querySelector('#profile img')
   
    //substituir a imagem
    if(html.classList.contains('light')){
        
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src','./assets/avatar-light.png')
    img.setAttribute('alt','foto de mayk brito sorrindo, usando óculos de sol preto e jaqueta preta, sem barba e fundo roxo e azul')
    } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src','./assets/avatar.png')
    img.setAttribute('alt','foto de mayk brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo')
    }



    //if (html.classList.contains('light')) {
    //    html.classList.remove('light')
    //} else {
    //   html.classList.add('light')
    //}



}