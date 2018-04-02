# CONVOYER

##Table of Contents

### 1.0 Tech Stack
##### 1.1 Convoyer Mobile App
##### 1.2 Command Center App
##### 1.3 Back-End
### 2.0 Convoyer = Build Contents
##### 2.1 Overview
##### 2.2 Root Directory
##### 2.3 android Directory
##### 2.4 components Directory
##### 2.5 iOS Directory
### 3.0 Command Center = Build Contents

## 1.0 Tech Stack
### 1.1 Convoyer Mobile App

- **React Native** *Hybrid mobile application framework that uses a Javascript framework called React.*

- **Objective C** ( iOS - rare usage) *Some plugins require native code to be modified.*

- **Java (Android - rare usage)** *Some plugins require native code to be modified.*

- **Android Studio** *Required for Android development.*

- **Xcode** *Required for iOS development.*


### 1.2 Command Center App

- **Javascript**

- **Pug / Jade** *Templating engine that uses Express.js to build web views. Originally called Jade, now renamed to Pug.*


### 1.3 Back-End
- **Node.js**

- **Express.js**

- **MySQL**

- **AWS / minio** *Used for storing incident media.*

- **Spring Boot Server** *Used with AWS / minio to return a presigned url and hide secure credentials for incident media uploads.*

- **Socket.io** *Used for various features that require real time data transport, such as location tracking and messaging.*

## 2.0 Convoyer - Build Contents
### 2.1 Overview

*The following directories are found in the mobile app’s source directory. Files and directories that are not used during development are not listed.*

- **root directory** *Several crucial files and setting files are located in the project's root directory.*

- **android** *Contains the build files necessary for running on Android. Directory will be used moderately during Android development.*

- **components** *All React Native code is here.*

- **images** *Contains several images used in the app.*

- **ios** *Contains the build files necessary for running on iOS. Directory will be used moderately during iOS development.*

- **node_modules** *directory generated when running npm install with a package.json in source directory. You will need to edit some modules during development.*

### 2.2 Root Directory

*The following files are found in the mobile app’s root directory. Files and directories that are not used during development are not listed.*

- **.babelrc** *Necessary for using babel to transpile ES6 javascript into ES5 for Internet Explorer browsers.*

- **App.js** *Required by every React Native application. Contains code that registers all of the app’s components. This is the second file in our application lifecycle.*

- **app.json** *We can rename our application here.*

- **index.js** *Required by every React Native application. This is the first file in our application lifecycle.*

- **components** *All React Native code is here.*

- **package.json** *Created after running npm init. Always keep note of version numbers here because most issues you will encounter involve plugin incompatiblities.*

