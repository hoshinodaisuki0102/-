<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>🎰 슬롯머신 게임</title>
  <style>
    body {
      text-align: center;
      background-color: #222;
      color: #fff;
      font-family: 'Segoe UI', sans-serif;
    }

    h1 {
      margin-top: 20px;
    }

    .machine {
      display: flex;
      justify-content: center;
      margin: 40px auto;
    }

    .slot {
      width: 100px;
      height: 100px;
      margin: 0 10px;
      border: 4px solid #fff;
      font-size: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #000;
      border-radius: 10px;
      animation: spin 0.3s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotateX(0deg); }
      100% { transform: rotateX(360deg); }
    }

    .no-spin {
      animation: none;
    }

    button {
      padding: 10px 20px;
      font-size: 18px;
      cursor: pointer;
      margin-top: 20px;
      background-color: #00c853;
      color: white;
      border: none;
      border-radius: 8px;
    }

    .info {
      margin-top: 20px;
      font-size: 20px;
    }
  </style>
</head>
<body>

<h1>🎰 슬롯머신</h1>

<div class="machine">
  <div class="slot" id="slot1">🍒</div>
  <div class="slot" id="slot2">🍋</div>
  <div class="slot" id="slot3">🍊</div>
</div>

<button onclick="spin()">돌리기 (-1 코인)</button>

<div class="info" id="result">결과가 여기에 표시됩니다</div>
<div class="info">💰 코인: <span id="coins">10</span> | 점수: <span id="score">0</span></div>

<script>
  const symbols = ["🍒", "🍋", "🍊", "🍉", "⭐", "🔔"];
  let coins = 10;
  let score = 0;

  function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function spin() {
    if (coins <= 0) {
      alert("코인이 부족합니다!");
      return;
    }

    coins--;
    updateStatus();

    const slots = [document.getElementById("slot1"), document.getElementById("slot2"), document.getElementById("slot3")];

    slots.forEach(slot => {
      slot.classList.remove("no-spin");
    });

    const spinInterval = setInterval(() => {
      slots.forEach(slot => {
        slot.textContent = getRandomSymbol();
      });
    }, 100);

    setTimeout(() => {
      clearInterval(spinInterval);

      const results = slots.map(slot => {
        const symbol = getRandomSymbol();
        slot.textContent = symbol;
        return symbol;
      });

      slots.forEach(slot => {
        slot.classList.add("no-spin");
      });

      checkWin(results);
    }, 1500);
  }

  function checkWin(result) {
    const [a, b, c] = result;
    const resultText = document.getElementById("result");

    if (a === b && b === c) {
      score += 10;
      coins += 5;
      resultText.textContent = "🎉 대박! 세 개 일치! +10점, +5코인!";
    } else if (a === b || b === c || a === c) {
      score += 3;
      coins += 2;
      resultText.textContent = "👍 두 개 일치! +3점, +2코인!";
    } else {
      resultText.textContent = "🙁 아쉽네요. 다음 기회에!";
    }

    updateStatus();
  }

  function updateStatus() {
    document.getElementById("coins").textContent = coins;
    document.getElementById("score").textContent = score;
  }
</script>

</body>
</html>
