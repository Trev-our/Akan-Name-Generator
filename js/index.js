document.getElementById("akanForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const birthday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;
    const resultDiv = document.getElementById("result");

    // Validate input
    if (!birthday || !gender) {
        alert("Please provide both your birthday and gender.");
        return;
    }

    const date = new Date(birthday);
    const day = date.getDay(); // Sunday = 0, Monday = 1, ...
    
    if (isNaN(day)) {
        alert("Invalid date entered. Please try again.");
        return;
    }

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
    const akanName = gender === "male" ? maleNames[day] : femaleNames[day];
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day];
    
    resultDiv.textContent = `You were born on a ${dayOfWeek}. Your Akan name is ${akanName}!`;
});
