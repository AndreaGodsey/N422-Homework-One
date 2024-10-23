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
