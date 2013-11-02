Censo4Humans
============

Prerequisites.

* Java 6 or more.
* Solr 4
* Play Framework 2

Strucutre Project

* escribicenso/ - Program to populate the .dbf files to the Solr index developed in Java.
* c4hfrontend/ - UI to see the indexes by web developed on Scala and Play Framework.
* solr-index/ - Indexes configurated.

Setup PlayFramework

1) Download play framwork from here http://downloads.typesafe.com/play/2.2.1/play-2.2.1.zip and unzip in the plase you want.

2) Put the folowing in the .bashrc file in your home folder to have the play command available (Only for Linux systems)

	export PATH=$PATH:/relativePath/to/play

3) Check if works ok executing this command and should show the help.

	$ play help

Setup Project

1) First you need to run your Solr server. To do this please, go to your Solr instalation and execute the following command.

	$ java -Dsolr.solr.home={PATH_TO_REPO}/solr-index/ -jar start.jar

2) After install Play Framework, go to {PATH_TO_REPO}/c4hfrontend and execute the follwing command.

	$ play

3) On the play console execute the run command to start the web server.

	[c4hfrontend] $ run

===================

References:

* Solr: http://lucene.apache.org/solr/
* PlayFramework: http://www.playframework.com/
* Scala IDE: http://scala-ide.org/
* Ajax-Solr: https://github.com/evolvingweb/ajax-solr


