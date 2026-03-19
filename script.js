

function checkQuiz() {
  let score = 0;

  let q1 = document.querySelector('input[name="q1"]:checked');
  let q2 = document.querySelector('input[name="q2"]:checked');
  let q3 = document.querySelector('input[name="q3"]:checked');

  if (q1 && q1.value === "correct") score++;
  if (q2 && q2.value === "correct") score++;
  if (q3 && q3.value === "correct") score++;

  document.getElementById("result").innerText = "Your score is: " + score + "/3";
}