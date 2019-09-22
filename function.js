new Vue({
    el  : '#app',
    data: {
        peso    : '',
        estatura: ''
    },
    computed: {
        calcular: function() {
            let peso        = parseInt(this.peso)
            let estatura    = parseInt(this.estatura)
            
            estatura        = (estatura * estatura) / 10000
            
            let resultado   = peso / estatura
            return resultado.toFixed(1)
        }
    }
})