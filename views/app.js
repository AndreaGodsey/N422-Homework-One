// Reference Variable to canvas
const canvasRef = document.getElementById("chart");


//Create the Chart Instance
let myChart = new Chart(canvasRef, {
  //Type
  type: "bar",
  // Data Configuration
  data: {
    //Labels for Data Points
    labels: ["Lemon", "Strawberry", "Chocolate","White Chocolate"],
    //datasets (you only need one)
    datasets: [
      {
        label: "Cupcakes Created",
        data: [5, 10, 6, 7],
        backgroundColor: ["#FFC0CB"],
      },
    ],
  },
});

//Variable to track Cupcakes that have been created
let cupcakesCreated = {};

//Function for getting Cupcakes that have been created
async function getCupcakesCreated() {
  const cupcakesCreatedRawData = await fetch(`/api/candysold`);
  const candySoldData = await cupcakesCreatedRawData.json();

  for(let i = 0; i < cupcakesCreatedData.cupcakesCreated.length; i++) {
  const cupcakeName = cupcakesCreatedData.cupcakesCreated[i];
  cupcakesCreated[cupcakeName] = cupcakesCreated[cupcakeName] || 0;
  cupcakesCreated[cupcakeName]++;
  }
  console.log(cupcakesCreated);

  myChart.data.labels = Object.keys(cupcakesCreated);
  myChart.data.datasets = [
    {
      label: "Cupcakes Created",
      data: Object.values(cupcakesCreated),

    },

  ];

  myChart.update();
}

getCupcakesCreated();


//Create an Object for Storing Chart Info
const allCharts = {
  bar: {
    name: "Bar",
    config: {
      type: "bar",
      // Data Configuration
      data: {
        //Labels for Data Points
        labels: ["Lemon", "Chocolate", "Strawberry","White Chocolate"],
        //datasets (you only need one)
        datasets: [
          {
            label: "Cupcakes Created",
            data: [4, 10, 8, 7],
            backgroundColor: ["#FFC0CB"],
          },
        ],
      },

      options: {
        scales: {
            y: {
                min: 0,
                max: 20,
            },
        },
      },
    },
  },
  pie: {
      name: "Pie",
      config: {
        type: "pie",
        // Data Configuration
        data: {
          //Labels for Data Points
          labels: ["Lemon", "Chocolate", "Strawberry", "White Chocolate"],
          //datasets (you only need one)
          datasets: [
            {
              label: "Cupcakes Created",
              data: [4, 10, 8, 6],
            },
          ],
        },
      },
    },
    line: {
        name: "Line",
        config: {
          type: "line",
          // Data Configuration
          data: {
            //Labels for Data Points
            labels: ["10/8", "10/9", "10/10"],
            //datasets (you only need one)
            datasets: [
              {
                label: "temp",
                data: [79, 81, 89],
                backgroundColor: ["#FFC0CB"],
                borderColor: ["#572649"]
              },
            ],
          },
          options:{
            scales: {
                y: {
                    min: 60,
                    max: 100,
                },
            },
          }
        },
      },

};

//console.log(Object.values(allCharts));

Object.values(allCharts).forEach(function (chart) {
  //Create a Button Element
  const newButton = document.createElement("button");
  newButton.innerHTML = `Add ${chart.name} Chart`;
  newButton.onclick = function () {
    console.log(chart.name);
    myChart.destroy();
    myChart = new Chart(canvasRef, chart.config);
  };
  //Add the button to the actual DOM
  document.querySelector("#chartButtons").appendChild(newButton);
});

function removeDatapoint() {
    myChart.data.labels.pop();
    myChart.update();
}

function addDatapoint() {
    const numValue = parseFloat(document.getElementById("num").value);
    const labelValue = document.getElementById("label").value;

    myChart.data.labels.push(labelValue);
    myChart.data.datasets[0].data.push(numValue);

    myChart.update();
}
