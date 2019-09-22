$(document).ready(() => {
    
    function calcular() {
        let peso = parseInt($('#peso').val())
        let estatura = parseInt($('#estatura').val())
        estatura = (estatura * estatura) / 10000
        
        let resultado = peso / estatura
        return resultado.toFixed(1)
    }
    
    $('#calcular').click(() => {
        let resultado = calcular()
        $('#resultado').text(resultado)
    })
    
})