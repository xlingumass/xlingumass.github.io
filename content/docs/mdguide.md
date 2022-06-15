---
title: "Markdown Styleguide"
date: 2020-09-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["P-Lab"]
author: "Thomas Morton"
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
    URL: "https://github.com/xlingumass/xlingumass.github.io/blob/master/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---

# Introduction

This guide hopes to serve you, both as an introductory guide to writing content in Markdown, but also on how to use the YAML and shortcode abilities of Hugo — the framework that this website is built around.  

## Markdown

Markdown is a markup language that allows for writing stylized text without having to use a while WYSIWYG (what you see is what you get) editor like Microsoft Word. Instead, you write markdown code and another program (in this case Hugo) translates your written text to something more beautiful, for instance, this fancy HTML website.  

### Headings

These titles of different sizes, used to dileniate different sections of writing, are called headings. In markdown there are 6 levels of heading, starting at 1. The smaller the number the larger the heading, this is easily specified in markdown with one or more hastags '#'

```
# Heading 1
...
## Heading 2
...
## Heading 3
...
```

When you add headings to your document they appear in an ordered heirarchy like can be seen in this pages Table of Contents.

### Text Flair

Just like in Docs or Word, you can bold and italicize text in Markdown. This is done very simply, **bold text** is created with two \*\* star symbols (or asterisks) around the text that you want to embolded: ``**bold text**``. *italic text* is made similarly, this time with only one \* star symbol: ``*italic text*``.

### Ordered and Unordered lists

You can make numbered or dotted lists in Markdown very simply. Just put each item in the list on a new line (press enter or return) and prepend them with either a number(+.) or a dash (-). You can manually number the list as you choose, but it will still enumerate n+1, that means you can put 1. for all of the numbers. To nest lists in another you should tab the list in. 

*Ordered list*
1. First item
1. Second item
1. Third item

```
1. First item
1. Second item
1. Third item
```

*Nested ordered lists*

1. First item
1. Second item
    1. First item
    1. Second item
    1. Third item
1. Third item

```
1. First item
1. Second item
    1. First item
    1. Second item
    1. Third item
1. Third item
```

*Unordered list*

- Item
- Item
- Item

```
- Item
- Item
- Item
```