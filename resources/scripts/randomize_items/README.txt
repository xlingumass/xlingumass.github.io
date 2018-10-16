README for compileItems.py and randomizer.py

OVERVIEW

These scripts are used together to generate random item sequences to be used with EyeTrack. In short, compileItems.py generates a file that summarizes the items in your experiment, and some basic information about number of conditions. Randomizer computes latin squares and generates random sequences, ultimately making a list that can be selected within EyeTrack using the "Separate File" trial ordering method.

This can be useful if you have certain trials that you would like to sequence, or would like to have more control over the randomization and interleaving of experimental and filler items.

USING THE SCRIPTS

As it is setup right now, the process is to first generate a script using scripter.pl (not included here, but documented elsewhere). This generates a file named yourExperiment.script

It is important to make sure the labels of the items within the script conform to the assumptions of compileItems.py specified on lines 23-24 and 31-32. The compiler assumes that all and only experimental items begin with "E", and can have a dependent (a question) "E100". It further assumes that all fillers begin with "F", and can have a dependent "F300". Currently, the script does not allow for flexibility within this domain. Future updates should allow for the user to input the labels of the fillers and experimental items so the script is more flexible.

Furthermore, the user must manually enter in the script the number of conditions within the experiment on line 42, or change it within the output file. This will be important for the randomizer.py script to operate correctly.

In any case, once the script meets these requirements, it can be taken as input to compileitems.py. Assuming the script and compileItems.py are in the same directory, the script can be executed via the command line with the following command:

python compileItems.py yourExperiment.script

This will both print the output in the command line, and create a file called items.txt. This includes all of the conditions of each item, and the dependents associated with it. It splits practice trials, fillers, and experimental items into separate categories. The output also includes information about the number of conditions, experiments, experimental items, practice items, and filler items.

In order to generate sequences, one must run randomizer.py over items.txt. Again, assuming everything is in the same directory, the following command can be used:

python randomizer.py items.txt

A prompt will appear asking for the subject number. Any integer can be input. It is wise to create a separate sequence for each participant you plan to run in your experiment. You can type the subject number, and then press ENTER.

A prompt will then appear that asks to confirm the list (counterbalancing condition) for the participant. The list is automatically generated given the number of conditions and the subject number. For example, in a four condition experiment, S1 = L1, S2 = L2, S3 = L3, S4 = L4, S5 = L1 and so on. This can be overriden by typing "n" and pressing ENTER, in which case a prompt will appear to stipulate the list for that participant. If you are happy with the list, type "y" and press ENTER.

The script will then generate a file called order_subj#.script, where # is the subject number input by the user.

The file will automatically place all practice trials at the beginning of the sequence. Otherwise, all other trials will be randomly interleaved and ordered. This file can be used with EyeTrack by selecting "Separate File" when asked about trial ordering, and then selecting the appropriate file.

