document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("vietlott_result_api.txt");
    const data = await response.json();
    
    const resultsDiv = document.getElementById("results");
    data.forEach(result => {
        const resultText = JSON.stringify(result, null, 2);
        resultsDiv.innerHTML += `<pre>${resultText}</pre>`;
    });
});
