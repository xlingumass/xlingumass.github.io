
///// SAMPLE EXPERIMENT FOR SPROUSE + DILLON LSA 2017
///// Implements 7 points acceptability judgment scale.

///// Definition of the shuffleSequence; this defines the order of trials in the experiment
///// Order in this experiment is 1) Update the Latin Square counter, 2) Present instructions,
///// 3) Present practice, and 4) Present all fillers and target items shuffled together (pseudorandom)

var showProgressBar = false;                                 /// Turns off the progress bar.

var shuffleSequence = seq("setcounter",                      /// These lines are the main shuffle sequence.
  "introduction", 
  "prepractice",
  "practice", 
  "getready",
  sepWith("sep", rshuffle(startsWith("wh"), startsWith("F"))),
  "hiddenCompletionCode")

var defaults = [
    "Separator", {
        transfer: 1000,                                      // How long between sentences? (ms)
        normalMessage: "Please wait for the next sentence."  // What is message presented between stims? Can be blank.
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],            /// What are options on Likert scale? Define both # of options and their labels.
        presentAsScale: true,                               /// Should it be presented as a scale? 'true' or 'false'
        instructions: "Use number keys or click boxes to answer.",    /// Brief instructions present on each trial
        leftComment: "(Bad)", rightComment: "(Good)"        /// Labels on end-points of scale
    }
];

// Definitions of main variables; code from Roger Levy / Computational Psycholinguistics Lab @ MIT
// This code is lab standard, and it defines a random number that will be presented to participants
// along with the final notification that the experiment has finished. 
// NOTE: Unless you specifically trigger the 'hiddenCompletionCode' event in the shuffleSequence
// there will be no record of an individual participant's randomnumber
var randomnumber=Math.floor(Math.random()*10000000001); 
var completionCode=String("LIR" + randomnumber); 
var sendingResultsMessage = "The results are now being transferred. Please wait."; 
var completionMessage = "Thank you for your participation. The results were successfully transmitted. Your participation code is: " + completionCode; 
var completionErrorMessage = "The transmission of the results failed. Please contact yourname@umass.edu and retry the transmission again by clicking the link. Your participation code is: " + completionCode; 

var items = [
    //// Define separator event
    ["sep", "Separator", { }],

    //// Define counter-incrementing event
    ["setcounter", "__SetCounter__", { }],

    //// Introduction screens
    ["introduction", Message, {consentRequired: false,
                    html: ["div",
                          ["p", "Welcome! In this experiment, you will be asked to judge a series of sentences. For each sentence, you'll be asked to judge if the sentence is an acceptable sentence of English using a scale from 1-7, where 1 is the least acceptable sentence and 7 is the most acceptable sentence. Respond using the number keys, and try to use every number available in the scale, even if it feels forced at first. It will begin to feel more natural over the course of the task!"],
                          ["p", "You are NOT being asked to judge the plausibility of the sentence; you are simply being asked to judge whether each sentence sounds like a possible sentence of English. You are also not being asked to judge whether each sentence is acceptable according to a 'school grammar.' As a native speaker of English, you have intuitions or 'gut feelings' about what sounds like an acceptable sentence."],
                          ["p","Sometimes you may not be sure which answer is correct. When this happens, go with your first instinct, don't over think it!"]
                          ]}],

    ["prepractice", Message, {consentRequired: false,
                    html: ["div",
                          ["p", "Let's try one practice sentence to see how it will look."]
                          ]}],

    ["practice", "AcceptabilityJudgment", {s: "This is a practice sentence, which you should rate a 4."}],

    ["getready", Message, {consentRequired: false,
                    html: ["div",
                          ["p", "That's it! Please turn off all distractions now, and get ready to begin the experiment"]
                          ]}],

    //// Item sets are grouped together
    //// Latin squaring is done automatically
    //// Items are from Sprouse & Dillon 2017 LSA course on Experimental Syntax
    [["wh.non.sh",1], "AcceptabilityJudgment", {s: "Who thinks that Paul stole the necklace?"}],
    [["wh.non.lg",1], "AcceptabilityJudgment", {s: "What does the detective think that Paul stole?"}],
    [["wh.isl.sh",1], "AcceptabilityJudgment", {s: "Who wonders whether Paul stole the necklace?"}],
    [["wh.isl.lg",1], "AcceptabilityJudgment", {s: "What does the detective wonder whether Paul stole?"}],

    [["wh.non.sh",2], "AcceptabilityJudgment", {s: "Who thinks that Matt chased the bus?"}],
    [["wh.non.lg",2], "AcceptabilityJudgment", {s: "What does the police officer think that Matt chased?"}],
    [["wh.isl.sh",2], "AcceptabilityJudgment", {s: "Who wonders whether Matt chased the bus?"}],
    [["wh.isl.lg",2], "AcceptabilityJudgment", {s: "What does the police officer wonder whether Matt chased?"}],

    [["wh.non.sh",3], "AcceptabilityJudgment", {s: "Who thinks that Tom sold the television?"}],
    [["wh.non.lg",3], "AcceptabilityJudgment", {s: "What does the manager think that Tom sold?"}],
    [["wh.isl.sh",3], "AcceptabilityJudgment", {s: "Who wonders whether Tom sold the television?"}],
    [["wh.isl.lg",3], "AcceptabilityJudgment", {s: "What does the manager wonder whether Tom sold?"}],

    [["wh.non.sh",4], "AcceptabilityJudgment", {s: "Who thinks that Stacey wrote the letter?"}],
    [["wh.non.lg",4], "AcceptabilityJudgment", {s: "What does the soldier think that Stacey wrote?"}],
    [["wh.isl.sh",4], "AcceptabilityJudgment", {s: "Who wonders whether Stacey wrote the letter?"}],
    [["wh.isl.lg",4], "AcceptabilityJudgment", {s: "What does the soldier wonder whether Stacey wrote?"}],

    //// Fillers below here. 
    ["F-1F.01", "AcceptabilityJudgment", {s: "Mike prefers tennis because Jon baseball."}],
    ["F-1F.02", "AcceptabilityJudgment", {s: "Jenny cleaned her sister the table."}],
    ["F-2F.01", "AcceptabilityJudgment", {s: "There had all hung over the fireplace the portraits by Picasso."}],
    ["F-2F.02", "AcceptabilityJudgment", {s: "Lily will dance who the king chooses."}],
    ["F-3F.01", "AcceptabilityJudgment", {s: "The specimen thawed to study it more closely."}],
    ["F-3F.02", "AcceptabilityJudgment", {s: "With that announcement were many citizens denied the opportunity to protest."}],
    ["F-4F.01", "AcceptabilityJudgment", {s: "There is likely a river to run down the mountain."}],
    ["F-4F.02", "AcceptabilityJudgment", {s: "Richard may have been hiding, but Blake may have done so too."}],
    ["F-5F.01", "AcceptabilityJudgment", {s: "The ball perfectly rolled down the hill."}],
    ["F-5F.02", "AcceptabilityJudgment", {s: "Lloyd Webber musicals are easy to condemn without even watching."}],
    ["F-6F.01", "AcceptabilityJudgment", {s: "There are firemen injured."}],
    ["F-6F.02", "AcceptabilityJudgment", {s: "Someone better sing the national anthem."}],
    ["F-7F.01", "AcceptabilityJudgment", {s: "Laura is more excited than nervous."}],
    ["F-7F.02", "AcceptabilityJudgment", {s: "I hate eating sushi."}],

    ["hiddenCompletionCode", "FlashSentence", {s: String(completionCode), timeout: 1, sentenceDescType: "literal"}] 


    ]