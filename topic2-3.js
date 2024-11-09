const topics23 = {
    "Topics 2 & 3: Decision Trees and Value of Information": {
        questions: [
            {
                question: "Which of these statements is true?",
                options: [
                    "At a chance node in a decision tree, the decision maker can choose which branch is the best one to follow",
                    "A chance node can never be followed in a decision tree by another chance node",
                    "The probabilities on the branches emanating from a chance node must sum to one.",
                    "One of the options represented by the branches emanating from a decision node must be superior to the others"
                ],
                answer: 2,
                explanation: "The probabilities on the branches emanating from a chance node must sum to one."
            },
            {
                question: "Consider the following decision tree, where the objective is to maximise expected payoff.",
                image: "images/decision-tree1.png", // Replace with actual path to the image if available
                options: [
                    "£40 million",
                    "£32 million",
                    "£22 million",
                    "-£10 million"
                ],
                answer: 2,
                explanation: "EP (Z) = (0.8) x (40) + (0.2) x (-50) = 32 – 10 = 22"
            },
            {
                question: "With reference to the decision tree displayed in question 8, the expected payoff at point Y is:",
                options: [
                    "£15 million",
                    "£17.5 million",
                    "£20 million",
                    "£50 million"
                ],
                answer: 2,
                explanation: "For this question we need to calculate the expected payoff for updating factory. EP E(Update Factory) = (0.6) x (50) + (0.4) x (-25) = 30 – 10 = 20. Therefore, we would choose to update factory since EP (Update) > EP(No Update) [20 > 15]"
            },
            {
                question: "With reference to the decision tree displayed in question 8, the optimum policy (or sequence of decisions) is:",
                options: [
                    "Stay at current factory",
                    "Stay at current factory and update it",
                    "Move to new factory",
                    "Move to new factory and increase productivity"
                ],
                answer: 2,
                explanation: "The optimum policy is to move to a new factory since EV Z (22) > EV Y(20)"
            },
            {
                question: "Consider the decision tree displayed in question 8. At point Y, the decision maker should be indifferent between updating and not updating the factory when the probability of achieving increased productivity is approximately:",
                options: [
                    "0.53",
                    "0.50",
                    "0.47",
                    "Equal to a value that cannot be determined from the information provided"
                ],
                answer: 0,
                explanation: "p(50) + 1-p (-25) = 15. Solving, we get P = 0.53"
            },
            {
                question: "Consider the decision tree below, with payoffs assigned to the terminal nodes.",
                image: "images/decision-tree2.png", // Replace with actual path to the image if available
                options: [
                    "p ≥ 0.35",
                    "p ≥ 0.0625",
                    "p ≥ 0",
                    "p ≤ 0.15"
                ],
                answer: 2,
                explanation: "In the given decision tree, the answer is any value of p, i.e., p ≥ 0."
            },
            {
                question: "A producer of widgets would like to decide which product, P1 or P2, to introduce to the market. Because demand is a function of how well the economy is doing, the producer will experience high demand with probability 0.7 and low demand with probability 0.3, regardless of which product is introduced. P1 will generate profits of £10m and £2m if demand is high or low, respectively, and P2 will generate profits of £20m and £3m if demand is high or low, respectively. How much should the producer pay for perfect information to learn whether the demand will be high or low?",
                options: [
                    "£2100",
                    "£7300",
                    "£7600",
                    "£0"
                ],
                answer: 3,
                explanation: "Note that P2 is the better option no matter what happens. Thus, the producer will not pay for the information since they will choose P2 in any case."
            },
            {
                question: "The managers of a charity are trying to decide whether to hold an event indoors or outdoors. If the event is indoors, the probability of a profit of £80,000 is 0.7, and the probability of losing £20,000 is 0.3. If the event is outdoors, the probability of a profit of £60,000 is 0.5, and the probability of losing £10,000 is also 0.5. According to the expected monetary value (EMV) criterion, the charity should decide to:",
                options: [
                    "Hold the event indoors",
                    "Hold the event indoors and make a profit of £80,000",
                    "Be indifferent between holding the event indoors or outdoors",
                    "Hold the event outdoors"
                ],
                answer: 0,
                explanation: "EV (Indoors) = 0.7 x 80 + 0.3 x (-20) = 50. EV (Outdoors) = 25. EV (Indoors) > EV (Outdoors), therefore the answer is to hold the event indoors."
            },
            {
                question: "Which of these statements about the expected monetary value (EMV) criterion is not true?",
                options: [
                    "It can be used when probabilities are based only on decision makers’ judgments",
                    "It will always reflect the preferences of a risk-averse decision maker.",
                    "It gives the average (mean) payoff that a decision maker would receive if the decision was repeated a large number of times.",
                    "It assumes that an increase in the payoff of a decision from £10 to £20 will be as attractive to the decision maker as an increase from £1000 to £1020."
                ],
                answer: 1,
                explanation: "The EMV criterion reflects the preferences of a risk-neutral individual, not a risk-averse one."
            },
            {
                question: "A sales manager estimates that there is only a 0.4 probability that sales of a new product will exceed break-even level in its first year. She then receives the forecast of a statistical model which suggests that the break-even level will be exceeded. In the past, the model has given this forecast on 80% of occasions when the break-even level has been exceeded and on 20% of occasions when it has not. The posterior probability of the break-even sales level being exceeded is (to two decimal places):",
                options: [
                    "0.14",
                    "0.32",
                    "0.44",
                    "0.73"
                ],
                answer: 3,
                explanation: "P(exceed | ‘exceed’) = 0.32 / (0.32 + 0.12) = 0.73."
            },
            {
                question: "Which of the following statements is not true when Bayes theorem is being applied to determine the probabilities that a project deadline will or will not be exceeded, given that the prior probabilities of exceeding or not exceeding the deadline are 0.5 and 0.5 respectively?",
                options: [
                    "The posterior probabilities will also be 0.5 and 0.5, irrespective of what new information is received.",
                    "The more reliable the new information is, then the greater will be the change to the prior probabilities.",
                    "If the new information indicates that the deadline will be exceeded and it is perfectly reliable, the posterior probability that the deadline will be exceeded is 1.0.",
                    "Prior probabilities of 0.5 and 0.5 suggest that the decision maker is very uncertain about the chances of exceeding the deadline."
                ],
                answer: 0,
                explanation: "The posterior probabilities will not remain 0.5 and 0.5 if new information affects the prior probability."
            },
            {
                question: "A doctor says that there is 'absolutely no chance' that a person is suffering from a disease. However, a medical test indicates that the person does have the disease. The test has an 80% probability of giving this indication if the person does have the disease and a 30% chance if they do not have it. Bayes theorem shows that the posterior probability that the person has the disease is:",
                options: [
                    "0",
                    "0.8",
                    "1.0",
                    "Impossible to calculate in this case"
                ],
                answer: 0,
                explanation: "If the doctor believes there is absolutely no chance, then no other information should change their certainty."
            },
            {
                question: "The prior probability that a computer program has an error is 0.7. If a test is applied to determine if there is an error, it will have an 80% probability of being correct and a 20% probability of being incorrect. The probability that the test will indicate that the program does have an error is:",
                options: [
                    "Cannot be determined based on the information given",
                    "Is equal to 0.56",
                    "Is equal to 0.90",
                    "Is equal to 0.62"
                ],
                answer: 3,
                explanation: "P (‘error’) = 0.56 + 0.06 = 0.62."
            },
            {
                question: "A manufacturer has to decide how many batches of a product to produce next month. If one batch is produced then a profit of £12,000 will be made. If two batches are produced then either a loss of £4000 will be made if demand only equals one batch or a profit of £24,000 will be made if demand equals two batches. The manufacturer provisionally estimates the probabilities of these two outcomes to be 0.3 and 0.7, respectively. Suppose that a statistical demand forecasting model always gives a correct indication. The expected value of the perfect information (EVPI) obtained from the model is:",
                options: [
                    "£4800",
                    "£12000",
                    "£15600",
                    "£20400"
                ],
                answer: 0,
                explanation: "EVPI obtained from the model is Profit w/ info £20,400 minus Profit w/o info £15,600 equals EVPI of £4,800."
            },
            {
                question: "With reference to the decision problem in question 29, a manager can predict demand (instead of paying for the forecasting model). In the past, in similar situations, the manager has made a prediction of 'two batches' 70% of the time. The manager’s predictions have been correct 80% of the time. What is the expected value of the manager’s imperfect prediction (compared to not using any forecasting at all)?",
                options: [
                    "£13920",
                    "£880",
                    "£18400",
                    "£6400"
                ],
                answer: 1,
                explanation: "Use the updated probabilities in a decision tree analysis to determine the imperfect prediction’s value."
            },
            {
                question: "The manager of a charity event is deciding on the location for the event. The event will either be at a lake or in a hotel. The manager feels that the lake location will bring in donations of £10000 if it doesn’t rain and £2000 if it does rain. The manager believes there is a 20% chance of rain. If the event is at the hotel, the expected donations are £8000 regardless of the weather. Which of the following is true about the optimal solution?",
                options: [
                    "The lake, with expected earnings of £10000",
                    "The lake, with expected earnings of £8400",
                    "The hotel, with expected earnings of £8000",
                    "The hotel, with expected earnings of £8200"
                ],
                answer: 1,
                explanation: "EV (Lake) = £8400. EV (Hotel) = £8000. Thus, the lake is the optimal solution."
            },
            // Additional questions can be added similarly by following this format.
            
            // Continue adding remaining questions in this format.
        ]}}            