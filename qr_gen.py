# to generate commands for cmd  to genrate QR Codes
file = 'MembershipDrive_ecell4_final.txt' # replace the value with the name of tsv file of membership details
f=open(file,'r')
f.readline() #avoiding headings
identity = f.readline().strip('\n')
while identity:
    split_identity = identity.split()

    #sno name email gender roll branch year phone
    s_no = split_identity[0]
    
    name = ''
    for i in split_identity[1:-6]:
        name = name + i + ' '

    email = split_identity[-6]
    # gender = split_identity[-5] # only required for distribution
    roll = split_identity[-4]
    # branch = split_identity[-3]
    # year = split_identity[-2]
    phone = '+91 '+split_identity[-1]
    img_file = split_identity[-4] # similar to rollnukmber for unique filenames
	
    print('qr "'+s_no+','+name+','+email+','+roll+','+phone+'" > '+str(img_file)+'.png')
    identity = f.readline().strip('\n')

f.close()