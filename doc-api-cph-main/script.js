
const titleHeader = ()=>{
    let title = document.querySelector('header div.header-left h1')
    title.innerHTML = "CPH API - Documentação."
}

const printDoc = (e)=>{

    let date = new Date()
    let clock = window.document.getElementById("clock") 
    let content = "Impresso em: "+date.toLocaleDateString('pt-BR')
    content += " - " + date.toLocaleTimeString('pt-BR')
    clock.innerHTML = content
    titleHeader()
    window.print()    
}


