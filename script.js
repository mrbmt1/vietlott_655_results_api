document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("vietlott_result_api.txt");
    const data = await response.json();
    const resultsDiv = document.getElementById("results");

    data.forEach(result => {
        const resultElement = document.createElement("div");
        resultElement.classList.add("result");

        const drawPeriod = document.createElement("p");
        drawPeriod.textContent = `Draw Period: ${result.draw_period}`;

        // Thêm các thuộc tính khác tương tự ở đây

        resultElement.appendChild(drawPeriod);

        resultsDiv.appendChild(resultElement);
    });
});
