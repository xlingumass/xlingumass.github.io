# Read file in

import sys
try:													# try is a wrapper to allow you to output intelligent error messages
	file_in = open(sys.argv[1], 'rU')					# sys.argv refers to arguments passed from command line
except NameError:
	print('Error: Specify input file (open script for usage info)')

output = open('items.txt', 'wt')		# output file, 'wt' is a tag to make writeable

# Initialize lists

Experimental_items = [ ]
Practice_items = [ ]
Filler_items = [ ]

for line in file_in:					# Read in all the lines,
	line = line.split(' ')				# Split on whitespace, makes list of two elements for critical lines
	if line[0] == 'trial':				# If it's a trial line,
		curSeq = line[1][0:-1]			# Get trial identifier w/o dependent number
		if curSeq[0] == 'P':			# If it's a practice trial, put it in the practice list, 
			Practice_items.append(curSeq)
		if curSeq[0] == 'E':			# If it's an exp trial,
			if curSeq[1:4] == '100':	# , if it is a dependent trial, for previous 4 trials
				Experimental_items[-1] = Experimental_items[-1],curSeq	# associate it with q
				Experimental_items[-2] = Experimental_items[-2],curSeq	# associate it with q
				Experimental_items[-3] = Experimental_items[-3],curSeq	# associate it with q
				Experimental_items[-4] = Experimental_items[-4],curSeq	# associate it with q
			else:						# otherwise
				Experimental_items.append(curSeq)	# put it on the list in its own right
		if curSeq[0] == 'F':			# Same as exp, but for fillers
			if curSeq[1:4] == '300':	# only associates one back, as is the filler's wont
				Filler_items[-1] = Filler_items[-1],curSeq
			else:
				Filler_items.append(curSeq)
	
print(Experimental_items)

## now write it all out. n.b. lists & integers need to be coerced to strings, hence str( .. )

output.writelines('Number_experiments: 2\n')
output.writelines('Number_conditions: 4\n')
output.writelines(['Number_experimental_items: ',str(len(Experimental_items)),'\n'])
output.writelines(['Number_practice_items: ',str(len(Practice_items)),'\n'])
output.writelines(['Number_fillers: ',str(len(Filler_items)),'\n'])
output.writelines(['Experimental_items: ',str(Experimental_items),'\n'])
output.writelines(['Practice_items: ',str(Practice_items),'\n'])
output.writelines(['Fillers: ',str(Filler_items),'\n'])
