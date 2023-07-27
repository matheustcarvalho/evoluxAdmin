// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");

function formatarParaReal(valor) {
  return (valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function getDespesaGrafico() {
  fetch('/despesa-grafico')
    .then(response => response.json())
    .then(data => {

      let pago = parseInt(data[0].pago);
      let aberto = parseInt(data[0].aberto);
      let cancelado = parseInt(data[0].cancelado);

      var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["Pagos", "Abertos", "Cancelados"],
          datasets: [{
            data: [pago, aberto, cancelado],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, data) {
                // Exibir os valores em reais nos tooltips
                let dataset = data.datasets[tooltipItem.datasetIndex];
                let valor = dataset.data[tooltipItem.index];
                return data.labels[tooltipItem.index] + ': ' + formatarParaReal(valor);
              }
            }
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    })
    .catch(error => {
      console.error('Ocorreu um erro ao obter os dados:', error);
    });
}

getDespesaGrafico();
