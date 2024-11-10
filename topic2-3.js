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
                question: "Consider the following decision tree, where the objective is to maximise expected payoff. The expected payoff at point Z is:",
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
            {
                question: "How much should the manager pay for perfect information regarding the weather on the day of the event?",
                options: [
                    "£10000",
                    "£9600",
                    "£2000",
                    "£1200"
                ],
                answer: 1,
                explanation: "With perfect information, the expected value would be 0.2 * £8000 + 0.8 * £10000 = £9600."
            },
            {
                question: "What is the probability of rain at which the manager will be indifferent between holding the event at the lake vs the hotel?",
                options: [
                    "0.25",
                    "0.50",
                    "0.75",
                    "1"
                ],
                answer: 0,
                explanation: "Solving the equation: 2000p + 10000(1-p) = 8000, we find p = 0.25."
            },
            {
                question: "The manager learns that the local forecast centre has forecasted rain. The centre is only 80% correct when it rains and 60% correct when it does not rain. What is the posterior probability that it will rain?",
                options: [
                    "0.64",
                    "0.16",
                    "0.33",
                    "0.20"
                ],
                answer: 0,
                explanation: "Bayes' theorem yields P(rain | forecast) = 0.64."
            },
            {
                question: "What is the expected payoff at node A?",
                image: "images/decision-tree6.png",
                options: [
                    "600",
                    "550",
                    "500",
                    "1000"
                ],
                answer: 0,
                explanation: "EP at node A: (0.5 * 1000) + (0.5 * 200) = 600, which is greater than the other option."
            },
            {
                question: "What is the expected payoff at node B?",
                options: [
                    "300",
                    "450",
                    "480",
                    "720"
                ],
                answer: 2,
                explanation: "EP at node B: 0.6 * 600 + 0.4 * 300 = 480."
            },
            {
                question: "How much would a decision maker pay for perfect information about what will happen at node B?",
                options: [
                    "0",
                    "100",
                    "330",
                    "480"
                ],
                answer: 0,
                explanation: "The answer is zero because Decision 1 is optimal regardless of outcomes."
            },
            {
                question: "What is the probability that the government report will predict a good crop?",
                options: [
                    "0.35",
                    "0.56",
                    "0.875",
                    "0.65"
                ],
                answer: 3,
                explanation: "Using Bayes' theorem, P(good crop) = 0.65."
            },
            {
                question: "If the government report predicts a bad crop, what is the posterior probability that there will be a bad crop?",
                options: [
                    "0.45",
                    "0.56",
                    "0.60",
                    "0.35"
                ],
                answer: 2,
                explanation: "Using Bayes' theorem, P(bad crop | forecast) = 0.60."
            },
            {
                question: "What is the maximum the orange farmer should be willing to pay for insurance if the government report predicts a bad crop?",
                options: [
                    "£10000",
                    "£4000",
                    "£1000",
                    "£6000"
                ],
                answer: 3,
                explanation: "Expected loss without insurance: 0.6 * 10000 = 6000, so max willingness to pay is £6000."
            },
            {
                question: "Which of the following is NOT true about the Expected Monetary Value (EMV) criterion?",
                options: [
                    "EMV assumes the decision maker is risk neutral.",
                    "EMV is an average of payoffs for infinite repetitions.",
                    "EMV assumes that the decision involves only one objective.",
                    "EMV is more risk-averse than the Maximin criterion."
                ],
                answer: 3,
                explanation: "The EMV criterion is risk-neutral, not risk-averse."
            },
            {
                question: "Which of the following does sensitivity analysis NOT provide?",
                options: [
                    "A check for robustness.",
                    "The ability to perform what-if analyses.",
                    "An assessment of the decision maker’s attitude towards risk.",
                    "Dependence of a solution on the input parameters."
                ],
                answer: 2,
                explanation: "Sensitivity analysis does not assess risk preferences of the decision maker."
            },
            {
                question: "What proportion of the manufacturer’s laptops will be deemed 'defective' by the test process?",
                options: [
                    "0.05",
                    "0.045",
                    "0.0925",
                    "0.0475"
                ],
                answer: 2,
                explanation: "P('Def') = 0.0925, calculated as 0.0475 + 0.045."
            },
            {
                question: "If a laptop is deemed 'good', what is the probability that it is actually defective?",
                options: [
                    "0",
                    "0.0475",
                    "0.045",
                    "0.0055"
                ],
                answer: 3,
                explanation: "Using Bayes' theorem, P(Def | 'Good') = 0.0055."
            },
            {
                question: "If the test process is implemented, what will be the manufacturer’s expected cost for each laptop produced?",
                options: [
                    "£50",
                    "£250",
                    "£6.125",
                    "£3.75"
                ],
                answer: 2,
                explanation: "Expected cost per laptop is £6.125."
            },
            {
                question: "At which cost would the manufacturer be indifferent about running the test process vs not running it if the repair cost increases?",
                options: [
                    "£108.11",
                    "£145.95",
                    "£65.00",
                    "Can’t be determined from the information provided."
                ],
                answer: 1,
                explanation: "At £145.95, the manufacturer would be indifferent between running or not running the test."
            },
            {
                question: "There are three kinds of students graduating from a university: Class A, class B, and class C.  It is known that 60% of students will graduate as class A, 30% will be class B, and 10% will be class C. All incoming students, in their first year, are put through a screening test which labels students “A”, “B”, or “C”. Each student has an 80% chance of being labelled correctly and 10% chance of being labelled as each of the other classes. For example, a student who is class A has an 80% chance of being labelled “A”, a 10% chance of being labelled “B”, and a 10% chance of being labelled “C”. What is the probability that a student will be labelled 'A' by the test?",
                options: [
                    "0.48",
                    "0.52",
                    "0.92",
                    "0.60"
                ],
                answer: 1,
                explanation: "P('A') = 0.52, calculated as 0.48 + 0.03 + 0.01."
            },
            {
                question: "What is the probability that a student labelled 'A' by the test actually is of class B?",
                options: [
                    "0.06",
                    "0.03",
                    "0.01",
                    "0.15"
                ],
                answer: 0,
                explanation: "Using Bayes' theorem, P(Class B | 'A') ≈ 0.06."
            },
            {
                question: "What is the probability that a student labelled 'C' by the test actually is of class A or B?",
                options: [
                    "0.08",
                    "0.09",
                    "0.53",
                    "0.17"
                ],
                answer: 2,
                explanation: "Using Bayes' theorem, P(A or B | 'C') = 0.53."
            },
            {
                question: "Which of the following ranges describes most accurately the set of values of 'A' for which the decision maker should choose Liverpool?",
                options: [
                    "A < -5000",
                    "A < 5000",
                    "A < -2000",
                    "A > 3000"
                ],
                answer: 0,
                explanation: "Solving the inequality, we get A < -5000."
            },
            {
                question: "In which of the following cases is it possible for prior and posterior beliefs about the probability of an event occurring to be different from each other?",
                options: [
                    "When the prior probability is 1.0",
                    "When the prior probability is 0.0",
                    "When the prior probability is 0.5.",
                    "All of the above"
                ],
                answer: 3,
                explanation: "Prior and posterior beliefs can differ in all cases except when prior probability is certain (1 or 0)."
            },
            {
                question: "What is the expected payoff at node B?",
                options: [
                    "2200",
                    "1150",
                    "1200",
                    "1540"
                ],
                answer: 3,
                explanation: "EP(B) = 0.7 x 2200 + 0.3 x 0 = 1540."
            },
            {
                question: "What is the expected payoff at node A?",
                options: [
                    "1000",
                    "1540",
                    "1200",
                    "770"
                ],
                answer: 0,
                explanation: "At Node A, choose Action 2 since it provides a higher expected payoff of 1000 compared to Action 1."
            },
            {
                question: "Consider the probability of “Outcome 3” at node C (currently 0.7 as seen in the figure). What is the complete set of values for this probability at which the decision maker prefers “Action 1” in node A?",
                options: [
                    "p ≥ 0.45",
                    "p ≤ 0.45",
                    "p ≥ 0.91",
                    "no value of p makes Action 1 optimal"
                ],
                answer: 2,
                explanation: "For Action 1 to be optimal, p needs to be greater than or equal to 0.91."
            },
            {
                question: "An event manager is deciding on the location for a charity event. The event will either be at a lake or in a hotel. The manager feels that the lake location will bring in donations of £10000 if it doesn’t rain and £2000 if it does rain. The manager believes there is a 20% chance of rain. If the event is at the hotel, the expected donations are £8000 regardless of the weather. What is the optimal solution?",
                options: [
                    "The lake, with expected earnings of £10000",
                    "The lake, with expected earnings of £8400",
                    "The hotel, with expected earnings of £8000",
                    "The hotel, with expected earnings of £8200"
                ],
                answer: 1,
                explanation: "Expected value at lake = 0.8 * £10000 + 0.2 * £2000 = £8400, which is higher than the hotel’s £8000."
            },
            {
                question: "How much should the manager pay for perfect information regarding the weather on the day of the event?",
                options: [
                    "£10000",
                    "£9600",
                    "£2000",
                    "£1200"
                ],
                answer: 1,
                explanation: "With perfect information, the expected value would be 0.2 * £8000 + 0.8 * £10000 = £9600."
            },
            {
                question: "What is the probability of rain at which the manager will be indifferent between holding the event at the lake vs the hotel?",
                options: [
                    "0.25",
                    "0.50",
                    "0.75",
                    "1"
                ],
                answer: 0,
                explanation: "Solving the equation: 2000p + 10000(1-p) = 8000, we find p = 0.25."
            },
            {
                question: "The manager learns that the local forecast centre has forecasted rain. The centre is only 80% correct when it rains and 60% correct when it does not rain. What is the posterior probability that it will rain?",
                options: [
                    "0.64",
                    "0.16",
                    "0.33",
                    "0.20"
                ],
                answer: 0,
                explanation: "Bayes' theorem yields P(rain | forecast) = 0.64."
            },
            {
                question: "Which of the following ranges describes most accurately the set of values of “A” for which the decision maker should choose Liverpool?",
                options: [
                    "A < -5000",
                    "A < 5000",
                    "A < -2000",
                    "A > 3000"
                ],
                answer: 0,
                explanation: "Solving the inequality, we get A < -5000."
            },
            {
                question: "In which of the following cases is it possible for prior and posterior beliefs about the probability of an event occurring to be different from each other?",
                options: [
                    "When the prior probability is 1.0",
                    "When the prior probability is 0.0",
                    "When the prior probability is 0.5.",
                    "All of the above"
                ],
                answer: 3,
                explanation: "Prior and posterior beliefs can differ in all cases except when prior probability is certain (1 or 0)."
            },
            {
                question: "What is the expected payoff at node C?",
                options: [
                    "1200",
                    "2200",
                    "1540",
                    "1150"
                ],
                answer: 1,
                explanation: "EP(C) = 2200, based on the given values and probabilities."
            },
            {
                question: "The prior probability that a computer program has an error is 0.7. If a test is applied to determine if there is an error, it will have an 80% probability of being correct and a 20% probability of being incorrect. What is the probability that the test will indicate that the program does have an error?",
                options: [
                    "Cannot be determined based on the information given",
                    "0.56",
                    "0.90",
                    "0.62"
                ],
                answer: 3,
                explanation: "P(error) = 0.56 + 0.06 = 0.62."
            },
            {
                question: "If the cost of repair (currently £50) were to increase, at which cost would the manufacturer be indifferent about running the test process vs not running it?",
                options: [
                    "£108.11",
                    "£145.95",
                    "£65.00",
                    "Can’t be determined from the information provided"
                ],
                answer: 1,
                explanation: "Using the calculation, we find the indifference cost to be £145.95."
            },
            {
                question: "A doctor says that there is “absolutely no chance” that a person is suffering from a disease. However, a medical test indicates that the person does have the disease. The test has an 80% probability of giving this indication if the person does have the disease and a 30% chance if they do not have it. What is the posterior probability that the person has the disease?",
                options: [
                    "0",
                    "0.8",
                    "1.0",
                    "Impossible to calculate in this case"
                ],
                answer: 0,
                explanation: "Since the doctor is certain there is no chance, posterior probability remains 0."
            },
            {
                question: "The prior probability that a laptop is defective is 0.05. If a test process has a 90% chance of detecting a defective laptop and a 5% chance of incorrectly labelling a good laptop 'defective', what is the proportion of laptops deemed defective by the test process?",
                options: [
                    "0.05",
                    "0.045",
                    "0.0925",
                    "0.0475"
                ],
                answer: 2,
                explanation: "P('Def') = 0.0474 + 0.045 = 0.0925."
            },
            {
                question: "A sales manager estimates there is only a 0.4 probability that sales of a new product will exceed break-even level in its first year. A model suggests that the break-even level will be exceeded. In the past, the model has given this forecast on 80% of occasions when the break-even level was exceeded and 20% of occasions when it was not. What is the posterior probability of the break-even level being exceeded?",
                options: [
                    "0.14",
                    "0.32",
                    "0.44",
                    "0.73"
                ],
                answer: 3,
                explanation: "P(exceed | forecast) = 0.73 based on Bayes' theorem."
            },
            {
                question: "The manufacturer produces a product in two batches, with an expected profit of £12,000 for one batch or £24,000 for two batches (if demand equals two). If demand equals one batch, a loss of £4,000 is incurred. What is the Expected Value of Perfect Information (EVPI) obtained from a statistical demand forecasting model?",
                options: [
                    "£4800",
                    "£12000",
                    "£15600",
                    "£20400"
                ],
                answer: 0,
                explanation: "EVPI = £20400 - £15600 = £4800."
            },
            {
                question: "A decision maker predicts a 70% chance of a good crop. A government report historically predicts a good crop 80% of the time when it indeed turned out to be a good crop and a bad crop 70% of the time when it was a bad crop. What is the probability that the report will predict a good crop?",
                options: [
                    "0.35",
                    "0.56",
                    "0.875",
                    "0.65"
                ],
                answer: 3,
                explanation: "P('Good') = 0.56 + 0.09 = 0.65."
            },
            {
                question: "Consider the previous question about the probability of a bad crop prediction. If the report predicts a bad crop, what is the posterior probability of a bad crop?",
                options: [
                    "0.45",
                    "0.56",
                    "0.60",
                    "0.35"
                ],
                answer: 2,
                explanation: "Using Bayes' theorem, P(bad | ‘bad’) = 0.6."
            },
            {
                question: "The orange farmer from the previous questions loses £10,000 for each bad crop but can eliminate this loss by buying insurance. If the government report predicts a bad crop, what is the maximum amount she should pay for insurance?",
                options: [
                    "£10000",
                    "£4000",
                    "£1000",
                    "£6000"
                ],
                answer: 3,
                explanation: "Expected loss without insurance is £6000; therefore, the maximum payment is £6000."
            },
            {
                question: "Which of the following is NOT true about the Expected Monetary Value (EMV) criterion?",
                options: [
                    "EMV assumes the decision maker is risk neutral.",
                    "EMV is an average of payoffs for infinite repetitions.",
                    "EMV assumes that the decision involves only one objective.",
                    "EMV is more risk-averse than the Maximin criterion."
                ],
                answer: 3,
                explanation: "EMV is risk-neutral, not risk-averse, unlike the Maximin criterion."
            },
            {
                question: "Which of the following does sensitivity analysis NOT provide?",
                options: [
                    "A check for robustness.",
                    "The ability to perform what-if analyses.",
                    "An assessment of the decision maker’s attitude towards risk.",
                    "Dependence of a solution on the input parameters."
                ],
                answer: 2,
                explanation: "Sensitivity analysis does not directly assess risk attitudes."
            },
            {
                question: "A laptop manufacturer is considering a test process with a 90% accuracy for detecting defects and a 5% false-positive rate. Each defective laptop returned costs £300, and each flagged laptop costs £50 to repair. What is the expected cost per laptop?",
                options: [
                    "£50",
                    "£250",
                    "£6.125",
                    "£3.75"
                ],
                answer: 2,
                explanation: "Expected cost per laptop is £6.125 based on calculated probabilities and costs."
            },
            {
                question: "If the cost of repair (currently £50) were to increase, at which cost would the manufacturer be indifferent about running the test process vs not running it?",
                options: [
                    "£108.11",
                    "£145.95",
                    "£65.00",
                    "Can’t be determined from the information provided"
                ],
                answer: 1,
                explanation: "The indifference cost calculation results in £145.95."
            },
            {
                question: "What is the probability that a student will be labelled 'A' by the test?",
                options: [
                    "0.48",
                    "0.52",
                    "0.92",
                    "0.60"
                ],
                answer: 1,
                explanation: "P('A') = 0.48 + 0.03 + 0.01 = 0.52."
            },
            {
                question: "What is the probability that a student labelled 'A' by the test actually is of class B?",
                options: [
                    "0.06",
                    "0.03",
                    "0.01",
                    "0.15"
                ],
                answer: 0,
                explanation: "P(Class B | 'A') = 0.03 / 0.52 = 0.057 (approximately 0.06)."
            },
            {
                question: "What is the probability that a student labelled 'C' by the test actually is of class A or B?",
                options: [
                    "0.08",
                    "0.09",
                    "0.53",
                    "0.17"
                ],
                answer: 2,
                explanation: "The probability is equivalent to 1 - P(C | 'C') = 1 - 0.47 = 0.53."
            },
            {
                question: "Which of the following ranges describes most accurately the set of values of 'A' for which the decision maker should choose Liverpool?",
                options: [
                    "A < -5000",
                    "A < 5000",
                    "A < -2000",
                    "A > 3000"
                ],
                answer: 0,
                explanation: "Solving the inequality gives A < -5000."
            },
            {
                question: "In which of the following cases is it possible for prior and posterior beliefs about the probability of an event occurring to be different from each other?",
                options: [
                    "When the prior probability is 1.0",
                    "When the prior probability is 0.0",
                    "When the prior probability is 0.5",
                    "All of the above"
                ],
                answer: 3,
                explanation: "In all cases, prior and posterior beliefs can be different depending on the evidence."
            },
            {
                question: "What is the expected payoff at node B?",
                options: [
                    "2200",
                    "1150",
                    "1200",
                    "1540"
                ],
                answer: 3,
                explanation: "EP(B) = 0.7 x 2200 + 0.3 x 0 = 1540."
            },
            {
                question: "What is the expected payoff at node A?",
                options: [
                    "1000",
                    "1540",
                    "1200",
                    "770"
                ],
                answer: 0,
                explanation: "Expected payoff at Node A is 1000 after comparing options at Node B."
            },
            {
                question: "Consider the probability of 'Outcome 3' at node C (currently 0.7). What is the complete set of values for this probability at which the decision maker prefers 'Action 1' in node A?",
                options: [
                    "p ≥ 0.45",
                    "p ≤ 0.45",
                    "p ≥ 0.91",
                    "no value of p makes Action 1 optimal"
                ],
                answer: 2,
                explanation: "Calculation shows p > 0.91 makes Action 1 optimal."
            },
            {
                question: "How much should the decision maker pay for perfect information regarding the outcome at node C?",
                options: [
                    "1070",
                    "770",
                    "230",
                    "70"
                ],
                answer: 3,
                explanation: "EVPI = 1070 – 1000 = 70."
            },
            {
                question: "What is the probability that an item going through inspection will be classified as 'defective'?",
                options: [
                    "0.092",
                    "0.210",
                    "0.012",
                    "0.160"
                ],
                answer: 3,
                explanation: "P('Def') = 0.092 + 0.068 = 0.16."
            },
            {
                question: "If an item is classified as 'non-defective', what is the probability that it is actually defective?",
                options: [
                    "0.008",
                    "0.014",
                    "0.100",
                    "0.138"
                ],
                answer: 1,
                explanation: "P(Defective | 'Good') = 0.012 / 0.84 = 0.014."
            },
            {
                question: "If the inspection process is implemented, what will be the company’s expected cost for each item received?",
                options: [
                    "£3.20",
                    "£0.80",
                    "£2.48",
                    "£0.80"
                ],
                answer: 0,
                explanation: "Expected cost = 3.2 based on probability and cost calculations."
            },
            {
                question: "How much should the company be willing to pay to inspect each item?",
                options: [
                    "£16",
                    "£13.35",
                    "£10.45",
                    "£12.80"
                ],
                answer: 3,
                explanation: "EVPI = 16 - 3.2 = 12.8."
            },
            {
                question: "How many spares of the part should the company order with the copier to minimise expected costs over the lifetime of the copier?",
                image: "images/table.png",
                options: [
                    "0",
                    "1",
                    "2",
                    "3"
                ],
                answer: 1,
                explanation: "Ordering 1 part minimises costs based on expected cost calculations."
            }
            // Additional questions can be added similarly by following this format.
            
            // Continue adding remaining questions in this format.
        ]}}            