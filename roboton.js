const ajuste=document.querySelectorAll("[data-controle]")
const estatisticas=document.querySelectorAll("[data-estatistica]")

const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

ajuste.forEach((nome)=>{
 nome.addEventListener("click",(valor)=>{
 mostraResutado(valor.target.dataset.controle,valor.target.parentNode)
 atualizaEstatisticas(valor.target.dataset.peca)
 })
})
function mostraResutado(resultado,telinha){

const mostra=telinha.querySelector("[data-contador]")

  if(resultado==="-"){
    mostra.value=parseInt(mostra.value)-1
  }else{
    mostra.value=parseInt(mostra.value)+1
  }
}
function atualizaEstatisticas(peca){
  estatisticas.forEach((elemento)=>{
   elemento.textContent=parseInt(elemento.textContent)+ pecas[peca][elemento.dataset.estatistica]
  })
}

