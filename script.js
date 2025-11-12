document.getElementById("submit-quiz").addEventListener("click", function () {
    const answers = {
        q1: "b",
        q2: "b",
        q3: "a"
    };

    let score = 0;

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    const resultDiv = document.getElementById("quiz-result");
    if (score === 3) {
        resultDiv.textContent = `¡Perfecto! Obtuviste ${score}/3 🎉`;
        resultDiv.style.color = "green";
    } else if (score === 2) {
        resultDiv.textContent = `Casi perfecto, obtuviste ${score}/3 👍`;
        resultDiv.style.color = "orange";
    } else {
        resultDiv.textContent = `Obtuviste ${score}/3. Revisa el material y vuelve a intentarlo.`;
        resultDiv.style.color = "red";
    }
});
