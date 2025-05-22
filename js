criaCartao(
    '1',
    'As principais diferenças da vida no campo e na cidade?',
    'A vida no campo é caracterizada pela proximidade da natureza. Já a cidade oferece maior variedade de serviços, infraestrutura desenvolvida e muito mais.'
)

criaCartao(
    '2',
    'Os benefícios de morar no campo:',
    'Melhor qualidade de vida, alimentação mais saldável, maior espaço para atividades físicas.'
)

criaCartao(
    '3',
    'Os benefícios de morar na cidade:',
    'Acesso ao serviço e comércio, variedade de opções de entretenimento e lazer, oportunidades de emprego, desenvolvimento profissional.'
)

criaCartao(
    '4',
    'Como a técnologia pode ajudar tanto no campo quanto na cidade?',
    'No campo a técnologia aprimora a produção agrícola, emquanto na cidade, ela impulsiona a eficiência e a conectividade.'
)

criaCartao(
    '5',
    'Quais atividades econômicas predominam no campo e na cidade?',
    ' No campo, as atividades mais comuns são agricultura, pecuária, silvicultura e extrativismo. Na cidade, predominam o comércio, as indústrias e os serviços.'
)

criaCartao(
    '6',
    'Quais os motivios que levam as pessoas migrarem do campo para a cidade?',
    'Principalmente em busca de melhores oportunidades de trabalho, educação saúde e lazer.'
)

function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}
