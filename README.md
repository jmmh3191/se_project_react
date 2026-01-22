# WTWR (What to Wear)

[Repository Link](https://github.com/jmmh3191/se_project_react)

## Description

A React-based weather application that provides clothing recommendations based on real-time, location-based weather conditions. The app fetches data from the OpenWeather API and utilizes a custom filtering system to suggest the most appropriate outfit from a user's collection based on the current temperature.

## Features

Dynamic Weather Integration: Real-time temperature fetching and location detection via API.

Context-Driven Unit Switching: A global Temperature Unit Context allowing the entire app to toggle between Fahrenheit and Celsius instantaneously.

Smart Filtering: Automated logic that categorizes garments into Hot, Warm, or Cold based on API thermal data.

Stateful Modals: Interactive forms for adding garments and previewing items, featuring ESC-key and Overlay-click closing logic.

## Technologies and Techniques

- **React:** Extensive use of useState for UI state, useEffect for API calls/event listeners, and useContext for global settings.
- **Vite:** Optimized project structure using .jsx extensions and fast HMR (Hot Module Replacement).
- **API Integration:** Asynchronous programming using `fetch` and `.then()` for data retrieval.
- **Custom Hooks:** Implementation of a reusable useForm hook to handle controlled inputs and validation.
- **Lifting State Up:** Centralized state management in the App component to coordinate data between the WeatherCard, Main, and AddItemModal.
- **Declarative UI:** Using JSX to create a predictable and easy-to-debug interface

## Project Preview

![App Overview](./src/images/preview-main.png)

## Link to Video via Google

[Video Link] (https://drive.google.com/file/d/1RIaYNt6O-bzl7JKh14PXvR93VB1Uu3Ii/view?usp=share_link)

## Getting Started

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the local server.
4. Open `http://localhost:3000` in your browser.
