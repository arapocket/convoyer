# CONVOYER

##Table of Contents

### 1.0 Tech Stack
##### 1.1 Convoyer Mobile App
##### 1.2 Command Center App
##### 1.3 Back-End
### 2.0 Convoyer - Build Contents
##### 2.1 Overview
##### 2.2 Root Directory
##### 2.3 android Directory
##### 2.4 components Directory
##### 2.5 iOS Directory
### 3.0 Command Center - Build Contents
##### 3.1 Overview
### 4.0 Application Logic
#### 4.1 Command Center
##### 4.1.1 app.js
##### 4.1.2 index.js
##### 4.1.3 ConvoyerView
#### 4.2 Convoyer App
##### 4.2.1 index.js and app.js
##### 4.2.2 Views

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

*The following files and directories are found in the command center app’s source directory. Files and directories that are not used during development of CONVOYER are not listed.*

- **certificates** *Contains the .p8 certificate file used by [Apple Push Notification Service] (https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html).*

- **controllers/Convoyer** *Contains our Express.js controllers.*

- **models/Convoyer** *Contains our Express.js models.*

- **public** *All of our client side scripts, html views, assets, and styles are located here..*

- **routes** *Contains the crucial file index.js, that sets up all of our Express.js routes.*

- **views** *Contains our Express.js views. Do not rename the folder. Also, note that subdirectories won't be seen by Express.*

- **.env** *Holds our MySQL database credentials.*

- **app.js** *The start point to our Express.js application. Our Socket.io server and push notification logic is here. *

## 4.0 Application Logic

### 4.1 Command Center

#### 4.1.1 app.js

1. When we run **node app** in a terminal, this is where our Express.js application's life begins. Here we tell express to route all addresses that begin with **/** to go to our **index.js** file to see our list of routes. Say someone types **commandcenter.com/apples** in their address bar. Express will look for the apples route in index.js to recieve instructions on what to do next, whether it's rendering a page or querying our database.
- **initalizeSockets()** *starts our Socket.io server, which is used for our messaging and any other features that require real-time updates, such as location tracking and incident alerts.*
- **getDevices()** Makes a GET request on the **/guardnotifications** route defined in our **index.js** file.
- **index.js** tells the application to access one of our controllers in the **controllers/Convoyer** directory, **ConvoyerController.js**.
- From **ConvoyerController.js** the **getGuardsForNotifications** method is called. This method calls the **ConvoyerModel.js** model file found in **models/Convoyer**.
- **ConvoyerModel** queries the database and returns the results as JSON. The data returned is the list of devices to send push notifications to.
- After the data is returned, **setSocketListeners()** is called to set listeners for our socket server.
- When 'patrol start' is heard on our socket server, **patrolPost()** is called to post the patrol data to the database.
- When 'ended patrol' is heard on our socket server, **patrolPut()** is called to update the patrol as not active anymore.

#### 4.1.2 index.js

1. Whenever a Command Center user opens Convoyer's Live View, our application looks inside **index.js** for the GET route, **/convoyerliveview**.
2. The application sees that the **getConvoyer** method of **ConvoyerController** should be called.
3. **getConvoyer** calls several methods in **ConvoyerModel**. 
4. After the last method, **ConvoyerModel.getCurrentCheckpoints** is finished running, **ConvoyerView** is rendered.

#### 4.1.3 ConvoyerView

1. **ConvoyerView** contains an object with an address to the **/convoyerlivemap** route. Again, the application looks inside **index.js** for instructions on what to do next.
2. **ConvoyerMapController** calls several methods in **ConvoyerMapModel** and then renders the **ConvoyerMapView**.
3. **ConvoyerMapView** imports and calls a script, **convoyerMapScript**. **convoyerMapScript** handles all of the client side javascript. It is located in the **public/convoyer/live-view** directory.

The **Route Editor**, **Patrol Replay** and **Incident Details** follow the same logic.

### 4.2 Convoyer App

#### 4.2.1 index.js and app.js

1. The first place our react native application looks is **index.js**. Here we tell the application to look at **App.js** to begin rendering our app.
2. **App.js** imports all of the views we will need and registers them with the [react-native-navigation] (https://github.com/wix/react-native-navigation) plugin.
3. The first screen rendered by our app is the **LoginView**.

#### 4.2.2 Views
1. Every react native view must contain a **render()** method.
2. **render()** renders the log in view to the user. Inside **LoginView.js** there are various helper methods that make the view functional.
3. When the user authenticates **HomeView.js** is rendered using its **render()** method. The other views are rendered in the same way.
4. Views call the services in the **components/lib** directory often for all kinds of business logic.
