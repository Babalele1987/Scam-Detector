function checkMessage() {
  const scamKeywords = [
    "otp", "password", "urgent", "verify", "lottery",
    "prize", "winner", "investment", "account blocked",
    "bank details", "transfer now", "click link", "reset pin"
  ];

  let message = document.getElementById("message").value.toLowerCase();
  let score = 0;

  scamKeywords.forEach(word => {
    if (message.includes(word)) {
      score++;
    }
  });

  let resultText = "";
  let resultBox = document.getElementById("result");

  if (score === 0) {
    resultText = "✅ Safe: No scam indicators found.";
    resultBox.style.color = "green";
  } else if (score <= 2) {
    resultText = "⚠️ Medium Risk: Be cautious, some scam patterns detected.";
    resultBox.style.color = "orange";
  } else {
    resultText = "🚨 High Risk: This message looks like a scam! Do not trust.";
    resultBox.style.color = "red";
  }

  resultBox.innerHTML = resultText;
}
