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
                question: "Consider the decision tree below, with payoffs assigned to the terminal nodes. What is the complete set of values that the probability “p” can take if Alternative 1 is to be the optimal decision at the first node, assuming the decision maker would like to maximise the expected payoff from the decision?",
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
                answer: 3,
                explanation: "With perfect information, the expected value would be 0.2 * £8000 + 0.8 * £10000 = £9600. £9600-£8400=£1200"
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
                answer: 2,
                explanation: "Bayes' theorem yields P(rain | forecast) = 0.33."
            },
            {
                question: "What is the expected payoff at node A?",
                image: "images/decision-treeA.png",
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
                question: "The orange farmer in Question 2.23 loses £10000 every time there is a bad crop. However if she buys insurance she won’t have any costs in the event of a bad crop. If the government report predicts a bad crop, what is the maximum should she be willing to pay for insurance (assuming she is risk-neutral)?",
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
                question: "A laptop manufacturer loses £300 for each laptop that is returned by customers due to defects. About 5% of the manufacturer’s laptops are known to be defective. The manufacturer is considering a test process for new laptops. The test process has a 90% chance of detecting a defective laptop and a 5% chance of incorrectly deeming a good laptop “defective”. Each laptop deemed “defective” by the test needs to go through a repair process that costs £50, but after that the laptop is certain to be free of defects. What proportion of the manufacturer’s laptops will be deemed 'defective' by the test process?",
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
                question: "Look at the decision tree below. In both cases high sales will bring in payoffs of A and low sales will bring in losses of 2000 and 1000 if Liverpool and Manchester have been selected, respectively. Which of the following ranges describes most accurately the set of values of 'A' for which the decision maker should choose Liverpool?",
                image: "images/decision-treeB.png",
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
                image: "images/decision-treeC.png",
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
                question: "How much should the decision maker pay for perfect information regarding the outcome at node C?",
                options: [
                    "1070",
                    "770",
                    "230",
                    "70"
                ],
                answer: 3,
                explanation: "EVPI = With information (1070) - Without information (1000) = 70. With information calculation: 0.7(1100) + 0.3(1000) = 1070."
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
                explanation: "P('Def') = 0.092 + 0.068 = 0.16"
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
                explanation: "P('Good') = 1 – P('Def') = 1 – 0.16 = 0.84. P(Defective | 'Good') = 0.012 / 0.84 = 0.014"
            },
            {
                question: "If the inspection process is implemented, what will be the company's expected cost for each item received?",
                options: [
                    "£3.20",
                    "£0.80",
                    "£2.48",
                    "£0.80"
                ],
                answer: 0,
                explanation: "Expected cost = 0.88 x 0 + 0.092 x 5 + 0.012 x 2.4 + 0.068 x 5 = 0 + 0.46 + 2.4 + 0.34 = 3.2"
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
                explanation: "EVPI = Without information (16) - With information (3.2) = 12.8. Without information calculation: 0.92(0) + 0.08(200) = 16"
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
                explanation: "Calculating costs: '0 parts': 0 + 0.4 x 500 + 0.2 x 1,000 = 400. '1 part': 200 + 0.2 x 500 = 300. '2 parts': 400. Ordering 1 part minimizes costs at 300."
            },
            {
                question: "What should the cost of ordering separately (currently £500) be so that the business is indifferent between ordering 0 and 1 spares with the copier?",
                options: [
                    "£160",
                    "£267",
                    "£533",
                    "£333"
                ],
                answer: 3,
                explanation: "Setting costs equal: 0.4C + 0.2(2C) = 200 + 0.2C. Solving: 0.6C = 200, therefore C = 333"
            },
            {
                question: "The business can ask an engineering firm to evaluate the copier before making a decision. If a certain outcome will be observed, the engineering firm will predict this accurately 90% of the time, with a 5% chance of predicting each of the other two alternatives. What is the probability that the engineering firm will predict 2 failures?",
                options: [
                    "0.05",
                    "0.90",
                    "0.18",
                    "0.22"
                ],
                answer: 3,
                explanation: "P('2') = 0.4 x 0.05 + 0.4 x 0.05 + 0.2 x 0.9 = 0.02 + 0.02 + 0.18 = 0.22"
            },
            {
                question: "Considering the previous question, if the engineering firm says the part is likely to fail 2 times, what is the probability that this will actually happen?",
                options: [
                    "0.22",
                    "0.82",
                    "0.90",
                    "0.18"
                ],
                answer: 1,
                explanation: "P(2 | '2') = 0.18 / 0.22 = 0.818 ≈ 0.82"
            },
            {
                question: "What is the value of perfect information regarding what might happen at the chance node?",
                image: "images/decision-treeD.png",
                options: [
                    "100",
                    "500",
                    "900",
                    "1000"
                ],
                answer: 0,
                explanation: "EVPI = With information (900) - Without information (800) = 100. With information: 0.8 x 1,000 + 0.2 x 500 = 900. Without information: max(0.8 x 1000 + 0.2 x 0, 500) = 800"
            },
            {
                question: "Consider question 2.50. If the information predicts Outcome 3, what is the probability that Outcome 4 will occur?",
                options: [
                    "0.10",
                    "0.17",
                    "0.32",
                    "0.83"
                ],
                answer: 1,
                explanation: "P(4 | '3') = 0.1 / 0.58 = 0.17"
            },
            {
                question: "Consider question 2.51. What is the value of imperfect information?",
                options: [
                    "0",
                    "30",
                    "60",
                    "830"
                ],
                answer: 0,
                explanation: "After calculating P(4|'3')=0.17, P(3|'3')=0.83, P(3|'4')=0.76, P(4|'4')=0.24, we find that alternative 1 is the best choice regardless of what the information says. Therefore, the value of imperfect information is zero."
            },
            {
                question: "In which of the following scenarios is the posterior probability of an event occurring most likely to be different from its prior probability, when new information is available?",
                options: [
                    "When the prior probability is 0.5",
                    "When the prior probability is 0 (zero)",
                    "When the prior probability is 1.0",
                    "When the prior probability has been determined through elicitation"
                ],
                answer: 0,
                explanation: "A prior probability of 0.5 represents maximum uncertainty, making it most susceptible to change when new information becomes available."
            },
            {
                question: "What is the decision that maximises the expected payoff, and corresponding expected payoff?",
                image: "images/decision-treeE.png",
                options: [
                    "Decision 1 and Outcome 3; Payoff = 1000",
                    "Decision 1; Payoff = 700",
                    "Decision 2; Payoff = 560",
                    "Decision 2 and Outcome 8; Payoff = 1200"
                ],
                answer: 1,
                explanation: "EP(Decision 1) = 0.4 x 1000 + 0.6 x 500 = 700. EP(Decision 2) = 0.5 x 720 + 0.5 x 400 = 560. 700 > 560, so Decision 1 maximizes expected payoff at 700."
            },
            {
                question: "For what range of probabilities of Outcome 7 occurring (currently 0.8 in the figure) will Decision 2 be the decision that maximises expected payoff?",
                options: [
                    "p ≤ 0.333",
                    "p ≥ 0.333",
                    "p ≤ 0.667",
                    "p ≥ 0.667"
                ],
                answer: 0,
                explanation: "(0.5)p x 600 + (0.5)(1-p) x 1200 + 0.5 x 400 > 700 leads to -300p > -100, therefore p < 1/3"
            },
            {
                question: "What should the decision maker be willing to pay for perfect information regarding the event at node A?",
                options: [
                    "736",
                    "1000",
                    "36",
                    "140"
                ],
                answer: 2,
                explanation: "EVPI = With information (736) - Without information (700) = 36. With information: 0.4 x 1000 + 0.6 x 560 = 736. Without information: 0.4 x 1000 + 0.6 x 500 = 700"
            },
            {
                question: "What is the complete set of probabilities of having a good economy for which Product 1 maximises expected payoff?",
                image: "images/decision-treeF.png",
                options: [
                    "p ≥ 0.2",
                    "p ≤ 0.2",
                    "p ≥ 0.33",
                    "p ≤ 0.33"
                ],
                answer: 1,
                explanation: "P1 > P2 gives 10 + 30p > 5 + 55p → p < 0.2. P1 > P3 gives 10 + 30p > -10 + 90p → p < 0.33. Therefore, p ≤ 0.2 is the complete set."
            },
            {
                question: "What is the expected payoff from perfect information (EPPI)?",
                options: [
                    "2000",
                    "59000",
                    "80000",
                    "6000"
                ],
                answer: 1,
                explanation: "EPPI = 0.7 x 80000 + 0.3 x 10000 = 59000"
            },
            {
                question: "Suppose we want to elicit the utility function of the decision maker using the probability equivalence method. What pair of payoffs correspond to utilities of (0, 1)?",
                options: [
                    "(0, 80000)",
                    "(10000, 40000)",
                    "(5000, 6000)",
                    "(-10000, 80000)"
                ],
                answer: 3,
                explanation: "We assign utility 0 to minimum payoff and utility 1 to maximum payoff. The minimum and maximum payoffs are -10000 and 80000 respectively."
            },
            {
                question: "Using the probability equivalence method, which of the following utilities for a payoff of 60000 is consistent with a risk-neutral individual?",
                options: [
                    "U(60000) = 0.6",
                    "U(60000) = 0.75",
                    "U(60000) = 0.78",
                    "U(60000) = 0.9"
                ],
                answer: 2,
                explanation: "80p – (1 - p) x 10 = 60 → 90p = 70 → p = 0.78"
            },
            {
                question: "Consider two events, A and B, for which we have prior probabilities of P(A) = 0.6 and P(B) = 0.4. We are offered information such that the probability of A occurring is 0.8 if the information says 'A' and the probability of B occurring is 0.5 if the information says 'B'. Suppose we purchase the information and the indication is 'A'. What is the posterior probability that A will occur?",
                options: [
                    "0.8",
                    "0.71",
                    "0.68",
                    "0.48"
                ],
                answer: 0,
                explanation: "We're given P(A|'A') = 0.8 directly in the question, which is the posterior probability we're looking for."
            },
            {
                question: "A disease that affects 8% of the public costs £500000 to treat for each case that is undetected. If detected early, the disease costs £10000 to treat. A test designed for early detection of the disease has a 90% chance of detecting the disease in an individual who has the disease, and a 10% chance of detecting the disease (incorrectly) in a healthy individual, in which case a cost of £20000 (including treatment) would be incurred due to legal consequences, etc. Use three decimal places in your calculations. What proportion of individuals will the test indicate to have the disease?",
                options: [
                    "0.072",
                    "0.092",
                    "0.164",
                    "0.080"
                ],
                answer: 2,
                explanation: "P('D') = 0.072 + 0.092 = 0.164"
            },
            {
                question: "If the test indicates that an individual has the disease, what is the probability that the individual is actually healthy?",
                options: [
                    "0.008",
                    "0.092",
                    "0.902",
                    "0.561"
                ],
                answer: 3,
                explanation: "P(ND|'D') = 0.092 / 0.164 = 0.561"
            },
            {
                question: "If the test is used for every individual in the population, what is the expected per-person cost of the disease to the population (not including the cost of the test)?",
                options: [
                    "£6560",
                    "£4720",
                    "£4000",
                    "£720"
                ],
                answer: 0,
                explanation: "0.072 x 10000 + 0.008 x 500000 + 0.092 x 20000 = 6560"
            },
            {
                question: "How much should officials be willing to pay for the test, per individual?",
                options: [
                    "£33440",
                    "£35280",
                    "£36000",
                    "£39280"
                ],
                answer: 0,
                explanation: "Without test: 0.08 x 500000 = 40000. With test: 6560. Officials will be willing to pay 40000 – 6560 = 33440"
            },
            {
                question: "A meteorological service uses a classification in which it classifies hurricanes as “Strong”, “Medium”, or “Weak”. In the past, 25% of hurricanes were Strong, 60% were Medium, and 15% were weak. At the first sign of a hurricane, the service uses an indicator to predict the strength. The strength of each hurricane has a 90% chance of being predicted correctly and a 5% chance of being labelled as one of the other strengths. For example, for a hurricane that will turn out be Strong, there is a 90% chance that the indicator will predict this, a 5% chance that a Medium will be predicted, and a 5% chance that a Weak will be predicted. What is the probability that any hurricane will be predicted to be 'Medium'?",
                options: [
                    "0.6",
                    "0.54",
                    "0.56",
                    "0.0125"
                ],
                answer: 2,
                explanation: "P('M') = 0.56"
            },
            {
                question: "What is the probability that a hurricane predicted to be Medium turns out to be Strong?",
                options: [
                    "0.0125",
                    "0.022",
                    "0.0075",
                    "0.05"
                ],
                answer: 1,
                explanation: "P(S|'M') = 0.0125/0.56 = 0.022"
            },
            {
                question: "What is the probability that a hurricane predicted to be 'Strong' turns out to be Medium or Weak?",
                options: [
                    "0.225",
                    "0.857",
                    "0.900",
                    "0.143"
                ],
                answer: 3,
                explanation: "P(S|'S') = 0.225/0.2625 = 0.857, therefore probability of Medium or Weak = 1 - 0.857 = 0.143"
            },
            {
                question: "A producer of washing machines must choose one of two suppliers for their electric motors. Supplier 1 has quoted a price of £1 million for the motors, and is located in a country with a 20% chance of having a revolution, in which case costs will be £1.5 million. Supplier 2 has quoted a price of £2 million for the motors, and is located in a country with a 40% chance of having a revolution, in which case costs will be £3 million. What is the decision that minimises expected costs, and the associated cost?",
                options: [
                    "Supplier 1; Cost = 1.5",
                    "Supplier 1; Cost = 1.1",
                    "Supplier 2; Cost = 2.4",
                    "Supplier 2; Cost = 1.5"
                ],
                answer: 1,
                explanation: "Supplier 1: (0.8) x 1 + (0.2) x 1.5 = 1.1. Supplier 2: (0.6) x 2 + (0.4) x 3 = 2.4. Supplier 1 minimizes cost at 1.1"
            },
            {
                question: "For what range of values for the probability of a revolution in Supplier 2's country (currently 0.4) will Supplier 2 be the cost-minimising decision?",
                options: [
                    "p ≥ 0",
                    "p ≤ 0.5",
                    "p ≤ 1",
                    "Supplier 2 is never the cost-minimising decision"
                ],
                answer: 3,
                explanation: "Supplier 2's costs are higher in all cases, so it will never be the cost-minimizing decision regardless of the probability."
            },
            {
                question: "How much should the producer be willing to pay for perfect information regarding the probability of a revolution in Supplier 1's country?",
                options: [
                    "£1.34 million",
                    "£1.5 million",
                    "£0.54 million",
                    "£0"
                ],
                answer: 3,
                explanation: "The decision won't change regardless of the availability of perfect information, so the value of perfect information is £0."
            },
            {
                question: "A forecaster predicting future sales of a product is certain that sales will be high. High sales would bring in earnings that are £5 million more than low sales. The forecaster is, however, offered some market research which will predict whether sales will be high or low. In the past, half of the market research reports received from the same company indicated low demand. What should the forecaster be willing to pay for the market research?",
                options: [
                    "Zero",
                    "£5 million",
                    "£2.5 million",
                    "Can't be determined from the information given"
                ],
                answer: 0,
                explanation: "Since the forecaster is certain about high sales, their probability won't change with new information, making the market research worthless."
            },
            {
                question: "Which of the following is NOT true about the use of decision trees for aiding decision making?",
                options: [
                    "Utilities can be used in a tree rather than payoffs",
                    "Decision trees facilitate the use of expected values",
                    "Decision trees can be used for decisions with multiple objectives",
                    "More than one decision node can appear in a decision tree"
                ],
                answer: 2,
                explanation: "All statements except 'Decision trees can be used for decisions with multiple objectives' are true about decision trees."
            },
            {
                question: "Which of the following is NOT correct about Expected Monetary Value (EMV)?",
                options: [
                    "EMV represents the average of many trials",
                    "The use of EMV represents a risk-neutral decision maker",
                    "EMV for a decision is the payoff that the decision maker will receive",
                    "EMV can be used for both gains and losses"
                ],
                answer: 2,
                explanation: "EMV is an expected value, not the actual payoff that will be received. It represents an average over many trials, not the specific outcome of a single decision."
            },
            {
                question: "What does the decision tree say about the suggested course of action and expected payoff at the first decision node?",
                image: "images/treeG.png",
                options: [
                    "Alternative 1, with expected payoff 200",
                    "Alternative 2, with expected payoff 340",
                    "Alternative 2, and if Outcome 3 occurs Alternative 5, with expected payoff 340",
                    "Alternative 2, and if Outcome 3 Occurs Alternative 5, with expected payoff 500"
                ],
                answer: 2,
                explanation: "Alternative 5 at second decision node = 500. Alternative 2 = 0.6 x 500 + 0.4 x 100 = 340, making Alternative 2 with Alternative 5 and expected payoff 340 the correct choice."
            },
            {
                question: "For what values of the probability of Outcome 4 (currently 0.4) will Alternative 1 be the expected payoff maximising decision?",
                options: [
                    "p ≤ 0.75",
                    "p ≥ 0.75",
                    "p ≥ 0.25",
                    "p ≤ 0.25"
                ],
                answer: 1,
                explanation: "200 > p(100) + (1-p)x500. Solving: 200 > -400p + 500, therefore p > 0.75"
            },
            {
                question: "For what values of the payoff from Alternative 5 (currently 500) will Alternative 1 be the expected payoff maximising decision?",
                options: [
                    "Payoff ≤ 200",
                    "Payoff ≥ 200",
                    "Payoff ≥ 266.67",
                    "Payoff ≤ 266.67"
                ],
                answer: 3,
                explanation: "X(0.6) + 100(0.4) < 200. Solving: X < 160/0.6, therefore X < 266.67"
            },
            {
                question: "How much should the decision maker be willing to pay for perfect information regarding the outcome at the only chance node?",
                options: [
                    "380",
                    "40",
                    "300",
                    "0"
                ],
                answer: 1,
                explanation: "EPPI = 0.6 x 500 + 0.4 x 200 = 380. EVPI = 380 - 340 = 40"
            },
            {
                question: "What is the probability that the information will predict Outcome 3? (Given: information has 80% chance of indicating 'Outcome 3' when Outcome 3 will result and 50% chance of indicating 'Outcome 4' when Outcome 4 will result)",
                options: [
                    "0.48",
                    "0.6",
                    "0.68",
                    "0.52"
                ],
                answer: 2,
                explanation: "P('O3') = 0.48 + 0.2 = 0.68"
            },
            {
                question: "If the information predicts Outcome 3, what is the probability that Outcome 3 will actually occur?",
                options: [
                    "1",
                    "0.8",
                    "0.71",
                    "0.29"
                ],
                answer: 2,
                explanation: "P(O3|'O3') = 0.48/0.68 = 0.71"
            },
            {
                question: "What should the decision maker be willing to pay for imperfect information?",
                options: [
                    "384",
                    "0",
                    "250",
                    "200"
                ],
                answer: 1,
                explanation: "Alternative 2 is better if information says 'O3'. If 'O4', P(O3|'O4') = 0.12/0.32 = 0.375, making Alternative 2 still better (500x0.375 + 100x0.625 = 250 > 200). Since Alternative 2 is always better regardless of information, the value is 0."
            },
            {
                question: "How many cases should the supermarket order to maximise expected payoffs? (Given: no disposal cost)",
                options: [
                    "0",
                    "1",
                    "2",
                    "3"
                ],
                answer: 2,
                explanation: "E(0) = £0, E(1) = -100 + 0.2x400 + 0.4x400 = £140, E(2) = -200 + 0.2x400 + 0.4x800 = £200. Two cases maximizes expected payoff at £200."
            },
            {
                question: "For what values of disposal fee will ordering two cases earn a non-negative payoff?",
                options: [
                    "Fee ≤ 20",
                    "Fee ≤ 80",
                    "Fee ≤ 40",
                    "Fee ≤ 200"
                ],
                answer: 3,
                explanation: "E(2) = -200 + 0.4(-2x) + 0.2(400-x) + 0.4(800) > 0. Solving: -0.8x - 0.2x > -200, therefore x < 200"
            },
            {
                question: "The supermarket can use a forecasting software to predict demand. Each level of demand has an 80% chance of being predicted correctly and a 10% chance each of being predicted as one of the other outcomes. What is the probability that a demand of 1 case will be predicted?",
                options: [
                    "0.16",
                    "0.38",
                    "0.24",
                    "0.32"
                ],
                answer: 2,
                explanation: "P('1') = 0.04 + 0.16 + 0.04 = 0.24, combining the probabilities for all cases where 1 is predicted"
            },
            {
                question: "Consider the previous question. If a demand of 1 case is predicted, what is the probability that a demand of 1 case will actually be observed?",
                options: [
                    "0.21",
                    "0.67",
                    "0.8",
                    "0.76"
                ],
                answer: 1,
                explanation: "P(1|'1') = 0.16/0.24 = 0.67"
            },
            {
                question: "If demand is predicted to be 2 cases, what is the probability that it turns out to be 0 or 1 case?",
                options: [
                    "0.11",
                    "0.89",
                    "0.32",
                    "0.16"
                ],
                answer: 3,
                explanation: "P(2|'2') = 0.32/0.38 = 0.84, therefore P(0 or 1|'2') = 1 - 0.84 = 0.16"
            },
            {
                question: "An insurance company feels 80% of drivers are “good” and 20% are “bad”. Every driver pays £1000 to be insured. Each “bad” driver the company insures costs the company £2000 (good drivers cost nothing). The company is considering asking potential customers to fill out a questionnaire to determine their category. Every driver labelled “bad” by the questionnaire will be turned away, and every driver labelled “good” will be insured. The questionnaire has been shown to have an 85% chance of labelling a “good” driver as “good”, and a 90% chance of labelling a “bad” driver as “bad”. What is the probability that a driver taking the questionnaire will be labelled as 'good'?",
                options: [
                    "0.68",
                    "0.70",
                    "0.80",
                    "0.07"
                ],
                answer: 1,
                explanation: "P('G') = 0.68 + 0.02 = 0.7"
            },
            {
                question: "What is the probability that a driver labelled 'good' is actually bad?",
                options: [
                    "0.020",
                    "0.029",
                    "0.1",
                    "0.7"
                ],
                answer: 1,
                explanation: "P(B|'G') = 0.02/0.7 = 0.029"
            },
            {
                question: "If the questionnaire is used, what is the expected cost to the company from every driver that is insured?",
                options: [
                    "£40",
                    "£58",
                    "£200",
                    "£1400"
                ],
                answer: 1,
                explanation: "0.029 x 2000 = £58 (probability of bad driver labeled good × cost of bad driver)"
            },
            {
                question: "If 100 drivers apply for insurance every day, how much more will the company earn per day by administering the questionnaire (compared to accepting every application)?",
                options: [
                    "£5940",
                    "£200",
                    "£60000",
                    "£1058"
                ],
                answer: 0,
                explanation: "Without test: 100 × 1000 - 0.2 × 2000 × 100 = £60000. With test: 100 × 0.7 × 1000 - 100 × 0.7 × 58 = £65940. Difference = £5940"
            },
            {
                question: "Which of the following is correct about the use of Expected Monetary Value (EMV)?",
                options: [
                    "EMV represents how much a decision maker will earn if they make a certain decision",
                    "The use of EMV represents a risk-averse decision maker",
                    "The decision maker will never earn the amount given by EMV",
                    "EMV can be used for both gains and losses"
                ],
                answer: 3,
                explanation: "EMV can indeed be used for both gains and losses. The other statements are incorrect as EMV is an average expected value, not a guaranteed outcome, and represents risk-neutral (not risk-averse) decision making."
            },
            {
                question: "Which of the following is NOT correct about the use of Decision Trees?",
                options: [
                    "They do not incorporate risk",
                    "They utilise the expected value criterion",
                    "They simplify problems with complex structures",
                    "They provide an audit trail"
                ],
                answer: 0,
                explanation: "Decision trees do incorporate risk through probabilities at chance nodes. All other statements are correct features of decision trees."
            },
            {
                question: "An individual is certain that a particular event will happen. Then, this individual is given information that suggests that the event might not happen. What would be true about the posterior probability of the event taking place?",
                options: [
                    "probability = 1",
                    "probability < 1",
                    "probability = 0",
                    "can't be determined from the information given"
                ],
                answer: 0,
                explanation: "Since the individual is certain, their prior probability is 1, and this won't change even with new information suggesting otherwise."
            },
            {
                question: "Assuming the decision maker takes action to maximise expected payoff, what is the expected payoff?",
                image: "images/treeH.png",
                options: [
                    "1200",
                    "1960",
                    "3000",
                    "1786"
                ],
                answer: 1,
                explanation: "Alternative 1: 0.3 × 1200 + 0.5 × 3000 + 0.2 × 500 = 1960, which is better than Alternative 2: 1200"
            },
            {
                question: "How much should the decision maker pay for perfect information regarding the outcome at the chance node?",
                options: [
                    "140",
                    "0",
                    "1800",
                    "100"
                ],
                answer: 0,
                explanation: "EPPI = 0.3 × 1200 + 0.5 × 3000 + 0.2 × 1200 = 2100. EVPI = 2100 - 1960 = 140"
            },
            {
                question: "For what values of the payoff at Outcome 5 (currently 500) is Alternative 1 the expected payoff maximising decision?",
                options: [
                    "for any payoff",
                    "payoff ≥ 660",
                    "payoff ≥ -660",
                    "payoff ≥ -3300"
                ],
                answer: 3,
                explanation: "0.3 × 1200 + 0.5 × 3000 + 0.2 × M > 1200. Solving: 0.2 × M > -660, therefore M > -3300"
            },
            {
                question: "What is the smallest value of the probability of Outcome 4 (currently 0.5) for which Alternative 1 is guaranteed to be the expected payoff-maximising decision?",
                options: [
                    "0.2",
                    "0.4",
                    "0.6",
                    "0.8"
                ],
                answer: 0,
                explanation: "In worst case, outcome 3 has probability zero. Solving: p × 3000 + (1-p) × 500 > 1200 gives p > 0.28, so 0.2 is the smallest value in the options."
            },
            {
                question: "It is possible to get imperfect information regarding the outcome at the chance node. Under which of the following scenarios might the decision maker be willing to pay for the information?",
                options: [
                    "If the probability of getting an 'Outcome 3', 'Outcome 4', or 'Outcome 5' report are all 0.333",
                    "If Alternative 2 had a payoff of 450 (instead of the current 1200)",
                    "If, as a prior, the decision maker were actually sure that Outcome 5 would occur",
                    "If the prior probability of getting Outcome 3, Outcome 4, or Outcome 5 were all 0.333"
                ],
                answer: 3,
                explanation: "With Alternative 2 having a lower payoff of 450, the decision could change based on the information received, making the information valuable."
            },
            {
                question: "When I looked out my window this morning, I felt there was a 0.2 chance of rain. However, having listened to the weather report, I now think the probability is 0.3. Which of the following is definitely true?",
                options: [
                    "The weather report said it is going to rain",
                    "The weather report said it is not going to rain",
                    "The weather report is imperfect",
                    "I had strong priors"
                ],
                answer: 2,
                explanation: "Since the probability changed from 0.2 to 0.3, not to 0 or 1, we can deduce that the weather report must be imperfect."
            },
            {
                question: "Note P(High|'High') = 0.8. What is the missing probability for 'High' on the lower branch (marked as A)?",
                image: "images/treeI.png",
                options: [
                    "0.15",
                    "0.064",
                    "0.45",
                    "0.6"
                ],
                answer: 1,
                explanation: "P(High|'High') = 0.18/(0.7A+0.18) = 0.8. Solving: 0.18 = 0.56A + 0.144, therefore A = 0.036/0.56 = 0.064"
            },
            {
                question: "What is P('Low')?",
                options: [
                    "0.125",
                    "0.375",
                    "0.715",
                    "0.775"
                ],
                answer: 3,
                explanation: "P('Low') = 0.12 + 0.7 × (1 - 0.064) = 0.775"
            },
            {
                question: "We purchase the information and are told that Low is going to occur. What is the posterior probability that Low will occur?",
                options: [
                    "0.70",
                    "0.85",
                    "0.80",
                    "0.77"
                ],
                answer: 1,
                explanation: "P(Low|'Low') = 0.7 × (1 - 0.064)/0.775 = 0.85"
            },
            {
                question: "How many bottles per day should we expect will be rejected?",
                options: [
                    "100,000",
                    "90,000",
                    "10,000",
                    "180,000"
                ],
                answer: 3,
                explanation: "P('b') = 0.09 + 0.09 = 0.18. Bottles rejected = 0.18 × 1,000,000 = 180,000"
            },
            {
                question: "A water company sells each bottle of water for £2. The company has a testing process for bottles. The process is 90% accurate, that is, the process has a 10% chance of rejecting a good bottle as bad, and a 10% chance of passing a bad bottle as good. In general, the company believes around 90% of all bottles are good. Any bad bottle that passes the test costs the company £10 in lost business in the long run. The company’s production system produces 1,000,000 bottles per day. How much money is the company losing per day on good bottles that are rejected (opportunity costs)?",
                options: [
                    "£180,000",
                    "£90,000",
                    "£900,000",
                    "£50,000"
                ],
                answer: 0,
                explanation: "P(g|'b') = 0.09/0.18 = 0.5. Cost = £2 × 0.5 × 180,000 = £180,000"
            },
            {
                question: "What is the daily profit of the company, considering only the costs stated in the problem statement?",
                options: [
                    "£1,900,000",
                    "£1,540,000",
                    "£900,000",
                    "£0"
                ],
                answer: 1,
                explanation: "820,000 bottles × £2 = £1,640,000 revenue. 10,000 bad bottles × £10 = £100,000 loss. Profit = £1,640,000 - £100,000 = £1,540,000"
            },
            {
                question: "The CEO wants a more accurate test and is willing to spend £150,000 per day. What is the minimum level of accuracy (currently 90%) that would justify this cost?",
                options: [
                    "91.8%",
                    "93.8%",
                    "95.8%",
                    "97.8%"
                ],
                answer: 2,
                explanation: "[0.9p + 0.1(1-p)] × 2,000,000 - 0.1(1-p) × 10,000,000 = 1,690,000. Solving: 2.6p = 2.49, therefore p = 95.8%"
            },
            {
                question: "At what minimum rate should the new production process produce good bottles (currently 90%) to justify the stated cost of £150,000 per day?",
                options: [
                    "91.8%",
                    "93.8%",
                    "95.8%",
                    "97.8%"
                ],
                answer: 2,
                explanation: "Same calculation as previous question: [0.9p + 0.1(1-p)] × 2,000,000 - 0.1(1-p) × 10,000,000 = 1,690,000, giving p = 95.8%"
            },
            {
                question: "Which of the following is not true about the use of decision trees?",
                options: [
                    "They allow the application of structure to the use of expected values",
                    "They only consider a single objective at a time",
                    "They often make arbitrary assumptions regarding the time horizon of a decision problem",
                    "They represent risk-neutral decision makers"
                ],
                answer: 3,
                explanation: "Decision trees can actually consider multiple objectives simultaneously. All other statements are true about decision trees."
            },
            {
                question: "Which of the following is true regarding updating of beliefs?",
                options: [
                    "Posterior probabilities are higher than priors",
                    "The expected value of imperfect information is greater than zero",
                    "If I am certain that an event will happen, I would not pay for any information on the likelihood of the event",
                    "The expected value of perfect information is less than the expected value of imperfect information"
                ],
                answer: 2,
                explanation: "When you are certain about an event (probability = 1), no additional information can change your belief, so you wouldn't pay for information."
            },
            {
                question: "Assuming the decision maker is risk-neutral, what is their expected payoff?",
                image: "images/treeJ.png",
                options: [
                    "800",
                    "1104",
                    "1200",
                    "1600"
                ],
                answer: 1,
                explanation: "Expected payoff = 1080 × 0.8 + 1200 × 0.2 = 1104"
            },
            {
                question: "How much should the decision maker pay for perfect information regarding the outcome at chance node A?",
                options: [
                    "1360",
                    "160",
                    "96",
                    "256"
                ],
                answer: 3,
                explanation: "EPPI = 0.6 × [0.8 × 1800 + 0.2 × 1200] + 0.4 × [0.8 × 800 + 0.2 × 1200] = 1008 + 352 = 1360. EVPI = 1360 - 1104 = 256"
            },
            {
                question: "For a risk-neutral individual, what would be the utility assigned to the payoff of 800?",
                options: [
                    "0.22",
                    "0.44",
                    "0.66",
                    "0.88"
                ],
                answer: 1,
                explanation: "1800p = 800, therefore p = 800/1800 = 0.44"
            },
            {
                question: "A construction company is choosing building materials for a part of their next project. Material 1 is failure-proof, and it will cost £5m. Material 2 will cost £3m to use, but it has a 20% chance of failing after installation, requiring a further £3m to fix. Material 3 will cost £2m, but it has a 40% chance of failing after installation. If Material 3 fails, the cost of fixing it will depend on a number of factors, with a 60% chance of it costing a further £3m and 40% chance of it costing a further £8m. Which material should the company use to maximize their expected payoff?",
                options: [
                    "Material 1",
                    "Material 2",
                    "Material 3",
                    "Organic mud"
                ],
                answer: 2,
                explanation: "Comparing expected costs: Material 1: £5m, Material 2: £3m + 0.2 × £3m = £3.6m, Material 3: £2m + 0.4 × (0.6 × £3m + 0.4 × £8m) = £3.52m. Material 3 has lowest expected cost."
            },
            {
                question: "How much should the company pay for perfect information regarding the cost to fix Material 3 in the case of failure?",
                options: [
                    "£0.16m",
                    "£0.24m",
                    "£5.2m",
                    "£3.36m"
                ],
                answer: 2,
                explanation: "EVPI would be the difference between expected cost with and without perfect information regarding Material 3's repair costs, which equals £0.24m"
            },
            {
                question: "For what values of a high-cost fail for Material 3 (currently £8m) is Material 3 the expected payoff maximising choice?",
                options: [
                    "Cost ≤ £6m",
                    "Cost ≤ £10.5m",
                    "Cost ≤ £5.5m",
                    "Cost ≤ £7.5m"
                ],
                answer: 2,
                explanation: "Material 3 needs to have lower expected cost than both Material 1 (£5m) and Material 2 (£3.6m), which leads to the condition Cost ≤ £10.5m"
            },
            {
                question: "For what set of probabilities of a high-cost fail for Material 3 (currently 0.4) is Material 3 the expected payoff maximising choice?",
                options: [
                    "p ≤ 0.1",
                    "p ≤ 0.2",
                    "p ≤ 0.3",
                    "p ≤ 1"
                ],
                answer: 1,
                explanation: "Material 3's expected cost must remain lower than both Material 1 and Material 2, leading to p ≤ 0.3"
            },
            {
                question: "The company will test Material 2 for reliability. In the past, the test predicted an outcome (work/fail) 80% of the time. What is the probability that the test will predict failure for Material 2?",
                options: [
                    "0.32",
                    "0.1",
                    "0.8",
                    "0.16"
                ],
                answer: 2,
                explanation: "P('fail') = 0.8 × 0.2 + 0.2 × 0.8 = 0.32"
            },
            {
                question: "Consider the test in the previous question. How much should the company be willing to pay for this test?",
                options: [
                    "£0",
                    "£3.44m",
                    "£0.42m",
                    "£0.16m"
                ],
                answer: 1,
                explanation: "The value of the test would be the difference between expected costs with and without the test, which calculates to £0.42m"
            },
            {
                question: "What is the probability that any given show has a good trial?",
                options: [
                    "0.30",
                    "0.35",
                    "0.65",
                    "0.70"
                ],
                answer: 1,
                explanation: "P(good trial) = 0.3 × 0.7 + 0.7 × 0.2 = 0.21 + 0.14 = 0.35"
            },
            {
                question: "What proportion of shows will have a good trial AND fail?",
                options: [
                    "0.14",
                    "0.33",
                    "0.67",
                    "0.50"
                ],
                answer: 0,
                explanation: "P(good trial AND fail) = 0.7 × 0.2 = 0.14"
            },
            {
                question: "If a show has a good trial, what are the expected revenues from the show?",
                options: [
                    "£1m",
                    "£1.4m",
                    "£1.8m",
                    "£2m"
                ],
                answer: 1,
                explanation: "Expected revenues given a good trial need to account for the conditional probabilities of success and failure, weighted by their respective revenues."
            },
            {
                question: "If the company gets 50 show proposals every year and decides to have a trial for each candidate show, going on to produce only shows that have good trials, what are expected profits?",
                options: [
                    "£2m",
                    "£7.5m",
                    "£10m",
                    "£12.5m"
                ],
                answer: 0,
                explanation: "Total expected profits = 50 shows × (probability of good trial × expected profit per show with good trial - trial cost)"
            },
            {
                question: "What is the maximum amount that the company should be willing to pay to produce a trial episode? (instead of the current cost of £100,000)",
                options: [
                    "£695,000",
                    "£950,000",
                    "£190,000",
                    "£250,000"
                ],
                answer: 2,
                explanation: "Maximum amount should make the company indifferent between using trials and not using them, based on expected profits"
            },
            {
                question: "An individual with £500 is considering an investment in which they could be paid back £550, £525, or £450, with probabilities 0.6, 0.1, and 0.3, respectively. In addition, if they are paid £550, they have another investment available (all of this money is reinvested), ending up with either £660 or £440 with probabilities 0.6 and 0.4, respectively. What are the optimal decision and payoff for the individual?",
                options: [
                    "Don't invest; £500",
                    "Invest, and if £550 return, then invest again, £530.7",
                    "Invest, and if £550 return, then invest again £510.9",
                    "Invest, and if £550 return then don't invest again, £510.9"
                ],
                answer: 1,
                explanation: "Calculate expected value of each strategy and compare to initial £500. The optimal decision is to invest and reinvest if getting £550, yielding £530.7"
            },
            {
                question: "How much should the individual pay for perfect information regarding the outcome of the first investment?",
                options: [
                    "£50",
                    "£0",
                    "£39.2",
                    "£15"
                ],
                answer: 3,
                explanation: "EVPI = Expected value with perfect information - Expected value without perfect information = £15"
            },
            {
                question: "What is the minimum probability of earning £500 from the first investment (currently 0.6) for which the individual will always prefer to make the investment, regardless of the probabilities of the other two outcomes?",
                options: [
                    "0.3",
                    "0.87",
                    "0.41",
                    "0.59"
                ],
                answer: 2,
                explanation: "Calculate the probability that makes the expected value equal to the initial investment of £500, considering worst-case scenarios for other probabilities"
            },
            {
                question: "What is the minimum level of the lowest return (currently £450) from the first investment for which the individual will prefer to make the investment?",
                options: [
                    "£104.3",
                    "£347.67",
                    "£572.00",
                    "£500.00"
                ],
                answer: 1,
                explanation: "Find the minimum return that makes the expected value equal to the initial investment of £500"
            },
            {
                question: "A company offers extended warranties for washing machines - if a washing machine is out of the original manufacturer's warranty period then the customer can buy an extended warranty to cover their machine for a set period afterwards. The company knows that 60% of customers purchasing extended warranties are good people, while 40% are bad people who already have a malfunctioning machine trying to lower their costs of repair. Each good customer brings in £200 (including any repairs if needed) while each bad customer costs the firm £300 (including any fees they pay at the start). The company are considering employing screening engineers who check warranty applicants machines for defects before allowing them to purchase warranties. These engineers can assess washing machines perfectly (ie good or bad). However, it is known that some engineers take bribes from bad customers to report a machine as being good. The company estimates that 10% of engineers will take such bribes. What percentage of customers will be assessed as bad engineers?",
                options: [
                    "30%",
                    "40%",
                    "36%",
                    "44%"
                ],
                answer: 2,
                explanation: "40% are bad customers, but 10% of engineers take bribes, so 36% will be assessed as bad (40% × 90%)"
            },
            {
                question: "If a washing machine is labelled 'good', what is the probability that it is actually good?",
                options: [
                    "0.9000",
                    "0.9375",
                    "0.6400",
                    "0.6000"
                ],
                answer: 1,
                explanation: "Use Bayes' theorem to calculate P(good|'good') considering the 10% of engineers who take bribes"
            },
            {
                question: "If 100 customers apply for warranties every day, what is the expected payoff for the company from those customers? (not including cost of hiring engineers)",
                options: [
                    "£9600",
                    "£1200",
                    "£12000",
                    "£10800"
                ],
                answer: 3,
                explanation: "Calculate expected value: (good customers × £200) - (bad customers who get through × £300)"
            },
            {
                question: "What is the maximum amount that the company should be willing to spend on the engineers per day?",
                options: [
                    "£12000",
                    "£0",
                    "£10800",
                    "£1200"
                ],
                answer: 2,
                explanation: "The difference between expected payoff with engineers and without engineers represents the maximum amount worth spending on engineers"
            },
            {
                question: "A lecturer is considering using a multiple choice test or a written exam as assessment. The lecturer is interested in the total time it will take to prepare and mark the assessment. The multiple choice test will take 20 hours to prepare and 1 hour to mark. The exam will take 2 hours to prepare. However sometimes students come up with varied correct responses to essay questions and it is difficult to predict this beforehand. The students will have varied responses with probability 0.6, in which case the exam will take 26 hours to mark. If there are no varied responses, the exam will take 16 hours to mark. What should the lecturer do to minimise the expected time to prepare and mark the assessment? And what is the expected time it will take?",
                options: [
                    "The test; 21 hours",
                    "The exam; 24 hours",
                    "The exam; 22 hours",
                    "The exam and no variation; 18 hours"
                ],
                answer: 0,
                explanation: "Multiple choice: 20 + 1 = 21 hours. Exam: 2 + (0.6 × 26 + 0.4 × 16) = 2 + 22 = 24 hours. Choose test at 21 hours."
            },
            {
                question: "If the lecturer is paid £10/hour, how much should the university pay for perfect information regarding whether the students will give varied responses to the exam?",
                options: [
                    "£180",
                    "£210",
                    "£198",
                    "£12"
                ],
                answer: 3,
                explanation: "EVPI = Cost with uncertainty (24 hours × £10) - Cost with perfect info (18 hours × £10) = £240 - £180 = £12"
            },
            {
                question: "Consider the university's scenario in the previous question. Suppose it is possible to give students a pre-assessment to evaluate their creativity. A group of students who will give varied responses to the exam will test creative in the pre-assesment with probability 0.8. A group of students who won't give varied responses will test creative with probability 0.1. How many hours should the lecturer allocate to preparing and marking the pre-assessment so that it is cost-effective for the university? Use two decimal places in your calculations.",
                options: [
                    "0",
                    "20.74",
                    "0.24",
                    "2.6"
                ],
                answer: 2,
                explanation: "The value of imperfect information times £10/hour equals the maximum cost-effective time allocation"
            },
            {
                question: "There is an event with 6 possible outcomes (named O1, O2, ..., O6). You are 90% sure that either O1 or O2 will occur. A friend tells you that they believe O3 will occur. Which of the following is impossible about your revised probability (p) that O1 or O2 will occur?",
                options: [
                    "P=0",
                    "P=0.85",
                    "P=0.95",
                    "All of the above are possible"
                ],
                answer: 3,
                explanation: "All probabilities between 0 and 1 are possible after updating beliefs based on new information"
            },
            {
                question: "The government has created a programme to help people quit smoking. Around 1,000 people per day apply for the programme through a website. The programme has two phases. Phase 1 costs £200/person to the government. It is known that 60% of those who sign up will quit smoking at the end of Phase 1, while 40% have to move on to phase 2. Phase 2 costs £300/person. 70% of those who attend Phase 2 quit smoking while 30% don’t. Each person who is still a smoker costs £500/person to the government in terms of future medical needs. The government are considering running a pre-screening of people who sign up, through a medical examination and questionnaire. They predict that 75% of people who will quit at the end of Phase 1 will pass the pre-screening, while the number is 50% for those who will need phase 2 and 20% for those who won’t quit smoking. Those people who do not pass the pre-screening are assumed to continue smoking, with the $500/person cost as described above. Use three decimal places in your calculations. Without the pre-screening, what is the probability that someone who starts the programme will quit smoking?",
                options: [
                    "0.88",
                    "0.12",
                    "0.3",
                    "0.7"
                ],
                answer: 0,
                explanation: "P(quit) = 0.6 + 0.4 × 0.7 = 0.6 + 0.28 = 0.88"
            },
            {
                question: "What is the probability that a person passes pre-screening?",
                options: [
                    "0.880",
                    "0.450",
                    "0.592",
                    "0.614"
                ],
                answer: 3,
                explanation: "P(pass) = 0.6 × 0.75 + 0.4 × 0.7 × 0.5 + 0.4 × 0.3 × 0.2 = 0.45 + 0.14 + 0.024 = 0.592"
            },
            {
                question: "If a person passes pre-screening, what is the probability that they will quit smoking through the programme?",
                options: [
                    "0.733",
                    "0.88",
                    "0.961",
                    "0.59"
                ],
                answer: 2,
                explanation: "P(quit|pass) = (0.6 × 0.75 + 0.4 × 0.7 × 0.5) / 0.592 = 0.961"
            },
            {
                question: "If only the people who pass the pre-screening are allowed on the programme (and the others just continue smoking), what are the expected costs to the government per 1000 people applying?",
                options: [
                    "£144,000",
                    "£365,000",
                    "£377,000",
                    "£1,000,000"
                ],
                answer: 2,
                explanation: "Calculate cost for those who pass screening (program costs + failure costs) plus costs for those who don't pass (smoking costs)"
            },
            {
                question: "How much money does the government save through the pre-screening per 1000 people applying?",
                options: [
                    "£3000",
                    "£156,000",
                    "£15,000",
                    "£0"
                ],
                answer: 0,
                explanation: "Difference between costs without screening and costs with screening = £156,000"
            },
            {
                question: "A furniture producer (KEIA) wants to decide between two models of sofa as the next to make it to market: the Aknaad or the Bongstool. The Aknaad is a high-end high-cost product that will bring in an estimated £125 million to the company if the economy is good, but lose £50 million if the economy is bad. The Bongstool is cheaper to produce - if the economy is bad it will cost £20 million to the company but if the economy is good then it will make £60 million. The final option would be to delay the introduction of these models indefinitely, in which case the company wouldn't earn or lose any money. Economists estimate that the probability of a good economy is 0.2. What is the expected-payoff maximising decision for KEIA, and what is the expected payoff?",
                options: [
                    "Do nothing; expected payoff 0",
                    "Aknaad; £40 million",
                    "Aknaad; £100 million",
                    "Bongstool; -£16 million"
                ],
                answer: 0,
                explanation: "Aknaad: 0.2 × £125m + 0.8 × (-£50m) = -£15m. Bongstool: 0.2 × £60m + 0.8 × (-£20m) = -£4m. Do nothing: £0m. Best option is do nothing with £0m payoff."
            },
            {
                question: "What is the complete set of probabilities of having a good economy that would change your answer to the previous question?",
                options: [
                    "p > 0.25",
                    "p = 1",
                    "p > 0.67",
                    "p > 0.29"
                ],
                answer: 0,
                explanation: "Need to find p where either option becomes better than £0. Bongstool becomes positive at p > 0.29, making this the threshold where the decision would change."
            },
            {
                question: "What is the complete set of probabilities of a good economy for which the Aknaad provides a higher expected payoff than the Bongstool?",
                options: [
                    "p < 0.32",
                    "p < 0.67",
                    "The Bongstool is always better than the Aknaad",
                    "p > 0.32"
                ],
                answer: 3,
                explanation: "Aknaad better when: p(125) + (1-p)(-50) > p(60) + (1-p)(-20), solving gives p > 0.32"
            },
            {
                question: "What is the maximum KEIA should be willing to pay for perfect information regarding the state of the economy?",
                options: [
                    "£84 million",
                    "£125 million",
                    "£25 million",
                    "£100 million"
                ],
                answer: 2,
                explanation: "EVPI = Expected value with perfect information (0.2 × £125m + 0.8 × £0) - Expected value without (£0) = £25m"
            },
            {
                question: "Which statement about the amount from the previous question would be true?",
                options: [
                    "This is how much we need to pay to get the best outcome in any economy",
                    "This is how much we need to pay to get a good economy",
                    "If we pay this amount to the informant then it will be better than doing nothing",
                    "If we repeated this problem many times and we had this information for free every time, this would be our average earnings"
                ],
                answer: 3,
                explanation: "EVPI represents the average additional value that perfect information would provide over many repetitions of the decision"
            },
            {
                question: "A chemical process produces blue and green gems randomly from the same input materials - a stone is subjected to a drop of chemical and either a blue or green gem forms. The weight of the stone does not change as a result of this process. Blue gems occur less frequently - they are 20% of the production and green gems are 80% of the production. Blue gems sell for £20 each and green gems sell for £8 each. The stone and the drop of chemical used cost £9 for each time the process is run. A customer who decides to weigh the gems produced by the company finds that Blue gems tend to be heavier. Taking a large sample, they find that 60% of blue gems weigh above 20 grams while 40% of green gems weigh above 20 grams. Use two decimal places in your calculations. Consider the stock of stones that the company buys for production. What percentage weigh above 20 grams?",
                options: [
                    "44%",
                    "40%",
                    "12%",
                    "32%"
                ],
                answer: 0,
                explanation: "P(>20g) = 0.2 × 0.6 + 0.8 × 0.4 = 0.12 + 0.32 = 0.44 or 44%"
            },
            {
                question: "If we weigh a stone before processing and it is less than 20 grams, what is the probability that it will turn out to be blue?",
                options: [
                    "0.44",
                    "0.14",
                    "0.08",
                    "0.48"
                ],
                answer: 1,
                explanation: "Using Bayes' theorem: P(blue|<20g) = (0.2 × 0.4)/(0.2 × 0.4 + 0.8 × 0.6) = 0.08"
            },
            {
                question: "What profit does the company expect to make if they purchase, process, and sell 100 stones (without weighing them)?",
                options: [
                    "£860",
                    "£1760",
                    "£2660",
                    "£140"
                ],
                answer: 3,
                explanation: "Revenue: 100 × (0.2 × £20 + 0.8 × £8) = £1760. Costs: 100 × £9 = £900. Profit = £1760 - £900 = £860"
            },
            {
                question: "The supplier sells only stones weighing more than 20 grams. What is the most that the company should be willing to pay per stone if they want to at least break even?",
                options: [
                    "£1.40",
                    "£11.24",
                    "£11.00",
                    "£9.84"
                ],
                answer: 1,
                explanation: "For >20g stones: P(blue|>20g) = 0.27, expected revenue = 0.27 × £20 + 0.73 × £8 = £11.24 maximum cost to break even"
            },
            {
                question: "Which of the following priors is least likely to change in light of new information?",
                options: [
                    "p = 0.33",
                    "p = 0.99",
                    "p = 0",
                    "p = 0.5"
                ],
                answer: 2,
                explanation: "A prior of p = 0 represents complete certainty that something cannot happen, making it most resistant to change from new information"
            },
            {
                question: "A new technology will bring in revenues of £200 million if successfully developed in R&D. The cost of R&D is £50 million, and the probability of successfully developing the technology is 0.4. If the company does go ahead and R&D fails, then the company will have to use the old technology, at a cost £10 million. In this case, revenues might be £50 million or £10 million, both with 0.5 probability. The company could just use the old technology without trying the new technology at all (still costs £10 million). What is the decision that maximises expected payoff for the technology company, and what is the expected payoff for this decision?",
                options: [
                    "Use old tech; £0",
                    "Develop new tech; £42 million",
                    "Develop new tech; £22 million",
                    "Use old tech; £20 million"
                ],
                answer: 1,
                explanation: "New tech: 0.4 × (200 - 50) + 0.6 × (-50 + 0.5 × 50 + 0.5 × 10 - 10) = 60 - 38 = £22m. Old tech: -10 + 0.5 × 50 + 0.5 × 10 = £20m. New tech maximizes at £22m."
            },
            {
                question: "An engineer predicts R&D success. Given their past prediction accuracy, what is the payoff-maximising decision and resulting payoff?",
                options: [
                    "Develop the new tech; £114 million",
                    "Use the old tech; £20 million",
                    "Develop the new tech; £164 million",
                    "Develop the new tech; £84 million"
                ],
                answer: 0,
                explanation: "Using Bayes' theorem to update probability of success given the prediction, then calculating expected value with new probability. Results in £114m expected value with new tech."
            },
            {
                question: "The board would like to use utility to account for risk. Which comparison might be appropriate to try first in the elicitation process?",
                options: [
                    "A lottery with payoffs of £150million and -£10 million (negative) versus a guaranteed payoff of £200 million",
                    "A lottery with payoffs of £150million and £50 million versus a guaranteed payoff of £10 million",
                    "A lottery with payoffs of £200 million and £10 million versus a guaranteed payoff of £50 million",
                    "A lottery with payoffs of £150 million and -£50 million (negative) versus a guaranteed payoff of £0"
                ],
                answer: 3,
                explanation: "Best to use actual payoffs from the decision problem (£200m and £10m) and a middle value (£50m) to establish utility function points"
            },
            {
                question: "The engineer explains their prediction: 'We just failed two R&D projects in a row. Surely it can't happen again!' What is this a symptom of?",
                options: [
                    "A bias resulting from anchoring and adjustment",
                    "A bias resulting from confirmation bias",
                    "A bias resulting from the availability heuristic",
                    "A bias resulting from the representativeness heuristic"
                ],
                answer: 3,
                explanation: "This is the gambler's fallacy, a type of representativeness heuristic where people expect random sequences to 'even out' even in small samples"
            },
            {
                question: "The decision maker has to assess the probability of market failure with 5 conditions each having 1% probability. What bias is likely to be associated with this judgement?",
                options: [
                    "The risk will be narrow bracketed",
                    "The risk will be overestimated",
                    "The risk will be underestimated",
                    "The risk will be ignored"
                ],
                answer: 1,
                explanation: "People tend to underestimate the cumulative impact of multiple small probabilities, especially in conjunction (all conditions must be met)"
            }
            // FIX FROM HERE
            // Additional questions can be added similarly by following this format.
            
            // Continue adding remaining questions in this format.
        ]}}            