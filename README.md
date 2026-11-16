# Halodek

A React Native messaging application UI built with Expo and TypeScript. Halodek provides a clean, modern messaging experience where users can browse conversations, search chats, view profile pictures, and interact with chat interface elements.

🚀 **Project:** Halodek – React Native UI Challenge

---

## 📖 About The App

> Halodek is a messaging application interface designed to provide users with a simple and intuitive way to interact with their conversations. The application features a chat list displaying conversation previews, timestamps, sender information, and unread message indicators. Users can search through conversations, view profile pictures in an interactive preview, and navigate between Chat, Status, and Calls tabs. The interface is built with reusable React Native components and is designed to provide a smooth mobile experience.

---

## 📸 App Screenshots

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/1fa9f7e3-9772-499d-a5c6-484a42506c95" width="200" alt="HaloDek Screenshot 1"/></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/1c0d1f96-57e2-4d6b-b6ae-c5ef0508bc64" width="200" alt="HaloDek Screenshot 2"/></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/559ea9f5-fe75-4710-b3ee-4b5b4913d737" width="200" alt="HaloDek Screenshot 3"/></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/6ab89898-01d3-457f-b635-3266ca5c1d63" width="200" alt="HaloDek Screenshot 4"/></td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/0dfff6e8-1fc0-4b72-a8b2-4e430b3961c9" width="200" alt="HaloDek Screenshot 5"/></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/459ff87f-c9d7-4a24-9f83-c48756242880" width="200" alt="HaloDek Screenshot 6"/></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/ff424354-f969-4b13-9cbf-9519843c9fff" width="200" alt="HaloDek Screenshot 7"/></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/b4f2a913-6a7c-4e7f-a9b0-568dd08d8188" width="200" alt="HaloDek Screenshot 8"/></td>
  </tr>
</table>

---

## 📲 Download & Install the APK

You can download and install the Halodek Android application using the Google Drive link below.

🚀 **APK Download:** [Click here to download Halodek](https://drive.google.com/drive/folders/1lHBjunlRKfgY2tFjzfEwukrhHLMg2sI2?usp=sharing)

### Installation Instructions

1. Open the Google Drive link above.
2. Download the `Halodek.apk` file to your Android device.
3. Open the downloaded APK file.
4. If prompted, allow installation from unknown sources for your browser or file manager.
5. Follow the installation instructions to complete the setup.
6. Open Halodek and explore the application!

**Note:** Halodek is distributed as an Android APK and is intended for installation on Android devices. It is not available for direct installation on iOS devices.

---

## ✨ Cool Features I Built

- **Chat List:** Displays conversations with contact names, profile pictures, message previews, timestamps, and sender information.
- **Search Functionality:** Allows users to filter conversations by contact name or message content.
- **Interactive Profile Preview:** Users can tap a profile picture to open a larger profile preview with quick-action icons.
- **Chat Status Indicators:** Displays different conversation states, including typing indicators, read messages, and unread message counts.
- **Tab Navigation:** Includes Chat, Status, and Calls tabs for organising the messaging interface.
- **Floating Action Button:** Includes an easily accessible floating action button for the main chat interface.
- **Reusable Components:** Uses separate components for the header, tab bar, and individual chat items to keep the code organised and maintainable.
- **Local Image Assets:** Uses downloaded profile pictures stored within the project's assets directory.
- **Responsive Mobile Interface:** Uses React Native layouts and components to create a mobile-friendly experience.

---

## 🛠️ Tools Used to Build It

- **React Native:** Used to build the mobile application interface and reusable UI components.
- **TypeScript:** Provides static typing and helps maintain a structured and reliable codebase.
- **Expo:** Provides the development environment and tools for building and testing the application.
- **Expo SDK 58:** Provides the Expo framework and development tooling used by the project.
- **React Hooks:** Uses `useState` to manage application state, including tab selection, search functionality, and profile preview visibility.
- **React Native Safe Area Context:** Helps ensure that interface elements are displayed within the device's safe areas.
- **Expo Vector Icons (Ionicons):** Provides icons used throughout the application.
- **FlatList:** Efficiently renders the conversation list.
- **React Native Components:** Uses components such as `View`, `Text`, `Image`, `Pressable`, `Modal`, and `StatusBar` to build the interface.
- **EAS Build:** Used to configure and generate Android application builds.
- **Git & GitHub:** Used for source code management and version control.

---

## 🗄️ Data Management

The current implementation uses locally defined sample chat data to populate the conversation list.

The sample data includes:

- Contact and group names.
- Conversation timestamps.
- Message previews.
- Sender information.
- Profile pictures.
- Unread message counts.
- Typing and read-status indicators.

Profile pictures are stored locally in the `assets/images` directory and referenced using React Native's `require()` function.

The data structure can also accommodate image URLs supplied by an API, allowing the application to be extended with dynamic conversation data in future development.

---

## ⚙️ How to Run It on Your Computer

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js and npm.
- Expo Go on your iPhone, if testing on a physical iOS device.
- A code editor such as Visual Studio Code.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project directory:

```bash
cd ui-challenge-Halodek-app
```

### 2. Install dependencies

Install the project dependencies:

```bash
npm install
```

### 3. Start the development server

Run:

```bash
npx expo start
```

This starts the Expo development server and displays a QR code in your terminal.

### 4. Run the application

**On an iPhone:**

1. Install Expo Go from the App Store.
2. Ensure your iPhone and Mac are connected to the same Wi-Fi network.
3. Scan the QR code displayed in your terminal using your iPhone camera.
4. Open the project in Expo Go.

**On an iOS simulator:**

Press `i` in the terminal if you have an iOS simulator configured on your Mac.

**On a web browser:**

Press `w` in the terminal to launch the web version, if supported by the project dependencies.

---

## 📱 Building the Android APK

The application can be packaged as an Android APK using Expo Application Services (EAS Build).

### 1. Configure EAS Build

```bash
npx eas-cli@latest build:configure
```

### 2. Configure the APK build profile

Add the following configuration to `eas.json`:

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

### 3. Generate the APK

Run:

```bash
npx eas-cli@latest build --platform android --profile preview
```

Once the build is complete, Expo provides a link to download the generated APK.

---

## 🔐 Application Functionality

The current project focuses on implementing the messaging application's user interface and interactive elements. It uses sample conversation data rather than a fully integrated authentication system or messaging backend.

The interface is structured to support future integration with APIs and dynamic application data.

---

## 📝 Credits

Copyright © 2026 Halodek. All rights reserved.
