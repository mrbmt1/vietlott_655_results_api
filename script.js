document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("vietlott_result_api.txt");
    const data = await response.json();
    
    const resultsDiv = document.getElementById("results");
    let resultsHTML = ""; // Khởi tạo chuỗi HTML rỗng
    
    data.forEach((result, index) => {
        const resultText = JSON.stringify(result, null, 2);
        resultsHTML += `<pre>${resultText}</pre>`;
        
        // Add comma and line break if not the last element
        if (index < data.length - 1) {
            resultsHTML += ",<br><br>";
        }
    });
    
    // Gán chuỗi HTML vào resultsDiv
    resultsDiv.innerHTML = resultsHTML;
});
