/* TAGS DO HTML - SELECIONADOS POR CLASSES */

const dias = document.querySelector('.dias')
const horas = document.querySelector('.horas')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')

/* FUNÇÃO DATA ATUAL E DO NATAL */
function remaininDaysChristmas() {
    
    /* DATA AUTAL E DO NATAL */
    let dataToday = new Date();
    let anoToday = dataToday.getFullYear();
    let christmasDate = new Date(anoToday, 11, 25, 0, 0, 0);


    /*  DIFERENÇAS EM MILISSEGUNDOS */
    const diferencaMs = christmasDate.getTime() - dataToday.getTime();

    /* VALORES CONVERTIDOS */
    const msPorSegundo = 1000;
    const msPorMinuto = msPorSegundo * 60;
    const msPorHora = msPorMinuto * 60;
    const msPorDia = msPorHora * 24;

    const dias = Math.floor(diferencaMs / msPorDia);
    const horas = Math.floor((diferencaMs % msPorDia) / msPorHora);
    const minutos = Math.floor((diferencaMs % msPorHora) / msPorMinuto);
    const s = Math.floor((diferencaMs % msPorMinuto) / msPorSegundo);
    
    return {
        dias: dias,
        horas: horas,
        minutos: minutos,
        segundos: s
    };

};


/* RESULTADOS ADICIONADOS NO HTML */
function updateDisplay() {
    const remainingTime = remaininDaysChristmas()
    dias.textContent = remainingTime.dias + 'd';
    horas.textContent = remainingTime.horas + 'h';
    minutos.textContent = remainingTime.minutos + 'm';
    segundos.textContent = remainingTime.segundos + 's';
}

/*CHAMADA DA FUNÇÃO*/
updateDisplay();

/*ATUALIZAÇÃO TEMPO REAL*/
setInterval(updateDisplay, 1000);

