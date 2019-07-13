// ROCOUT - Online binary version
// Implements independent, random assignment of participants to
// 1) Experimental list and
// 2) Instruction condition


// Do not show progress bar 
var showProgressBar = false;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'intro',
    'setcounter',
    'shared-intro',
    "groupA",
    sepWith("timeoutSep", rshuffle(startsWith('ROCOUT'),startsWith('Filler'))),
    'debrief',
    'exit');

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedAcceptabilityJudgment';

// Controller settings.
var defaults = [
    DS, {q: 'Is this sentence grammatical?',
        as: [['f','Yes'],['j','No']],
        randomOrder: false,
        presentHorizontally: true,
        mode: 'speeded acceptability',
        display: 'in place',
        blankText: '+',
        wordTime: 225,
        wordPauseTime: 100,
        timeout: 2000}
];


// This is code to add breaks; designed by Ethan Poole and Stefan Keine
// This adds a break every 24 items:
function modifyRunningOrder(ro)
{
    for (var i = 0; i < ro.length; ++i)
    {
        if (i % 24 == 1
            && i > 23
            && i < 250)
        {
            ro[i].push(new DynamicElement(
                "Message",
                {html: "<p>Please take a short break. Press a button to continue when you're ready.</p>", transfer: "keypress"},
            true));
        }
    }
    return ro;
}

// Items array.
var items = [

["setcounter", "__SetCounter__", { }],
["timeoutSep", Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Please respond more quickly."}],

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],
["exit", "Form", {consentRequired: true, html: {include: "exit.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro2.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro3.html"}}],

['introduction', "Form", {consentRequired: false, html: {include: "groupA_intro4.html"}}],

["introduction", Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Please respond more quickly."}, DS, {s: "Those cats was snoring loudly."}],

['introduction', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "How was that? That item is one that some, but not all, English speakers judge to be ungrammatical. "],
                           ["p", "Let's try some more."]
                         ]}],

