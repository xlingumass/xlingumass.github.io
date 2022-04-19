---
title: "Phonetics Guides"
#date: 2020-09-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["P-Lab"]
author: "Christina Muxica"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
#description: "Desc Text."
#canonicalURL: "https://canonical.url/to/page"
disableHLJS: true # to disable highlightjs
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
    URL: "https://github.com/xlingumass/xlingumass.github.io/content/docs/phonetics"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---

## Phoneme Categorization

In a phoneme categorization experiment, a listener is presented with a single stimulus on each trial, and they have to assign that stimulus to one or another category. It's possible that the listener may be given more than just two categories to choose from but that's rare in the experiments run in our lab.

Usually, each stimulus is one of a sequence of stimuli that steps incrementally from a good instance of one category to a good instance of another. For example, a stimulus might be drawn from a sequence stepping incrementally from /s/ and /sh/. Steps in this sequence that are distant from both the /s/ and /sh/ endpoints are *ambiguous* between the categories, and the listener has to guess which category to assign them to. The sequence is often referred to as a "continuum," despite the fact that its members are discrete steps between the endpoints. It's referred to as a continuum because listeners can't reliably distinguish adjacent steps in the sequence from one another.

It's possible to study listeners' categorization of such a continuum without any other independent manipulations, in which case, the questions of interest are:

- where along the sequence do listeners cross over from assigning stimuli to one category to assigning it the other, 
- how abruptly do they cross over, and 
- how quickly they respond to each step along the continuum.

More often, and nearly always in our lab, we also manipulate the context in which the sequence occurs independently to test how differences between contexts influence any of where listeners cross over, how abruptly they do so, and how fast they categorize the stimulus. When we manipulate the context independently like this, the portion of the stimulus in which members of the continuum occur is called the "target."

When the categorization experiment is actually run, a stimulus is drawn at random from the target continuum or the context+target combinations on each trial and presented to the listener who responds by choosing one or the other category.

Stimuli are constructed in a number of ways. The most typical is described here:

- Record naturally produced instances of the target categories, in the contexts that you want to manipulate,

- Measure the acoustic properties of these sounds (durations, intensities, fundamental frequencies, formant frequencies and bandwidths),

- Edit and smooth those values,

- Calculate the values each property should have for the intermediate steps between the endpoint categories,

- Supply them as parameter values to a synthesizer, which then produces the steps along the continuum.

    There is one general exception to this procedure in our everyday practice: continua between noisy categories, like the /s-sh/ continuum mentioned above, are produced by adding the original sounds' waveforms together in complementary proportions. For example, the /s/ endpoint would be 1.0 /s/ + 0.0 /sh/, the next step would be 0.9 /s/ + 0.1 /sh/, ..., 0.1 /s/ + 0.9 /sh/, finally to 0.0 /s/ + 1.0 /sh/ at the /sh/ endpoint.

    All these steps are currently carried out using a combination of Praat and R scripts. The most commonly used suite of Praat scripts is included below, along with an example R script. We continue to work toward a routine as opposed to artisanal pipeline for constructing stimuli.

Stimulus presentation and response collection is handled with PsychToolBox scripts running in octave. Responses are collected using purpose-built button boxes. An example script with the necessary libraries is also included below. 

Once the data are collected:

- the files containing the responses from each listener are compiled,
- the data are cleaned up (purging trials with invalid responses, with no response, outlying response times, etc.), 
- responses are coded to represent the conditions in the experiment,
- plotted using `ggplot` and 
- modeled using `lmer` for RTs and `glmer` for response proportions. 

All this is done in R/RStudio. An example RMarkdown script showing these steps is included below, along with the data files to which it was applied.

<!-- ...

## Examples and resources

## Praat scripting

### R scripts

### PsychToolBox resources -->