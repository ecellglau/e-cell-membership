# E-Cell Membership

## Introduction

E-Cell GLAU is providing young minds an opportunity to be a part of the premier organisation of the university and bring out their ideas from thought to reality.

E-Cell helps them to generate the ideas, evaluate them and help them in starting a startup by connecting them to Investors(finance) and Mentors(guidance & consultancy).

Through its membership, the students get discounts in various events and services provided or organised by E-Cell, some member-exclusive benefits like networking and skill-enhancing opportunities, and a chance to be a part of the student council and coordinator of various events.

## Requirements

### Things to be made:

* membership cards
* certificate
* portal/app (for updates and notification)

### Info required in database: 

* UserID/S.no.
* Name
* Roll Number
* Course
* Phone Number
* Photo
* E-Mail
* Year
* Gender
* Day Scholar/Hosteler
* 

## Software Requirements

* MS-Excel
* Command Line (with Python installed)
* Adobe Photoshop CC 2017 and above

# Preparation

* Create a google form & typeform for the registration.
* After closing response download the google form and typeform in csv or xlsx file format.
* COllect/Arrange data from slip books in MS-Excel.
* Make a proper Excel Sheet consisting of column names (SNo, Name, EMail, Gender, Roll, Course/Branch, Year, Phone)
* Combine the data from all the sources and save it in a single file.

# PreProcessing

* Remove duplicate values.
* COurse and branch columns must have values without spaces.
* Phone numbers must be 10 digit only
* Name must be PROPER

# Generation
* Use qr_gen.py to create commands for generating QR code images.
* Copy the commands to cmd (make sure the current working directory is where you want to generate the images)
* After the QR codes are generated successfully, check if all the images are correctly generated and none of it is corrupted during generation.
* Now open the mebership_Card template (.psd) in photoshop  
* Make a copy of the excel file (.csv) and add an img column with value (=E2&".png") where E2 is roll_col_name
* Keep only following columns for generating cards: Name, email, roll, phone, img
* move the psd_file, csv_file to qr code folder for genereation

#### Now in Photoshop do following steps:
1. make sure that the qr_code_image layer is rasterized
2. In the menu bar, select Image -> Variables -> Define
3. Replace appropriate variables with the column names, then click next button.
4. IMport the csv file and check the preview button and preview the datasets generated.
5. CLick OK button and then Select File -> Export_As -> Data_sets and select the folder for exporting the Data_Set (PSD) files.
6. CLick export and generate the files (this will take some time, avoid using the computer until all the cards PSD are generated)
6. Select File -> Image processor and select PSD folder as import folder and JPEG as export folder and JPG as export option
7. Click export (this will take some time, avoid using the computer until all the cards are generated)
8. GEt it printed on ID card sized paper and its ready for Distribution.

# Notes
* Refer https://www.youtube.com/watch?v=kJdWRMF7CR4 this video for generating using Photoshop