["introduction", Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Please respond more quickly."}, DS, {s: "At the ball, the prince waltzed with girl every before midnight."}],
["introduction", Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Please respond more quickly."}, DS, {s: "Without warning, Geoffrey turned and screamed at the waiter who embarrassed him."}],
["introduction", Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Please respond more quickly."}, DS, {s: "Madame de Plessy has sitted up all night worrying about her son, who was fighting the invaders."}],
["introduction", Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Please respond more quickly."}, DS, {s: "The barista lazily made a lattes and didn't even try to make a design on top."}],

['introduction', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Alright, that's it for practice! Hit any key when you're ready to begin."]
                        ]}],

//// Shared experimental items + fillers

[["ROCOUT-MultiMatch",1], DS, {s:"From across the room, Armand spotted the cousin of the painter who knits."}],
[["ROCOUT-HighMatch",1], DS, {s:"From across the room, Armand spotted the cousin of the painters who knits."}],
[["ROCOUT-LowMatch",1], DS, {s:"From across the room, Armand spotted the cousins of the painter who knits."}],
[["ROCOUT-NoMatch",1], DS, {s:"From across the room, Armand spotted the cousins of the painters who knits."}],

[["ROCOUT-MultiMatch",2], DS, {s:"At the meeting, Belinda greeted the assistant of the manager who curses."}],
[["ROCOUT-HighMatch",2], DS, {s:"At the meeting, Belinda greeted the assistant of the managers who curses."}],
[["ROCOUT-LowMatch",2], DS, {s:"At the meeting, Belinda greeted the assistants of the manager who curses."}],
[["ROCOUT-NoMatch",2], DS, {s:"At the meeting, Belinda greeted the assistants of the managers who curses."}],

[["ROCOUT-MultiMatch",3], DS, {s:"In the lobby, Clyde bumped into the chauffeur of the CEO who is reckless."}],
[["ROCOUT-HighMatch",3], DS, {s:"In the lobby, Clyde bumped into the chauffeur of the CEOs who is reckless."}],
[["ROCOUT-LowMatch",3], DS, {s:"In the lobby, Clyde bumped into the chauffeurs of the CEO who is reckless."}],
[["ROCOUT-NoMatch",3], DS, {s:"In the lobby, Clyde bumped into the chauffeurs of the CEOs who is reckless."}],

[["ROCOUT-MultiMatch",4], DS, {s:"Daria crossed the quad to speak to the coworker of the administrator who is progressive."}],
[["ROCOUT-HighMatch",4], DS, {s:"Daria crossed the quad to speak to the coworker of the administrators who is progressive."}],
[["ROCOUT-LowMatch",4], DS, {s:"Daria crossed the quad to speak to the coworkers of the administrator who is progressive."}],
[["ROCOUT-NoMatch",4], DS, {s:"Daria crossed the quad to speak to the coworkers of the administrators who is progressive."}],

[["ROCOUT-MultiMatch",5], DS, {s:"Edwin has been reading about the sister of the actor who was visiting."}],
[["ROCOUT-HighMatch",5], DS, {s:"Edwin has been reading about the sister of the actors who was visiting."}],
[["ROCOUT-LowMatch",5], DS, {s:"Edwin has been reading about the sisters of the actor who was visiting."}],
[["ROCOUT-NoMatch",5], DS, {s:"Edwin has been reading about the sisters of the actors who was visiting."}],

[["ROCOUT-MultiMatch",6], DS, {s:"From the gallery, Franny observed the nurse of the surgeon who was in charge."}],
[["ROCOUT-HighMatch",6], DS, {s:"From the gallery, Franny observed the nurse of the surgeons who was in charge."}],
[["ROCOUT-LowMatch",6], DS, {s:"From the gallery, Franny observed the nurses of the surgeon who was in charge."}],
[["ROCOUT-NoMatch",6], DS, {s:"From the gallery, Franny observed the nurses of the surgeons who was in charge."}],

[["ROCOUT-MultiMatch",7], DS, {s:"Gerald introduced himself to the niece of the billionaire who sails."}],
[["ROCOUT-HighMatch",7], DS, {s:"Gerald introduced himself to the niece of the billionaires who sails."}],
[["ROCOUT-LowMatch",7], DS, {s:"Gerald introduced himself to the nieces of the billionaire who sails."}],
[["ROCOUT-NoMatch",7], DS, {s:"Gerald introduced himself to the nieces of the billionaires who sails."}],

[["ROCOUT-MultiMatch",8], DS, {s:"Hilda was only vaguely acquainted with the relative of the celebrity who was blogging."}],
[["ROCOUT-HighMatch",8], DS, {s:"Hilda was only vaguely acquainted with the relative of the celebrities who was blogging."}],
[["ROCOUT-LowMatch",8], DS, {s:"Hilda was only vaguely acquainted with the relatives of the celebrity who was blogging."}],
[["ROCOUT-NoMatch",8], DS, {s:"Hilda was only vaguely acquainted with the relatives of the celebrities who was blogging."}],

[["ROCOUT-MultiMatch",9], DS, {s:"At the press conference, Isaac recorded the translator of the ambassador who jokes."}],
[["ROCOUT-HighMatch",9], DS, {s:"At the press conference, Isaac recorded the translator of the ambassadors who jokes."}],
[["ROCOUT-LowMatch",9], DS, {s:"At the press conference, Isaac recorded the translators of the ambassador who jokes."}],
[["ROCOUT-NoMatch",9], DS, {s:"At the press conference, Isaac recorded the translators of the ambassadors who jokes."}],

[["ROCOUT-MultiMatch",10], DS, {s:"During the budget negotiation, Janet charmed the assistant of the executive who decides."}],
[["ROCOUT-HighMatch",10], DS, {s:"During the budget negotiation, Janet charmed the assistant of the executives who decides."}],
[["ROCOUT-LowMatch",10], DS, {s:"During the budget negotiation, Janet charmed the assistants of the executive who decides."}],
[["ROCOUT-NoMatch",10], DS, {s:"During the budget negotiation, Janet charmed the assistants of the executives who decides."}],

[["ROCOUT-MultiMatch",11], DS, {s:"On the fishing trip, we laughed at the uncle of the sailor who was confused."}],
[["ROCOUT-HighMatch",11], DS, {s:"On the fishing trip, we laughed at the uncle of the sailors who was confused."}],
[["ROCOUT-LowMatch",11], DS, {s:"On the fishing trip, we laughed at the uncles of the sailor who was confused."}],
[["ROCOUT-NoMatch",11], DS, {s:"On the fishing trip, we laughed at the uncles of the sailors who was confused."}],

[["ROCOUT-MultiMatch",12], DS, {s:"At trial, we scrutinized the prisoner of the FBI agent who was lying."}],
[["ROCOUT-HighMatch",12], DS, {s:"At trial, we scrutinized the prisoner of the FBI agents who was lying."}],
[["ROCOUT-LowMatch",12], DS, {s:"At trial, we scrutinized the prisoners of the FBI agent who was lying."}],
[["ROCOUT-NoMatch",12], DS, {s:"At trial, we scrutinized the prisoners of the FBI agents who was lying."}],

[["ROCOUT-MultiMatch",13], DS, {s:"During the demonstration, you photographed the soldier of the lieutenant who was camouflaged."}],
[["ROCOUT-HighMatch",13], DS, {s:"During the demonstration, you photographed the soldier of the lieutenants who was camouflaged."}],
[["ROCOUT-LowMatch",13], DS, {s:"During the demonstration, you photographed the soldiers of the lieutenant who was camouflaged."}],
[["ROCOUT-NoMatch",13], DS, {s:"During the demonstration, you photographed the soldiers of the lieutenants who was camouflaged."}],

[["ROCOUT-MultiMatch",14], DS, {s:"Karl recognized the hostage of the pirate who was on TV."}],
[["ROCOUT-HighMatch",14], DS, {s:"Karl recognized the hostage of the pirates who was on TV."}],
[["ROCOUT-LowMatch",14], DS, {s:"Karl recognized the hostages of the pirate who was on TV."}],
[["ROCOUT-NoMatch",14], DS, {s:"Karl recognized the hostages of the pirates who was on TV."}],

[["ROCOUT-MultiMatch",15], DS, {s:"During the play, we all heckled the murderer of the prince who was disguised."}],
[["ROCOUT-HighMatch",15], DS, {s:"During the play, we all heckled the murderer of the princes who was disguised."}],
[["ROCOUT-LowMatch",15], DS, {s:"During the play, we all heckled the murderers of the prince who was disguised."}],
[["ROCOUT-NoMatch",15], DS, {s:"During the play, we all heckled the murderers of the princes who was disguised."}],

[["ROCOUT-MultiMatch",16], DS, {s:"Before the party, Lorraine texted the brother of the schoolgirl who raps."}],
[["ROCOUT-HighMatch",16], DS, {s:"Before the party, Lorraine texted the brother of the schoolgirls who raps."}],
[["ROCOUT-LowMatch",16], DS, {s:"Before the party, Lorraine texted the brothers of the schoolgirl who raps."}],
[["ROCOUT-NoMatch",16], DS, {s:"Before the party, Lorraine texted the brothers of the schoolgirls who raps."}],

[["ROCOUT-MultiMatch",17], DS, {s:"At the potluck, Marcus chatted with the aunt of the nun who bakes."}],
[["ROCOUT-HighMatch",17], DS, {s:"At the potluck, Marcus chatted with the aunt of the nuns who bakes."}],
[["ROCOUT-LowMatch",17], DS, {s:"At the potluck, Marcus chatted with the aunts of the nun who bakes."}],
[["ROCOUT-NoMatch",17], DS, {s:"At the potluck, Marcus chatted with the aunts of the nuns who bakes."}],

[["ROCOUT-MultiMatch",18], DS, {s:"Everyone in the plague-ravaged village avoided the servant of the sorceress who was mysterious."}],
[["ROCOUT-HighMatch",18], DS, {s:"Everyone in the plague-ravaged village avoided the servant of the sorceresses who was mysterious."}],
[["ROCOUT-LowMatch",18], DS, {s:"Everyone in the plague-ravaged village avoided the servants of the sorceress who was mysterious."}],
[["ROCOUT-NoMatch",18], DS, {s:"Everyone in the plague-ravaged village avoided the servants of the sorceresses who was mysterious."}],

[["ROCOUT-MultiMatch",19], DS, {s:"At the charity show, Noreen nodded to the sidekick of the actor who was juggling."}],
[["ROCOUT-HighMatch",19], DS, {s:"At the charity show, Noreen nodded to the sidekick of the actors who was juggling."}],
[["ROCOUT-LowMatch",19], DS, {s:"At the charity show, Noreen nodded to the sidekicks of the actor who was juggling."}],
[["ROCOUT-NoMatch",19], DS, {s:"At the charity show, Noreen nodded to the sidekicks of the actors who was juggling."}],

[["ROCOUT-MultiMatch",20], DS, {s:"Someone at the church meeting complained about the secretary of the bishop who was controversial."}],
[["ROCOUT-HighMatch",20], DS, {s:"Someone at the church meeting complained about the secretary of the bishops who was controversial."}],
[["ROCOUT-LowMatch",20], DS, {s:"Someone at the church meeting complained about the secretaries of the bishop who was controversial."}],
[["ROCOUT-NoMatch",20], DS, {s:"Someone at the church meeting complained about the secretaries of the bishops who was controversial."}],

[["ROCOUT-NoMatch",21], DS, {s:"Down at the pub, Ollie gossiped about the daughter of the nurse who were at church."}],
[["ROCOUT-LowMatch",21], DS, {s:"Down at the pub, Ollie gossiped about the daughter of the nurses who were at church."}],
[["ROCOUT-HighMatch",21], DS, {s:"Down at the pub, Ollie gossiped about the daughters of the nurse who was at church."}],
[["ROCOUT-MultiMatch",21], DS, {s:"Down at the pub, Ollie gossiped about the daughters of the nurses who was at church."}],

[["ROCOUT-NoMatch",22], DS, {s:"For her art class, Priscilla had been sketching the guru of the student who were chanting."}],
[["ROCOUT-LowMatch",22], DS, {s:"For her art class, Priscilla had been sketching the guru of the students who were chanting."}],
[["ROCOUT-HighMatch",22], DS, {s:"For her art class, Priscilla had been sketching the gurus of the student who were chanting."}],
[["ROCOUT-MultiMatch",22], DS, {s:"For her art class, Priscilla had been sketching the gurus of the students who were chanting."}],

[["ROCOUT-NoMatch",23], DS, {s:"From the lounge you could see the pilot of the millionaire who were distrusted."}],
[["ROCOUT-LowMatch",23], DS, {s:"From the lounge you could see the pilot of the millionaires who were distrusted."}],
[["ROCOUT-HighMatch",23], DS, {s:"From the lounge you could see the pilots of the millionaire who were distrusted."}],
[["ROCOUT-MultiMatch",23], DS, {s:"From the lounge you could see the pilots of the millionaires who were distrusted."}],

[["ROCOUT-NoMatch",24], DS, {s:"Quentin panicked and tried calling the therapist of the widow who were at work."}],
[["ROCOUT-LowMatch",24], DS, {s:"Quentin panicked and tried calling the therapist of the widows who were at work."}],
[["ROCOUT-HighMatch",24], DS, {s:"Quentin panicked and tried calling the therapists of the widow who were at work."}],
[["ROCOUT-MultiMatch",24], DS, {s:"Quentin panicked and tried calling the therapists of the widows who were at work."}],

[["ROCOUT-NoMatch",25], DS, {s:"No one could seem to find the shipmate of the cadet who usually bugle."}],
[["ROCOUT-LowMatch",25], DS, {s:"No one could seem to find the shipmate of the cadets who usually bugle."}],
[["ROCOUT-HighMatch",25], DS, {s:"No one could seem to find the shipmates of the cadet who usually bugle."}],
[["ROCOUT-MultiMatch",25], DS, {s:"No one could seem to find the shipmates of the cadets who usually bugle."}],

[["ROCOUT-NoMatch",26], DS, {s:"If you flipped the channel, you would see the accomplice of the thief who were indicted."}],
[["ROCOUT-LowMatch",26], DS, {s:"If you flipped the channel, you would see the accomplice of the thieves who were indicted."}],
[["ROCOUT-HighMatch",26], DS, {s:"If you flipped the channel, you would see the accomplices of the thief who were indicted."}],
[["ROCOUT-MultiMatch",26], DS, {s:"If you flipped the channel, you would see the accomplices of the thieves who were indicted."}],

[["ROCOUT-NoMatch",27], DS, {s:"Everyone at the party groaned at the bodyguard of the diva who smoke."}],
[["ROCOUT-LowMatch",27], DS, {s:"Everyone at the party groaned at the bodyguard of the divas who smoke."}],
[["ROCOUT-HighMatch",27], DS, {s:"Everyone at the party groaned at the bodyguards of the diva who smoke."}],
[["ROCOUT-MultiMatch",27], DS, {s:"Everyone at the party groaned at the bodyguards of the divas who smoke."}],

[["ROCOUT-NoMatch",28], DS, {s:"Despite our appointment, we couldn't get past the secretary of the boardmember who were in control."}],
[["ROCOUT-LowMatch",28], DS, {s:"Despite our appointment, we couldn't get past the secretary of the boardmembers who were in control."}],
[["ROCOUT-HighMatch",28], DS, {s:"Despite our appointment, we couldn't get past the secretaries of the boardmember who were in control."}],
[["ROCOUT-MultiMatch",28], DS, {s:"Despite our appointment, we couldn't get past the secretaries of the boardmembers who were in control."}],

[["ROCOUT-NoMatch",29], DS, {s:"You can get a towel from the pool boy of the celebrity who sunbathe."}],
[["ROCOUT-LowMatch",29], DS, {s:"You can get a towel from the pool boy of the celebrities who sunbathe."}],
[["ROCOUT-HighMatch",29], DS, {s:"You can get a towel from the pool boys of the celebrity who sunbathe."}],
[["ROCOUT-MultiMatch",29], DS, {s:"You can get a towel from the pool boys of the celebrities who sunbathe."}],

[["ROCOUT-NoMatch",30], DS, {s:"Rosalina testified against the detective of the senator who were caught."}],
[["ROCOUT-LowMatch",30], DS, {s:"Rosalina testified against the detective of the senators who were caught."}],
[["ROCOUT-HighMatch",30], DS, {s:"Rosalina testified against the detectives of the senator who were caught."}],
[["ROCOUT-MultiMatch",30], DS, {s:"Rosalina testified against the detectives of the senators who were caught."}],

[["ROCOUT-NoMatch",31], DS, {s:"Before the exhibition, Silas telephoned the friend of the bodybuilder who write."}],
[["ROCOUT-LowMatch",31], DS, {s:"Before the exhibition, Silas telephoned the friend of the bodybuilders who write."}],
[["ROCOUT-HighMatch",31], DS, {s:"Before the exhibition, Silas telephoned the friends of the bodybuilder who write."}],
[["ROCOUT-MultiMatch",31], DS, {s:"Before the exhibition, Silas telephoned the friends of the bodybuilders who write."}],

[["ROCOUT-NoMatch",32], DS, {s:"At her orientation, Tamara recently met the nephew of the professor who paint."}],
[["ROCOUT-LowMatch",32], DS, {s:"At her orientation, Tamara recently met the nephew of the professors who paint."}],
[["ROCOUT-HighMatch",32], DS, {s:"At her orientation, Tamara recently met the nephews of the professor who paint."}],
[["ROCOUT-MultiMatch",32], DS, {s:"At her orientation, Tamara recently met the nephews of the professors who paint."}],

[["ROCOUT-NoMatch",33], DS, {s:"Everyone at the coffeeshop sympathized with the courier of the florist who were complaining."}],
[["ROCOUT-LowMatch",33], DS, {s:"Everyone at the coffeeshop sympathized with the courier of the florists who were complaining."}],
[["ROCOUT-HighMatch",33], DS, {s:"Everyone at the coffeeshop sympathized with the couriers of the florist who were complaining."}],
[["ROCOUT-MultiMatch",33], DS, {s:"Everyone at the coffeeshop sympathized with the couriers of the florists who were complaining."}],

[["ROCOUT-NoMatch",34], DS, {s:"Despite the good press, we didn't really like the commander of the soldier who whistle."}],
[["ROCOUT-LowMatch",34], DS, {s:"Despite the good press, we didn't really like the commander of the soldiers who whistle."}],
[["ROCOUT-HighMatch",34], DS, {s:"Despite the good press, we didn't really like the commanders of the soldier who whistle."}],
[["ROCOUT-MultiMatch",34], DS, {s:"Despite the good press, we didn't really like the commanders of the soldiers who whistle."}],

[["ROCOUT-NoMatch",35], DS, {s:"No one quite knew how to respond to the buddy of the janitor who burp."}],
[["ROCOUT-LowMatch",35], DS, {s:"No one quite knew how to respond to the buddy of the janitors who burp."}],
[["ROCOUT-HighMatch",35], DS, {s:"No one quite knew how to respond to the buddies of the janitor who burp."}],
[["ROCOUT-MultiMatch",35], DS, {s:"No one quite knew how to respond to the buddies of the janitors who burp."}],

[["ROCOUT-NoMatch",36], DS, {s:"At the summit, Ursula warmly greeted the advisor of the tycoon who snowboard."}],
[["ROCOUT-LowMatch",36], DS, {s:"At the summit, Ursula warmly greeted the advisor of the tycoons who snowboard."}],
[["ROCOUT-HighMatch",36], DS, {s:"At the summit, Ursula warmly greeted the advisors of the tycoon who snowboard."}],
[["ROCOUT-MultiMatch",36], DS, {s:"At the summit, Ursula warmly greeted the advisors of the tycoons who snowboard."}],

[["ROCOUT-NoMatch",37], DS, {s:"Vlad once again evaded the deputy of the sheriff who never relent."}],
[["ROCOUT-LowMatch",37], DS, {s:"Vlad once again evaded the deputy of the sheriffs who never relent."}],
[["ROCOUT-HighMatch",37], DS, {s:"Vlad once again evaded the deputies of the sheriff who never relent."}],
[["ROCOUT-MultiMatch",37], DS, {s:"Vlad once again evaded the deputies of the sheriffs who never relent."}],

[["ROCOUT-NoMatch",38], DS, {s:"The cunning Wally outmaneuvered the henchman of the villain who often fail."}],
[["ROCOUT-LowMatch",38], DS, {s:"The cunning Wally outmaneuvered the henchman of the villains who often fail."}],
[["ROCOUT-HighMatch",38], DS, {s:"The cunning Wally outmaneuvered the henchmen of the villain who often fail."}],
[["ROCOUT-MultiMatch",38], DS, {s:"The cunning Wally outmaneuvered the henchmen of the villains who often fail."}],

[["ROCOUT-NoMatch",39], DS, {s:"Xena was shocked by the publicist of the performer who rarely appear."}],
[["ROCOUT-LowMatch",39], DS, {s:"Xena was shocked by the publicist of the performers who rarely appear."}],
[["ROCOUT-HighMatch",39], DS, {s:"Xena was shocked by the publicists of the performer who rarely appear."}],
[["ROCOUT-MultiMatch",39], DS, {s:"Xena was shocked by the publicists of the performers who rarely appear."}],

[["ROCOUT-NoMatch",40], DS, {s:"You can be the penpal of the prisoner who also draw."}],
[["ROCOUT-LowMatch",40], DS, {s:"You can be the penpal of the prisoners who also draw."}],
[["ROCOUT-HighMatch",40], DS, {s:"You can be the penpals of the prisoner who also draw."}],
[["ROCOUT-MultiMatch",40], DS, {s:"You can be the penpals of the prisoners who also draw."}],

[["Filler-GoodFill",900], DS, {s:"For her daughter's birthday party, Alice hired a clown who juggles."}],
[["Filler-BadFill",901], DS, {s:"During his speech at the high school, Brad called out the students who heckles."}],
[["Filler-GoodFill",902], DS, {s:"Because no one was dancing, Morris called up his friend who spins techno. "}],
[["Filler-BadFill",903], DS, {s:"During the airshow, General Griff intently watched the inexperienced pilots who sometimes crashes."}],
[["Filler-GoodFill",904], DS, {s:"Actually, we wouldn't usually hire any worker who commutes."}],
[["Filler-BadFill",905], DS, {s:"We heard that Johnny simultaneously dated three girls who is Brazilian. "}],
[["Filler-GoodFill",906], DS, {s:"At the party, Mary Anne kept talking with the German visitor who was mysterious."}],
[["Filler-BadFill",907], DS, {s:"Ignoring my advice, Mrs. Dahlgren sought out the party hosts who was in hiding."}],
[["Filler-GoodFill",908], DS, {s:"At the end of class, Professor Brown counseled the young student who had been criticized.   "}],
[["Filler-BadFill",909], DS, {s:"At the comedy show, we tried to ignore the audience members who was heckling. "}],
[["Filler-GoodFill",910], DS, {s:"As a babysitter, Kelly should know how to handle the bratty kids who misbehave."}],
[["Filler-BadFill",911], DS, {s:"To my surprise, nobody knew that one guy over there who smoke."}],
[["Filler-GoodFill",912], DS, {s:"At the meeting, the boss wanted to know about the new commuters who bike."}],
[["Filler-BadFill",913], DS, {s:"Actually my dog Loki will definitely bite any man who walk by."}],
[["Filler-GoodFill",914], DS, {s:"At our school, the Provost has no pity for the students who plagiarize."}],
[["Filler-BadFill",915], DS, {s:"After the accident, that one nice cop consoled the bystander who were upset."}],
[["Filler-GoodFill",916], DS, {s:"I couldn't go home because my mother was with some old friends who were in town."}],
[["Filler-BadFill",917], DS, {s:"Unfortunately, the young student teacher couldn't handle the kid who were hyperactive."}],
[["Filler-GoodFill",918], DS, {s:"At the annual Veteran's Day parade, we all greeted the soldiers who were serving."}],
[["Filler-BadFill",919], DS, {s:"It was very difficult for John to console the victim who were injured."}],
[["Filler-GoodFill",920], DS, {s:"Although there was an administrator at the rally, it was the students who were in charge."}],
[["Filler-GoodFill",921], DS, {s:"First the organizers honored the scientists, but the patient who was cured also received recognition."}],
[["Filler-GoodFill",922], DS, {s:"The barking dog irritated Sal, but the cats who were always trampling his plants didn't bother him."}],
[["Filler-BadFill",923], DS, {s:"Even though the quarterback apologized, everyone supported the players who was injured. "}],
[["Filler-BadFill",924], DS, {s:"Tracy gave snacks to her kids, before she poured a beer for her sister who were visiting."}],
[["Filler-BadFill",925], DS, {s:"The books that Quentin bought for his nephew was actually not very age-appropriate."}],
[["Filler-BadFill",926], DS, {s:"The DMV clerks who scared the teenager before his test was reprimanded by a supervisor."}],
[["Filler-BadFill",927], DS, {s:"The sommelier who brought the wines over were not trying to pressure the diners."}],
[["Filler-BadFill",928], DS, {s:"The avocados seemed ripe, but the lemon were not ready to be squeezed."}],
[["Filler-BadFill",929], DS, {s:"The edition that the comic book fans couldn't find were only available in second-hand shops."}],
[["Filler-GoodFill",930], DS, {s:"I honestly can't remember if Kelly or her twin sister was at the party."}],
[["Filler-GoodFill",931], DS, {s:"Either the laptop or the desktop is infected with a virus, but John won't tell me which."}],
[["Filler-GoodFill",932], DS, {s:"The old duke and his young bride never talk and everyone can't stop gossiping about it. "}],
[["Filler-BadFill",933], DS, {s:"Jess couldn't believe it, but the little puppy and the mean old dachshund was getting along."}],
[["Filler-BadFill",934], DS, {s:"Polly put out some milk for the cats because either Mr. Spots or the old tabby were whining."}],
[["Filler-BadFill",935], DS, {s:"King Leoric and the general was planning a siege on the neighboring kingdom's armory."}],
[["Filler-BadFill",936], DS, {s:"Happily, Gregory and his mother knows how to bake professional grade croissants from scratch."}],
[["Filler-BadFill",937], DS, {s:"All of a sudden the goalie and the referee starts fighting, and the crowd went absolutely nuts."}],
[["Filler-BadFill",938], DS, {s:"Only Suzy or the new girl were allowed to join the popular kids' table at lunch."}],
[["Filler-BadFill",939], DS, {s:"Only Howard, and not his younger brother, were suspended for covering the mascot in toilet paper."}],
[["Filler-GoodFill",940], DS, {s:"It was an unseasonably warm January day when Grant sunned himself."}],
[["Filler-GoodFill",941], DS, {s:"Irma celebrated the new job by buying a large pepperoni pizza for herself."}],
[["Filler-GoodFill",942], DS, {s:"Because their parents had come down with the flu, the twins behaved themselves."}],
[["Filler-BadFill",943], DS, {s:"It was the most glamorous ball of the season and the princesses teased herself."}],
[["Filler-BadFill",944], DS, {s:"The whole sleep-over was in hysterics because Jane couldn't stop themselves from tickling everyone."}],
[["Filler-BadFill",945], DS, {s:"Kevin and Lena helped himself to another slice of pie at the potluck."}],
[["Filler-BadFill",946], DS, {s:"Magdalena baked themselves fresh cookies for the long road trip."}],
[["Filler-BadFill",947], DS, {s:"Norbert was old-fashioned and always shaved themselves before delivering his weekly lecture."}],
[["Filler-BadFill",948], DS, {s:"Ophelia hated the fact that she couldn't help themselves when it came to smoking."}],
[["Filler-BadFill",949], DS, {s:"Perry probably hurt themselves during the interview when he mentioned his famous mom."}],
[["Filler-GoodFill",950], DS, {s:"Before testing the vintage lamp, Hector carefully soldered together the wires."}],
[["Filler-GoodFill",951], DS, {s:"The three friends finally performed a play together, years after they'd graduated."}],
[["Filler-BadFill",952], DS, {s:"When the student left, their dutiful teacher gathered up the workbook."}],
[["Filler-BadFill",953], DS, {s:"The troopers said that the blocked highway would re-open as soon as the protester disperses."}],
[["Filler-BadFill",954], DS, {s:"In the center of campus, the tree surrounded the pond in a peaceful meadow."}],
[["Filler-BadFill",955], DS, {s:"The controversial candidate wouldn't support each other despite clear campaign promises."}],
[["Filler-BadFill",956], DS, {s:"Jeremiah snapped his finger together and called the dog in for dinner."}],
[["Filler-BadFill",957], DS, {s:"Susan was disappointed that she couldn't gather enough signature for her petition."}],
[["Filler-GoodFill",958], DS, {s:"Vance heard his son yell from downstairs that the water was finally boiling."}],
[["Filler-GoodFill",959], DS, {s:"Wilma hid in the closet when she heard the vandal break her window."}],
[["Filler-GoodFill",960], DS, {s:"Zane felt peaceful as he watched the waves wash up and dissolve his footprints."}],
[["Filler-BadFill",961], DS, {s:"Everyone at the conference became annoyed at Arturo who was constantly crinkling."}],
[["Filler-BadFill",962], DS, {s:"After nearly a week, Brianna couldn't believe that she finally subsided her aches."}],
[["Filler-BadFill",963], DS, {s:"Carla was the kind of plumber who made sure her assistant drained before leaving the job site."}],
[["Filler-BadFill",964], DS, {s:"The nurses were about to ooze just as the surgeon walked in to stop them."}],
[["Filler-BadFill",965], DS, {s:"Although the scandals resigned, the trust of the citizens would never be regained."}],
[["Filler-BadFill",966], DS, {s:"Dario knew the cars would likely faint in the hot desert sun."}],
[["Filler-BadFill",967], DS, {s:"Because Ernestine and Francis might stick, their friends came to her aid."}]

];
