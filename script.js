// Combine all topics
const allTopics = {
    ...topics,  // from questions.js (Topic 1)
    ...topics23 // from topic2-3.js (Topics 2&3)
};

function createQuiz() {
    const container = document.getElementById('quiz-container');
    
    Object.entries(allTopics).forEach(([topicTitle, topicData]) => {
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
        const totalQuestions = topicData.questions.length;
        const scoreDisplay = document.createElement('div');
        scoreDisplay.className = 'topic-score';
        scoreDisplay.innerHTML = `Score: ${topicScore}/${totalQuestions}`;
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
                            scoreDisplay.innerHTML = `Score: ${topicScore}/${totalQuestions}`;
                            updateTotalScore();
                        } else {
                            // Wrong answer
                            optionButton.classList.add('incorrect');
                        }
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
}

function updateTotalScore() {
    const scoreDisplay = document.getElementById('score-display');
    const topicScores = Array.from(document.querySelectorAll('.topic-score'))
        .map(score => parseInt(score.textContent.split('/')[0].split(': ')[1]));
    
    const totalScore = topicScores.reduce((a, b) => a + b, 0);
    const totalPossible = Object.values(allTopics)
        .reduce((sum, topic) => sum + topic.questions.length, 0);
    
    scoreDisplay.innerHTML = `
        <h2>Total Score: ${totalScore}/${totalPossible}</h2>
    `;
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', createQuiz);