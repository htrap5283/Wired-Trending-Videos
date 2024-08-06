# 📺 WiredTrendingVideos

![React Native](https://img.shields.io/badge/React%20Native-0.74.3-61DAFB?logo=react&logoColor=white&labelColor=black&color=282c34) ![Expo](https://img.shields.io/badge/Expo-51.0.23-000020?logo=expo&logoColor=white&labelColor=000020) ![Firebase](https://img.shields.io/badge/Firebase-10.12.4-FFCA28?logo=firebase&logoColor=white&labelColor=black&color=282c34)

## 📋 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Usage](#usage)
<!-- - [Screenshots](#screenshots) -->
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🚀 Introduction

**WiredTrendingVideos** is a mobile application developed using React Native. It retrieves and displays trending videos from the API of Wired Magazine’s channel on DailyMotion.com. Users can view a list of videos, see detailed information about each video, and add videos to their favorites list, which is persisted using Firebase Firestore.

## 🌟 Features

- **🔍 View Trending Videos**: Browse a list of trending videos from Wired Magazine's DailyMotion channel.
- **📄 Video Details**: View detailed information about a video, including the thumbnail, title, description, and views.
- **⭐ Add to Favorites**: Save your favorite videos to your favorites list.
- **🗑️ Clear Favorites**: Remove all videos from your favorites list.

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 14 or later
- **npm**: Version 6 or later (or Yarn)
- **Expo CLI**: Install via `npm install -g expo-cli`
- **Firebase Account**: Create a project in the [Firebase Console](https://console.firebase.google.com/)

## 🔧 Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**

```bash
git clone https://github.com/htrap5283/Wired-Trending-Videos.git
cd WiredTrendingVideos
```

Install Dependencies

Using npm:

```bash
npm install
```

Using Yarn:

```bash
yarn install
```

Set Up Firebase

Create a Firebase project in the Firebase Console.
Add a web app to your Firebase project.
Set up Firestore Database and Authentication in the Firebase project.
Obtain your Firebase configuration and replace it in config/FirebaseConfig.js.
Environment Configuration

Replace sensitive information such as Firebase API keys in config/FirebaseConfig.js and other configuration files.

🏃 Running the App
To start the development server and run your app on any device using Expo's tunnel feature, use the following command:

```bash
npx expo start --tunnel
```

Steps:
Start the Expo Development Server:

Run the following command in the root directory of your project:

```bash
npx expo start --tunnel
```

This command will start the Expo development server with tunnel mode enabled, allowing you to access the app from any device over the internet.

Open the Expo Go App:

Download and install the Expo Go app on your mobile device from the Google Play Store or the Apple App Store.
Scan the QR code displayed in your terminal or browser using the Expo Go app to open the project on your device.
Run on Android Emulator or iOS Simulator (optional):

If you prefer to run the app on an emulator or simulator, you can choose the corresponding option in the terminal:

Press a to open the app in the Android emulator.
Press i to open the app in the iOS simulator (macOS only).
Run on Web:

To run your app on the web, simply press w in the terminal after starting the Expo development server. This will open your app in a web browser.

📁 Project Structure
Here's a brief overview of the project's file structure:

```
WiredTrendingVideos
├── assets                    # Static assets like images and fonts
│   ├── images                # Image files
│   └── fonts                 # Font files
├── components                # Reusable components
│   ├── Button.js             # Custom Button component
│   └── Header.js             # Custom Header component
├── config                    # Configuration files (e.g., Firebase)
│   └── FirebaseConfig.js     # Firebase configuration
├── screens                   # Application screens
│   ├── HomeScreen.js         # Home screen component
│   ├── DetailScreen.js       # Detail screen component
│   └── FavoriteScreen.js     # Favorite screen component
├── App.js                    # Entry point of the application
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```

📦 Dependencies
The project uses the following major dependencies:

React Native: Core framework for building the app.
Expo: Managed workflow for React Native development.
Firebase: Backend services for authentication and database.
React Navigation: Navigation library for managing screens and tabs.
React Native Vector Icons: Custom icons for React Native.
Expo Status Bar: To manage the status bar.
Refer to package.json for the complete list of dependencies and their versions.

⚙️ Configuration
Ensure your Firebase configuration is set correctly in config/FirebaseConfig.js:

FirebaseConfig.js file:
javascript

```Copy code
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import necessary firebase service
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Instantiate auth object
const auth = getAuth(app);

// Instantiate firestore object
const db = getFirestore(app);

// Export the auth and db object to use in app
export { auth, db };

```

🧑‍💻 Usage
Here's a brief guide on how to use the app:

Home Screen
The initial screen displays a list of trending videos from Wired Magazine's DailyMotion channel.
Tap on a video title to navigate to the Detail Screen.
Detail Screen
Displays the video thumbnail, title, description, and total views.
Tap on the "Add to Favorites" button to save the video to your favorites list.
Favorite Screen
Shows the list of videos added to the favorites list.
Tap on a video title to navigate to the Detail Screen.
Tap on the "Clear Favorites" button to remove all videos from the favorites list.
📸 Screenshots
Home Screen

Detail Screen

Favorite Screen

<!-- Note: Update the screenshots with actual images from your app. -->

🤝 Contributing
Contributions are always welcome! Here are some ways you can help:

Reporting Bugs: Use the issue tracker to report bugs.
Suggesting Enhancements: Propose improvements or new features.
Pull Requests: Fork the repository and submit pull requests.
Pull Request Process
Fork the repository.
Create a new branch (git checkout -b feature/YourFeatureName).
Make your changes and commit (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeatureName).
Open a pull request.
Please ensure your code follows the project's coding style and includes relevant documentation.

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

📬 Contact
If you have any questions or feedback, feel free to reach out:

Email: parthjp5283@gmail.com
GitHub: htrap5283
