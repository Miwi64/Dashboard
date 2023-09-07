/**
 * React Component for custom pastel chart.
 * @param {object} data - An Object that contains the labels and values for the chart.
 * @returns {JSX.Element} - A JSX element representing the chart. 
 */
"use client";
import Chart from "chart.js/auto";
import { useEffect } from "react";

export default function PastelChart({ data }) {
  /**
   * Object desestructuring
   */
  const { labels, values } = data;
  useEffect(() => {
    let myChart = Chart.getChart("pastel");
      /**
        * Destroying a previuos chart if exists
      */
    if (myChart) myChart.destroy();
    /**
      * Locating the canvas
    */
    const ctx = document.getElementById("pastel");
    /**
      * Creating the chart
    */
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
