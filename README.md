# 🚀 LunarLander

Welcome to **LunarLander**, a multiplayer lunar landing simulator where players compete for the fastest and safest landings. This project features a real-time game server, player authentication, and global leaderboards across multiple maps.

---

## 📦 Project Overview

- **Languages**: JavaScript (Node.js), C#
- **Architecture**: Full-stack with separate C# and Node.js servers
- **Features**:
  - Multiplayer support
  - Real-time physics and controls
  - Global leaderboard with per-map filtering
  - Customizable rocket colors
  - Lightweight login and account creation

---

## 🛰️ How to Connect

### ⚙️ Local Setup *(Developer Mode)*

1. **Start the C# Database Server**  
   - Navigate to the `/C#Server` directory.
   - Run `LunarLanderDatabaseServer.exe` (you may get a security warning—this is expected).
   - A terminal window will appear showing the server IP and a "waiting for connection" message.

2. **Start the Node.js Game Server**
   - Open a new terminal and navigate to the `/Server` directory.
   - Ensure Node.js and npm are installed.
   - Run:
     ```bash
     npm install
     npm start
     ```
   - You should see output like:
     ```
     connecting...
     connected
     ```
     This indicates the game server has connected successfully to the C# backend.

3. **Play the Game Locally**
   - Open your browser and go to:  
     **http://127.0.0.1:8000**

---

## 🎮 Gameplay Instructions

1. **Login**  
   - On first login, enter a username and password.  
   - *Note: Passwords are not currently encrypted—use a placeholder password.*

2. **Customization & Map Selection**  
   - From the title screen, customize your rocket color.  
   - Select a map to join the game.

3. **Controls**
   - `←` / `→` — Rotate ship  
   - `↑` — Apply thrust  
   - **Objective**: Land safely on the landing pad in the bottom right corner.

4. **Scoring**
   - Your score is based on time-to-land and landing quality.
   - Access the **Global Leaderboards** from the title screen.
   - Filter leaderboards by map to view top 10 performances.

> Note: Local setups may have limited or empty leaderboard data.

---

## 🛠️ Future Improvements

- Password encryption and account security
- Expanded map variety
- Improved physics and crash detection
- UI enhancements and animation polish

---

## 🤝 Contact

If you have issues running the game or want to contribute, feel free to reach out to:

**Chris Dietel**  
📧 [cjdietel@gmail.com](mailto:cjdietel@gmail.com)

