var produto = document.getElementById('txt-produto')
var parcelas = document.getElementById('txt-parcelas')
var juros = document.getElementById('txt-juros')

function calcJuros() {
    if (produto.value == '' || parcelas.value == '' || juros.value == '') {
        window.alert('Por favor, preencha todos os campos.')
    } else if (produto.value < 0 || parcelas.value < 0 || juros.value < 0) {
        window.alert('Informação preenchida invalida, tente novamente.')
    } else {
        let resTotal = document.getElementById('res-total')
        let resAcres = document.getElementById('res-acrescido')
        let resInicial = document.getElementById('res-inicial')
        let tabela = document.getElementById('resultado')
        let valor_base = Number(produto.value)
        let qtd_parcelas = Number(parcelas.value)
        let valor_juros = Number(juros.value)
        let parcela_base = valor_base / qtd_parcelas
        let juros_convertido = valor_juros / 100
        let pagamento_total = 0
        for (var c = 0; c < qtd_parcelas; c++) {
            let total_juros = juros_convertido * valor_base + valor_base // 220 total com juros
            let parcela_juros = parcela_base + valor_base * juros_convertido // 60 total da parcela com juros
            let juros_crescente = total_juros // 220 + 0.1 * 200 = 242
            total = juros_crescente // total = 242
            valor_base = total
            pagamento_total = parcela_juros + pagamento_total
            tabela.style = 'display: block'
            resTotal.innerHTML = `R$${pagamento_total.toFixed(2)}`
            resAcres.innerHTML = `R$${(pagamento_total - Number(produto.value)).toFixed(2)}`
            resInicial.innerHTML = `R$${Number(produto.value).toFixed(2)}`
        }
    }
}

