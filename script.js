document.addEventListener("DOMContentLoaded", function () {
    //DATA FOR CHART
    const ctx1 = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx1, {
        type: "bar", //BAR CHART
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "Evaluations Submitted", 
                    data: [120, 190, 300, 250, 220, 400, 350, 300, 250, 200, 150, 100],
                    backgroundColor: "rgba(54, 162, 235, 0.5)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true, // RESPONSIVENESS
            scales: {
                y: {
                    beginAtZero: true, // START Y-AXIS AT 0
                },
            },
        },
    });

    // Data FOR CHART2
    const ctx2 = document.getElementById("myChart2").getContext("2d");
    const myChart2 = new Chart(ctx2, {
        type: "doughnut", //DOUGHNUT CHART
        data: {
            labels: ["Excellent", "Good", "Average", "Needs Improvement"],
            datasets: [
                {
                    label: "Performance",
                    data: [50, 30, 15, 5],
                    backgroundColor: [
                        "rgba(75, 192, 192, 0.5)",
                        "rgba(255, 206, 86, 0.5)",
                        "rgba(255, 99, 132, 0.5)",
                        "rgba(153, 102, 255, 0.5)",
                    ],
                    borderColor: [
                        "rgba(75, 192, 192, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(255, 99, 132, 1)",
                        "rgba(153, 102, 255, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true, // RESPONSIVENESS
        },
    });

    // DATA CHART
    const ctx3 = document.getElementById("myChart3").getContext("2d");
    const myChart3 = new Chart(ctx3, {
        type: "line", // LINE CHART
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "Faculty Engagement Score",
                    data: [85, 88, 90, 87, 92, 95,],
                    backgroundColor: "rgba(255, 159, 64, 0.5)",
                    borderColor: "rgba(255, 159, 64, 1)",
                    borderWidth: 2,
                    fill: true, //FILL AREA UNDER LINE
                },
            ],
        },
        options: {
            responsive: true, // RESPONSIVENESS
            scales: {
                y: {
                    beginAtZero: false,
                    suggestedMin: 80,
                    suggestedMax: 100,
                },
            },
        },
    });
});
