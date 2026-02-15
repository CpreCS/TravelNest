# TravelNest

A modern travel planning application for discovering destinations, saving favorite countries, and organizing detailed trip itineraries.  
**You can view the live version here: (https://travelnest-iota.vercel.app/)**

## Overview

TravelNest allows users to explore countries worldwide, curate a personalized travel bucket list, and create detailed plans with tasks and activities for each destination. All data is persisted locally using browser storage.

## Features

- Browse all countries with detailed information (population, region, capital, languages)
- Search and filter countries by name and region
- Save countries to a personalized picks collection
- Create and manage trip plans with tasks for each destination
- Track completion status of planned activities
- View insights and statistics about saved destinations
- Fully responsive design for desktop, tablet, and mobile

## Tech Stack

- **Frontend**: React 19, Vite 7, React Router DOM 7
- **Styling**: Tailwind CSS 4
- **API**: REST Countries API
- **State Management**: Custom React Hooks
- **Storage**: LocalStorage API

## Installation

```bash
git clone https://github.com/CpreCS/TravelNest
cd TravelNest
npm install
```

## Usage

**Development:**
```bash
npm run dev
```

**Production Build:**
```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/         # Icons and images
├── components/     # Reusable React components
├── hooks/          # Custom React hooks
├── pages/          # Page components
├── services/       # API services
├── utils/          # Utility functions
└── App.jsx         # Main application component
```

## Planned Enhancements

- User authentication and authorization system
- Backend database integration to replace LocalStorage
- Account security features and user session management
