const topics = {
    "Topic 1: Introduction": {
        questions: [
            {
                question: "When projects are evaluated one at a time, rather than as part of an overall portfolio, there is likely to be:",
                options: [
                    "A tendency to suffer from the sunk cost fallacy",
                    "An unwillingness to take risks",
                    "A neutral attitude to risks, as represented by the EMV criterion",
                    "A willingness to take risks"
                ],
                answer: 1,
                explanation: "This is narrow bracketing of decisions"
            },
            {
                question: "According to psychology research, choices involving statements about losses tend to produce:",
                options: [
                    "Risk-averse responses",
                    "Risk-seeking responses",
                    "Responses that are not concerned about risks",
                    "Less accurate responses than those involving gains"
                ],
                answer: 1,
                explanation: "Because other outcomes are seen as 'gains'"
            },
            {
                question: "Decision analysis is primarily intended to:",
                options: [
                    "Lead to optimal decisions",
                    "Lead to better decisions by providing guidance and support",
                    "Replace the need for managers to make decisions wherever this is possible",
                    "Lead to faster decisions"
                ],
                answer: 1,
                explanation: "We're looking for better guidance by doing decision analysis"
            },
            {
                question: "A company will use a decision tree to decide whether to spend a further £20 million on a state-of-the-art project, having spent £36 million on the project last year and £12 million in the previous year. The costs that are relevant to the decision are:",
                options: [
                    "Only the £20 million",
                    "The £20 million and the £36 million",
                    "Only the £36 million",
                    "The £20 million, £36 million and the £12 million"
                ],
                answer: 0,
                explanation: "£36m and £12m are sunk costs, therefore not relevant to the decision"
            },
            {
                question: "According to Kahneman (2012), which of the following is responsible for intuitive decision making?",
                options: [
                    "Decision trees",
                    "Decision theory",
                    "System 1",
                    "System 2"
                ],
                answer: 2,
                explanation: "System 1 is responsible for quick, intuitive decision making"
            },
            {
                question: "A government department receives around 100 project proposals every day. The department adopts a policy that each project should be individually assessed on its own merits in terms of risk. Which of the following most accurately describes the type of framing problem being encountered?",
                options: [
                    "Imposing imaginary constraints",
                    "Getting hooked on complexity",
                    "Being overly influenced by reference points",
                    "Narrow bracketing of decisions"
                ],
                answer: 3,
                explanation: "Projects as a whole could actually provide a positive payoff"
            },
            {
                question: "Which of the following is a feature of Decision Analysis?",
                options: [
                    "Allows perfect representation of real decision scenarios",
                    "Replaces the decision maker's intuitive processes",
                    "The main purpose is to find an optimal solution to a decision problem",
                    "Complex problems are handled more easily"
                ],
                answer: 3,
                explanation: "Decision analysis adds structure to our complex problems"
            },
            {
                question: "\"I am a gut player. I rely on my instincts\". These words are most likely used by someone who depends on which of the below?",
                options: [
                    "System 1",
                    "System 2",
                    "Narrow bracketing",
                    "Availability"
                ],
                answer: 0,
                explanation: "System 1 doesn't process decisions; we discuss Availability in Week 5 — it's a heuristic, not a system we use to make decisions"
            },
            {
                question: "A large project between the government and a construction company has already led to costs of £10 billion. The government is considering cancelling the project, however they are worried that they have already committed to paying £4 billion more in project-related contracts that they can't get out of, and that if they continue the project they will probably have to spend another £6 billion. Which are the costs that are relevant in the decision of whether to continue the project?",
                options: [
                    "only the £6 billion",
                    "the £6 billion and the £4 billion",
                    "only the £4 billion",
                    "the £10 billion, the £4 billion, and the £6 billion"
                ],
                answer: 0,
                explanation: "£10bn is a sunk cost (the project has already led to those costs). £4bn is a sunk cost too since they cannot get out of that contract, they have already committed"
            },
            {
                question: "The parents of a new-born child decide to put some money into an investment, to be collected back when the child is 30 years old. One potential investment promises, for each year, either gains of 15% each year with a probability of 0.7 or losses of 5% with a probability of 0.3. They decide not to invest, saying a loss of 5% seems too much of a risk to take. Which of the following mechanisms is most likely at play here?",
                options: [
                    "Solving the wrong problem",
                    "Confirmation bias",
                    "Being over-influenced by reference points",
                    "Narrow bracketing of decisions"
                ],
                answer: 3,
                explanation: "For each year it might look slightly risky, but over 30 years one would expect that there would be a positive payoff"
            },
            {
                question: "Which of the following is NOT correct about decision making?",
                options: [
                    "The objective is to replace unaided human decision making",
                    "Sensitivity analysis can provide answers to what-if type questions",
                    "The relevance of decision models depend on the validity of the assumptions made",
                    "Decision making provides an audit trail"
                ],
                answer: 0,
                explanation: "The objective is not to replace, it's to support"
            },
            {
                question: "The tendency of voters to attend events held by their favourite candidate and to ignore events held by others is an example of:",
                options: [
                    "Being over-influenced by reference points",
                    "Ignoring probabilities",
                    "Narrow bracketing of decisions",
                    "Confirmation bias"
                ],
                answer: 3,
                explanation: "They're looking for guidance that confirms what they already believe"
            },
            {
                question: "The tendency of voters to attend events held by their favourite candidate and to ignore events held by others is an example of:",
                options: [
                    "Being over-influenced by reference points",
                    "Ignoring probabilities",
                    "Narrow bracketing of decisions",
                    "Confirmation bias"
                ],
                answer: 3,
                explanation: "They're looking for guidance that confirms what they already believe"
            },
            {
                question: "Which of the following is not a feature of decision analysis:",
                options: [
                    "Allows participation of different stakeholders",
                    "Imposes optimal solutions to problems",
                    "Creates an \"audit trail\" of how decision was made",
                    "Challenges intuition and assumptions"
                ],
                answer: 1,
                explanation: "Decision analysis does not impose optimal solutions - audit trail is a system that traces the detailed transactions relating to any item in a record"
            },
            {
                question: "Framing a decision does not involve which of the following:",
                options: [
                    "Determining decision variables",
                    "Comparing alternative actions",
                    "Identifying alternative actions",
                    "Discussing criteria relevant to problem"
                ],
                answer: 1,
                explanation: "Framing involves how we decide what the decision is, how we lay out the problem. The answer therefore is b since analysing the decision isn't part of framing it"
            },
            {
                question: "A university is rising in the rankings thanks to high flexibility, allowing many changes to occur without delay. However, a university official is concerned that individual changes, some of which seem risky, are not being scrutinised sufficiently. This official most likely suffers from:",
                options: [
                    "Getting hooked on complexity",
                    "The sunk cost fallacy",
                    "Ignoring probabilities",
                    "Narrow bracketing of decisions"
                ],
                answer: 3,
                explanation: "The official is looking at individual changes in isolation rather than as part of the whole portfolio of changes"
            },
            {
                question: "While driving, the action of swerving at the last moment to avoid a dog that runs into the street is, according to Kahneman (2012), most likely governed by which of the following:",
                options: [
                    "System 1",
                    "System 2",
                    "Narrow bracketing of decisions",
                    "Overlooking complexity"
                ],
                answer: 0,
                explanation: "System 1 is responsible for quick, intuitive decisions"
            },
            {
                question: "\"Today, health industry employees decided to go on strike following their annual raise of 1%, citing the 2% raise received by education industry employees\". This newspaper headline describes individuals who may be suffering from which of the following:",
                options: [
                    "Being over-influenced by reference points",
                    "Ignoring probabilities",
                    "Narrow bracketing of decisions",
                    "Confirmation bias"
                ],
                answer: 0,
                explanation: "Because individuals are unhappy that others are receiving higher raises (in %) rather than the absolute value of the raise they are receiving"
            },
            {
                question: "\"I've read 300 pages of this book. It's not really very good, but having come this far I might as well finish it\". The speaker of this quote is most likely suffering from which of the below?",
                options: [
                    "Narrow bracketing of decisions",
                    "Getting hooked on complexity",
                    "Sunk cost fallacy",
                    "Confirmation bias"
                ],
                answer: 2,
                explanation: "This is a classic example of the sunk cost fallacy - continuing an activity because of past investment despite it no longer being worthwhile"
            },
            {
                question: "A research and development (R&D) manager thinks a particular process for designing new products is too risky. The manager's superior feels that the process is fine since the long-term benefits from any successful development outweigh any short-term losses. The R&D manager most likely suffers from:",
                options: [
                    "Confirmation bias",
                    "Narrow bracketing of decisions",
                    "Sunk cost fallacy",
                    "Solving the wrong problem"
                ],
                answer: 1,
                explanation: "The manager is focusing on individual risks rather than considering the overall portfolio of risks and benefits"
            },
            {
                question: "\"My son had so much potential. But he just decided to have a modest life, so I'm disappointed\". The speaker most likely suffers from:",
                options: [
                    "Being overly influenced by reference points",
                    "Confirmation bias",
                    "Getting hooked on complexity",
                    "Ignoring probabilities"
                ],
                answer: 0,
                explanation: "Because they're looking at 'potential' from a reference point (the perception they had of who their son would become)"
            },
            {
                question: "\"I didn't really want this job. But after all the effort that went into applying and interviewing I felt it would be a waste not to accept the offer\". This person most likely suffers from:",
                options: [
                    "Confirmation bias",
                    "Narrow bracketing of decisions",
                    "Sunk cost fallacy",
                    "Solving the wrong problem"
                ],
                answer: 2,
                explanation: "The time spent interviewing and applying has already been spent, thus, the time already spent is classified as a sunk cost"
            },
            {
                question: "The saying \"Don't judge a book by its cover\" encourages the use of:",
                options: [
                    "System 1",
                    "System 2",
                    "Intuitive decision making",
                    "Framing decisions"
                ],
                answer: 1,
                explanation: "This encourages the use of System 2 (careful, analytical thinking) rather than quick judgments (System 1)"
            },
            {
                question: "Which of the following is NOT true about decision making methods?",
                options: [
                    "They allow participation of different stakeholders",
                    "They provide the best decision in complex contexts",
                    "They create a defensible rationale for any decision made",
                    "They can challenge intuition"
                ],
                answer: 1,
                explanation: "Decision making methods allow us to base our decision on more structure, which does not necessarily mean that they give us the best decision"
            },
            {
                question: "Which of the following is NOT true about intuitive decision-making?",
                options: [
                    "It needs to be avoided for important decisions",
                    "It is a result of pattern recognition",
                    "It is based on simplified analysis of stimuli",
                    "It can yield correct decisions"
                ],
                answer: 0,
                explanation: "Think about decisions we need to make quickly (i.e., swerving on the road = intuitive decision-making instances) – we can't really avoid it"
            },
            {
                question: "A modelling software, utilising sophisticated methods and data, has identified an exact location for the new distribution depot of a supermarket chain. What would you not advise managers of the chain to do as a first step?",
                options: [
                    "Re-visit their intuition about the decision in light of the software's recommendation",
                    "Re-visit the software's assumptions based on the managers' intuition regarding the best location",
                    "Decide to locate the facility where the software suggests",
                    "Get stakeholder feedback regarding the software's recommendation"
                ],
                answer: 2,
                explanation: "It's important to validate and review software recommendations rather than accepting them immediately"
            },
            {
                question: "An individual's decision to play the lottery can be explained by which framing problem?",
                options: [
                    "Narrow bracketing of decisions",
                    "Imposing imaginary constraints",
                    "The sunk cost fallacy",
                    "Ignoring probabilities"
                ],
                answer: 0,
                explanation: "Looking at each lottery ticket purchase in isolation rather than considering the long-term pattern of losses"
            },
            {
                question: "\"Nothing pains some people more than having to think\". In this quote, Martin Luther King is encouraging increased use of which of the following?",
                options: [
                    "Sensitivity analysis",
                    "Utility functions",
                    "System 1",
                    "System 2"
                ],
                answer: 3,
                explanation: "Because having to think involves going beyond System 1 and intuitive decision making"
            },
            {
                question: "Which of the following is not an advantage of structured decision making?",
                options: [
                    "Different stakeholders can participate in the process",
                    "Always provides confirmation of intuition",
                    "Decisions can be defended as rationale is clear",
                    "Allows explicit consideration of risks"
                ],
                answer: 1,
                explanation: "Not necessarily, it could provide a result against intuition"
            },
            {
                question: "\"My career coach told me to follow a completely different career path than the one I've been taking. I disagree – if I change paths then all my investment in my education would have been for nothing.\" What is this individual suffering from?",
                options: [
                    "Imposing imaginary constraints",
                    "Sunk cost fallacy",
                    "Getting hooked on complexity",
                    "Confirmation bias"
                ],
                answer: 1,
                explanation: "The investment in the education has already taken place and is irrevocable – thus since it is influencing their decision, we can conclude the decision maker suffers from the sunk cost fallacy"
            },
            {
                question: "\"My mother always tells me 'Why can't you be more like your brother?'. I wish she could just love me as I am.\" According to this person, what does the mother seem to be suffering from?",
                options: [
                    "Getting hooked on complexity",
                    "Solving the wrong problem",
                    "Narrow bracketing",
                    "Being over-influenced by reference points"
                ],
                answer: 3,
                explanation: "The mother is using the brother as a reference point for comparison"
            },
            {
                question: "Deciding not to buy insurance is consistent with which of Tversky and Kahneman's findings?",
                options: [
                    "System 1",
                    "System 2",
                    "Individuals are risk averse when facing gains",
                    "Individuals are risk seeking when facing losses"
                ],
                answer: 3,
                explanation: "People tend to be risk-seeking when facing losses, which can lead to avoiding insurance"
            },
            {
                question: "Why is System 1 not always a reliable decision maker?",
                options: [
                    "It is fast",
                    "It is hard working",
                    "It simplifies the world",
                    "It processes stimuli"
                ],
                answer: 2,
                explanation: "System 1's tendency to simplify complex situations can lead to unreliable decisions"
            },
            {
                question: "Which of the following is an example of a sunk cost?",
                options: [
                    "The cost of a new house I'm planning to buy",
                    "The cost of two possible investments I could make",
                    "The cost of a holiday I plan to take next year",
                    "The cost of the car I own"
                ],
                answer: 3,
                explanation: "All a, b and c are investments that haven't been made already by the decision maker. However, the decision maker already owns the car, and thus is considered a sunk cost"
            },
            {
                question: "Confirmation Bias:",
                options: [
                    "Refers to surveys with leading questions that give the interviewer the answer that they want",
                    "Involves the search for clear-cut information that might falsify a belief",
                    "Minimises the chances of the falsification of a belief",
                    "Refers to decision models that are based on too many assumptions"
                ],
                answer: 2,
                explanation: "Confirmation bias makes decision makers seek information that confirms their beliefs and thus might prevent them from considering other perspectives"
            },
            {
                question: "Research into decision making suggests that:",
                options: [
                    "Intuition usually works best when you have to make a decision in a new unfamiliar environment",
                    "People's decision frames are usually accurate representations of decisions",
                    "People tend to hate losses more than they love gains",
                    "People tend to enjoy gains more than they hate losses"
                ],
                answer: 2,
                explanation: "Research shows people have a stronger aversion to losses than attraction to equivalent gains"
            },
            {
                question: "Which of the following will NOT necessarily be a result of using structured decision making?",
                options: [
                    "Saving time in arriving at a decision",
                    "Creating an audit trail",
                    "Including more stakeholders",
                    "Raising consciousness of relevant issues"
                ],
                answer: 0,
                explanation: "Structured decision making might actually take more time than intuitive decisions"
            },
            {
                question: "Which of the following would be an effective defence against confirmation bias?",
                options: [
                    "Using utility functions",
                    "Having clear rules on what information is to be collected and presented",
                    "Avoiding narrow bracketing of decisions",
                    "Not including costs that have already been incurred"
                ],
                answer: 1,
                explanation: "Confirmation bias has to do with what information is collected and presented; we are selective in collecting information. Having clear rules can help prevent this bias"
            },
            {
                question: "Which of the following \"driving\" decisions is most likely to be a result of Tversky and Kahneman's \"System 1\"?",
                options: [
                    "The decision to swerve the car to avoid a squirrel",
                    "The decision to take a different route than the one suggested by Google Maps",
                    "The decision to skip this petrol station and wait for the next one",
                    "The decision not to drive home after a night of consuming alcohol"
                ],
                answer: 0,
                explanation: "Quick, instinctive reactions like swerving are typical System 1 decisions"
            },
            {
                question: "Which of the following is true about structured decision making?",
                options: [
                    "It provides the optimal answer to a problem",
                    "It performs worse than intuitive decision making",
                    "It needs to be triggered for it to work",
                    "It arises from a fast pattern-recognising system"
                ],
                answer: 2,
                explanation: "Structured decision making requires conscious effort and doesn't happen automatically"
            },
            {
                question: "Which of the following is an example of the sunk cost fallacy?",
                options: [
                    "\"I will get the car fixed for £1000 because I just spent £5000 to replace the suspension\"",
                    "\"I will get the car fixed for £1000 because I want to give it to my son as his first car\"",
                    "\"I will get the car fixed for £1000 because then I'll be able to drive it for another five years\"",
                    "\"I will get the car fixed for £1000 because I like driving it\""
                ],
                answer: 0,
                explanation: "The previous £5000 spent is a sunk cost and shouldn't influence the current decision"
            },
            {
                question: "After being shown a video of a football goal, most individuals who were asked about the colour of the goalkeeper's kit got it wrong. This is a failure of:",
                options: [
                    "System 1",
                    "Reference points",
                    "System 2",
                    "Solving the wrong problem"
                ],
                answer: 0,
                explanation: "This is a System 1 failure where quick, intuitive processing misses important details"
            },
            {
                question: "Which of the below is NOT relevant to narrow bracketing as a failure of framing?",
                options: [
                    "Being over-influenced by reference points",
                    "Global incentives might not be aligned with local incentives",
                    "Large number of trials have smaller variance",
                    "Isolated decision makers not having a holistic view"
                ],
                answer: 0,
                explanation: "Being over-influenced by reference points is a separate framing issue from narrow bracketing"
            }
        ]
    }
    // Add other topics here...
};