const topics9 = {
    "Topics 9: SMART": {
        questions: [
            {
                question: "Which of the following is NOT associated with SMART?",
                options: [
                    "Efficient frontier",
                    "Stochastic dominance",
                    "Direct ratings",
                    "Swing weights"
                ],
                answer: 1,
                explanation: "Stochastic dominance is not a feature of SMART, which focuses on structured decision-making through swing weights, direct ratings, and efficient frontiers."
            },
            {
                question: "See the four attributes and assigned swing weights below, which have been obtained during an implementation of SMART. What is the normalised weight for Speed?",
                image: "images/g1.png",
                options: [
                    "0.22",
                    "0.11",
                    "0.30",
                    "0.50"
                ],
                answer: 1,
                explanation: "The normalised weight for Speed is calculated as 30 divided by the total swing weights (270), resulting in 0.11."
            },
            {
                question: "Consider the plot below, where the cost of each option is on the X-axis and the benefit points are on the Y-axis. Which of the following alternatives is dominated by others?",
                image: "images/g2.png",
                options: [
                    "A",
                    "B",
                    "C",
                    "D"
                ],
                answer: 2,
                explanation: "Option C is dominated because there are other alternatives with higher benefits and lower costs."
            },
            {
                question: "Consider the plot in Question 23. Which of the following represents the efficient frontier?",
                options: [
                    "C-D-B",
                    "C-B-A",
                    "D-B-A",
                    "D-C-E"
                ],
                answer: 2,
                explanation: "The efficient frontier represents the best combinations of cost and benefit, which in this case are D, B, and A."
            },
            {
                question: "The decision maker has also noted that a swing from the worst alternative to the best alternative in Design, keeping all other attributes constant, would be worth £1000. What is the value of each benefit point to the decision maker?",
                image: "images/g3.png",
                options: [
                    "£1000",
                    "£0.016",
                    "£62.50",
                    "£16"
                ],
                answer: 2,
                explanation: "The value of each benefit point is calculated as £1000 divided by the swing in points (16), resulting in £62.50 per point."
            },
            {
                question: "What is the provisional decision implied by the data provided?",
                image: "images/g3.png",
                options: [
                    "A",
                    "B",
                    "C",
                    "D"
                ],
                answer: 2,
                explanation: "Lowest cost per benefit point"
            },
            {
                question: "Consider a part of the value tree used for a laptop selection decision using SMART below: Which of the following criteria does this part of the tree violate?",
                image: "images/g4.png",
                options: [
                    "Operationality",
                    "Decomposability",
                    "Absence of redundancy",
                    "None of the above"
                ],
                answer: 3,
                explanation: "It does not violate any of these criteria"
            },
            {
                question: "Which of the following is NOT an advantage of using SMART?",
                options: [
                    "Challenges intuition.",
                    "Provides a documented and defensible rationale for the decision.",
                    "Guides decision maker on what information needs to be gathered.",
                    "The assignment of ratings to options is unambiguous."
                ],
                answer: 3,
                explanation: "The assignment of ratings to options is subjective and can vary, making it ambiguous rather than a definitive advantage of SMART."
            },
            {
                question: "Which of the following is NOT a feature of SMART?",
                options: [
                    "Monetary attributes are dealt with separately, although they could be treated similar to attributes that have a numeric scale.",
                    "In using direct ratings, there will always be an alternative that scores 100 points and another that scores 0 points for each attribute.",
                    "It is possible to have an efficient frontier with only one alternative.",
                    "Swing weights allow all attributes to have equal say in any decision that is made."
                ],
                answer: 3,
                explanation: "Swing weights do not allow all attributes to have equal say; instead, they prioritise attributes based on their importance."
            },
            {
                question: "While using SMART, a decision maker is left with two options on the efficient frontier: A and B. Option A has a cost of £300 while providing 500 value points and Option B has a cost of £500 while providing 700 value points. The decision maker is asked how much they would be willing to pay for a worst-to-best swing for attribute X, which has been assigned a normalised weight of 20. At what willingness to pay would the decision maker be indifferent between options A and B?",
                options: [
                    "£20",
                    "£200",
                    "£1",
                    "£0.2"
                ],
                answer: 0,
                explanation: "The normalised weight of 20 corresponds to 20 points of benefit, and with a cost per point of £1, the willingness to pay is £20."
            },
            {
                question: "Which of the following set of options most accurately describes the efficient frontier?",
                image: "images/g5.png",
                options: [
                    "A, B, C",
                    "A, C, D",
                    "C, D",
                    "A, D",
                    "B, D"
                ],
                answer: 1,
                explanation: "Options A, C and D are the only ones on the efficient frontier, as they are not dominated by other alternatives."
            },
            {
                question: "The decision maker is quite unsure about the scores they assigned to option B during the rating process. Which of the following sets of scores for the three attributes would move B to the efficient frontier?",
                image: "images/g5.png",
                options: [
                    "X = 100; Y = 80, Z = 80",
                    "X = 90; Y = 100; Z = 80",
                    "X = 90; Y = 80; Z = 100",
                    "X = 100; Y = 100; Z = 80"
                ],
                answer: 2,
                explanation: "After calculating the weighted scores, only the set X = 90, Y = 80, Z = 100 moves option B above other alternatives to the efficient frontier."
            },
            {
                question: "How much is the decision maker willing to pay per benefit point?",
                image: "images/g5.png",
                options: [
                    "£0.20",
                    "£0.87",
                    "£0.003",
                    "£0.008"
                ],
                answer: 3,
                explanation: "The willingness to pay per benefit point is calculated as £20 divided by 2571 points, resulting in approximately £0.008 per point."
            },
            {
                question: "Using the Edwards-Newman method, which of the following is the provisional decision?",
                image: "images/g5.png",
                options: [
                    "A",
                    "B",
                    "C",
                    "D"
                ],
                answer: 3,
                explanation: "Option D is the provisional decision because it provides the lowest cost per point (£0.0035), which is below the decision maker's willingness to pay (£0.008)."
            },
            {
                question: "While using SMART, a decision maker has assigned the following swing weights to attributes A, B, and C: A = 100, B = 60, C = 30. What is the normalised weight for attribute C?",
                options: [
                    "0.30",
                    "0.16",
                    "0.19",
                    "0.23"
                ],
                answer: 1,
                explanation: "The normalised weight for attribute C is calculated as 30 divided by the total weight (190), resulting in 0.16."
            },
            {
                question: "Which of the following features in a SMART value tree would violate decomposability?",
                options: [
                    "Attributes X and Y are highly correlated.",
                    "Attributes X and Y can be broken up further into other sub-attributes.",
                    "The decision maker’s preferences for X depend on an option’s performance for Y.",
                    "All the options have the same performance with respect to attribute X."
                ],
                answer: 2,
                explanation: "Decomposability is violated if the decision maker's preferences for one attribute (X) depend on the performance of another attribute (Y), as attributes should ideally be independent."
            },
            {
                question: "The value tree created for an application of SMART has the property that some of the lowest-level attributes can’t be measured effectively. The tree violates:",
                options: [
                    "Completeness",
                    "Operationality",
                    "Decomposability",
                    "Redundancy"
                ],
                answer: 1,
                explanation: "Operationality is violated when attributes cannot be measured effectively, as measurable criteria are necessary for SMART to function properly."
            },
            {
                question: "Which of the following set of options most accurately describes the efficient frontier?",
                image: "images/g6.png",
                options: [
                    "A, C, D",
                    "C, B, D",
                    "A, C",
                    "A"
                ],
                answer: 0,
                explanation: "Plotting the options shows that A, C, and D are on the efficient frontier, as they provide the best trade-offs between cost and benefit."
            },
            {
                question: "How much is the decision maker willing to pay per benefit point?",
                image: "images/g6.png",
                options: [
                    "£0.20",
                    "£0.50",
                    "£0.06",
                    "£0.32"
                ],
                answer: 2,
                explanation: "The willingness to pay per benefit point is calculated as £200 divided by 3182 points, resulting in approximately £0.06 per point."
            },
            {
                question: "What is the best decision, as prescribed by the Edwards-Newman method?",
                image: "images/g6.png",
                options: [
                    "A",
                    "B",
                    "C",
                    "D"
                ],
                answer: 0,
                explanation: "Option A is the best decision, as the switch from D to A has a cost per point (£0.0359) below the willingness to pay (£0.06), while switching from A to C exceeds it."
            },
            {
                question: "How much should the decision maker be willing to pay for a worst-to-best swing in Attribute Y so that the decision maker is indifferent between options A and D (use 3 decimal places in your calculations)?",
                image: "images/g6.png",
                options: [
                    "£31.82",
                    "£114.55",
                    "£190.92",
                    "£150.00"
                ],
                answer: 1,
                explanation: "To make the decision maker indifferent, the willingness to pay is calculated as 3182 points multiplied by the cost per point (£0.0359), resulting in £114.55."
            },
            {
                question: "Which of the following ranges of values describes the complete set of costs for which option A is on the efficient frontier?",
                image: "images/g6.png",
                options: [
                    "£0 ≤ Cost of Option A ≤ ∞",
                    "£0 ≤ Cost of Option A ≤ £900",
                    "£350 ≤ Cost of Option A ≤ £900",
                    "Cost of Option A ≥ £900"
                ],
                answer: 1,
                explanation: "Option A remains on the efficient frontier as long as its cost does not exceed £900, beyond which it becomes dominated by other options."
            },
            {
                question: "What is the missing value in cell C11 (normalised weight for attribute X)?",
                image: "images/g7.png",
                options: [
                    "80",
                    "60",
                    "40",
                    "20"
                ],
                answer: 2,
                explanation: "The normalised weight for attribute X is calculated as its swing weight (80) divided by the total swing weight (200), resulting in a normalised weight of 40."
            },
            {
                question: "What is the value in cell E6 (total benefit from option D)?",
                image: "images/g7.png",
                options: [
                    "6200",
                    "5800",
                    "5600",
                    "5400"
                ],
                answer: 3,
                explanation: "The total benefit is calculated as (60 x 40) + (40 x 50) + (10 x 100) = 5400."
            },
            {
                question: "A decision maker planning to buy a manufacturing facility has decided to use “size of facility” as one of their criteria for making their decision amongst 3 options (bigger is better). They’ve decided to use area (square footage) as their measure for size, and the three options have the following areas: Aberdeen (1000 sq. ft.), Brighton (2000 sq. ft.), Chelsea (5000 sq. ft.). Assuming the decision maker’s preferences are linear over the range of values, what is the rating for Brighton on the “size of facility” criterion if SMART is applied to the decision?",
                image: "images/g8.png",
                options: [
                    "20",
                    "25",
                    "40",
                    "75"
                ],
                answer: 1,
                explanation: "Brighton is 1/4 of the way between Aberdeen and Chelsea; applying a linear scale gives it a rating of 25."
            },
            {
                question: "“This SMART value tree is not detailed enough. We need to break down some of the attributes so that we can measure them better”. The speaker of this statement is emphasising which criterion?",
                options: [
                    "Operationality",
                    "Completeness",
                    "Decomposability",
                    "Absence of redundancy"
                ],
                answer: 0,
                explanation: "Operationality requires that the attributes in a SMART value tree are measurable, which is what the speaker is emphasising."
            },
            {
                question: "Which of the following is NOT true about a SMART value tree?",
                options: [
                    "It needs to be as small as possible.",
                    "There should not be any variables that are correlated with each other.",
                    "The lowest-level attributes should be easily measured.",
                    "If all alternatives perform the same on an attribute, that attribute can be deleted."
                ],
                answer: 1,
                explanation: "Although it may raise some challenges, SMART will still work if variabes are correlated with each other."
            },
            {
                question: "Which of the following is NOT true about swing weights?",
                options: [
                    "They account for the decision maker’s preferences regarding attributes.",
                    "They consider the importance of worst-to-best swings in attribute outcomes.",
                    "More important attributes will have higher swing weights.",
                    "The largest possible swing weight is 100."
                ],
                answer: 2,
                explanation: "An attribute's swing weight is influenced by both its importance and the difference between its best and worst levels. An attribute with a smaller range may have a lower swing weight even if it is deemed 'most important'."
            },
            {
                question: "What are the benefit points for Option B?",
                image: "images/g9.png",
                options: [
                    "8158",
                    "15500",
                    "250",
                    "9474"
                ],
                answer: 0,
                explanation: "Using normalised weights for attributes, the benefit points for Option B are calculated as 90 x 15.79 + 80 x 31.58 + 80 x 52.63 = 8158 (approximately)."
            },
            {
                question: "Which options are on the efficient frontier?",
                image: "images/g9.png",
                options: [
                    "D; A",
                    "A; B",
                    "D; A; B",
                    "C; D; A; B"
                ],
                answer: 2,
                explanation: "Options D, A, and B are on the efficient frontier as they provide the best trade-offs between cost and benefit without being dominated by other alternatives."
            },
            {
                question: "The decision maker states that they are willing to pay £75 for a worst-to-best swing in Att2. How much is each benefit point worth to the decision maker?",
                image: "images/g9.png",
                options: [
                    "£0.024",
                    "£0.0125",
                    "£0.06",
                    "£0.032"
                ],
                answer: 0,
                explanation: "The value per benefit point is calculated as £75 divided by 3158 points, resulting in approximately £0.024 per point."
            },
            {
                question: "Given the information in Question 6, what option should the decision maker choose?",
                image: "images/g9.png",
                options: [
                    "A",
                    "B",
                    "C",
                    "D"
                ],
                answer: 3,
                explanation: "The cost per point of switching from D to B or B to A is greater than the decision maker's willingness to pay, so the provisional choice remains D."
            },
            {
                question: "During a SMART value elicitation process, 'Distance' is used as an attribute, with shorter distances preferred by the decision maker. If the shortest distance is 20 miles and the longest is 100 miles, what score will a location 40 miles away receive, assuming a linear value function?",
                options: [
                    "20 points",
                    "25 points",
                    "50 points",
                    "75 points"
                ],
                answer: 3,
                explanation: "The location at 40 miles is halfway between the shortest (20 miles) and the longest (100 miles), so it receives 75 points based on a linear value function."
            },
            {
                question: "During a SMART direct rating elicitation process, option B receives 40 points and option C receives 20 points on an attribute. Which of the following is true?",
                options: [
                    "B performs twice as well on the attribute than C.",
                    "B is better than the worst option at a level twice as much as C is better than the worst option on the attribute.",
                    "B performs 40% as well as the best option on the attribute.",
                    "C performs better on the attribute."
                ],
                answer: 1,
                explanation: "The scores reflect relative improvements from the worst-performing option, making B's improvement twice as much as C's relative to the worst."
            },
            {
                question: "What is NOT true about the use of swing weights?",
                options: [
                    "They allow the decision maker to state preferences between attributes.",
                    "They allow the decision maker to consider trade-offs regarding performance.",
                    "Their usage makes SMART a compensatory decision making method.",
                    "The most important attribute will have the highest swing weight."
                ],
                answer: 3,
                explanation: "Swing weights do not inherently make SMART a compensatory decision-making method; they only reflect the importance of attributes."
            },
            {
                question: "While creating a SMART value tree it was decided to re-define an attribute called 'value' as 'value as measured by the customer satisfaction survey'. This action is most likely intended to avoid violating which criterion?",
                options: [
                    "Completeness",
                    "Operationality",
                    "Decomposability",
                    "Redundancy"
                ],
                answer: 1,
                explanation: "Re-defining the attribute ensures it is measurable and meaningful, aligning with the operationality criterion."
            },
            {
                question: "What is the missing value in cell C5?",
                image: "images/g10.png",
                options: [
                    "70",
                    "50",
                    "30",
                    "10"
                ],
                answer: 0,
                explanation: "Using the provided calculation, the missing value is determined to be 70 based on the benefit points equation."
            },
            {
                question: "What is the missing value in cell G3?",
                image: "images/g10.png",
                options: [
                    "220",
                    "2200",
                    "4875",
                    "4200"
                ],
                answer: 2,
                explanation: "Calculating the total benefit points for G3 using the provided data yields 4875."
            },
            {
                question: "What is the missing value in cell B12?",
                image: "images/g10.png",
                options: [
                    "25",
                    "40",
                    "55",
                    "70"
                ],
                answer: 1,
                explanation: "The missing value is calculated as 40, derived from the normalised weight relationship provided."
            },
            {
                question: "Which alternatives lie on the efficient frontier?",
                image: "images/g10.png",
                options: [
                    "C; D",
                    "C; D; A",
                    "Only C",
                    "C; A"
                ],
                answer: 1,
                explanation: "C, D, and A are on the efficient frontier as they provide the best trade-offs between cost and benefit points."
            },
            {
                question: "In SMART, the assumption of linearity applies to which of the following?",
                options: [
                    "Direct ratings",
                    "Value functions",
                    "Value tree",
                    "Risk preferences"
                ],
                answer: 1,
                explanation: "Linearity in SMART applies to the value functions, as it assumes a linear relationship between attribute performance and utility."
            },
            {
                question: "Which of the following is NOT true regarding the use of Edwards-Newman method?",
                options: [
                    "It is assumed that the decision maker is risk-averse.",
                    "It is assumed that the attribute selected will not influence the outcome.",
                    "It is assumed that there is a linear relationship between benefit points and preference for money.",
                    "The objective is to obtain a single provisional outcome."
                ],
                answer: 0,
                explanation: "The Edwards-Newman method does not assume the decision maker is risk-averse but focuses on cost-benefit trade-offs to guide decisions."
            },
            {
                question: "Which of the following is certainly true?",
                image: "images/g11.png",
                options: [
                    "Ringo’s technique is twice as good as John’s.",
                    "Ringo has a perfect potential.",
                    "Paul has no talent.",
                    "John has the least potential amongst the four options."
                ],
                answer: 3,
                explanation: "Based on the data, John has the least potential compared to the other options, making this statement true."
            },
            {
                question: "Which of the following is true for the decision maker?",
                image: "images/g11.png",
                options: [
                    "Voice is the most important attribute.",
                    "Potential is the least important attribute.",
                    "Talent is half as important as Voice.",
                    "None of the above."
                ],
                answer: 3,
                explanation: "Voice is not necessarily the most important, but the difference between a good and bad voice is high"
            },
            {
                question: "What is the missing value in cell C13?",
                image: "images/g11.png",
                options: [
                    "20",
                    "40",
                    "60",
                    "80"
                ],
                answer: 1,
                explanation: "The normalised weight for Voice is calculated as 100/250 x 100 = 40."
            },
            {
                question: "What is the missing value in cell F6?",
                image: "images/g11.png",
                options: [
                    "13250",
                    "5300",
                    "2750",
                    "6330"
                ],
                answer: 1,
                explanation: "The total benefit for F6 is calculated as 100 x 24 + 65 x 20 + 0 x 40 + 16 x 100 = 5300."
            },
            {
                question: "Which option(s) are on the efficient frontier?",
                image: "images/g11.png",
                options: [
                    "Paul",
                    "Paul; George",
                    "Paul; Ringo; George",
                    "Paul; John"
                ],
                answer: 1,
                explanation: "Paul and George lie on the efficient frontier as no other options outperform them in both dimensions simultaneously."
            },
            {
                question: "The decision maker is willing to pay £50 for a worst-to-best swing in Talent. Using the Edwards-Newman method, which option is the provisional decision?",
                image: "images/g11.png",
                options: [
                    "Paul",
                    "George",
                    "Ringo",
                    "John"
                ],
                answer: 1,
                explanation: "Based on the cost per point (£0.025), the decision maker wouldn't switch from George to Ringo, making George the provisional decision."
            },
            {
                question: "According to the analysis, which sponsors are on the efficient frontier?",
                image: "images/g12.png",
                options: [
                    "A, D, E",
                    "A, C",
                    "B, C, A",
                    "A, B"
                ],
                answer: 2,
                explanation: "Bit of a confusing question - this time you want to maximise both value and donations. D and E have lower value and lower donations than alternatives."
            },
            {
                question: "What is the minimum score Sponsor A must have for Reputation to stay on the efficient frontier?",
                image: "images/g12.png",
                options: [
                    "57",
                    "13",
                    "24",
                    "0"
                ],
                answer: 0,
                explanation: "The minimum score is calculated as 70 - 13 = 57, ensuring A remains on the efficient frontier."
            },
            {
                question: "The team feel they would be willing to give up £100,000 of donation money in return for a worst-to-best swing in Efficiency. Using the Edwards-Newman method, which Sponsor is the one the team should choose?",
                image: "images/g12.png",
                options: [
                    "A",
                    "B",
                    "C",
                    "D"
                ],
                answer: 2,
                explanation: "Given the willingness to pay £25.63/point, Sponsor C is the best choice as it offers the best trade-off within the given cost constraint."
            },
            {
                question: "What amount from Question 13 (instead of £100,000) would change your answer to Question 13?",
                image: "images/g12.png",
                options: [
                    "£1,290,157",
                    "£1,203,613",
                    "£515,064",
                    "£250,000"
                ],
                answer: 1,
                explanation: "To make the cost per point equal £132/point, the required amount is £1,203,613."
            },
            {
                question: "The management team realised they made a mistake scoring the sponsors. Which attribute was scored incorrectly?",
                image: "images/g12.png",
                options: [
                    "Reputation",
                    "Finances",
                    "Efficiency",
                    "Relevance"
                ],
                answer: 3,
                explanation: "Relevance was scored incorrectly because no option was assigned a score of zero, violating SMART principles."
            },
            {
                question: "Which of the following is NOT true about SMART?",
                options: [
                    "SMART can’t take into account the decision maker’s risk behaviour.",
                    "SMART can work without monetary attributes.",
                    "SMART is less effective with group decisions.",
                    "SMART is a compensatory decision-making strategy."
                ],
                answer: 0,
                explanation: "SMART can account for decision-maker risk behaviour by using utilities or considering risk-related attributes."
            },
            {
                question: "All else being equal, the decision maker would like to minimise costs. Which options lie on the efficient frontier?",
                image: "images/g13.png",
                options: [
                    "D, A, E",
                    "D, A",
                    "C, D",
                    "C, B, D"
                ],
                answer: 3,
                explanation: "Options C, B, and D lie on the efficient frontier, as no other options dominate them in both cost and benefit."
            },
            {
                question: "What is the complete set of costs for which option D (currently 750) is the best choice, according to the Edwards-Newman method?",
                options: [
                    "Cost < 750",
                    "Cost < 645",
                    "Cost < 20",
                    "Cost < ∞"
                ],
                answer: 1,
                explanation: "Option D remains the best choice if the cost increase remains under £20, making the threshold cost < 645."
            },
            {
                question: "Which of the following actions would move option D out of the efficient frontier?",
                options: [
                    "D’s rating on A1 goes down to 80",
                    "D’s rating on A3 goes down to 20",
                    "D’s rating on A4 goes down to 20",
                    "D’s rating on A5 goes down to 80"
                ],
                answer: 1,
                explanation: "Decreasing D’s rating on A3 to 20 reduces its total value below B’s, removing it from the efficient frontier."
            },
            {
                question: "While using SMART, a decision maker states that Attribute A is the most important and Attribute B is the least important attribute. Which of the following is true?",
                options: [
                    "An option with a higher rating on Attribute A will be preferred over an option with a higher score on Attribute B.",
                    "Attribute A will have a higher swing weight than Attribute B.",
                    "Attribute A would be better to use for Edwards-Newman method than Attribute B.",
                    "We need more information to be able to use SMART."
                ],
                answer: 1,
                explanation: "Swing weights reflect the importance of attributes; Attribute A will have a higher swing weight than Attribute B."
            },
            {
                question: "Which of the following pairs of objectives violates the “redundancy” criterion for a SMART value tree?",
                options: [
                    "Maximise size of house and minimise heating cost, where the two are inversely proportional.",
                    "Maximise salary and maximise reputation, where the two are directly proportional.",
                    "Optimise size of chosen city and optimise size of accommodation, where smaller accommodation is preferred in larger cities.",
                    "Optimise garden size and maximise affordability, where garden size and affordability are inversely proportional."
                ],
                answer: 2,
                explanation: "Optimising accommodation size relative to city size introduces redundancy, as one is dependent on the other."
            },
            {
                question: "What weight will be used for the attribute “Interior” in calculating values for each car?",
                image: "images/g14.png",
                options: [
                    "22.58",
                    "70",
                    "0.7",
                    "80"
                ],
                answer: 0,
                explanation: "The normalised weight for 'Interior' is calculated as 70/310 = 22.58."
            },
            {
                question: "What is the total value for car B?",
                options: [
                    "22200",
                    "7161.29",
                    "22.20",
                    "600"
                ],
                answer: 1,
                explanation: "By calculating normalised weights and multiplying by the scores, the total value for car B is 7161.29."
            },
            {
                question: "If the decision maker is willing to pay 100 for a worst-to-best swing in Service, then what is the best option, using Edwards-Newman method?",
                options: [
                    "A",
                    "B",
                    "C",
                    "Reputation"
                ],
                answer: 1,
                explanation: "Based on the calculations, the decision maker is willing to go from C to B but not from B to A. Thus, B is the best option."
            },
            {
                question: "In which of the following stages does the decision maker seem to have made a mistake?",
                options: [
                    "Assigning ratings to options",
                    "Determining swing weights",
                    "Finding a sufficient number of options",
                    "Researching the cost of each option"
                ],
                answer: 0,
                explanation: "The decision maker made an error since not all attributes were scored from 0 to 100, violating the SMART scoring standard."
            },
            {
                question: "What is the aggregate score for the benefits of Alcester Business School?",
                image: "images/g15.png",
                options: [
                    "3680",
                    "9200",
                    "160",
                    "2650"
                ],
                answer: 0,
                explanation: "Using the normalised weights (Facilities: 32, Teaching: 40, Research: 8, Location: 20), the aggregate score is (60 × 32) + (80 × 40) + (10 × 8) + (20 × 20) = 3680."
            },
            {
                question: "Which business schools are on the efficient frontier?",
                image: "images/g15.png",
                options: [
                    "Chorley, Epping, Deptford",
                    "Chorley, Epping",
                    "Epping, Deptford",
                    "Chorley, Berwick"
                ],
                answer: 1,
                explanation: "A business school is on the efficient frontier if no other option provides more benefits for the same or lower cost. Based on the aggregate scores, Chorley and Epping remain on the efficient frontier."
            },
            {
                question: "What values of Deptford’s location score (L) would change the answer for the efficient frontier?",
                image: "images/g15.png",
                options: [
                    "L > 26",
                    "L > 90",
                    "L > 520",
                    "L > 76"
                ],
                answer: 3,
                explanation: "Deptford needs to match Epping’s score of 8640. The difference is 520 points. The normalised weight for Location is 20. Thus, Deptford’s location score must increase by 520/20 = 26 points, meaning L > 76."
            },
            {
                question: "Using the Edwards-Newman method, which business school should be chosen?",
                image: "images/g15.png",
                options: [
                    "Chorley",
                    "Epping",
                    "Deptford",
                    "Berwick"
                ],
                answer: 0,
                explanation: "The Graduate Development Manager is willing to spend £50,000 for a worst-to-best swing in Facilities. The calculated cost per point for switching to other schools is higher than £1563, so Chorley is selected."
            },
            {
                question: "What values of the £50,000 figure (E) from the previous question would change the decision?",
                image: "images/g15.png",
                options: [
                    "E < £659,100",
                    "E > £320,000",
                    "E > £211",
                    "E > £210,912"
                ],
                answer: 3,
                explanation: "£6591 per point × 32 points = £210,912. For a different decision, E must exceed this threshold."
            },
            {
                question: "Which SMART assumption is the use of negatively correlated attributes (Engine size and fuel mileage) likely to violate?",
                options: [
                    "Completeness",
                    "Operationality",
                    "Decomposability",
                    "None of the above are violated"
                ],
                answer: 3,
                explanation: "Decomposability is not violated by simple correlation between attributes; completeness ensures all necessary attributes are included, and operationality ensures attributes can be measured."
            },
            {
                question: "Which of the following features makes SMART a compensatory decision-making tool?",
                options: [
                    "The use of swing weights",
                    "The use of elicitation",
                    "The use of the Edwards-Newman method",
                    "The use of the efficient frontier"
                ],
                answer: 0,
                explanation: "Swing weights ensure that performance on one attribute can compensate for poor performance on others, making SMART compensatory."
            },
            {
                question: "Which of the following might arise from the linearity assumption made while creating value functions in SMART?",
                options: [
                    "The way the question is framed might impact scores for each attribute",
                    "Options that perform similarly on the attribute might have highly variable scores",
                    "Elicitation might take longer",
                    "The efficient frontier is also linear"
                ],
                answer: 1,
                explanation: "The linearity assumption causes variability in scores where options perform similarly, as marginal returns are assumed constant."
            }
        ]}}