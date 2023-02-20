# Transformers

### Study Inc.

- Study Inc. is an app which helps NP students to study better by gamifying their studying experience.

## Design Process
 
- This website is a mobile prototype of an app catered to NP Students that needs motivation to study/struggling to study/just want to manage and keep track of their studies. This website also aims to create a community of NP students/peers/lecturers that can help one another through a forum.

- The website will consist of a timer that rewards students for studying (both tangible and intangible rewards included).

- Link to XD Mockup: (https://xd.adobe.com/view/f2040414-b7be-4ecb-b1fc-ede874be378b-a757/grid)


## Features

### Existing Features
1. Login and Sign-Up Page:
    - This enables students to have their own account bound to their student ID and student email account, saving their user information.

2. Badges feature that students can earn while using the app, through various activities:
    - The badges will be displayed on the homepage. Students have an option to display whatever badges they have. Upon clicking the badges, it will output a 3D Model which is embed from Sketchfab.

3. Forum page that students can use to ask questions and earn badges from other students.

4. Community page where students can join interest groups and help one another with their schoolwork.

5. There will be a leaderboard which showcases Top 3 Students with highest amount of NPoints amongst cohorts and/or peers. The leaderboard will also  show the current ranking of the student amongst both cohort and buddies, as well as how many NPoints the student have accumulated.

### Features Left to Implement
1. Avatar Customization for both Login and Sign-up:
    - Student can customize their avatar upon sign-up as well as later on. This includes room customizer student and edit their own profile and room to their liking. 

2. Stickie Note Message System:
    - Students can leave messages to other students via a sticky note which will be shown as taped onto the fridge inside their room, displayed on the profile. 
    - The student themselves can receive sticky note messages as well.


3. Study timer in the form of a clock in the customizable room in the home page
    - This study timer will lock you out from your phone for a certain amount of time in order to ensure the student concentrates on their studies/work at hand. 
    - The timer will use a Pomodoro Technique for efficient way of studying/working
    - Once completed, student will receive a finite amount of NPoints that will correspondto how many tasks they've managed to finish

4. Menu that can be navigated from the homepage/profile page (Dashboard, Schedules, Friendlist)
    - Dashboard that showcases a calendar of the current month which indicates which days the user has used the Study Timer, Progress tracker that keeps track of the user's total tasks and how many they have completed so far, and Growth trendline which compares the productivity rate of the student during the current month to the previous month. 
    - Student can toggle to Schedules which will show the class timetable on the day itself. Student can also create a new schedule that can be created on the day itself or any other day. Those tasks will be added inside a Tasklist database, which the Study Timer can use to reference the tasks later on
    - Student can toggle to Friendlist which will show a list of their friends in NP.

5. Shop System
    - Student can access the shop from the Avatar Customizer.
    - It will show 6 items ranging from (Appearance) to (Inventory) items, and it will have a 24-hour limit before it refreshes to new ones. 
    - Students can buy items from the shop using Coins.

6. Rewards Page
    - Student can redeem their rewards through the rewards page. It will consist of two categorys: (In-game) and (Redeemable)
    - In-game items are coins and wearable items that students can redeem. It will refresh daily (24 Hours) except limited edition items that run for a longer period of time.
    - Redeemable items are physical rewards that students can redeem using NPoints. 

7. Forum Posting and Commenting System


## Technologies Used

### Languages
 
- HTML
- CSS
- Java
 
### Software Used
 
- [Visual Studio Code]([https://code.visualstudio.com])
  - The project uses Visual Studio Code to make the .html and css files.
- [Adobe XD]([https://www.adobe.com/sg/products/xd.html)
  - The project uses Adobe XD to make the wireframe of the website.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
-[Lottie Animations](https://lottiefiles.com/search?q=loading&category=animations)
  -The project uses Lottie animations to make its login page transition look like it is loading the data.

## Testing

1. Sign Up form:
- Go to the signup page 
    - Try to submit the empty form and verify that an error message about the required fields appears
    - Try to submit the form with an invalid email address and verify that a relevant error message appears
    - Try to submit the form with all inputs valid and verify that a success message appears.

2. Login page:
- Go to the login page
    - Try to submit the empty form and verify that an error message about the required fields appears
    - Try to submit the form with an invalid email address and verify that a relevant error message appears
    - Try to submit the form with all inputs valid and verify that a success message appears.

3. Home page:
- Go to the home page
    - If login was successful, verify that the home page has the student ID and email displayed at the top of the website
        - Click on the badges and verify that the 3d model pops up when clicking on the badge.
        - Click on the navigation features and verify that they work at linking the user to different pages of the app.

4. Forum page:
- Go to the Forum page
- Click on the Featured topic and Category buttons and verify that they work

5. Community page:
- Go to the community page
- Verify that the category section allows the student to scroll horizontally to view the different categories available.

6. Leader board page:
- Go to the leader board page
- Verify that the leaderboard can switch between different types of leader boards for different items.



## Credits

### Content
- The art style of the icons were heavily inspired by a character-making generator website (https://picrew.me/image_maker/707090) 
- The layouts were inspired by several UI/UX examples in Dribble, Behance, and Pinterest.
- Several of the icons were heavily inspired by royalty-free, ready-made icons found on FlatIcon, Freepik, and mostly Google.

### Media
-  The search bar located at the Community page was adapted from [this search bar located at] (https://codepen.io/kmuenster/details/XWWeQGw)

### Acknowledgements

- We received inspiration for this project from an IMP project which consisted of an app to help students study better through gamification systems as well. That IMP project mainly focused on a study timer and student made games, whereas ours focuses more on avatar customization as well as forum feature to help students get clarification on their questions.

- Link to GitHub: (https://github.com/indomiebrand/Transformers)