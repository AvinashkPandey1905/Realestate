import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Chart, registerables } from "chart.js"; // Importing Chart.js and its necessary modules

Chart.register(...registerables); // Registering Chart.js components

@Component({
  selector: "app-dashboard", // The custom selector for the component
  standalone: true, // Custom property (not recognized by Angular)
  imports: [CommonModule], // Importing the CommonModule
  templateUrl: "./dashboard.component.html", // Template URL for the component
  // styleUrl: './dashboard.component.css' // Incorrect property name, should be styleUrls for styles
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.RenderChart(); // OnInit lifecycle hook calls the RenderChart method
  }

  RenderChart(): void {
    const myChart = new Chart("chart", {
      // Creating a new chart with Chart.js
      type: "bar", // Type of chart (a bar chart in this case)
      data: {
        labels: ["Jan", "July", "Aug", "Sep", "Oct", "Nov", "Dec"], // Labels for x-axis
        datasets: [
          {
            label: "# of Votes", // Label for the dataset
            data: [1200, 1900, 1243, 500, 200, 1983, 1788], // Data values for the chart
            borderWidth: 1, // Border width for the bars
          },
        ],
      },
      options: {
        scales: {
          y: {
            suggestedMin: 0, // Minimum value for the y-axis
            suggestedMax: 2000, // Maximum value for the y-axis
          },
        },
      },
    });
  }
}
