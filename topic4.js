const topics4 = {
    "Topic 4: Utiliy": {
        questions: [
            {
                question: "A gamble will earn £100 with probability p and £10 with probability (1-p). What is the value of p at which a risk-neutral individual would be indifferent between the gamble and a guaranteed payment of £50?",
                options: [
                    "0.33",
                    "0.44",
                    "0.55",
                    "0.66"
                ],
                answer: 1,
                explanation: "For a risk-neutral individual: 100p + 10(1-p) = 50. Solving: 100p + 10 - 10p = 50, 90p = 40, p = 40/90 = 0.44"
            },
            {
                question: "Given a utility table where U(£1000)=1, U(£500)=0.3, U(£200)=0.2, U(-£100)=0, the decision-maker is most likely:",
                image: "images/table1.png",
                options: [
                    "Risk-averse",
                    "Risk-neutral",
                    "Risk-seeking",
                    "Risk-adjusted"
                ],
                answer: 2,
                explanation: "Testing with expected values: 0.3×1000 + 0.7×(-100) = 230 < 500 and 0.2×1000 + 0.8×(-100) = 120 < 200. The decision maker prefers gambles over guaranteed amounts, indicating risk-seeking behavior"
            },
            {
                question: "Given a utility table with U(£500)=1, U(X)=0.5, U(Y)=0.25, U(£0)=0, which is the most likely combination of (X,Y) for a risk-averse decision maker?",
                image: "images/table2.png",
                options: [
                    "(£400, £300)",
                    "(£300, £100)",
                    "(£150, £300)",
                    "(£200, £100)"
                ],
                answer: 3,
                explanation: "For risk-averse behavior, X should be less than £250 (as 500×0.5 + 0×0.5 = £250) and Y should be less than £125 (as 500×0.25 + 0×0.75 = £125). (£200, £100) satisfies these conditions."
            },
            {
                question: "Which of the following is true?",
                options: [
                    "A risk-seeking individual will always prefer a gamble over a guaranteed payment",
                    "It is possible to use utilities for non-monetary payoffs",
                    "An individual's income level has no influence on whether they would take a gamble",
                    "There are many ways of eliciting an individual's utility function, all of which will provide the same outcome"
                ],
                answer: 1,
                explanation: "Utilities can indeed be used for non-monetary payoffs - this is one of their key advantages. The other statements are false: risk-seeking doesn't guarantee preferring all gambles, income level does influence decisions, and different elicitation methods can give different results."
            },
            {
                question: "Which of the following is NOT true about utility?",
                options: [
                    "The inherent risk in a decision problem does not depend on the decision maker approaching the problem",
                    "Sensitivity analysis can be used to address the shortcomings of the elicitation process",
                    "The same individual may provide different utility functions at different times of the day",
                    "Utility can be used for decisions involving several objectives"
                ],
                answer: 0,
                explanation: "The inherent risk perception DOES depend on the decision maker - different people perceive and evaluate risks differently. All other statements are true about utility."
            },
            {
                question: "Given a risk-neutral utility function, which of the following is NOT true about this decision maker?",
                image: "images/table3.png",
                options: [
                    "The Expected Monetary Value criterion sufficiently represents their risk preferences",
                    "They might be willing to pay £150 for a lottery ticket with a 50% chance of winning £250",
                    "The Expected Monetary Value and Expected Utility criteria will point to exactly the same optimal decision in a decision problem",
                    "They might be willing to pay £50 for a lottery ticket with a 30% chance of winning £200"
                ],
                answer: 1,
                explanation: "For a risk-neutral decision maker, they would only pay up to expected value: 250×0.5 = £125. Paying £150 exceeds this and thus isn't consistent with risk-neutral behavior."
            },
            {
                question: "You are offered a lottery ticket that has a 10% chance of winning £1000 and 90% chance of winning nothing. Which amount should you be willing to pay to exhibit risk-averse behavior?",
                options: [
                    "£90",
                    "£100",
                    "£110",
                    "£120"
                ],
                answer: 0,
                explanation: "Expected value = 0.1×1000 + 0.9×0 = £100. A risk-averse individual would pay less than expected value, so £90 is the correct answer."
            },
            {
                question: "Which of the following is NOT true about an individual's risk behaviour?",
                options: [
                    "It is context-dependent",
                    "It is time-dependent",
                    "It is income level-dependent",
                    "All of the above are true about an individual's risk behaviour"
                ],
                answer: 3,
                explanation: "All statements (context-dependent, time-dependent, and income level-dependent) are true characteristics of risk behavior, making the answer 'All of the above are true' incorrect as it suggests one isn't true."
            },
            {
                question: "Which of the following is true about utilities?",
                options: [
                    "Once an individual's utility function has been elicited, it does not need to be elicited again for different decision problems",
                    "The way lotteries are presented to decision makers in elicitation influences the derived utility function",
                    "It is easier to derive utility functions for groups rather than individuals",
                    "People at the same income level will have similar utility functions"
                ],
                answer: 1,
                explanation: "The presentation format of lotteries can affect the elicited utility function - this is known as framing effect. The other statements are false as utility functions are context-specific, individual-specific, and not solely determined by income level."
            },
            {
                question: "Which of the following is NOT an advantage of using utilities in modelling decision problems?",
                options: [
                    "Utilities consider the decision maker's attitude towards risk",
                    "Utilities consider the 'spread' of possible outcomes in a decision problem",
                    "Utilities allow the decision maker to receive higher expected payoffs",
                    "Utilities are unitless"
                ],
                answer: 2,
                explanation: "Utilities don't guarantee higher expected payoffs - they just help model risk preferences. All other options are genuine advantages of using utilities."
            },
            {
                question: "A decision maker prefers a guaranteed £300 over a gamble of £500 (p=0.7) and -£200 (p=0.3). What is the most likely value of the utility of £300?",
                options: [
                    "0.3",
                    "0.5",
                    "0.7",
                    "0.9"
                ],
                answer: 3,
                explanation: "The decision maker's preference indicates strong risk aversion, meaning the utility of the guaranteed amount needs to be higher than the expected utility of the gamble, making 0.9 most likely."
            },
            {
                question: "Given a specific utility function, which statement is most likely true about the decision maker's preferences?",
                image: "images/table4.png",
                options: [
                    "The decision maker would prefer a guaranteed payment of £400 over a lottery ticket with a 60% of winning £600",
                    "The decision maker would be indifferent between a guaranteed payment of £300 and a lottery ticket with 50% chance of winning £600",
                    "The decision maker would prefer a lottery ticket with a 20% chance of winning £600 over a guaranteed payment of £100",
                    "The decision maker would prefer a lottery ticket with a 10% chance of winning £600 over a guaranteed payment of £300"
                ],
                answer: 2,
                explanation: "Looking at the utility curve and comparing expected utilities: for 20% chance of £600 vs £100, the lottery ticket has higher expected utility making option c true."
            },
            {
                question: "Which gives the best action and maximum expected utility for the given decision tree?",
                image: "images/table5.png",
                options: [
                    "Alternative 1, utility = 0.7",
                    "Alternative 1, utility = 0.4",
                    "Alternative 2, utility = 0.6",
                    "Alternative 2, utility = 0.4"
                ],
                answer: 0,
                explanation: "Alternative 1: 1 × 0.7 = 0.7. Alternative 2: 0.6 × 0.5 + 0.4 × 0.2 = 0.38. Alternative 1 gives higher utility of 0.7."
            },
            {
                question: "Which of the following statements is true about utility?",
                options: [
                    "A decision maker's utility function, when elicited, can be used for similar decisions in the future",
                    "Elicited utility functions for decision makers facing similar decisions will also be similar",
                    "The utility for a low-EMV alternative might be larger than the utility of a high-EMV alternative",
                    "The ordering of outcomes will be the same regardless of whether they are ordered according to utility or EMV"
                ],
                answer: 2,
                explanation: "A low-EMV alternative can have higher utility than a high-EMV alternative due to risk preferences, making this the only true statement among the options."
            },
            {
                question: "Which of the following is NOT an advantage of using utilities?",
                options: [
                    "Utilities allow specialisation to certain types of decision problems",
                    "Utilities allow the risk inherent in a decision problem to be measured",
                    "Utilities allow an individual's perceived amount of risk in a decision problem to be measured",
                    "Utilities allow the risk preference of an individual to be measured"
                ],
                answer: 0,
                explanation: "Specialization to certain types of problems is not an advantage of utilities - in fact, utility functions often need to be re-elicited for different types of problems."
            },
            {
                question: "According to Tversky and Kahneman, which scenario would be most likely for a decision maker?",
                options: [
                    "Choosing a gamble with 50% chance of earning £600 and 50% chance of earning £0 over a guaranteed payment of £300",
                    "Choosing a gamble with 80% chance of earning £1000 and 20% chance of earning £0 over a guaranteed payment of £800",
                    "Choosing a gamble with 80% chance of losing £1000 and 20% chance of losing £0 over a guaranteed loss of £800",
                    "Choosing a guaranteed loss of £300 over a gamble with 50% chance of losing £600 and 50% chance of losing £0"
                ],
                answer: 2,
                explanation: "According to T&K, people are risk-averse for gains but risk-seeking for losses. Option c involves losses and shows risk-seeking behavior."
            },
            {
                question: "Given a utility table (£1000=1, X=0.75, Y=0.5, £200=0), which pair of (X,Y) values is most likely for a risk-averse decision maker?",
                image: "images/table6.png",
                options: [
                    "(900, 800)",
                    "(800, 600)",
                    "(900, 500)",
                    "(600, 400)"
                ],
                answer: 3,
                explanation: "A risk-averse individual accepts less money than expected value to avoid risk. For X, should be less than £800 (1000×0.75 + 200×0.25), and for Y less than £600. (600, 400) best matches this pattern."
            },
            {
                question: "Which behavior is consistent with Tversky and Kahneman's observations?",
                options: [
                    "Choosing a gamble with 30% chance of earning £1000 and 70% chance of earning £0 over a guaranteed £300",
                    "Choosing a guaranteed payment of £500 over a gamble with 50% chance of earning £1000 and 50% chance of £0",
                    "Choosing a guaranteed loss of £1000 over a gamble with 20% chance of losing £5000",
                    "Choosing a guaranteed loss of £700 over a gamble with 70% chance of losing £1000"
                ],
                answer: 1,
                explanation: "T&K found people are risk-averse for gains. Choosing guaranteed £500 over a 50/50 gamble with expected value of £500 shows risk aversion in gains, consistent with their findings."
            },
            {
                question: "Given a utility function graph, which statement is true about the individual?",
                image: "images/table7.png",
                options: [
                    "They are risk-averse",
                    "They are risk-seeking",
                    "They are risk-neutral",
                    "Their behaviour is consistent with observations by Tversky and Kahneman"
                ],
                answer: 3,
                explanation: "The concave shape of the utility function indicates risk aversion, as the marginal utility decreases with increasing wealth."
            },
            {
                question: "Given a specific utility function, which statement is true about this decision maker?",
                image: "images/table8.png",
                options: [
                    "The Expected Monetary Value criterion sufficiently represents their risk preferences",
                    "They will be indifferent between a guaranteed loss of £500 and a gamble with 40% chance of winning £1000 and 60% chance of losing £1000",
                    "The EMV and EU criteria will point to exactly the same optimal decision",
                    "They will be indifferent between a guaranteed £750 and a gamble with 80% chance of winning £1000 and 20% chance of losing £1000"
                ],
                answer: 1,
                explanation: "The utility value at -£500 corresponds to the expected utility of the 40/60 gamble, making them indifferent. The non-linear utility function means EMV doesn't represent preferences."
            },
            {
                question: "According to Tversky and Kahneman, which is NOT likely to occur?",
                options: [
                    "Choosing a guaranteed £200 over a 50/50 gamble between £0 and £400",
                    "Choosing a 50/50 gamble between £1000 and £400 over a guaranteed £700",
                    "Choosing a 50/50 gamble between losing £1000 and £400 over a guaranteed loss of £700",
                    "Choosing a gamble with 70% chance of losing £1000 over a guaranteed loss of £700"
                ],
                answer: 1,
                explanation: "T&K found people are risk-averse for gains and risk-seeking for losses. Choosing a risky option over a sure gain (option b) contradicts this pattern."
            },
            {
                question: "Which is NOT true regarding the use of utilities?",
                options: [
                    "An individual's utility function needs to be elicited separately for every decision",
                    "It is more difficult to derive utility functions for groups than for individuals",
                    "There are many methods for eliciting utilities, all of which provide the same utility function",
                    "People at the same income level may have different utility functions"
                ],
                answer: 2,
                explanation: "Different elicitation methods can yield different utility functions - they don't all provide the same result. All other statements are true."
            },
            {
                question: "For a lottery ticket with 20% chance of winning £500 and 80% chance of winning nothing, which amount would a risk-averse individual NOT pay?",
                options: [
                    "£85",
                    "£95",
                    "£105",
                    "I would pay any of the amounts given above"
                ],
                answer: 2,
                explanation: "Expected value is £100 (20% × £500). A risk-averse person would pay less than expected value, so would not pay £105."
            },
            {
                question: "Given a utility table (£1000=1, £600=X, £400=Y, £200=0), which pair of (X,Y) values is most likely for a risk-seeking decision maker?",
                image: "images/table9.png",
                options: [
                    "(0.8, 0.5)",
                    "(0.9, 0.45)",
                    "(0.65, 0.5)",
                    "(0.45, 0.2)"
                ],
                answer: 3,
                explanation: "For risk-seeking behavior, utility values should be lower than proportional. Risk-neutral point for £600 would be 0.5, so risk-seeking requires X < 0.5. (0.45, 0.2) best matches this pattern."
            },
            {
                question: "Which of the following is true about the decision maker?",
                image: "images/table10.png",
                options: [
                    "They are risk-averse",
                    "They are risk-seeking",
                    "Their risk preferences are consistent with that predicted by Tversky and Kahneman",
                    "None of the above"
                ],
                answer: 3,
                explanation: "Given the shape of the utility function showing concavity (diminishing marginal utility), the decision maker is risk-averse."
            },
            {
                question: "Which statement about the decision maker's preferences is true?",
                options: [
                    "They will prefer a guaranteed payment of £500 over a gamble in which they will earn £900 with probability 0.7",
                    "They will prefer a guaranteed payment of £300 over a gamble in which they will earn £900 with probability 0.3",
                    "They will prefer a guaranteed payment of £700 over a gamble in which they will earn £900 with probability 0.7",
                    "They will prefer a guaranteed payment of £200 over a gamble in which they will earn £900 with probability 0.2"
                ],
                answer: 2,
                explanation: "Using the utility function, compare the utility of guaranteed payments with expected utilities of gambles. Option c correctly identifies a case where the guaranteed amount provides higher utility."
            },
            {
                question: "Given two investments with different outcomes based on economy (good: £900/£500, bad: £0/£300) and 0.7 probability of good economy, what is the utility-maximising decision and corresponding utility?",
                options: [
                    "Investment 1; Utility = 1",
                    "Investment 1; Utility = 0.7",
                    "Investment 2; Utility = 0.48",
                    "Investment 2; Utility = 0.6"
                ],
                answer: 1,
                explanation: "Investment 1: 0.7 × 1 + 0.3 × 0 = 0.7, Investment 2: 0.7 × 0.6 + 0.3 × 0.2 = 0.48. Investment 1 maximizes utility at 0.7."
            },
            {
                question: "Which statement about utilities is true?",
                options: [
                    "Alternatives with higher expected utilities also have higher risk",
                    "A risk-averse individual always has a lower utility for an investment than a risk-seeking individual would",
                    "A higher EMV option always has a higher expected utility",
                    "For a risk-averse individual, a higher EMV is not sufficient for selection of an option"
                ],
                answer: 3,
                explanation: "A risk-averse individual considers both expected value and risk - higher EMV alone isn't sufficient to determine preference. Other statements are false generalizations."
            },
            {
                question: "An individual prefers a guaranteed £200 over a 50/50 gamble between £500 and £0. Which is definitely NOT true?",
                options: [
                    "The individual is risk-averse",
                    "The individual is risk-neutral",
                    "The individual is risk-seeking",
                    "The individual's behaviour is consistent with findings of Tversky and Kahneman"
                ],
                answer: 2,
                explanation: "Preferring a guaranteed amount below expected value (£250) demonstrates risk aversion, consistent with T&K's findings. Only risk-seeking behavior can be definitively ruled out."
            },
            {
                question: "For a utility table with values at -1000, X, 0, Y, and 1000, which pairs of (X,A) and (Y,B) are most consistent with Tversky and Kahneman's findings?",
                image: "images/table11.png",
                options: [
                    "(-500, 0.25); (500, 0.75)",
                    "(-750, 0.2); (250, 0.65)",
                    "(-500, 0.2); (750, 0.7)",
                    "(-250, 0.3); (750, 0.9)"
                ],
                answer: 3,
                explanation: "T&K found risk aversion for gains (steep utility increase near losses) and risk seeking for losses (shallow utility decrease for losses), making (-500, 0.2); (750, 0.7) most consistent."
            },
            {
                question: "What is NOT an advantage of using utilities?",
                options: [
                    "Consideration of the decision maker's attitude towards risk",
                    "Consideration of the risk involved in a given decision problem",
                    "Utility functions are consistent regardless of the method of elicitation",
                    "Ability to incorporate risk in expected value tools such as decision trees"
                ],
                answer: 2,
                explanation: "Different elicitation methods can yield different utility functions - they are not consistent across methods. All other options are genuine advantages of utilities."
            },
            {
                question: "Which is NOT a disadvantage of using utilities?",
                options: [
                    "Works better for groups than for individuals",
                    "Elicitation can be time-consuming",
                    "The elicitation process deals with imaginary rather than real decisions",
                    "Each separate decision requires a separate elicitation"
                ],
                answer: 0,
                explanation: "Utilities actually work better for individuals than groups (not a disadvantage). All other options are genuine disadvantages of utility elicitation."
            },
            {
                question: "Given a utility table with costs where X and Y need to be determined, which values of (X,Y) would be consistent with a risk-averse decision-maker?",
                image: "images/table12.png",
                options: [
                    "(200;600)",
                    "(500;600)", 
                    "(200;800)",
                    "(300;750)"
                ],
                answer: 3,
                explanation: "A risk-averse decision maker would have a concave utility function for gains (or convex for costs). The values (300;750) create the appropriate curve shape for risk aversion."
            },
            {
                question: "For a given utility function, which statement about the decision maker's preferences is true?",
                image: "images/table13.png",
                options: [
                    "They would prefer a lottery ticket with a 30% chance of winning £100 over a guaranteed payment of £19",
                    "They would prefer a lottery ticket with a 60% chance of winning £100 over a guaranteed payment of £50",
                    "They would prefer a lottery ticket with a 50% chance of winning £100 over a guaranteed payment of £20",
                    "They would prefer a lottery ticket with an 80% chance of winning £100 over a guaranteed payment of £75"
                ],
                answer: 2,
                explanation: "Based on the utility values given, only the second option is consistent with the decision maker's risk preferences as shown in their utility function."
            },
            {
                question: "Which behavior would be consistent with Tversky and Kahneman's findings?",
                options: [
                    "Choosing a guaranteed loss of £800 over a lottery with 10% chance of losing £8000 and 90% chance of losing £0",
                    "Choosing a 50/50 lottery between £5000 and £0 over a guaranteed payment of £2500",
                    "Choosing a lottery with 10% chance of £10000 and 90% chance of £0 over a guaranteed £1000",
                    "Choosing a lottery with 10% chance of losing £10000 and 90% chance of losing £0 over a guaranteed loss of £1000"
                ],
                answer: 3,
                explanation: "Tversky and Kahneman found that people tend to be risk-seeking in losses and risk-averse in gains. Choosing the risky option over a sure gain of equal expected value is consistent with this finding."
            },
            {
                question: "If a utility function was elicited last year to help make a house purchase decision, what should be done when considering the same house this year?",
                options: [
                    "Not buy the house since he will reach the same decision as last year",
                    "Elicit his utility function again",
                    "Behave in a risk-neutral manner",
                    "Use the utility function from last year"
                ],
                answer: 1,
                explanation: "Utility functions can change over time as circumstances and preferences change. Best practice is to elicit the utility function again for important decisions, even if the context seems similar."
            },
            {
                question: "Which person's statement about decision analysis is most likely correct?",
                options: [
                    "I elicited utilities and used them in my decision tree, so my risk preferences are accounted for",
                    "I used a probability of 0.2 in my tree, and I'm sure about this value. Sensitivity analysis suggests that my solution is robust for p< 0.3, which is just 0.1 away, so perhaps it's not robust",
                    "My decision tree predicts a payoff of £30,000, so I can now buy that car worth £25,000 I always wanted",
                    "My higher EMV option is riskier because it has a higher spread of possible payoffs than my lower EMV option"
                ],
                answer: 0,
                explanation: "The first statement is correct - properly elicited utilities incorporated into a decision tree do account for risk preferences. The other statements show misunderstandings about sensitivity analysis, expected values, and risk assessment."
            },
            {
                question: "During a utility function elicitation, someone prefers a guaranteed £300 over a lottery with 0.4 probability of £1000 and 0.6 probability of £200. Which statement is definitely false?",
                options: [
                    "Their utility for £300 is 0.5",
                    "Their utility for £800 is 0.8",
                    "Their utility for £400 is 0.3",
                    "Their utility for £600 is 0.55"
                ],
                answer: 2,
                explanation: "Given their preference for the guaranteed £300 over the lottery, their utility for £400 cannot be 0.3 as this would be inconsistent with the risk preferences demonstrated by their choice."
            },
            {
                question: "Given a decision tree with utilities where the maximum payoff is £1000 and minimum is £0, if the decision maker is risk-neutral, what decision maximizes expected monetary value?",
                image: "images/table14.png",
                options: [
                    "A",
                    "B",
                    "The decision maker is indifferent",
                    "Can't be determined from the information given"
                ],
                answer: 1,
                explanation: "For a risk-neutral decision maker, Option B yields higher expected utility (0.5 vs 0.4), which directly corresponds to EMV when normalized between £0 and £1000."
            },
            {
                question: "Given a decision tree with utilities, if the decision maker is risk-averse, what decision maximizes expected monetary payoff?",
                options: [
                    "A",
                    "B",
                    "The decision maker is indifferent",
                    "Can't be determined from the information given"
                ],
                answer: 3,
                explanation: "For a risk-averse individual, option A's payoff remains the same as risk-neutral, but B's payoff will be lower due to the concave utility function. However, without knowing how risk-averse they are, we can't determine if B's payoff becomes lower than A's."
            },
            {
                question: "Given a decision tree with utilities, if the decision maker is risk-seeking, what decision maximizes expected monetary payoff?",
                options: [
                    "A",
                    "B",
                    "The decision maker is indifferent",
                    "Can't be determined from the information given"
                ],
                answer: 1,
                explanation: "For a risk-seeking individual, option A's payoff remains the same as risk-neutral, but B's payoff will be higher due to the convex utility function. Since B was already better for risk-neutral, it will be even more preferred for risk-seeking."
            },
            {
                question: "In a probability equivalence utility elicitation where a decision maker prefers a guaranteed £300 over a lottery with 0.6 probability of £800 and 0.4 probability of £0, what lottery adjustment should be made next?",
                options: [
                    "Decrease the guaranteed amount to £250",
                    "Increase the probability of winning £800 to 0.7",
                    "Decrease the probability of winning £800 to 0.5",
                    "Decrease the winnings from the lottery to £700"
                ],
                answer: 1,
                explanation: "In probability equivalence method, when the guaranteed amount is preferred, we should increase the probability of winning in the lottery to make it more attractive. This helps find the probability that makes the decision maker indifferent."
            },
            {
                question: "Which characteristic indicates a risk-seeking decision maker?",
                options: [
                    "Has higher income than a risk-averse individual",
                    "Owes the mafia money",
                    "Receives utility less than or equal to utility received by a risk-averse individual for any payment",
                    "Always chooses a gamble over a guaranteed payment"
                ],
                answer: 2,
                explanation: "Owing money to dangerous entities can make someone risk-seeking as they may need a large gain to resolve their situation, making them more willing to take chances. The other options either don't indicate risk-seeking behavior or are incorrect characterizations."
            },
            {
                question: "Based on a given utility curve visualization, which option will a risk-averse individual prefer?",
                image: "images/table15.png",
                options: [
                    "Can't be determined from the information given",
                    "D1",
                    "D2",
                    "Indifferent"
                ],
                answer: 0,
                explanation: "A risk-averse individual has a concave utility function. Looking at the expected utility calculations on the curve, D2 would provide higher utility for a risk-averse decision maker."
            },
            {
                question: "Based on a given utility curve visualization, which option will a risk-seeking individual prefer?",
                options: [
                    "Can't be determined from the information given",
                    "Indifferent",
                    "D1",
                    "D2"
                ],
                answer: 2,
                explanation: "A risk-seeking individual has a convex utility function. Given the utility curve shown, D1 would provide higher utility for a risk-seeking decision maker due to the shape of their utility function."
            }
        ]}}