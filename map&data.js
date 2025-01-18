document.addEventListener("DOMContentLoaded", function () {
    const colors = {
      danger: '#ff4444', // Bright red
      warning: '#ffbb33', // Warm yellow
      severe: '#cc0000', // Deep red
      critical: '#990000', // Dark red 
      impact: '#00C851', // Bright green
      secondary: '#33b5e5', // Bright blue
    };
  
    const mortalityData = {
      labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      datasets: [
        { label: 'Heatwaves', data: [2300, 2500, 2800, 3200, 3600, 4100, 4600, 5200], backgroundColor: colors.danger },
        { label: 'Floods', data: [1800, 2000, 2400, 2700, 3100, 3500, 4000, 4500], backgroundColor: colors.secondary },
        { label: 'Diseases', data: [1200, 1400, 1600, 1900, 2200, 2600, 3000, 3500], backgroundColor: colors.impact },
      ],
    };
  
    const gdpImpactData = {
      labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      datasets: [
        { label: 'GDP Impact (%)', data: [-1.8, -2.1, -2.5, -2.8, -3.2, -3.6, -4.0, -4.3], borderColor: colors.danger, backgroundColor: 'rgba(255, 68, 68, 0.1)', fill: true, type: 'line' },
        { label: 'Cost (Billion USD)', data: [45, 52, 63, 78, 95, 115, 138, 165], borderColor: colors.secondary, backgroundColor: 'rgba(51, 181, 229, 0.1)', fill: true, type: 'line' },
      ],
    };
  
    const agricultureData = {
      labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      datasets: [
        { 
          label: 'Yield Index', 
          data: [95, 93, 90, 88, 85, 82, 80, 78], 
          backgroundColor: 'rgba(0, 200, 81, 0.6)', 
          borderColor: colors.impact,
          fill: true
        },
        { 
          label: 'Loss Percentage', 
          data: [5, 7, 10, 12, 15, 18, 20, 22], 
          backgroundColor: 'rgba(236, 33, 73 )', 
          borderColor: colors.danger,
          fill: true
        }
      ],
    };
    
    const agricultureCtx = document.getElementById('myChart').getContext('2d');
    new Chart(agricultureCtx, {
      type: 'line',
      data: agricultureData,
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }
        }
      }
    });

    const impactData = {
      labels: ['Agriculture', 'Water Resources', 'Infrastructure', 'Energy', 'Health', 'Biodiversity', 'Tourism'],
      datasets: [{
        label: 'Sectors Impacted by Climate Change',
        data: [25, 15, 20, 10, 10, 10, 10],
        backgroundColor: [
          'rgba(0, 200, 81, 0.8)',    // Green
          'rgba(51, 181, 229, 0.8)',  // Blue
          'rgba(255, 187, 51, 0.8)',  // Yellow
          'rgba(255, 68, 68, 0.8)',   // Red
          'rgba(156, 39, 176, 0.8)',  // Purple
          'rgba(255, 152, 0, 0.8)',   // Orange
          'rgba(3, 169, 244, 0.8)'    // Light blue
        ],
        borderColor: [
          colors.impact,
          colors.secondary,
          colors.warning,
          colors.danger,
          '#9c27b0',
          '#ff9800',
          '#03a9f4'
        ],
        borderWidth: 2
      }]
    };
    
    const pieCtx = document.getElementById('myPieChart');
    if (pieCtx) {
      new Chart(pieCtx.getContext('2d'), {
        type: 'pie',
        data: impactData,
        options: {
          responsive: true,
          aspectRatio: 2,
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                }
              }
            }
          }
        }
      });
    }
    
    const employmentData = {
      labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      datasets: [
        {
          label: 'Agricultural',
          data: [0.3, 0.4, 0.5, 0.7, 0.8, 1.0, 1.2, 1.4],
          backgroundColor: 'rgba(255, 68, 68, 0.5)', // Semi-transparent for radar
          borderColor: '#ff4444',
          borderWidth: 2,
        },
        {
          label: 'Industrial',
          data: [0.1, 0.2, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
          backgroundColor: 'rgba(51, 181, 229, 0.5)',
          borderColor: '#33b5e5',
          borderWidth: 2,
        },
        {
          label: 'Services',
          data: [0.1, 0.1, 0.2, 0.2, 0.3, 0.3, 0.3, 0.3],
          backgroundColor: 'rgba(0, 200, 81, 0.5)',
          borderColor: '#00C851',
          borderWidth: 2,
        },
      ],
    };
    
    // Create the Radar Chart
    window.onload = function () {
      const ctx = document.getElementById('employmentChart').getContext('2d');
      const employmentChart = new Chart(ctx, {
        type: 'radar', // Set chart type to radar
        data: employmentData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { color: '#ddd' }, // Angle line color
              grid: { color: '#ddd' }, // Grid color
              ticks: { showLabelBackdrop: false, color: '#555' }, // Tick customization
            },
          },
          plugins: {
            legend: {
              position: 'top', // Position of legend
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `${tooltipItem.dataset.label}: ${tooltipItem.raw} million jobs`;
                },
              },
            },
          },
        },
      });
    };
    

    const recoveryCtx = document.getElementById('recoveryChart');
    if (recoveryCtx) {
      new Chart(recoveryCtx.getContext('2d'), {
        type: 'line',
        data: {
          labels: ['2010', '2015', '2020', '2025', '2030'],
          datasets: [{
            label: 'Recovery Rate (%)',
            data: [20, 35, 50, 70, 85],
            backgroundColor: 'rgba(0, 200, 81, 0.2)',
            borderColor: colors.impact,
            borderWidth: 3,
            tension: 0.3,
            fill: true
          }]
        },
        options: {
          plugins: {
            legend: { display: true },
          },
          scales: {
            y: { 
              beginAtZero: true, 
              max: 100,
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              }
            }
          }
        }
      });
    }

    const sectoralImpactData = {
      labels: ['Agriculture', 'Infrastructure', 'Healthcare', 'Tourism', 'Energy', 'Others'],
      datasets: [
        {
          data: [35, 25, 15, 12, 8, 5],
          backgroundColor: [
            colors.impact,    // Green
            colors.secondary, // Blue
            colors.danger,    // Red
            colors.warning,   // Yellow
            '#9c27b0',       // Purple
            '#757575'        // Grey
          ],
        },
      ],
    };
  
    const mortalityCtx = document.getElementById('mortalityChart');
    const gdpImpactCtx = document.getElementById('gdpImpactChart');
    const agricultureChartCtx = document.getElementById('agricultureChart');
    const employmentCtx = document.getElementById('employmentChart');
    const sectoralImpactCtx = document.getElementById('sectoralImpactChart');

    if (mortalityCtx) new Chart(mortalityCtx, { type: 'bar', data: mortalityData });
    if (gdpImpactCtx) new Chart(gdpImpactCtx, { type: 'line', data: gdpImpactData });
    if (agricultureChartCtx) new Chart(agricultureChartCtx, { type: 'bar', data: agricultureData });
    if (employmentCtx) new Chart(employmentCtx, { type: 'bar', data: employmentData });
    if (sectoralImpactCtx) new Chart(sectoralImpactCtx, { type: 'pie', data: sectoralImpactData });
});