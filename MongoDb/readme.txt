Refer: https://docs.mongodb.com/manual/introduction/
Downloads: https://www.mongodb.org/dl/win32/i386
Installation for Windows: 
	-	https://www.youtube.com/watch?v=1uFY60CESlM
	-	http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/
	
Steps:
1. Go to Project directory
2. npm init
3. npm install mongodb --save


What is MongoDB?
	-	MongoDB is an open-source document database that provides high performance, high availability, and automatic scaling.
	-	MongoDB is an open-source document database and leading NoSQL database.
	-	MongoDB is written in C++.
	
	mongod - database
	mongo - CLI (database commands)
	set db path:
		Command : mongod --storageEngine=mmapv1 --dbpath [your-path]
		Example : mongod --storageEngine=mmapv1 --dbpath D:data\db
	
Document Database
	-	A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.
	-	Ex: { "name":"Sue", "age":26, "status":"A", "groups":["news", "sports"] }
	
The advantages of using documents are:

	-	Documents (i.e. objects) correspond to native data types in many programming languages.
	-	Embedded documents and arrays reduce need for expensive joins.
	-	Dynamic schema supports fluent polymorphism.

MongoDB Cloud:

Username: Nithiyanandam
Password: CSocl1VGmkhJ5fSX
WhiteList Entry : 203.99.196.178 (or) 203.99.196.178/32






