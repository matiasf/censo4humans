Censo4Humans
============

Prerequisites
-------------

* Java 6 or more.
* Apache Solr 4
* Play! Framework 2

Project Structure
-----------------

 * escribicenso/ - Program to populate the .dbf files into the Solr index developed in Java.
 * c4hfrontend/ - UI to see the indexes by using a web application, developed on Scala and Play! Framework.
 * solr-index/ - Indexes configurated.

Setting up the Play! Framework
------------------------------

1) Download the Play! Framework from here http://downloads.typesafe.com/play/2.2.1/play-2.2.1.zip and unzip it in the folder that you want:

2) Put the folowing in the .bashrc file in your home folder to have the play! command available (Only for Linux systems):

	export PATH=$PATH:/relativePath/to/play

3) Check if it's working OK by executing this command (a help text should appear):

	$ play help


Setting up your preferred IDE
-----------------------------

1) To transform a Play application into a working Eclipse project, use the eclipse command in the 'c4hfrontend' folder:

 	a) without the source jars:

 		$ eclipse	

 	b )if you want to grab the available source jars (this will take longer and it’s possible a few sources might be missing):

 		$ eclipse with-source=true

2) If you want to use another IDE (like IntelliJ or Netbeans), following this link: http://www.playframework.com/documentation/2.2.x/IDE


Running Censo4Humans
--------------------

 1) First, you need to run your Solr Server. To do this, please go to your Solr instalation and execute the following command:

	 $ java -Dsolr.solr.home={PATH_TO_REPO}/solr-index/ -jar start.jar

 2) After install Play!, go to {PATH_TO_REPO}/c4hfrontend and execute the following command:

	$ play

 3) On the play console execute the run command to start the web server:

	[c4hfrontend] $ run

===================

References
----------

 * Apache Solr: http://lucene.apache.org/solr/
 * PlayFramework: http://www.playframework.com/
 * Scala IDE: http://scala-ide.org/
 * Ajax-Solr: https://github.com/evolvingweb/ajax-solr


