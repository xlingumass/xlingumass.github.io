---
title: "Eyetracking Guides"
#date: 2020-09-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["C-Lab"]
author: "Christian Muxica"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
#description: "Desc Text."
#canonicalURL: "https://canonical.url/to/page"
disableHLJS: false # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: false
ShowBreadCrumbs: true
ShowPostNavLinks: true
cover:
    image: "<image path/url>" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: true # only hide on current single page
editPost:
    URL: "https://github.com/xlingumass/xlingumass.github.io/blob/master/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---

## Single line reading experiments

### Gathering data 

<details>
  <summary>Region your items</summary>

#### Creating a region file for your items

Create a text file of your stimuli, then insert region boundaries using forward slashes. This needs to be done for every line; consider using greps to do this automatically [(see here)](https://regexr.com/).

!!! tip "Regioning conventions"
    - For a given critical word or words, the whitespace before it is typically included in the region.
    - There MUST be a backslash on the final region, before the newline '\n'.
    - There is no whitespace before the first word. 
    
    As an example, a regioning of this sentence:
         
        17 81 Which basketball players is the coach planning to use this season?\n
       
    Might be:
         
        17 81 /Which basketball players/ is the coach/ planning/ to use this season?/\n

Once you have inserted all breaks in the sentences, take the resulting file (suppose it's called 'annotated_sents.txt'), and use the makeRegions.py file to convert it into a CNT file. From the command line:
   
`python Scripts/makeRegions.py 'annotated_sents.txt'`

[//]: # (i forget what the differences between this v. for_robodoc version are -- do you need to use that one, investigate)

where you pass the name of the file you just made as a command-line argument to makeRegions.py. This should create a file called 'output.reg.txt' in which every line looks like this:
     
    17 81 6 0 0 24 0 31 0 37 0 46 0 66 0
    (COND#) (ITEM NO.) (NO. REGIONS) (X1START) (Y1START) (X2START) (Y2START) (X3START) (Y3START) ...

For single line experiments, only the XSTART bits matter. In this example, for Item 81, Condition 17, the first region begins at (character) 0 and goes up to but does not include character 24; the second region begins at 24, and goes up to but does not include 31; and so on. 
      
**attention "Look over your work!"**
Errors in regioning are super easy to make, super difficult to notice later on, and mess up your data like crazy. 

Take the output.reg.txt file, and inspect it carefully at this point. Check that every item has the number of regions you expect, and check that they all look right. Sample a couple of lines randomly, and confirm by hand that the region limits in output.reg.txt are indeed what they should be. If you have a very predictable manipulation (e.g you know the region limits in condition 2 should always be one character later than in condition 1), then you should also eyeball all the regions and confirm that they fit the template. 
      
You'll need this (double-checked!) file later on.

</details>

<details>
  <summary>Create a script file to run your eyetracking experiment</summary>

#### Creating a script file using Scripter2
  Assuming you have your items in a spreadsheet, you can use Scripter2 to format them the way the Eyetrack program requires. You'll need to organize your items as required by Scripter2, all items following this order (the header isn't used, so the naming doesn't matter):

|Condition|Item|Dependent|Trial Type|Answer|Timeout (in ms)|Sentence 1|(Sentence 2)|
|-|-|-|-|-|-|-|-|

{{< figure alt="A spreadsheet formatted and ready to use with Scripter2" src="images/guide_images/spreadsheet_scripter_items.png" >}} *Items formatted for use with Scripter2.*

For an explanation of the formatting and detailed description of the columns, see chapter 1 of this manual[{{<fa link>}}](/documents/et-manual), written by Matthew Abbott[{{<fa arrow-up-right-from-square>}}](https://www.linkedin.com/in/matt-abbott-879b25b8/) while he was an undergraduate RA in Adrian Staub's[{{<fa arrow-up-right-from-square>}}](http://blogs.umass.edu/astaub/) lab.

After you export the sheet as a tab-delimited file, it should look something like this:

![The tab-delimited file exported from the spreadsheet](images/guide_images/prepared_scripter_items.png) *The exported text file to use with Scripter2.*

In this example, experimental items have conditions 1-4, questions have condition 100, filler items have condition 200, and filler questions have condition 300. Doublecheck that you've coded the conditions properly, and that questions are marked as dependent on their respective item. 

From the command line, navigate to the directory that has scripter2 and your items and then run Scripter2. 

![](images/guide_images/perl_scripter2.png) *Running Scripter2 from the command line -- this should be the same across operating systems.*

You should specify the name of the input and output files, but can simply skip the specifications for x and y if you're not making any display changes. You definitely do want to generate sequences. 

The resulting output file should look similar to this:

![You now have a .script file with the items!](images/guide_images/unedited_script.png) The trial at the top is essentially a key, made from the header -- before running the script, you should delete it. 

In your preferred text editor, copy the following above the items in your script file: 

```
%BeginHeader

Conditions = E1-4
Question = E100
Items 1-48

Fillers
Condition = F200
Questions = F300
Items = 49-119

%EndHeader

set conditions =  5
set experiments = 2
set expConditions = 4 1
set background =  16777215
set foreground =  0
set filterMode = 2
set windowThreshold = 0
set calibration_type = 0
set display_type = LCD

trial_type Message
  text_format =    'Monaco' 12 25 20 20 nonantialiased
  text_weight =    normal non-italic
  button =         Y
  button =         X
  button =         B
  button =         A
  button =         toggle
  button =         leftTrigger
  button =         rightTrigger
  output =         nostream
  trigger =        nogaze
  cursor_size =    0
  dc_delay =       0
  stimulus_delay = 0
  revert =         0
  highlight_color =197148
end Message

trial_type question
  text_format =    'Monaco' 12 48 15 268 nonantialiased
  text_weight =    normal non-italic
  button =         leftTrigger
  button =         rightTrigger
  output =         nostream
  trigger =        nogaze
  cursor_size =    0
  dc_delay =       0
  stimulus_delay = 0
  revert =         0
  highlight_color =1639238
end question

trial_type sentence
  text_format =    'Monaco' 11 24 18 315 nonantialiased
  text_weight =    normal non-italic
  button =         Y
  button =         X
  button =         B
  button =         A
  button =         toggle
  button =         leftTrigger
  button =         rightTrigger
  output =         stream
  trigger =        gaze
  cursor_size =    0
  dc_delay =       0
  stimulus_delay = 0
  revert =         0
  highlight_color =2163302
end sentence
```

Edit the header and variables to match your items, as well as any parameters you'd like to change, such as the gaze condition. When running subjects, set the trigger for `trial_type sentence` equal to `gaze`, but if you would like a version of the experiment which doesn't require the participant to hit a gaze box (for your own testing purposes, or so that you don't collect data from certain subjects, for example), set it equal to `nogaze`. 

#### Controlling your lists

Open the script file on the host computer connected to the eyetracking machine. You can test the script by opening it in EyeTrack. You should test each condition in your script. See handy dandy randomizer.py [{{<fa link>}}](https://github.com/xlingumass/docs-md/tree/master/resources/scripts/randomize_items) Brian did to create your own lists. 

</details>

<details>
  <summary>Gather data</summary>

#### Running an eyetracking experiment

*Tip "Things to keep in mind with running logs"*
1. Imagine that you need to figure out whether a particular person took your experiment and if so when, but for some reason the consent form with their name on it doesn't have a listed subject number. Can you do it?
    
2. The IRB sometimes asks for number of subjects and their gender at the end of the semester.  Make that easy for yourself.

3. Figure out in advance how you are going to label subjects that leave half way through (maybe you can't track them) and non-native speakers.  Do you rename that file and give the next person that subject number, or do you just go on to the next subject number? Whichever you choose, stay consistent! Document what you do when you do it.

After you've run a participant, save their data file, making sure the filename is 6 characters or less (e.g. EYE002.edf).

</details>

### Analyzing data

<details>
  <summary>Prepare your data for analysis</summary>

#### Preparing your data for analysis

To do anything further with the data, you'll have to convert it from .edf to .asc. On the host computer, open the command line and navigate to the directory with the .edf files in it. `edf2asc *.edf` creates .asc versions of all the .edf files in that directory. 

We need to parse the .asc files into a series of fixations we can match against the regioned sentences from earlier. We'll use Robodoc[{{<fa arrow-up-right-from-square>}}](https://blogs.umass.edu/eyelab/software/RoboDoc_and_utils.zip) to do this. You'll need to edit the parameter file (parameter.txt, in RoboDoc_and_utils/Robodoc) to specify the directory you've stored your .asc files in and the region file you made earlier, as well as to reflect the exclusion criteria you'd like to use. ![image of editing parameters.txt]()

Once you've edited the parameters, hop into the command line and run Robodoc: `Robodoc.py edited_parameters.txt`. ![image of cmd line, etc printouts]() 

If everything's gone smoothly, you'll have a folder of DA1 files as well as several folders and files detailing what files were processed, excluded, and kept, as well as blink information for each subject.

It's at this point that we'll use SideEye[{{<fa arrow-up-right-from-square>}}](https://github.com/amnda-d/sideeye) to process the DA1 files into measures we can analyze. (Note: SideEye requires Python >= 3.5. It's easiest to install with pip: in Python, `pip install sideeye`.)

From the examples folder, copy `sample.py` and `sample_config.json` into the directory containing a folder of DA1 files and a .cnt or .reg region file. Open both files in a text editor. Replace the file paths in `sample.py` with paths to your DA1 and region files. Replace `sample_output.csv` with whatever you want the output file to be named. Edit `sample_config.json` to match the parameters needed for your experiment. See the readme.rst for more information.

The resulting output file should look like this: ![Output file](/images/guide-images/outputcsv.png)

</details>


## Templates and examples

#### Running logs

Example running log[{{<fa arrow-up-right-from-square>}}](https://docs.google.com/spreadsheets/d/1OJMycWVKSxMyMxGBj2nvOhCwrskPeOB14_XktqZa02Y/edit?usp=sharing)

*above log has been edited to preserve privacy of participants*

Example log template[{{<fa arrow-up-right-from-square>}}](https://docs.google.com/spreadsheets/d/1bv9s0dUHXiYGNY4dCKN3pSsaRklXi7rrNmNfvvjcmQk/edit#gid=0)

[et-manual]: https://people.umass.edu/eyelab/eyelab+manual.pdf