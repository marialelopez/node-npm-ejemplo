//funcion de suma
function sumar (numero1, numero2){
    return numero1+numero2
    }
    
    //funcion de resta
    function restar (numero1, numero2){
        return numero1-numero2
    }
    
    //funcion de dividir
    function dividir (numero1, numero2){
        return numero1/numero2
    }
    
    //funcion de multiplicar
    function multiplicar (numero1, numero2){
        return numero1*numero2
    }
    //funcion de porcentaje
    function porcentaje (numero1, numero2){
        return numero1/numero2 * 100
    }
    //funcion de potencia
    function potencia (numero1, numero2){
        return numero1**numero2
    }
    //funcion de raiz
    function raiz (numero1, numero2){
        return numero1**(1/numero2)
    }
    
    //funcion de raiz cuadrada
    function raizCuadrada (numero1)
    {
        return numero1**(1/2)
    }

    module.exports = {sumar,restar,multiplicar,dividir,raiz,raizCuadrada,porcentaje,potencia}