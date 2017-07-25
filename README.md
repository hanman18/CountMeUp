# CountMeUp
Application to Poll and Display User Votes Live!

CountMeUp
Application to Poll and Display User Votes Live!
Frameworks & Platforms Used: Node.js, socket.IO, React.js,bootstrap,Express
Instructions to Run on CentOS 7:
1. Confirm Node.js and Node Package Manager are installed on your system. Installation instructions can be found at https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-a-centos-7-server 
2. After Download, Navigate on terminal to directory CountMeUp/ 
3. Type "npm start" on terminal. You should see a message that reads "Polling server is running at 'http://localhost:3000' " 
4. You can view the running application by typing localhost:3000 on browser of choice. 
How to Experience the CountMeUp App:
Presenter:
1. On browser navigate to localhost:3000. Click on start presentation.
2. Enter presenter name and Voting Presentation Title.
3. Click Submit.
4. Click Select Candidates.
Audience:
1. On another tab, navigate to localhost:3000. Enter Voter Name and Click Join.
2. If Presenter has started presentation, List of Candidates will be shown to choose from.
3. Audience member can click on less than 3 candidates and Click Submit. They will not be able to click or choose more than 3 times.
4. User will be navigated 'Thanks for Submission' page by clicking Submit or clicking 3 times. They can click on link to view live results.
* New audience members can be added and vote by navigating to localhost:3000 on new tabs. Refreshing existing tab will not create new audience member.
Live Poll:
1. Navigate to localhost:3000/#/board after Presenter has started poll to view live updates on candidate votes.

