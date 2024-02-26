# Project Title

MindFlex

# Running the app

To run the app, you may need access to an iOS simulator or an actual iOS device.

## Using iOS Simulator (Mac Only)

Install Xcode: If you're using a Mac, you can install Xcode from the Mac App Store.

Open Xcode: Launch Xcode and navigate to Xcode > Preferences > Components to install the iOS simulator component if it's not already installed.

Run the App: After installing Xcode and the iOS simulator component run the following command in the project directory:

`npm run ios` or `npm start` (and then follow the instructions)

## Overview

MindFlex is a versatile mental health resource app designed to support various needs and stages throughout one's mental health journey. While it facilitates awareness, tracking and education on mental healthcare, MindFlex serves as a valuable tool rather than a complete solution to mental healthcare.

### Problem

Since the onset of the COVID-19 pandemic, there has been a notable decline in overall mental health, with 40% of Canadians reporting high levels of anxiety or depression ([source: Statistics Canada](https://www150.statcan.gc.ca/n1/pub/82-003-x/2022008/article/00002-eng.htm)). Accessing mental healthcare has been tough, with only 1 in 3 Canadians seeking help ([source: Canadian Mental Health Association](https://cmha.ca/)). This highlights the need for more accessible and practical ways of managing mental health. Many people are open to using mental health apps but struggle to find ones that meet their needs as existing apps often lack enough resources to offer comprehensive support.

### User Profiles

- Target users want to:
  - track their mental well-being on a daily or weekly basis
  - expand their knowledge on mental healthcare
  - access resources and support on the go from their phones
  - connect with mental health professionals

#### Persona 1:

![](/assets/README/persona1.png)

#### Persona 2:

![](/assets/README/persona2.png)

### Features

- As a user, I want the option to write reflections about my mood.
- As a user, I want to receive a mental health tip or quote for motivation and encouragement.
- As a user, I want access to curated blogs/articles covering various mental health topics for education and support.
- As a user, I want to be able to see and learn about available licensed therapists on the app.

- As a user, I want to be able to create an account to start managing my mental health journey.
- As a user, I want to be able to log into my account to manage my mental health journey efficiently.

## Implementation

### Tech Stack

- Frontend:
  - React Native
  - Expo
  - Tailwind CSS/NativeWind
- Client libraries:
  - React Navigation
  - Axios
  - AsyncStorage
- Server:

  - Express
  - Knex
  - Crypto
  - bcryptjs
  - JWT

- Database:
  - MySQL

### APIs

- No external APIs used for this sprint

### Sitemap

- Login
- Sign Up
- Home Page
  - Mood selector
  - Write a reflection
  - Quote of the day
  - Recommended Activities
- Blog Page
- Explore Therapists Page
  - Therapist booking flow

### Mockups

#### Home Page

![](/assets/README/home-screenshot.png)

#### Blog Page

Tip: Drag the screen from the left to the right on the blog post to go back to the main blogs screen.

![](/assets/README/blog-screenshot.png)

#### Explore Therapists Page

Tip: Drag the screen from the left to the right on the therapist details screen to go back to the main therapists screen.

![](/assets/README/therapy-screenshot.png)

### Data

See MindFlex-Server repo for more details.

Database Tables:

- Users (id, name, email, password)
- Blogs (title, image, author, author_image, date_posted, content, thumbnail_image)
- Therapists (id, name, role, location, rating, experience_years, price, image, bio)
- Reflections (id, title, date, content, user_id)

## Roadmap

- Client setup

  - Add screens with routing for basic structure
  - Create bottom nav and hamburger menu for navigation

- Server setup

  - Initialize express project with routes for pages
  - Set up middleware for handling requests and responses
  - Create database schema with table definitions for user accounts, blog posts, reflections and therapists.
  - Set up migrations and create seed data

- Feature: Blog page

  - Work on UI components to display blogs
  - GET /blogs to fetch all blog posts and GET /blog/:id to fetch a specific blog post

- Feature: Home page

  - Create mood slider with range of emotions
  - Implement reflection modal form with POST /reflection endpoint to save reflections to the database

- Feature: Therapists page

  - Create therapist cards with relevant information (name, specialization, location, etc.)
  - Get all therapist data from database (i.e. GET /therapists, GET /therapist/:id)
  - Implement therapist details page to display detailed information about each therapist

- Feature: Therapist booking flow

  - Calendar integration for scheduling appointments

- Feature: Create account & log in

  - Design and implement UI & backend logic with JWT, signup & login endpoints
  - Handle errors and authentication

- Styling and refinement

## Nice-to-haves

- Google sign up/log in with Passportjs
- Functional notifications
- User profile page
- Retrieve user reflections and display them in the Reflections tab on hamburger menu
- Third-party API for quote/tip of the day
- Functional booking flow with abiliy to pay for booking
- Ability to view payment details in Payment details tab (hamburger menu)
- Therapist reviews section

- For next sprint:
  - Google sign up/log in with Passportjs
  - Functional booking flow with abiliy to pay for booking
  - Topic based Forums page
  - Self-help exercises page/Exercise of the day
  - Improve UI