- **ReactotronConfig.js** *Necessary to use the [Reactotron](https://github.com/infinitered/reactotron)  plugin.*

### 2.3 Android Directory

*The following files and directories are found in the 
'android' directory. Files and directories that are not used during development are not listed.*

-  **app** *Several crucial files are located in this directory. These files will frequently be edited during android development.*

	- **src** *Inside this directory there are three files that will be required to edit when installing various plugins*
		- **MainActivity.java**
		- **MainApplication.java**
		- **AndroidManifest.xml**

	- **build.gradle** 
		- *An android project contains two build.gradle files. One is in the app directory, and another is in the root android directory.*  
		- *This build.gradle will be used frequently when installing plugins. Version numbers are crucial, and will break the app if there are any incompatibilities.*

- **build.gradle** *Root android directory build.gradle. Will need to be edited during installation of some plugins.*

- **settings.gradle** *Will need to be edited during installation of some plugins.*

### 2.4 Components Directory

*The following files and directories are found in the 
'components' directory. This directory is comprised of all of our React Native javascript files. All contents will be used during development.*

- **common** *These components are shared throughout our views.*

- **lib** *Most of our app logic is located here. These are async services, much like providers in Angular, that handle data storage, data transactions and API calls.*
	- **AuthService.js** *Handles the following features:*
		- push notifications
		- toast messages
		- socket.io chat
		- API calls

	- **BackgroundGeolocationHeadlessService** *Needed for background geolocation plugin.*

	- **BGService.js** *Handles background geolocation features.*

	- **IDService.js** *Creates and provides unique IDs.*

	- **PatrolService.js** *Contains various helper methods for CONVOYER.*

- **screens**	*All the screens we see in our app are here. Some files here handle data transactions and API calls.*

- **BottomToolbarView.js**	 *The bottom toolbar view.*

- **config.js** *Contains various constants used througout our application.*

- **styles.js** *Contains various styles used througout our application.*

### 2.5 iOS Directory

*The following files and directories are found in the 
'ios' directory. Files and directories that are not used during development are not listed.*

- **foxwatch** *This directory contains the Xcode project for our application.*

	- **AppDelegate.m** *Several plugins will require modifying this file.* 

	- **Info.plist** *Several plugins will require modifying this file. It is highly recommended to edit the file through Xcode rather than here. This way you can avoid syntactical errors.*

	- **Podfile** *Several plugins will require the use of the dependency manager, [CocoaPods] (https://cocoapods.org).* This podfile is created when running pod install from the ios folder root directory.

## 3.0 Command Center - Build Contents
### 3.1 Overview

*The following directories are found in the command center app’s source directory. Files and directories that are not used during development of CONVOYER are not listed.*

- **certificates** *Contains the .p8 certificate file used by [Apple Push Notification Service] (https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html).*

- **controllers/Convoyer** *Contains our Express.js controllers*

- **models/Convoyer** *Contains our Express.js models.*

- **public** *All of our client side scripts, html views, assets, and styles are located here..*

- **routes** *Contains the crucial file index.js, that sets up all of our Express.js routes.*

- **node_modules** *directory generated when running npm install with a package.json in source directory. You will need to edit some modules during development.*

### 2.2 Root Directory

*The following files are found in the mobile app’s root directory. Files and directories that are not used during development are not listed.*

- **.babelrc** *Necessary for using babel to transpile ES6 javascript into ES5 for Internet Explorer browsers.*

- **App.js** *Required by every React Native application. Contains code that registers all of the app’s components. This is the second file in our application lifecycle.*

- **app.json** *We can rename our application here.*

- **index.js** *Required by every React Native application. This is the first file in our application lifecycle.*

- **components** *All React Native code is here.*

- **package.json** *Created after running npm init. Always keep note of version numbers here because most issues you will encounter involve plugin incompatiblities.*

- **ReactotronConfig.js** *Necessary to use the [Reactotron](https://github.com/infinitered/reactotron)  plugin.*

### 2.3 Android Directory

*The following files and directories are found in the 
'android' directory. Files and directories that are not used during development are not listed.*

-  **app** *Several crucial files are located in this directory. These files will frequently be edited during android development.*

	- **src** *Inside this directory there are three files that will be required to edit when installing various plugins*
		- **MainActivity.java**
		- **MainApplication.java**
		- **AndroidManifest.xml**

	- **build.gradle** 
		- *An android project contains two build.gradle files. One is in the app directory, and another is in the root android directory.*  
		- *This build.gradle will be used frequently when installing plugins. Version numbers are crucial, and will break the app if there are any incompatibilities.*

- **build.gradle** *Root android directory build.gradle. Will need to be edited during installation of some plugins.*

- **settings.gradle** *Will need to be edited during installation of some plugins.*

### 2.4 Components Directory

*The following files and directories are found in the 
'components' directory. This directory is comprised of all of our React Native javascript files. All contents will be used during development.*

- **common** *These components are shared throughout our views.*

- **lib** *Most of our app logic is located here. These are async services, much like providers in Angular, that handle data storage, data transactions and API calls.*
	- **AuthService.js** *Handles the following features:*
		- push notifications
		- toast messages
		- socket.io chat
		- API calls

	- **BackgroundGeolocationHeadlessService** *Needed for background geolocation plugin.*

	- **BGService.js** *Handles background geolocation features.*

	- **IDService.js** *Creates and provides unique IDs.*

	- **PatrolService.js** *Contains various helper methods for CONVOYER.*

- **screens**	*All the screens we see in our app are here. Some files here handle data transactions and API calls.*

- **BottomToolbarView.js**	 *The bottom toolbar view.*

- **config.js** *Contains various constants used througout our application.*

- **styles.js** *Contains various styles used througout our application.*

### 2.5 iOS Directory

*The following files and directories are found in the 
'ios' directory. Files and directories that are not used during development are not listed.*

- **foxwatch** *This directory contains the Xcode project for our application.*

	- **AppDelegate.m** *Several plugins will require modifying this file.* 

	- **Info.plist** *Several plugins will require modifying this file. It is highly recommended to edit the file through Xcode rather than here. This way you can avoid syntactical errors.*

	- **Podfile** *Several plugins will require the use of the dependency manager, [CocoaPods] (https://cocoapods.org).* This podfile is created when running pod install from the ios folder root directory.
