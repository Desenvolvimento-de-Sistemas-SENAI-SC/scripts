
const URL = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='06-12-2020'&$top=100&$format=json";


// Função obterCotacaoDolar
var obterCotacaoDolar = function()  {
    fetch(URL)
        .then(function(resposta) {
            return resposta.json()
        })
        .then(function(data){
            console.log(data.value[0].cotacaoCompra);
        });
}

// Dispara a função obterCotacaoDolar após 5s (5000ms)
setTimeout(obterCotacaoDolar, 5000);