// Experiment file for P&L1990 version of expressives
// This says: "begin with the intro, then follow it with real sentences evenly
// shuffled with filler sentences, with each sentece separated by the "sep"
// item (a 1 second pause).
var shuffleSequence = seq("consent", "intro", "practice","getReady",sepWith("sep", rshuffle(startsWith("Expr"),startsWith("plur"))),"exit");

// This just puts a "practice" heading on the practice items.
var practiceItemTypes = ["practice"];

// Just to avoid typing AcceptabilityJudgment over and over.
var q = DashedSentence;

var showProgressBar = false;

var defaults = [
    Separator, { transfer: 1000, normalMessage: "Please wait." }, 
     DashedSentence, {mode: "speeded acceptability", wordTime: 200, display: "in place"}
]


var items = [

["sep", Separator, { }],

  
["consent", "Form", {consentRequired: true, html: {include: "intro.html" }} ],

["exit", "Form", {consentRequired: false, html: {include: "exit.html" }} ],


["intro", Message, {consentRequired: false,
                    html: ["div",
                            ["p", "Hello! Welcome to the experiment. In this experiment, you will be reading sentences at a very rapid pace, and will then be asked to recall those sentences word for word. Sentences will be displayed one word at a time, with words appearing in the middle of the screen for a very short period of time. YOU MUST PAY ATTENTION TO EVERY WORD during this part, or you will not be able to complete the experiment. Without your full attention, it will not be possible, and we reserve the right to withold compensation if your responses indicate you were not attending to the task."],
                               ["p", "In addition to remembering the word-for-word content of a sentence, you will be asked to do some intermediate-level math problems as well. So on any given trial, you will read a sentence, then answer a short math question by entering in a response on your keyboard, and then you will be provided with a blank. At the blank, you are to type the words of the sentence you just read prior to completing the math problem, word for word. Remember to give this experiment your full attention, and good luck!"]
                          ]}],

["intro", Message, {consentRequired: false,
                    html: ["div",
                            ["p", "First, let's see how fast the words will be presented. When you click continue, you will see an example sentence that is presented at the same rate as in the experiment."]
                          ]}],

["intro", q, {s: "This is just to get you used to the speed of presentation"}],

["intro", Message, {consentRequired: false,
                    html: ["div",
                            ["p", "The words will come that rapidly during the experiment, but you will get used to it after practice. It is approximately the rate of average reading, although it seems fast. You have to pay very close attention to catch all the words!"]
                          ]}],

["intro", Message, {consentRequired: false,
                    html: ["div",
                            ["p", "Now let's try a trial like you will see in the experiment. You will read a short sentence as before, then you will get a math problem. Answer the problem correctly. After the problem, you will get a blank. In the blank, type in the EXACT WORD FOR WORD sentence you saw just before the math sentence. Let's give it a try:"]
                          ]}],

["intro", q, {s: "Focus on these words, because you will need to remember them soon."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

["intro", Message, {consentRequired: false,
                    html: ["div",
                            ["p", "You should have typed 'Focus on these words because you will need to remember them soon' in the blank. Punctuation and capitalization are not important, but remembering all the words is important. The task may seem difficult, but you will get used to it. Just pay FULL ATTENTION during the sentences, answer the math problem, and then input the sentence as WORD FOR WORD as you can based on what you remember. Let's try some more practice to get you used to the task. These sentences will be more like those you'll see in the experiment."]
                          ]}],

["practice", q, {s: "The Spanish bartender invented an amazing new drink using coconut water."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
["practice", q, {s: "All the computer programmers were frantically searching for the glitch."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
["practice", q, {s: "Two blind mice ran into the kitchen from the den."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

["getReady", Message, {consentRequired: false,
html:   ["div",
                            ["p", "That's it for the practice. Please put away any distractions and focus on the experiment only at this point. It will last approximately 15 minutes. NOTE: IF YOUR RESPONSES SUGGEST YOU ARE NOT PAYING ATTENTION TO THE EXPERIMENT, WE WILL WITHHOLD COMPENSATION."] ,
        ]}],


["getReady", Message, {consentRequired: false,
html:   ["div",
                            ["p", "That's it. Get ready, and good luck! Thank you for participating!"] ,
        ]}],

["getReady", Separator, { }],

// Target P&L modification items. 
// Condition a = NP2 modification, expressive
// Condition b = NP1 modification, expressive
// Condition c = NP2 modification, restrictive
// Condition d = NP1 modification, restrictive

[["Expr-a",1], q, {s: "Sasha didn't notice that the driver had scratched the freaking truck."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",1], q, {s: "Sasha didn't notice that the freaking driver had scratched the truck."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",1], q, {s: "Sasha didn't notice that the driver had scratched the old truck."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",1], q, {s: "Sasha didn't notice that the old driver had scratched the truck."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",2], q, {s: "The museum curator claimed that the chandelier fell and destroyed the blasted painting."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",2], q, {s: "The museum curator claimed that the blasted chandelier fell and destroyed the painting."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",2], q, {s: "The museum curator claimed that the chandelier fell and destroyed the ancient painting."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",2], q, {s: "The museum curator claimed that the ancient chandelier fell and destroyed the painting."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",3], q, {s: "Sandra complained that her parking space was more expensive than her gosh-darned apartment."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",3], q, {s: "Sandra complained that her gosh-darned parking space was more expensive than her apartment."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",3], q, {s: "Sandra complained that her parking space was more expensive than her brand-new apartment."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",3], q, {s: "Sandra complained that her brand-new parking space was more expensive than her apartment."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",4], q, {s: "The actress suggested that her shirt looked like a flipping robe."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",4], q, {s: "The actress suggested that her flipping shirt looked like a robe."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",4], q, {s: "The actress suggested that her shirt looked like an old-fashioned robe."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",4], q, {s: "The actress suggested that her old-fashioned shirt looked like a robe."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",5], q, {s: "Patricia angrily said that the waiter should stay out of the effing kitchen."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",5], q, {s: "Patricia angrily said that the effing waiter should stay out of the kitchen."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",5], q, {s: "Patricia angrily said that the waiter should stay out of the new kitchen."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",5], q, {s: "Patricia angrily said that the new waiter should stay out of the kitchen."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",6], q, {s: "The tenant complained that the radiator burned the effing carpet sometime last night."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",6], q, {s: "The tenant complained that the effing radiator burned the carpet sometime last night."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",6], q, {s: "The tenant complained that the radiator burned the ancient carpet sometime last night."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",6], q, {s: "The tenant complained that the ancient radiator burned the carpet sometime last night."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",7], q, {s: "The senator thought that any scandal could be rectified with a freaking excuse."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",7], q, {s: "The senator thought that any freaking scandal could be rectified with a excuse."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",7], q, {s: "The senator thought that any scandal could be rectified with a new excuse."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",7], q, {s: "The senator thought that any new scandal could be rectified with a excuse."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",8], q, {s: "The lawyer maintained that the judge was biased towards the stinking defendant."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",8], q, {s: "The lawyer maintained that the stinking judge was biased towards the defendant."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",8], q, {s: "The lawyer maintained that the judge was biased towards the young defendant."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",8], q, {s: "The lawyer maintained that the young judge was biased towards the defendant."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",9], q, {s: "Jessica was shocked that the factory dumped the freaking chemicals."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",9], q, {s: "Jessica was shocked that the freaking factory dumped the chemicals."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",9], q, {s: "Jessica was shocked that the factory dumped the outdated chemicals."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",9], q, {s: "Jessica was shocked that the outdated factory dumped the chemicals."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",10], q, {s: "The visitor couldn't forget that the travel agent messed up the blasted reservations."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",10], q, {s: "The visitor couldn't forget that the blasted travel agent messed up the reservations."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",10], q, {s: "The visitor couldn't forget that the travel agent messed up the current reservations."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",10], q, {s: "The visitor couldn't forget that the current travel agent messed up the reservations."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",11], q, {s: "The owner commented that the customers complained about the frigging waiters."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",11], q, {s: "The owner commented that the frigging customers complained about the waiters."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",11], q, {s: "The owner commented that the customers complained about the young waiters."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",11], q, {s: "The owner commented that the young customers complained about the waiters."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",12], q, {s: "The mechanic said that the engine sounds like a frigging lawnmower again."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",12], q, {s: "The mechanic said that the frigging engine sounds like a lawnmower again."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",12], q, {s: "The mechanic said that the engine sounds like a rundown lawnmower again."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",12], q, {s: "The mechanic said that the rundown engine sounds like a lawnmower again."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",13], q, {s: "Jackson was upset that the office was filled with frigging furniture."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",13], q, {s: "Jackson was upset that the frigging office was filled with furniture."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",13], q, {s: "Jackson was upset that the office was filled with rundown furniture."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",13], q, {s: "Jackson was upset that the rundown office was filled with furniture."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",14], q, {s: "Shayne told us that some mannequins had frigging human hair."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",14], q, {s: "Shayne told us that some frigging mannequins had human hair."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",14], q, {s: "Shayne told us that some mannequins had brand-new human hair."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",14], q, {s: "Shayne told us that some brand-new mannequins had human hair."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",15], q, {s: "The little girl was insistent that the hat now needed damn ribbons."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",15], q, {s: "The little girl was insistent that the damn hat now needed ribbons."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",15], q, {s: "The little girl was insistent that the hat now needed brand-new ribbons."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",15], q, {s: "The little girl was insistent that the brand-new hat now needed ribbons."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",16], q, {s: "The diner mentioned that the entree was awful at the damn restaurant."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",16], q, {s: "The diner mentioned that the damn entree was awful at the restaurant."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",16], q, {s: "The diner mentioned that the entree was awful at the newfangled restaurant."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",16], q, {s: "The diner mentioned that the newfangled entree was awful at the restaurant."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",17], q, {s: "Beatrix noticed that the surgeon actually complimented the damn nurse."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",17], q, {s: "Beatrix noticed that the damn surgeon actually complimented the nurse."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",17], q, {s: "Beatrix noticed that the surgeon actually complimented the elderly nurse."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",17], q, {s: "Beatrix noticed that the elderly surgeon actually complimented the nurse."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",18], q, {s: "Max wrote that the physicists criticized the damn chemists."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",18], q, {s: "Max wrote that the damn physicists criticized the chemists."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",18], q, {s: "Max wrote that the physicists criticized the elderly chemists."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",18], q, {s: "Max wrote that the elderly physicists criticized the chemists."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",19], q, {s: "The neighbor said that the high-schoolers terrorized the damn drop-outs."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",19], q, {s: "The neighbor said that the damn high-schoolers terrorized the drop-outs."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",19], q, {s: "The neighbor said that the high-schoolers terrorized the young drop-outs."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",19], q, {s: "The neighbor said that the younghigh-schoolers terrorized the drop-outs."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",20], q, {s: "Bertram emailed to say that the rules required wearing the dang uniform."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",20], q, {s: "Bertram emailed to say that the dang rules required wearing the uniform."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",20], q, {s: "Bertram emailed to say that the rules required wearing the current uniform."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",20], q, {s: "Bertram emailed to say that the current rules required wearing the uniform."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",21], q, {s: "Nathan was relieved that the visitor didn't notice his dang pimple."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",21], q, {s: "Nathan was relieved that the dang visitor didn't notice his pimple."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",21], q, {s: "Nathan was relieved that the visitor didn't notice his new pimple."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",21], q, {s: "Nathan was relieved that the new visitor didn't notice his pimple."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",22], q, {s: "Stanley warned that the bookshelves could tip over and crush the dang desk."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",22], q, {s: "Stanley warned that the dang bookshelves could tip over and crush the desk."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",22], q, {s: "Stanley warned that the bookshelves could tip over and crush the new desk."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",22], q, {s: "Stanley warned that the new bookshelves could tip over and crush the desk."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",23], q, {s: "The captain reported that the cruise ship wasn't equipped to carry the gosh-darned lifeboats."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",23], q, {s: "The captain reported that the gosh-darned cruise ship wasn't equipped to carry the lifeboats."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",23], q, {s: "The captain reported that the cruise ship wasn't equipped to carry the outdated lifeboats."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",23], q, {s: "The captain reported that the outdated cruise ship wasn't equipped to carry the lifeboats."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",24], q, {s: "Trisha was worried that the cat was allergic to the stupid apartment."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",24], q, {s: "Trisha was worried that the stupid cat was allergic to the apartment."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",24], q, {s: "Trisha was worried that the cat was allergic to the old apartment."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",24], q, {s: "Trisha was worried that the old cat was allergic to the apartment."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",25], q, {s: "The frisbee player complained that the field was covered with stupid puddles."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",25], q, {s: "The frisbee player complained that the stupid field was covered with puddles."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",25], q, {s: "The frisbee player complained that the field was covered with new puddles."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",25], q, {s: "The frisbee player complained that the new field was covered with puddles."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",26], q, {s: "The student worried that the computer contained a stinking virus."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",26], q, {s: "The student worried that the stinking computer contained a virus."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",26], q, {s: "The student worried that the computer contained a brand-new virus."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",26], q, {s: "The student worried that the brand-new computer contained a virus."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",27], q, {s: "The baker mentioned that his bakery had to stop making its stupid pastries."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",27], q, {s: "The baker mentioned that his stupid bakery had to stop making its pastries."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",27], q, {s: "The baker mentioned that his bakery had to stop making its old-fashioned pastries."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",27], q, {s: "The baker mentioned that his old-fashioned bakery had to stop making its pastries."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",28], q, {s: "Manfred hoped that the officials would not enforce the darn regulations."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",28], q, {s: "Manfred hoped that the darn officials would not enforce the regulations."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",28], q, {s: "Manfred hoped that the officials would not enforce the old-fashioned regulations."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",28], q, {s: "Manfred hoped that the old-fashioned officials would not enforce the regulations."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",29], q, {s: "The veterinarian complained that the cat hissed at the stinking dog."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",29], q, {s: "The veterinarian complained that the stinking cat hissed at the dog."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",29], q, {s: "The veterinarian complained that the cat hissed at the elderly dog."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",29], q, {s: "The veterinarian complained that the elderly cat hissed at the dog."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",30], q, {s: "The boy said that the dog is on the darn couch again."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",30], q, {s: "The boy said that the darn dog is on the couch again."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",30], q, {s: "The boy said that the dog is on the old couch again."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",30], q, {s: "The boy said that the old dog is on the couch again."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",31], q, {s: "The dry-cleaning customer complained that the dress had a darn stain on it."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",31], q, {s: "The dry-cleaning customer complained that the darn dress had a stain on it."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",31], q, {s: "The dry-cleaning customer complained that the dress had an ancient stain on it."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",31], q, {s: "The dry-cleaning customer complained that the ancient dress had a stain on it."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["Expr-a",32], q, {s: "The delivery man was annoyed that the highway had lots of dang stoplights."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-b",32], q, {s: "The delivery man was annoyed that the dang highway had lots of stoplights."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-c",32], q, {s: "The delivery man was annoyed that the highway had lots of old stoplights."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["Expr-d",32], q, {s: "The delivery man was annoyed that the old highway had lots of stoplights."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["plur-a",33], q, {s: "Nobody knew the teachers met with the accountant before buying the insurance policy."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["plur-b",33], q, {s: "Nobody knew the teacher met with the accountants before buying the insurance policy."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["plur-a",34], q, {s: "The investigators found out the executives received a bonus during the economic downturn."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["plur-b",34], q, {s: "The investigators found out the executive received bonuses during the economic downturn."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["plur-a",35], q, {s: "It was clear that the shareholders discovered the illegality in the overseas bidding."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["plur-b",35], q, {s: "It was clear that the shareholder discovered the illegalities in the overseas bidding."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["plur-a",36], q, {s: "The viewers saw that the reporters upset the restaurant owner during the press conference."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["plur-b",36], q, {s: "The viewers saw that the reporter upset the restaurant owners during the press conference."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["plur-a",37], q, {s: "Many employees could see that the butchers angered the customer by joking about bad meat."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["plur-b",37], q, {s: "Many employees could see that the butcher angered the customers by joking about bad meat."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["plur-a",38], q, {s: "The contractor was relieved that the homeowners praised the architect when the plans were revealed."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["plur-b",38], q, {s: "The contractor was relieved that the homeowner praised the architects when the plans were revealed."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["plur-a",39], q, {s: "It was expected that the officials warned the tourist at the border crossing."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["plur-a",39], q, {s: "It was expected that the official warned the tourists at the border crossing."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],

[["plur-a",40], q, {s: "It surprised everyone that the diplomats described the terrorist during the meeting."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")],
[["plur-b",40], q, {s: "It surprised everyone that the diplomat described the terrorists during the meeting."},"Form",addition(),"Form", blank("What was the sentence?  _____________________________________________________________________________________________________________________________")]

//fillers
];

// functions for addition and blanking. 
function addition() {
  var x = Math.floor(Math.random()*31+10);
  var y = Math.floor(Math.random()*11);
  var problem = x + " + " + y + " = ";
  var problemName = x + "+" + y;
  var html = "<p>" + problem +
             "<input type='text' size='3' name='" + problemName + "'></p>";
  return { html: html };
}

function blank(a, b) {
   var sentence = b ? b : a;
   var n = b ? a : null;

   var seq = [""];
   var inBlank = false;
   for (var i = 0; i < sentence.length; ++i) {
       var c = sentence.charAt(i)
       if (inBlank) {
           if (c == '_')
               (seq[seq.length-1])++;
           else {
               seq.push(c);
               inBlank = true;
           }
       }
       else {
           if (c != '_')
               seq[seq.length-1] += c
           else {
               seq.push(1);
               inBlank = true;
           }
       }
   }

   var ihtml = "";
   var bcount = 0;
   for (var i = 0; i < seq.length; ++i) {
       if (typeof(seq[i]) == "number") {
           ++bcount;
           var input = " <input type='text' name='blank-" + bcount + "' size='" + (n ? n : seq[i]) + "'></input> ";
           ihtml += input;
       }
       else {
           ihtml += $("<div>").text(seq[i])[0].innerHTML;
       }
   }

   var e = "<p>";
   var validators = { };
   var bcount = 0;
   for (var i = 0; i < seq.length; ++i) {
       if (typeof(seq[i]) == "number") {
           ++bcount;
           e += "<label class='error' for='blank-" + bcount + "'></label>";
           validators['blank-' + bcount] = function (s) { if (s && ! s.match(/^\s*$/)) return true; else return "You must fill in the blank."; }
       }
   }
   e += "</p>"

   return {
       html: "<p>" + ihtml + "</p>" + e,
       validators: validators
   };
}


