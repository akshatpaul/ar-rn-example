# React Native EU 2020 - Let's Go 3D with React Native

This is the sample application used for the demo during the talk Let's Go 3D with React Native.

1. Clone the repo into your workspace with git: git clone git@github.com:akshatpaul/ar-rn-example.git
2. Go into the root directory
3. Run npm install from the root of this project
4. Run npm start from the root of this project
5. Open the Viro Media App in your device (if not installed download via Appstore/Playstore), slide out the left panel and select "Enter Testbed".
6. Type the entire ngrok URL output (xxxxxx.ngrok.io) at the top of the terminal into the text field and hit 'GO'
7. Your local application will load shortly
8. Enjoy!

### ngrok troubleshooting 
In above steps the only issue you would ever face is ngrok not starting up properly. In that case simply follow below mentioned steps and you will be good to go.

If you do not see the ngrok address in your terminal, open a new tab, navigate to your workspace and then run

`./node_modules/react-viro/bin/run_ngrok.sh`

Or, from your browser, navigate to:

`http://localhost:4040/status`

If ngrok isn't already running, you can start it by running the follow command in your terminal (anywhere should work):

`ngrok http 8081`

