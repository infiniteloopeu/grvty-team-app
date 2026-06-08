# GRVTY: Ride the Mountain

A mobile app for U12 ski racers that turns healthy habits into a cooperative team adventure.

Motto:
One Team. One Force. For Glory.

Mission:
Help young athletes develop consistency in training, recovery, nutrition, school, and teamwork.

## Prototype

This is a clickable Expo React Native prototype with local mock data only.

Screens included:

- Home Mountain
- Daily Missions
- My Racer
- Rope Team
- Weekly Story

Daily mission checkboxes update today's GRVTY Force total and apply stat boosts to the racer screen. Completing every daily mission adds the +200 Force bonus.

## Setup

Install dependencies:

```bash
npm install
```

Start the Expo dev server:

```bash
npm start
```

Then open the app in Expo Go, an iOS simulator, an Android emulator, or a web browser from the Expo terminal menu.

## Project Structure

- `App.tsx` holds the active tab and completed mission state.
- `src/mockData.ts` contains all prototype content and mock values.
- `src/components/` contains shared UI pieces.
- `src/screens/` contains the five MVP screens.
