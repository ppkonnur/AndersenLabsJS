JavaScript Webdriverio Mocha Framework

Prerequisite :

1. Node.js > 16.0 should be installed.
2. Node.js path should be set under environment variable. 

Git Location:

https://github.com/ppkonnur/AndersenLabsJS

Maven command to run:

1. Git Pull repository
2. npm install		(To install all the node packages under package.json)
1. Navigate to the Project directory
	Ex : D:\AndersebLabs\AndersenLabJS>
2. Run following cmd
	npm run wdio

	Or

	npx wdio wdio.conf.js


Framework: 
1. TestData Path : .test\testData\login.json
2. Screenshot Folder : ./screenshots/                      (Takes screenshot after every test)
3. Reports : .\Reports\timeline-report.html