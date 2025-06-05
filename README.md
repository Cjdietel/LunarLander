Thank you for your interest in LunarLander! Below are instructions on how to connect to LunarLander!

instructions:

    VM hosted version (easy): 
        Connect to 3.134.101.77:8000
        If server is down, contact me and I will get it up.
        *see instructions on once connected*
    
    local hosted version (setup required)
        Navigate to the C# folder, and run the LunarLanderDatabaseServer executable, which might give a warning but it should be fine. After running it, it will open up a command prompt stating the IP the server started on, and that it is waiting for a connection. After starting the C# server, open a command prompt and navigate to the Server folder. Make sure you have node and npm installed on your computer. From here you should be able to do "npm start", which will run the server.js script and start the game server. It should give a message saying "connecting", and finally a message saying "connected" meaning it successfully connected to the C# server. After both servers are running, go to the browser and connect to 127.0.0.1:8000.
        *see instructions on once connected*

    Once connected:
        Logging in for first time will create the account, but be sure not to use a private password as it is not encrypted yet.
        once in the title screen, you are able to change the color of your rocket and then hop into a game by selecting a map.
        use left and right arrow keys to steer the ship, and up arrow to apply thrust. The goal of the game is to land on the landing pad safely in the bottom right corner without crashing. Score is affected by the time it took to land. You are able to check the global leaderboards from the title screen, and filter through different maps to get top 10 games from each map. Note that if you are using the local version, the leaderboards may not be full or be empty.



