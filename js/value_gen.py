f=open("File.txt",'r') # reading tab seprated txt file
p=open("Generated.txt",'w')
f.readline() #avoiding headings
identity = f.readline().strip('\n')
code=1
while identity:
	split_identity = identity.split("\t")

	#details
	coder = split_identity[0]
	name = split_identity[1]
	email = split_identity[3]
	
	#DONT FORGET to change foldername FOLDER with event name before adding participant value
	a="{ value: '"+name+" | "+email+"', data: '<a href=\"certi/FOLDER/"+str(code)+".pdf\" target=\"_blank\" download=\""+str(code)+".pdf\">Download</a>'},\n"
	
	p.write(a)
	code += 1
	identity = f.readline().strip('\n')
	
f.close()
p.close()