// script.js

function searchFlights() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    // بيانات تجريبية
    const flights = [
        { from: "دبي", to: "القاهرة", date: "2024-12-01", price: "$500", time: "15:00" },
        { from: "دبي", to: "القاهرة", date: "2024-12-01", price: "$450", time: "18:00" },
    ];

    const resultsDiv = document.getElementById('flight-results');
    resultsDiv.innerHTML = ""; // مسح النتائج السابقة

    flights.forEach(flight => {
        if (flight.from === from && flight.to === to && flight.date === date) {
            const flightInfo = document.createElement('div');
            flightInfo.className = 'flight';
            flightInfo.innerHTML = `
                <p><strong>من:</strong> ${flight.from}</p>
                <p><strong>إلى:</strong> ${flight.to}</p>
                <p><strong>التاريخ:</strong> ${flight.date}</p>
                <p><strong>السعر:</strong> ${flight.price}</p>
                <p><strong>الوقت:</strong> ${flight.time}</p>
            `;
            resultsDiv.appendChild(flightInfo);
        }
    });

    if (resultsDiv.innerHTML === "") {
        resultsDiv.innerHTML = "<p>لم يتم العثور على نتائج</p>";
    }
}
