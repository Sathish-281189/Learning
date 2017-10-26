Java is a high-level programming language.
Java runs on a variety of platforms, such as Windows, Mac OS, and the various versions of UNIX.

Java Installation:

Reference: http://javabeginnerstutorial.com/core-java-tutorial/java-basicsgetting-started-with-java/

1. Download Java. Java SE Development Kit(jdk).
Link: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

2. Install Java.

3. Setting up the Environment Variables
CLASSPATH : This environment variable points to the location of JDK home directory. It also contains the address of folder from where jars get loaded by ClassLoader (For more details of ClassLoader visit here)
JAVA_HOME : This environment variable will point to the location of Java home directory.

How to Check if Java is Installed
Open Command Prompt, type java -version and hit enter. If your Java is installed properly and all environment variables are configured correctly it will show the version of Java installed .

4. First Java Program.
Sample Program: Refer "FirstProgramme.java" file.
Note: Name of the file should be same as the name given to public class.


5. To compile a Java application
Open the command prompt and change the directory where your file is saved.

Example:

C:\Users\540719>cd D:\Nithi\Java
D:\Nithi\Java>javac FirstProgramme.java

Note:

If the java file is compiled properly the compiler will create a class file for  the sourceJava. It will be saved in the same location as the source file. Since no package is declared in the given code the .class file will be created in the same folder location.

Notice the difference for Java files using package declaration. Refer "FirstProgrammeWithPackage.java" file.
	
javac -d . FirstProgrammeWithPackage.java

It will create the class file in a corresponding package(com.jbt).


6. To run a Java application

i) Without Package

D:\Nithi\Java>java FirstProgramme
Hello JBT!

ii) With Package

D:\Nithi\Java>java com.jbt.FirstProgrammeWithPackage
Hello JBT!

Or

D:\Nithi\Java>java com/jbt/FirstProgrammeWithPackage
Hello JBT!


Note*:
The “javac” command uses the class file name with its extension(.java).
The “java” command uses the class file name without its extension(.class).



Yet to learn:
	
Core java - https://www.javatpoint.com/java-tutorial
	* Collections
		-	list, set, map
	* String, string buffer, string build
	* Threads
SOAP - rest : https://www.javatpoint.com/soap-web-services
Spring MVC - http://www.mkyong.com/tutorials/spring-mvc-tutorials/
Hibernate - Database Interaction