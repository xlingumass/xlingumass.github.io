
***

The following is the lab's guide to running experiments using the [Ibex Farm](http://spellout.net/ibexfarm).

The Ibex Farm is a hosted version of the Ibex software, created by Alex Drummond. We do not currently host our own version of the software.  

!!! warning "Before running an Ibex experiment, check:"
	- Do you have proper IRB approval?
	- Do you have up-to-date CITI training?

## First things first: documentation

To learn to run an Ibex experiment, check out the following resources:

- [The Ibex manual](http://spellout.net/ibexfarm). This is the authoritative manual on Ibex.
- [Brian and Rodica's 2018 LSA Minicourse](resources/LSA_Minicourse_DillonIvan.pdf). These slides contain much of the material here, and then some.

#### Example scripts

1: Basic acceptability judgment task: [Basic_7pt_Likert.js](resources/scripts/Basic_7pt_Likert.js). 

2: Speeded acceptability judgment task: [ROCOUT_Online_Binary](resources/scripts/ROCOUT_Online_Binary.js). For speeded tasks, we typically disable the use of the mouse to respond to enforce some uniformity in responses. To do this we use Ethan Poole's [EPDashedAcceptabilityJudgment](resources/scripts/EPController.zip). These must be uploaded to your experiment on Ibex for this script to work. If you want a version without the random assignment to groups, it is here: [ROCOUT_Online_Simple](resources/scripts/ROCOUT_Online_Simple.js).

3: Recall task: [Basic_Expressives_Recall](resources/scripts/Basic_Expressives_Recall.js). This is useful for any task involving collection of written responses, such as free or cued recall tasks, or cloze tasks. This implements a version of Potter and Lombardi's 1990 free sentence recall task.

#### Example forms and instructions:

1: [Consent form](resources/scripts/consent.html). (Note: This consent form *cannot be used* unless it is specifically the one approved for your study. It is here just as an example for format!)

2: [Demographic collection form](resources/scripts/intro.html). This is a basic introduction form for collecting demographic information. 

3: [Debriefing form](resources/scripts/debrief.html). This is a basic  form for collecting debriefing information. The specific questions you will want to ask will vary experiment to experiment.

4: [Instructions](resources/scripts/Instructions.zip). These are a series of five separate instruction screens. They show typical instructions for an MTurk experiment, including comprehension questions on the instructions themselves. 

[//]: # (this zip won't open/the man cannot download it rip)

## Collecting data on Ibex

#### Collecting participants: Mechanical Turk

We recommend that you start your own MTurk account to run studies. See the minicourse above for information on getting started with MTurk.

#### Collecting participants: Lottery system

One system we use for recruiting participants from populations that are not well represented on Mechnical Turk or other crowdsourcing platforms is targeted recruitment (social media, mailing lists) along with a lottery system for paying participants (set up by Rodica Ivan and Thuy Bui). 

##### The process

- Give every participant a random code (see code-generating scripts above).
- Participants are directed to an external site to input code and email address.
- After experiment is done, choose winners, and compensate them. 

##### Websites for collecting emails/codes

- One option is Google Forms; this option is no longer accepted by the UMass IRB. 
- An acceptable option is [Survey Monkey](http://www.surveymonkey.com). Create a small survey that collects email addresses, random codes generated from your script, and no more.  

##### Payment options

- Gift cards for [Amazon](http://www.amazon.com)
- Pre-paid VISA gift cards [available here](https://www.giftcards.com/visa-gift-cards)

### Collecting participants: Other options
- [Prolific Academic](http://www.prolific.ac): This is like MTurk, but specifically for academic studies. 
- [Le RISC](http://expesciences.risc.cnrs.fr) (Relais d’Information sur les Sciences de la Cognition): Free crowdsourcing platform for finding participants in France. 
- [Zhubajie](http://www.zbj.com): Crowdsourcing site active in China.
- [Crowdflower](http://www.crowdflower.com): Another crowd-sourcing site. More limited than other options.
     
## Tips and tricks for running experiments on Ibex

### Ensuring a smooth Latin Square

One thing that can be difficult when running participants using Ibex Farm is to ensure a smooth Latin Square distribution (i.e. making sure that each experimental list is equally well represented). Ibex uses a counter variable that it stores on the server to determine which counterbalancing list any one participant is assigned to. As a researcher, you have two options for determining Ibex's behavior with respect to Latin Squaring. 

!!! Abstract "Option 1: explicitly set the Latin Square Counter"
	e.g. `var counterOverride = X`. You may set the Latin Square counter explicitly in your Ibex script by defining the counterOverride variable somewhere in the script. When this line is present in the script, all participants who reach the experiment's URL address will be placed in the `X`th list. Note that list numbering begins at 0 (i.e. 0 usually means the first Latin Squares list). 

!!! Abstract "Option 2: insert a hidden set counter event"
	e.g. `set`. If you do not set the counter explicitly using `var counterOverride`, then Ibex Farm will increment the counter by one each time a participant finishes the experiment. In our experience this does not lead to the smoothest Latin Square, because if many participants begin the experiment at once they will all end up in the same list. Instead, we insert a hidden set counter event at the beginning of the experiment. This causes Ibex Farm to update the counter on the server immediately after a participant starts the experiment. 

In theory, Option 2 should yield a perfect Latin Square if you run the appropriate number of participants. However, in practice, it is not always perfect, because some participants do not finish, some start at *exactly* the same time, etc. 

For this reason, the usual way researchers in the CSL lab get a perfect Latin Square distribution is by running 80-85% of their participants using Option 2, checking to see how many participants are in each list, and then using Option 1 to manually fill in the counterbalancing lists for the remaining 15-20% of subjects.   

#### No repeat subjects

If you are running on Mechanical Turk, you may want to exclude workers who have previously your experiments. To do this, please go to [Unique Turker](https://uniqueturker.myleott.com).

On this site, you should create a single code that you will use for all your studies. That site will generate a bit of JavaScript for you, which you can then place into your HIT on Mechanical Turk (in the HTML view). A given MTurk worker can only participate in a limited number of HITs that share this same code; for most of our work the maximum number of HITs is set to 1. This way, you can ensure that workers do not repeat work across multiple HITs.

## Hosting Ibex

We have not hosted our own instance of Ibex. 

## Quality Control

It is very difficult to guarantee that you are getting high quality data from internet participants, who typically take the experiment in less-than-ideal circumstances, and may not give their full attention to the experiment. Despite this, there is generally high correlation between lab data and internet data for judgment tasks (Sprouse, 2011), with identical qualitative patterns and only a minimal loss of power for the latter. 

However, there are three options for quality control typically used in the lab:

- *Catch trials*: in your script, include a small number of labeled fillers whose responses are known. For example, you may use a small number of clearly grammatical and clearly ungrammatical fillers, and reject participants who do not consistently rate the grammatical fillers above the ungrammatical fillers. Or you might use a small number of unambiguous, easy-to-understand controls if you are doing a questionnaire. 
- *Attention check trials*: Less often, researchers will include attention check trials. These are trials where you instruct the participant to do something very specific; for example, you might present the sentence "This is not a normal sentence to rate; please just click on 3 on the scale below" and reject participants who do not comply.
- *Instruction question check*: We often ask questions on the instructions themselves; participants who are unable to get perfect accuracy on these are rejected. 

Note that in each of these cases, we recommend removing the data from analysis, but paying the worker (if MTurk). 