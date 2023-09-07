"use client";
import Chart from "chart.js/auto";
import { useEffect } from "react";

export default function PastelChart({ data }) {
  const { labels, values } = data;
  useEffect(() => {
    let myChart = Chart.getChart("pastel");
    if (myChart) myChart.destroy();
    const ctx = document.getElementById("pastel");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Colores",
            data: values,
            backgroundColor: ["#EF5350", "#42A5F5", "#9CCC65", "#FFCA28"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        animation: {
          duration: 2000,
          delay: 500,
          easing: "easeInOutElastic",
        },
        plugins: {
          legend: {
            position: "right",
          },
        },
      },
    });
  }, [data]);
  return (
    <>
      <canvas id="pastel"></canvas>
    </>
  );
}
