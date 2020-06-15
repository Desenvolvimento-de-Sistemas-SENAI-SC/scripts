

const URL = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='06-12-2020'&$top=100&$format=json";

// Chamada assíncrona - Sem esperar
fetch(URL)
    // Avisar e pegar resultado usando a função then
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(data){
        console.log(data.value[0].cotacaoCompra);
    });

console.log("ISSO AQUI ACONTECE PRIMEIRO");
alert("Teste");