# Production Readme

[FUPS Live](http://fups.herokuapp.com/#/login)

FUPS (For User Progress) is a self-help/social media application where users can monitor the mistakes they make in life and get data for improvement.

The idea originated from a users need to track daily mistakes in order to improve their life. FUPS will allow users to post their daily mistakes and view others (anonymously), which will create an environment that accepts fumbles and also offer entertainment/comfort from other people's mistakes.

## Technologies used
#### Backend: MongoDB/Express
#### Frontend: React/Node.js
#### Google Cloud Natural Language

## Features

### FUPS Anonymous Page
This page features all of the anoymous FUPS that users publicly posted. Users can see trending key words for all FUPS on the left and tab between all or top liked posts on the right.

<a href="https://imgur.com/QkURi4e"><img src="https://i.imgur.com/QkURi4e.png" title="source: imgur.com" /></a>

### Data Visualization
User's can view personalized graphs about all of the FUPS they have posted. The pie graph shows the top key words that appear in their FUPS. The line graph displays the sentiment of each of their FUPS to show the progression of their attitude.

<a href="https://imgur.com/XDTC6Y3"><img src="https://i.imgur.com/XDTC6Y3.png" title="source: imgur.com" /></a>

### Improvements
Taking in the top keywords that appear the user's FUPS we offer some resources so that the user can make improvements where they see fit.

<a href="https://imgur.com/4B2YHqw"><img src="https://i.imgur.com/4B2YHqw.png" title="source: imgur.com" /></a>

# OLD STUFF BELOW DELETE AFTER

# For User Progress (FUPS)

FUPS (For User Progress) is a self-help/social media application where users can monitor the mistakes they make in life and get data for improvement.

# Background and Overview

The idea originated from a users need to track daily mistakes in order to improve their life. FUPS will allow users to post their daily mistakes and view others (anonymously), which will create an environment that accepts fumbles and also offer entertainment/comfort from other people's mistakes.

The app will have user auth which will only need an email and password for user privacy. Each user will have a private profile page/dashboard where they will be able to post their daily mistakes or experiences. We will then use Google’s text sentiment analysis API (Cloud Natural Language) to track the posts and categorize them.

On the user dashboard, we will display data about the areas of life that we identify you mess up most, as well as constructive feedback. The data displayed here will be over time and should hopefully show an improvement trajectory.

For example: “Got yelled at this morning for cutting someone off in traffic” would prompt feedback like “Driving can be hard. Here are some resources for improvement! <span>www</span><span>.linktodrivingresources</span>.com”

The site will also have a newsfeed page where posts are completely anonymous but can be upvoted for support from fellow improvers.


# Functionality and MVP
### User Auth (1 day)
- [ ] Users can sign up, sign in, and log out
- [ ] Users can use a demo account to test the website

### Profile Page (1 day)
- [ ] User will have a profile page
- [ ] Profile page displays the user's data (made in a later MVP)
- [ ] Profile page has a FUPS form (to post new FUPS)
- [ ] Profile page includes a FUPS index (to display all of the user's FUPS)

### FUPS (1 day)
- [ ] Users will be able to post FUPS through forms on profile and feed page

### Feed (1 day)
- [ ] Anonymous FUPS will be shown on index page that all users can see

### Data Analysis (2 days)
- [ ] User's can view their data on their profile page
- [ ] Display analytics on FUPS sentiment category analysis
- [ ] Weekly and overall data of user’s FUPS
- [ ] Summary cards to inform users of possible improvements

### Upvoting/Reactions Posts (1 day)
- [ ] Users will be able to upvote/react to FUPS on the feed
- [ ] Users will only be able to upvote once per post/ there will be a counter keeping track of upvotes
- [ ] Reactions (bonus feature)


# Technologies and Technical Challenges

#### Backend: MongoDB/Express
#### Frontend: React/Node.js
#### Google Cloud Natural Language
#### Let Me Google That For You (TEMP until we find a better API) (BONUS)

FUPS uses the MERN stack and the Google Cloud Natural Language API to to identify key words in sentences which we will identify as being problem words. Those words will then be logged in a table in the database and we will have an associated counter for every time the same word is used. We will have associations to find repetitive connections between the keywords used in the same post and we will pass those keywords into LMGTFY (or something similar) which will give the user the Google results they need.

# Accomplished Over the Weekend (January 5 - January 6)
- Research and build Google Search API - Rikey & Joseph
- Research and build frontend for displaying graphs - Steven & Theo

# Group Members and Work Breakdown

#### Theo Obbard (Backend and data analysis)
#### Joseph Kung (Backend and data analysis)
#### Rikey Chen (Frontend)
#### Steven Le (Frontend)

### Day 1
- User auth backend - Joseph & Theodore
- Build skeleton react site for users/sessions - Rikey
- Research Google Search API
- Draw up architecture of FUPS schema to go with data analysis

### Day 2
- Work on FUPS backend - Joseph & Theodore
- Build frontend skeleton for profile page - Rikey & Steven
### Day 3
- Integrate Cloud Natural Language API - Joseph & Theodore
- Connect backend FUPS to frontend profile page - Rikey & Steven
### Day 4
- Build feed and connect FUPS to display on feed - Rikey & Steven
- Integrate/Research how to store historical and weekly data - Joseph & Theodore
- Integrate Google/Custom Search API
### Day 5
- Integrate frontend data visualization
- Add graphs and summary cards to profile page
### Day 6
- Build backend for upvoting/reactions - Joseph & Theodore
- Build frontend for upvoting/reactions
### Day 7
- Heroku Deployment
- Complete production README
- Refine css
