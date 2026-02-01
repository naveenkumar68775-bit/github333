function loadReviews() {
  fetch("reviews.json")
    .then(response => response.json())
    .then(data => {

      document.getElementById("jsonPreview").textContent =
        JSON.stringify(data, null, 2);

      analyzeReviews(data);
    })
    .catch(error => {
      console.error("Error loading JSON", error);
    });
}


function analyzeReviews(data) {
  let outputHTML = "";
  let labels = [];
  let averages = [];

  for (let category in data) {
    const reviews = data[category];

    const ratings = reviews.map(r => r.rating);
    const average =
      ratings.reduce((sum, r) => sum + r, 0) / ratings.length;

    const positive =
      reviews.filter(r => r.rating >= 4);

    labels.push(category);
    averages.push(average.toFixed(2));

    outputHTML += `
      <h4>${category.toUpperCase()}</h4>
      Average Rating: <b>${average.toFixed(2)}</b><br>
      Positive Reviews: <b>${positive.length}</b>
      <hr>
    `;
  }

  document.getElementById("output").innerHTML = outputHTML;

  drawChart(labels, averages);
}


function drawChart(labels, values) {

  if (window.reviewChart) {
    window.reviewChart.destroy();
  }

  window.reviewChart = new Chart(
    document.getElementById("chart"),
    {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Average Rating",
          data: values,
          backgroundColor: "#4f81ff"
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 5
          }
        }
      }
    }
  );
}