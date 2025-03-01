const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("quiz-question");
const answerInput = document.getElementById("quiz-answer");
const submitBtn = document.getElementById("submit-btn");
const feedbackElement = document.getElementById("feedback");

const quizzes = [
    { question: "다음 숫자와 관련있는 이름은? 19021216 1920928", answer: "유관순 열사" },
        { question: "모든 정수를 다 곱하면 얼마일까요?", answer: "0" },
            { question: "1919년 일제의 조선 식민지배를 반대하며 약 3000명의 군중이 대한독립을 외친 장소는 어디일까요?", answer: "아우내장터" },
                { question: "다음 알파벳으로 알맞은 단어를 조합하시오: yadhtrib", answer: "birthday" },
                    { question: "1919년 3·1 운동 때 발표된 기미독립선언서에 서명한 위인들을 일컫는 말은?", answer: "민족대표 33인" },
                        { question: "가 수도(3.1L/분)와 나 수도(0.6L/분)로 49L의 물통을 채우려면 몇 분 몇 초 걸릴까요?", answer: "19분 36초" },
                            { question: "다음 글자를 재배열하시오: '울해상힉채'", answer: "생일축하해" }
                            ];

                            let currentQuiz = 0;

                            startBtn.addEventListener("click", () => {
                                startBtn.style.display = "none";
                                    quizContainer.classList.remove("hidden");
                                        showQuestion();
                                        });

                                        submitBtn.addEventListener("click", () => {
                                            checkAnswer();
                                            });

                                            answerInput.addEventListener("keypress", (event) => {
                                                if (event.key === "Enter") {
                                                        checkAnswer();
                                                            }
                                                            });

                                                            function showQuestion() {
                                                                if (currentQuiz < quizzes.length) {
                                                                        questionElement.textContent = quizzes[currentQuiz].question;
                                                                                answerInput.value = "";
                                                                                        feedbackElement.textContent = "";
                                                                                            } else {
                                                                                                    quizContainer.innerHTML = "<h2>🎉 축하합니다! 선물을 찾았습니다! 🎁</h2>";
                                                                                                        }
                                                                                                        }

                                                                                                        function checkAnswer() {
                                                                                                            let userAnswer = answerInput.value.trim().replace(/\s+/g, "");
                                                                                                                let correctAnswer = quizzes[currentQuiz].answer.replace(/\s+/g, "");

                                                                                                                    if (userAnswer === correctAnswer) {
                                                                                                                            feedbackElement.textContent = "✅ 정답입니다!";
                                                                                                                                    feedbackElement.style.color = "green";
                                                                                                                                            currentQuiz++;
                                                                                                                                                    setTimeout(showQuestion, 1000);
                                                                                                                                                        } else {
                                                                                                                                                                feedbackElement.textContent = "❌ 오답입니다. 다시 시도하세요!";
                                                                                                                                                                        feedbackElement.style.color = "red";
                                                                                                                                                                            }
                                                                                                                                                                            }
                                                                                                                                                                            