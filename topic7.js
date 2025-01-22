const topics7 = {
    "Topics 7: Game Theory": {
        questions: [
                {
                    question: "How many pure strategy equilibria does the game have?",
                    image: "images/t1.png",
                    options: [
                        "0",
                        "1",
                        "2",
                        "3"
                    ],
                    answer: 2,
                    explanation: "The game has two pure strategy equilibria at (S1, S1) and (S2, S2)."
                },
                {
                    question: "What common game form does the game represent?",
                    image: "images/t1.png",
                    options: [
                        "Prisoners’ dilemma",
                        "Battle of the sexes",
                        "Coordination",
                        "Matching pennies"
                    ],
                    answer: 2,
                    explanation: "The game represents a coordination game as the players benefit from coordinating their strategies."
                },
                {
                    question: "If the players employ mixed strategies, what is the probability that both players earn 3 units of payoff in equilibrium?",
                    image: "images/t1.png",
                    options: [
                        "1/9",
                        "2/9",
                        "1/3",
                        "4/9"
                    ],
                    answer: 3,
                    explanation: "The probability is calculated as 4/9 based on the equilibrium probabilities derived from the expected payoffs of each player."
                },
                {
                    question: "Considering only Nash equilibria in pure strategies, which of the following types of equilibria will be exhibited?",
                    image: "images/t2.png",
                    options: [
                        "Equilibrium in strictly dominating strategies",
                        "Equilibrium in weakly dominating strategies",
                        "Iterated equilibrium",
                        "None of the above"
                    ],
                    answer: 1,
                    explanation: "There are no Nash equilibria in strictly or weakly dominating strategies or iterated elimination in this scenario."
                },
                {
                    question: "Which of the following is NOT true for the Prisoners’ Dilemma?",
                    options: [
                        "It has a pure equilibrium in strictly dominating strategies.",
                        "It has a preferable equilibrium in weakly dominating strategies.",
                        "A cooperative equilibrium is possible when the game is played repeatedly.",
                        "In experiments, pre-play discussion increases the possibility of cooperation."
                    ],
                    answer: 1,
                    explanation: "A Prisoners’ Dilemma has a pure equilibrium in strictly dominating strategies, so this statement is incorrect."
                },
                {
                    question: "7.6	Two individuals, Andy and Brian, living separately, each will decide whether to walk or take the bus to work today. If they both walk or both take the bus, they know they will see each other. Andy wants to spend time with Brian so will get a utility of 5 if they see each other, and 0 units of utility if they don’t. On the other hand, Brian doesn’t like Andy so will get a utility of 5 if they don’t meet. If they do meet, Brian will prefer that it is on the bus (payoff negative 1) rather than the walk (payoff  negative 2), which will take longer. Applying the concept of Nash equilibrium, what will Andy and Brian do?",
                    options: [
                        "Andy will walk, Brian will take the bus.",
                        "Andy will walk with probability 6/13, Brian will walk with probability 1/2.",
                        "Andy will walk with probability 1/2, Brian will walk with probability 6/13.",
                        "Andy and Brian will both take the bus."
                    ],
                    answer: 1,
                    explanation: "Andy and Brian’s expected payoffs determine that Andy walks with probability 1/2, while Brian walks with probability 6/13."
                },
                {
                    question: "A person is being assaulted by a criminal in a public location with 20 individuals (in addition to the victim and the burglar). If at least two individuals take action, the criminal will leave. The individuals value the person’s welfare – if the criminal leaves then each person will receive 5 units of utility. However, taking action costs 3 units of utility to each individual. Which of the following is NOT an equilibrium of this scenario?",
                    options: [
                        "Exactly two individuals take action and the others don’t.",
                        "Everyone takes action.",
                        "Nobody takes action.",
                        "Each individual randomises their actions and acts with probability p."
                    ],
                    answer: 1,
                    explanation: "If everyone else is taking action, one individual can drop out and still achieve the desired outcome, so universal action is not an equilibrium."
                },
                {
                    question: "A billionaire poses the following game to 100 individuals: “Each person will secretly write a number on a card. The winner will be the person to write the largest number on their card. Their prize will be £1 million, divided by the total of the numbers written by all individuals. If there is a tie, then those people will share the prize”. Which of the following is true?",
                    options: [
                        "In equilibrium, all individuals will write a '1' on their card.",
                        "In equilibrium, one individual will write a '1' and the others will write '0'.",
                        "There is no equilibrium as the numbers written will tend to infinity.",
                        "In equilibrium, all individuals will write the same number."
                    ],
                    answer: 3,
                    explanation: "Any scenario where individuals all write the same number is an equilibrium because writing a larger number decreases the share of the prize."
                },
                {
                    question: "Consider the game form Battle of the Sexes. Which of the following is NOT a necessary assumption to establish the equilibrium outcomes?",
                    options: [
                        "Common knowledge of rationality",
                        "Common priors",
                        "Linear utility functions",
                        "All of the above are necessary."
                    ],
                    answer: 2,
                    explanation: "Linear utility functions are not a necessary assumption for establishing the equilibrium outcomes in the Battle of the Sexes game."
                },
                {
                    question: "Which of the following is NOT an equilibrium of the game?",
                    image: "images/t3.png",
                    options: [
                        "(R1,C2)",
                        "(R2,C1)",
                        "(R2,C2)",
                        "All of the above are equilibria."
                    ],
                    answer: 1,
                    explanation: "(R2, C1) is not an equilibrium as the column player can increase their score from 5 -> 6."
                },
                {
                    question: "What assumptions did you need to make to answer the question about equilibria?",
                    image: "images/t3.png",
                    options: [
                        "Common knowledge of rationality + common priors",
                        "Only common knowledge of rationality",
                        "Only common priors",
                        "Neither of the above assumptions were needed."
                    ],
                    answer: 3,
                    explanation: "Note that assumptions are the beliefs that the individuals hold about the other individual (not our beliefs about the individuals). The player does not need to know anything about the row player to know that they should play C2, and R2 is weakly dominant for R1."
                },
                {
                    question: "What is true about R1?",
                    image: "images/t3.png",
                    options: [
                        "It is strongly dominated.",
                        "It is weakly dominated.",
                        "It will be played with positive probability in an equilibrium in mixed strategies.",
                        "It is known as the 'defect' option."
                    ],
                    answer: 1,
                    explanation: "R1 is weakly dominated by R2, as R2 offers higher or equal payoffs regardless of the opponent’s strategy."
                },
                {
                    question: "Which common game structure does the game resemble?",
                    image: "images/t4.png",
                    options: [
                        "Prisoner’s dilemma.",
                        "Stag-Hunt.",
                        "Centipede.",
                        "Battle of the Sexes."
                    ],
                    answer: 3,
                    explanation: "Both players prefer to coordinate, but each has a different preference over which coordinated outcome to achieve."
                },
                {
                    question: "What is the probability of C1 being played in an equilibrium of mixed strategies?",
                    image: "images/t4.png",
                    options: [
                        "7/17",
                        "10/17",
                        "5/8",
                        "3/8"
                    ],
                    answer: 0,
                    explanation: "The probability of C1 being played is calculated as 7/17 based on the expected payoffs of both players."
                },
                {
                    question: "10 individuals are offered a contest with a reward of £30. To have a chance of winning, each individual has to pay £10 for a ticket (can only buy one ticket). The reward will be shared equally by those who purchase tickets. If nobody buys a ticket, nobody gets the reward. Assuming simultaneous play, which of the following is NOT an equilibrium of the game?",
                    options: [
                        "3 individuals will buy tickets and the others won’t.",
                        "Each individual will buy a ticket with probability p.",
                        "Nobody will buy a ticket.",
                        "All of the above are equilibria."
                    ],
                    answer: 2,
                    explanation: "Nobody will buy a ticket because the cost of buying a ticket exceeds the expected reward as more individuals participate, making inaction the rational equilibrium strategy."
                },
                {
                    question: "Which strategy combinations (R,C) are pure Nash equilibria?",
                    image: "images/t5.png",
                    options: [
                        "(R1,C2); (R2,C1); and (R2,C2)",
                        "(R1,C1)",
                        "(R1,C1) and (R2,C2)",
                        "There are no pure Nash equilibria in the game provided."
                    ],
                    answer: 2,
                    explanation: "The pure Nash equilibria of the game are (R1,C1) and (R2,C2), as these strategy combinations satisfy the conditions of Nash equilibrium."
                },
                {
                    question: "If p1 is the probability with which R1 is played in a Nash equilibrium in mixed strategies, what is the value of p1?",
                    image: "images/t5.png",
                    options: [
                        "p1 = 1/4",
                        "p1 = 1/2",
                        "p1 = 3/4",
                        "p1 = 4/5"
                    ],
                    answer: 1,
                    explanation: "The probability p1 = 1/2 is derived from equating the expected payoffs for playing C1 and C2."
                },
                {
                    question: "If p1 is the probability with which R1 is played and p2 is the probability with which C1 is played, which pair (p1, p2) represents a Nash equilibrium in mixed strategies?",
                    image: "images/t6.png",
                    options: [
                        "(0.4, 0.2)",
                        "(0.2, 0.4)",
                        "(0.8, 0.6)",
                        "(0.6, 0.4)"
                    ],
                    answer: 0,
                    explanation: "Using the equations for expected payoffs, the equilibrium probabilities are calculated as p1 = 0.4 and p2 = 0.2."
                },
                {
                    question: "Which of the following well-known game structures does this game demonstrate?",
                    image: "images/tx.png",
                    options: [
                        "Battle of the sexes",
                        "Matching pennies",
                        "The centipede",
                        "Prisoner’s dilemma"
                    ],
                    answer: 3,
                    explanation: "There is a dominant strategy, but it is suboptimal."
                },
                {
                    question: "What assumptions are needed to establish that (R1, C1) is a pure strategy equilibrium?",
                    image: "images/tx.png",
                    options: [
                        "Common priors",
                        "Common knowledge of rationality",
                        "Both (a) and (b)",
                        "Neither (a) nor (b)"
                    ],
                    answer: 3,
                    explanation: "The row player plays R1 regardless of the column player's rationality or information, so no assumptions are required."
                },
                {
                    question: "Two opposing generals are contemplating sending their armies to Area A or Area B, without letting the other general know. If they send their armies to the same location, there will be a war, with each general losing 1 unit of utility. If they send their armies to different locations, each will earn 3 units of utility. What are the pure strategy Nash equilibrium outcomes?",
                    options: [
                        "Both generals send their armies to Area A or to Area B.",
                        "The generals send their armies to different locations.",
                        "The generals both earn 2 units of utility.",
                        "There are no pure strategy Nash outcomes."
                    ],
                    answer: 1,
                    explanation: "The pure Nash equilibria occur when both generals send their armies to different locations, as they cannot unilaterally deviate to improve their payoffs."
                },
                {
                    question: "What type of common game structure does the scenario represent?",
                    options: [
                        "Battle of the sexes",
                        "Matching pennies",
                        "Coordination",
                        "Prisoner’s dilemma"
                    ],
                    answer: 2,
                    explanation: "The scenario represents a coordination game, as the generals need to coordinate their actions to avoid conflict."
                },
                {
                    question: "What is the probability that they will both show up in Area A?",
                    options: [
                        "1/4",
                        "1/2",
                        "3/4",
                        "1/3"
                    ],
                    answer: 0,
                    explanation: "The probability is calculated as 1/4 by multiplying the probabilities of each general choosing Area A (1/2 for each)."
                },
                {
                    question: "A _________ strategy S in a particular game guarantees a player, for each choice of the opposition, at least as good a payoff as does any other of her strategies, as well as higher payoffs for at least one choice of the opposition.",
                    options: [
                        "strictly dominant",
                        "weakly dominant",
                        "Nash",
                        "Guaranteed"
                    ],
                    answer: 1,
                    explanation: "The definition describes a weakly dominant strategy, which guarantees at least as good a payoff as other strategies."
                },
                {
                    question: "Suppose there are N bidders for a house and each of them submits a sealed bid to an auctioneer. The highest bidder wins but pays a price equal to the second highest bid. If your own valuation of the house is at £100,000, what should you bid? Your final pay-off (which you are trying to maximise) is the value you receive (which in this case is £100,000 if you win the bid) minus the price you pay.",
                    options: [
                        "Bid > £100,000",
                        "Bid = £100,000",
                        "Bid < £100,000",
                        "A random bid between £0 and £100,000"
                    ],
                    answer: 1,
                    explanation: "Bidding £100,000 ensures no loss in utility, as bidding higher risks overpayment, and bidding lower risks losing the auction."
                },
                {
                    question: "Two cars are moving towards each other. Each of the drivers has to decide whether to swerve or keep driving straight (and risking a collision). If no one swerves, then they risk a life-threatening injury and a low utility of −5. If only one driver swerves, then he is the chicken, but he lives; his utility is −1 and the other driver’s utility is 1. If both swerve, then their utility is 0. Which of the following is a pure strategy equilibrium of this game?",
                    options: [
                        "(straight, straight)",
                        "(swerve, straight)",
                        "(swerve, swerve)",
                        "can’t be determined"
                    ],
                    answer: 1,
                    explanation: "The pure strategy equilibria of the game are asymmetric: one driver swerves while the other goes straight."
                },
                {
                    question: "In a mixed strategy Nash equilibrium, what is the probability that either driver will swerve?",
                    options: [
                        "1/4",
                        "1/2",
                        "1/5",
                        "4/5"
                    ],
                    answer: 3,
                    explanation: "The probability that a given driver will swerve is 4/5, calculated based on the mixed strategy Nash equilibrium conditions."
                },
                {
                    question: "60 people have each been invited to two different parties, taking place at the same time. Party 1 is really fun and will have a total enjoyment level of 30 while Party 2 is a bit dull and will have a total enjoyment level of 10. The amount of enjoyment one gets from going to either party is the total enjoyment divided by the number of attendees. How many people will go to Party 1 in equilibrium?",
                    options: [
                        "15",
                        "30",
                        "45",
                        "50"
                    ],
                    answer: 2,
                    explanation: "45 people will go to Party 1 in equilibrium, calculated by balancing the enjoyment levels across the two parties."
                },
                {
                    question: "There has been a power failure impacting 10 houses. The inhabitants of each house know that the power will be back if one of them makes a call to the electricity company, at a cost of 2 units of utility to the caller. The power being back is worth 3 units of utility to each household. Which of the following is NOT an equilibrium?",
                    options: [
                        "One person makes a call and nobody else does.",
                        "Each individual makes a call with a certain probability p.",
                        "All individuals make a call.",
                        "All of the above are possible equilibria."
                    ],
                    answer: 2,
                    explanation: "If everyone is calling, at least one individual has an incentive to switch, so this is not an equilibrium."
                },
                {
                    question: "Which of the following is NOT true about the game?",
                    image: "images/t7.png",
                    options: [
                        "There are two pure strategy equilibria.",
                        "The pure strategy equilibrium/a is/are unstable.",
                        "In a mixed strategy equilibrium, R1 is played with probability 1/6.",
                        "In a mixed strategy equilibrium, C1 is played with probability 3/4."
                    ],
                    answer: 1,
                    explanation: "The pure strategy equilibria are not unstable because weak dominance is required for instability."
                },
                {
                    question: "Suppose that of applicants for managerial positions, half are high ability while the rest are of low ability. High ability employees generate 5 units of value for the firm while low ability employees generate 3 units of value. Applicants have the option to do an MBA – this costs 1.25 units of value to a high quality applicant and 2.5 units of value to a low quality applicant. Which of the following is NOT an equilibrium to this game?",
                    options: [
                        "All firms pay salaries of 4 units and nobody gets an MBA.",
                        "Applicants with MBAs are paid 5 units of salary, without MBAs are paid 3 units of salary, and high-ability employees get MBAs (low-ability employees don’t).",
                        "Everyone gets an MBA, and everyone is paid a salary of 5.",
                        "All of the above are possible equilibria of the game."
                    ],
                    answer: 2,
                    explanation: "If everyone gets an MBA and the salary is the same, high-ability employees will prefer not to get the MBA, breaking equilibrium."
                },
                {
                    question: "Consider a market with 30 banks. Each bank decides to choose between three options: safe (s), medium (m), risky (r), adding zero, one, or two “units” of risk to the market, respectively. The market will crash if the total amount of risk is greater than 20 units. If the market does not crash, the safe option is the least profitable and the risky option is the most profitable. If the market crashes, losses are great for everyone. If we call s, m, and r, the number of firms choosing each option, which of the following is NOT a Nash equilibrium in the market with 30 banks?",
                    options: [
                        "s = 15; m = 10; r = 5",
                        "s = 10; m = 20; r = 0",
                        "s = 0; m = 20; r = 10",
                        "s = 22; m = 6; r = 2"
                    ],
                    answer: 3,
                    explanation: "If total risk is less than 20, any s or m could move up."
                },
                {
                    question: "Suppose we could have greater detail of how much is earned by each type of bank (including all costs and revenues) for different market conditions. Which of the following is true?",
                    image: "images/t8.png",
                    options: [
                        "Everybody playing 'safe' is an equilibrium.",
                        "In equilibrium, total payoffs for the thirty banks are zero.",
                        "A firm will randomly choose one of the three strategies based on what they expect others to do.",
                        "There exist no equilibria where nobody plays 'safe'."
                    ],
                    answer: 2,
                    explanation: "Mixed strategy equilibrium involves firms randomising between strategies based on expectations of others."
                },
                {
                    question: "How many pure strategy equilibria are there in the given normal form game?",
                    image: "images/t9.png",
                    options: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    answer: 2,
                    explanation: "The game has three pure strategy equilibria: (R1, C1), (R1, C2), and (R2, C2)."
                },
                {
                    question: "What is the probability with which (R1, C1) will be played in an equilibrium of mixed strategies?",
                    image: "images/t9.png",
                    options: [
                        "0.25",
                        "0.5",
                        "0.75",
                        "All of the above are possible."
                    ],
                    answer: 3,
                    explanation: "The column player chooses C1 and the row player randomises between R1 and R2, as payoffs are the same for either choice."
                },
                {
                    question: "Which of the following is NOT needed in the game?",
                    image: "images/t9.png",
                    options: [
                        "A need for the column player to know that the row player has the same information.",
                        "A need for the row player to know that the column player is rational.",
                        "A need for the row player to know that the column player has the same information.",
                        "All of the above are needed."
                    ],
                    answer: 2,
                    explanation: "The row player has a dominant strategy and does not need to know what information the column player has."
                },
                {
                    question: "Two lecturers teaching different units to the same students must decide independently whether their in-class tests will be easy or difficult. The cost of creating an easy test is “e” and a difficult test is “d” (e < d). The students have a total level of love, “L”, to give (L/2 > d). If the lecturers decide to do the same thing, then they share the love equally. If they do things differently, then the one with the easy test gets all the love. Finally, if both lecturers give a difficult test, then they will receive additional satisfaction, “S”, from doing their jobs right (S > d). What additional condition must be satisfied for the easy test to dominate the difficult test for both lecturers?",
                    options: [
                        "S < L",
                        "S < L – e – d",
                        "S < L/2 + d – e",
                        "e can’t dominate d"
                    ],
                    answer: 2,
                    explanation: "By solving the given inequality, the condition for easy tests to dominate is S < L/2 + d – e."
                },
                {
                    question: "What additional condition must be satisfied for the difficult test to dominate the easy test for both lecturers?",
                    options: [
                        "S > L",
                        "S > L – e – d",
                        "S > L/2 + d – e",
                        "d can’t dominate e"
                    ],
                    answer: 3,
                    explanation: "Since L/2 – e > -d always."
                },
                {
                    question: "If the additional condition for the difficult test dominating is satisfied, what form of game does this problem resemble?",
                    options: [
                        "Battle of the Sexes",
                        "Prisoners’ Dilemma",
                        "Market Entry",
                        "Cooperation"
                    ],
                    answer: 1,
                    explanation: "The game resembles a Prisoners’ Dilemma because there is a dominating strategy, but (d, d) provides a better payoff for both."
                },
                {
                    question: "It is known that 1% of the population have a certain virus at any given point in time. A face mask prevents transmission to others completely. Each of 180 students in a face-to-face lecture independently decides whether to wear a face mask to the lecture or not. Wearing a face mask costs 1 unit of utility. In addition, each student also receives a cost equal to the expected number of non-mask wearing students with covid in the lecture (so if nobody wears a mask, this cost is 180(0.01) = 1.8). Which of the following game forms does the mask-wearing situation resemble?",
                    options: [
                        "Stag Hunt",
                        "Battle of the Sexes",
                        "Mixed Equilibrium",
                        "Prisoners’ Dilemma"
                    ],
                    answer: 3,
                    explanation: "The situation resembles a Prisoners’ Dilemma as individual incentives lead to a suboptimal collective outcome."
                },
                {
                    question: "Consider the same problem in the previous question. With the disease affecting 10% of the population, how many students will wear masks in equilibrium?",
                    options: [
                        "100",
                        "80",
                        "0",
                        "180"
                    ],
                    answer: 2,
                    explanation: "The equilibrium is 0 because the cost of wearing a mask exceeds the perceived benefit for each individual."
                },
                {
                    question: "If a third option is introduced (staying home with a cost of 1.5), how many students will show up at the lecture in equilibrium?",
                    options: [
                        "30",
                        "150",
                        "0",
                        "180"
                    ],
                    answer: 1,
                    explanation: "150 students will attend the lecture as the equilibrium is determined by balancing the cost of attending with the cost of staying home. n is number of people showing up to lecture. Going to the lecture costs n(0.01), not going to the lecture costs 1.5. n=1.5/0.01=150."
                },
                {
                    question: "A lecturer is preparing exam questions. She could either write a difficult exam costing time d or an easy exam costing time e (e < d). Students also have a decision, whether to work hard at cost h or to chill at cost c (c < h). If the level of difficulty matches the student preparation (difficult/hard or easy/chill), then both lecturer and students get satisfaction at a value of S. If the level of difficulty does not match, both parties get grief at a value of G ((S – d) > (G – e) > 0). What is/are the pure equilibrium outcome/s of this game?",
                    options: [
                        "(Difficult, Hard)",
                        "(Difficult, Chill) and (Easy, Hard)",
                        "(Difficult, Hard) and (Easy, Chill)",
                        "(Easy, Hard)"
                    ],
                    answer: 2,
                    explanation: "The pure strategy equilibria are (Difficult, Hard) and (Easy, Chill), as they satisfy the payoff conditions."
                },
                {
                    question: "If the lecturer and the students wanted to play mixed strategies, then what is the probability that the lecturer writes a difficult exam?",
                    options: [
                        "(S – d) / (S – e)",
                        "(S – c) / (S – G)",
                        "(h – c) / 2",
                        "(S – G + h – c) / [2(S – G)]"
                    ],
                    answer: 3,
                    explanation: "The probability is derived as p = (S – G + h – c) / [2(S – G)]."
                },
                {
                    question: "In a mixed equilibrium, with what probability will Player 2 play C3?",
                    image: "images/t10.png",
                    options: [
                        "0.6",
                        "0.8",
                        "0",
                        "0.4"
                    ],
                    answer: 0,
                    explanation: "The answer is 0 as C1 dominates C2 and C3."
                },
                {
                    question: "Under which of the following conditions is 'common priors' NEVER a required assumption, if we are to find the Nash equilibrium/equilibria?",
                    options: [
                        "There is more than one pure equilibrium.",
                        "There is a mixed equilibrium.",
                        "There is a single pure equilibrium in dominant strategies.",
                        "There is a weak equilibrium."
                    ],
                    answer: 2,
                    explanation: "Common priors are not needed when there is a single pure equilibrium in dominant strategies."
                },
                {
                    question: "What is the probability that the strategy combination (R2, C1) will be played in a mixed equilibrium?",
                    image: "images/t11.png",
                    options: [
                        "1/4",
                        "1/2",
                        "3/4",
                        "0"
                    ],
                    answer: 1,
                    explanation: "The probability is calculated as (3/4)(2/3) = 1/2."
                },
                {
                    question: "A group of 100 individuals living in a certain area all commute into town on either the bus or the train. The bus station and train station are far away from each other, so each individual chooses independently between the bus and the train when they leave home. Individuals prefer it to be not crowded. The train is quicker, providing higher utility. To be specific, the train provides 200 – t units of utility, and the bus provides 150 – b units of utility, where t and b are the number of individuals riding the train and the bus, respectively. How many individuals will ride the train in equilibrium?",
                    options: [
                        "100",
                        "75",
                        "50",
                        "25"
                    ],
                    answer: 1,
                    explanation: "In equilibrium, 75 individuals will ride the train as determined by balancing utility equations."
                },
                {
                    question: "If p is the probability with which the row player will play R1 in an equilibrium of mixed strategies, what is the value of p?",
                    image: "images/t12.png",
                    options: [
                        "p = 1 since R1 dominates R2 so R2 can’t be in a mixed equilibrium.",
                        "p = 0.5",
                        "p = 0.33",
                        "p = 0"
                    ],
                    answer: 0,
                    explanation: "R1 dominates R2, so R2 cannot be part of a mixed equilibrium, making p = 1."
                },
                {
                    question: "What assumptions did you need to make to answer the question about p in 7.53?",
                    image: "images/t12.png",
                    options: [
                        "Common knowledge of rationality only",
                        "Common priors only",
                        "Both common knowledge of rationality and common priors",
                        "Neither assumption was needed."
                    ],
                    answer: 3,
                    explanation: "Player 1 does not need to know anything about Player 2 due to the dominant strategy."
                },
                {
                    question: "If p is the probability with which the row player will play R1 in an equilibrium of mixed strategies, what is the value of p?",
                    image: "images/t13.png",
                    options: [
                        "p = 0",
                        "p = 0.33",
                        "p = 0.5",
                        "p = 1"
                    ],
                    answer: 2,
                    explanation: "After eliminating dominated strategies, the probability is calculated as p = 0.5."
                },
                {
                    question: "Imagine three players, A, B, and C, situated at the corners of an equilateral triangle. They engage in a three-person duel, in which each player has a gun with one bullet. Each player is a perfect shot and can kill one other player at any time. All players decide whether to take a shot simultaneously. There is a single round. The players order their goals as follows (with (1) being the most preferred): If we are only interested in pure strategy equilibria, how many players will take a shot in equilibrium?",
                    image: "images/idk.png",
                    options: [
                        "0",
                        "1",
                        "2",
                        "3"
                    ],
                    answer: 3,
                    explanation: "If fewer than 3 players are shooting, it is always better to unilaterally decide to take a shot. If all players are shooting, it is not optimal to choose not to shoot."
                },
                {
                    question: "The leadership of a School of Management would like its 150 lecturers to adopt a new technology in the classroom. Considering the positive impact created on the students, the technology will pay off if a minimum of 50 lecturers adopts the technology, in which case all 150 lecturers will receive a utility of U/person (they will receive zero utility otherwise). The time cost to a lecturer of adopting the technology is c (c < U). Which of the following is NOT a Nash equilibrium in the scenario where lecturers adopt new technology?",
                    options: [
                        "50 lecturers adopt and 100 do not.",
                        "Nobody adopts.",
                        "Everybody adopts.",
                        "All of the above are Nash equilibria."
                    ],
                    answer: 2,
                    explanation: "If everybody adopts, it is better for at least one person not to adopt to save on cost, making this scenario not a Nash equilibrium."
                },
                {
                    question: "If only the adopters share a utility of T (and the non-adopters get nothing), how many people would adopt the technology?",
                    options: [
                        "50",
                        "T/c (T divided by c)",
                        "T/U (T divided by U)",
                        "150"
                    ],
                    answer: 1,
                    explanation: "The number of adopters is determined by balancing the utility: T/n – c = 0, which leads to n = T/c."
                },
                {
                    question: "Consider an election with two competing politicians (P1 and P2), who are trying to decide whether to use “dirty” tactics against each other the week before the election. P1 currently has a predicted 55% of the vote and P2 has the rest. 51% is needed to win the election. If only one politician employs such tactics, they will get 10% of the vote from the other. If both or neither employ the tactics, nothing happens. The winner of the election gets 100 points of utility and the other gets 30 points. The cost of using dirty tactics is 20 points of utility. What is true about this game?",
                    options: [
                        "With probability 0.12, both politicians will use dirty tactics.",
                        "It is in the form of a Prisoners’ Dilemma.",
                        "It has two pure strategy equilibria.",
                        "Only common knowledge of rationality is needed to find the equilibrium."
                    ],
                    answer: 0,
                    explanation: "The mixed strategy probabilities lead to (5/12)(2/7) = 0.12, indicating the likelihood of both politicians employing dirty tactics."
                }
] }}