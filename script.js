document.getElementById('botao').addEventListener('click', function(e) {
    e.preventDefault(); 
    calcularIdade();
});
    
    
    function calcularIdade(){

    document.getElementById('error').textContent = '';
    document.getElementById('error2').textContent = '';
    document.getElementById('error3').textContent = '';

    const dia = parseInt(document.getElementById("dia").value);
    const mes = parseInt(document.getElementById("mes").value);
    const ano = parseInt(document.getElementById("ano").value);

    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear() ;
    const mesAtual = dataAtual.getMonth() + 1 ;
    const diaAtual = dataAtual.getDate();

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const inputAno = document.getElementById('ano');
    const inputMes = document.getElementById('mes');
    const inputDia = document.getElementById('dia');

    let resultado_dia = diaAtual - dia 
    let resultado_mes= mesAtual - mes 
    let resultado_ano = anoAtual - ano 

    let validar = true;

 /*Correcao de mes e dia */
   const anoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    if (mes === 2 && anoBissexto) {
        diasPorMes[1] = 29;    
    }

    if (resultado_dia < 0) {
        resultado_mes--; 
       
        const diasNoMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate();
        resultado_dia += diasNoMesAnterior;
    }
    
    if( resultado_mes < 0 ){
            resultado_ano--;
            resultado_mes += 12;   
    }
    
    /*Validação de dados*/
    if(ano > anoAtual || ano < 1900){
        document.getElementById('error3').textContent = 'Must be in the past';
        inputAno.style.borderColor = 'red';
        validar = false
    }else{
        inputAno.style.borderColor = '';
    }

    if(mes > 12 || mes < 0 ){
        document.getElementById('error2').textContent = 'Must be a valid month';
        inputMes.style.borderColor = 'red';
        validar = false
    }else{
        inputMes.style.borderColor = '';
    }

    if (dia < 1 || dia > diasPorMes[mes - 1] || dia > 31 ) {
        document.getElementById('error').textContent = 'Must be a valid day';
        inputDia.style.borderColor = 'red';
        validar = false;
    }else{
        inputDia.style.borderColor = '';
    }

    if(mes > mesAtual && ano == anoAtual){
        alert('Invalid date of birth')
        validar = false;

    }

    /*se as condicoes estiverem verdadeiras irá calcaular*/

   if(validar){
     
    document.getElementById("resultado_dia").textContent =  resultado_dia ;
    document.getElementById("resultado_mes").textContent =  resultado_mes ;
    document.getElementById("resultado_ano").textContent =  resultado_ano ;

    }
    
}

