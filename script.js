// Combine all topics
const allTopics = [
    topics,       // from questions.js (Topic 1)
    topics23,     // from topic2-3.js (Topics 2 & 3)
    topics4, // from topic4.js 
    topic5Questions // from topic5.js (Topic 5)
];

function createQuiz() {
    const container = document.getElementById('quiz-container');
    
    // Iterate through each topic object in the allTopics array
    allTopics.forEach(topicObj => {
        // Iterate through each topic in the topic object
        Object.entries(topicObj).forEach(([topicTitle, topicData]) => {
            const topicDiv = document.createElement('div');
            topicDiv.className = 'topic';
            
            // Create topic header
            const header = document.createElement('div');
            header.className = 'topic-header';
            header.innerHTML = `
                <h2>${topicTitle}</h2>
                <span class="toggle">▼</span>
            `;
            
            // Create topic content
            const content = document.createElement('div');
            content.className = 'topic-content';
            
            let topicScore = 0;
            let testScore = 0;  // Track test condition score
            let answeredQuestions = 0;  // Track number of answered questions
            const totalQuestions = topicData.questions.length;
            const scoreDisplay = document.createElement('div');
            scoreDisplay.className = 'topic-score';
            const maxTestScore = totalQuestions * 3;  // Maximum possible test score
            scoreDisplay.innerHTML = `
                Practice Score: ${topicScore}/${totalQuestions}<br>
                Test Score: ${testScore}/${maxTestScore} (${((testScore/maxTestScore) * 100).toFixed(1)}%)
            `;
            content.appendChild(scoreDisplay);
            
            // Add questions
            topicData.questions.forEach((q, qIndex) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question';
                
                // Question text and image
                let questionHTML = `
                    <p><strong>Question ${qIndex + 1}:</strong> ${q.question}</p>
                `;
                
                if (q.image) {
                    questionHTML += `<img src="${q.image}" alt="Question diagram" class="question-image">`;
                }
                
                questionHTML += `
                    <div class="options"></div>
                    <div class="explanation">
                        <strong>Explanation:</strong> ${q.explanation}
                    </div>
                `;
                
                questionDiv.innerHTML = questionHTML;

                // Create option buttons
                const optionsDiv = questionDiv.querySelector('.options');
                let isAnswered = false;

                q.options.forEach((opt, optIndex) => {
                    const optionButton = document.createElement('div');
                    optionButton.className = 'option';
                    optionButton.textContent = opt;
                    
                    optionButton.addEventListener('click', () => {
                        if (!isAnswered) {
                            isAnswered = true;
                            answeredQuestions++;
                            
                            // Show explanation
                            questionDiv.querySelector('.explanation').style.display = 'block';
                            
                            // Mark all options as disabled
                            optionsDiv.querySelectorAll('.option').forEach(opt => {
                                opt.classList.add('disabled');
                            });

                            // Mark correct answer
                            optionsDiv.children[q.answer].classList.add('correct');

                            if (optIndex === q.answer) {
                                // Correct answer
                                optionButton.classList.add('correct');
                                topicScore++;
                                testScore += 3;  // Add 3 points for correct answer
                            } else {
                                // Wrong answer
                                optionButton.classList.add('incorrect');
                                testScore -= 1;  // Subtract 1 point for wrong answer
                            }
                            
                            scoreDisplay.innerHTML = `
                                Practice Score: ${topicScore}/${totalQuestions}<br>
                                Test Score: ${testScore}/${maxTestScore} (${((testScore/maxTestScore) * 100).toFixed(1)}%)
                            `;
                            updateTotalScore();
                        }
                    });
                    
                    optionsDiv.appendChild(optionButton);
                });
                
                content.appendChild(questionDiv);
            });
            
            topicDiv.appendChild(header);
            topicDiv.appendChild(content);
            container.appendChild(topicDiv);
            
            // Add event listeners for expanding/collapsing topics
            header.addEventListener('click', () => {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
                header.querySelector('.toggle').textContent = 
                    content.style.display === 'none' ? '▼' : '▲';
            });
        });
    });
}

function updateTotalScore() {
    const scoreDisplay = document.getElementById('score-display');
    const topicScores = Array.from(document.querySelectorAll('.topic-score'))
        .map(score => {
            // Get practice score
            const practiceScore = parseInt(score.textContent.split('/')[0].split(': ')[1]);
            // Get test score
            const testScore = parseInt(score.textContent.split('\n')[1].split('/')[0].split(': ')[1]);
            return { practice: practiceScore, test: testScore };
        });
    
    const totalPracticeScore = topicScores.reduce((a, b) => a + b.practice, 0);
    const totalTestScore = topicScores.reduce((a, b) => a + b.test, 0);
    
    const totalPossible = allTopics.reduce((sum, topicObj) => {
        return sum + Object.values(topicObj).reduce((topicSum, topic) => {
            return topicSum + topic.questions.length;
        }, 0);
    }, 0);
    
    const maxTestScore = totalPossible * 3;
    
    scoreDisplay.innerHTML = `
        <h2>Total Practice Score: ${totalPracticeScore}/${totalPossible}</h2>
        <h2>Total Test Score: ${totalTestScore}/${maxTestScore} (${((totalTestScore/maxTestScore) * 100).toFixed(1)}%)</h2>
    `;
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', createQuiz);