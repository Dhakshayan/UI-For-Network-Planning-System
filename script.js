const toggleThemeBtn = document.getElementById('toggleTheme');
    toggleThemeBtn.addEventListener('click', function() {
      document.body.classList.toggle('light-mode');
      updateGraphColors();
    });
    const ctx = document.getElementById('lineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2023-10-01', '2023-10-08', '2023-10-15', '2023-10-22'],
        datasets: [
          {
            label: 'Quantity',
            data: [
              Math.floor(Math.random() * 20) + 1,
              Math.floor(Math.random() * 20) + 1,
              Math.floor(Math.random() * 20) + 1,
              Math.floor(Math.random() * 20) + 1
            ],
            borderColor: 'rgba(0, 255, 0, 1)', // Neon green
            borderWidth: 2,
            fill: false
          },
          {
            label: 'SKUs Count',
            data: [
              Math.floor(Math.random() * 20) + 1,
              Math.floor(Math.random() * 20) + 1,
              Math.floor(Math.random() * 20) + 1,
              Math.floor(Math.random() * 20) + 1
            ],
            borderColor: 'rgba(255, 0, 255, 1)', // Neon pink
            borderWidth: 2,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Week Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Count'
            }
          }
        }
      }
    });
    function updateGraphColors() {
      lineChart.data.datasets[0].borderColor = document.body.classList.contains('light-mode') ? 'rgba(0, 128, 128, 1)' : 'rgba(0, 255, 0, 1)';
      lineChart.data.datasets[1].borderColor = document.body.classList.contains('light-mode') ? 'rgba(102, 51, 153, 1)' : 'rgba(255, 0, 255, 1)';
      lineChart.update();
    }
