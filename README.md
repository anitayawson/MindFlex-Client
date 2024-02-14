# Project Title

MindFlex

## Overview

MindFlex is a versatile mental health resource app designed to support various needs and stages throughout one's mental health journey. While it facilitates awareness, tracking and education on mental healthcare, MindFlex serves as a valuable tool rather than a complete solution to mental healthcare.

![](/assets/README/mindflex-overview.jpg)

### Problem

Since the onset of the COVID-19 pandemic, there has been a notable decline in overall mental health, with 40% of Canadians reporting high levels of anxiety or depression ([source: Statistics Canada](https://www150.statcan.gc.ca/n1/pub/82-003-x/2022008/article/00002-eng.htm)). Accessing mental healthcare has been tough, with only 1 in 3 Canadians seeking help ([source: Canadian Mental Health Association](https://cmha.ca/)). This highlights the need for more accessible and practical ways of managing mental health. Many people are open to using mental health apps but struggle to find ones that meet their needs as existing apps often lack enough resources to offer comprehensive support.

### User Profiles

- Target users want to:
  - track their mental well-being on a daily or weekly basis
  - expand their knowledge on mental healthcare
  - access resources and support on the go from their phones
  - connect with mental health professionals or peer support groups

#### Persona 1:

![](/assets/README/persona1.png)

#### Persona 2:

![](/assets/README/persona2.png)

### Features

- As a user, I want to select my current mood from a mood picker for easy tracking.
- As a user, I want the option to write reflections about my mood and save them for future reference.
- As a user, I want to receive daily mental health tips or quotes for motivation and encouragement.
- As a user, I want access to curated blogs and articles covering various mental health topics for education and support.
- As a user, I want to search through a list of licensed therapists and easily book appointments with my preferred choice.

- As a user, I want to be able to create an account to start managing my mental health journey.
- As a user, I want to be able to log into my account to manage my mental health journey efficiently.

## Implementation

### Tech Stack

- Frontend:
  - React Native
  - Expo
  - Tailwind CSS
- Client libraries:
  - React Navigation
  - Axios
  - Context API/Redux
- Server:
  - Express
  - Knex
- Database:
  - MySQL

### APIs

- [Paystack API](https://paystack.com/docs/api/) - for payment on therapist bookings

### Sitemap

- Login
- Sign Up
- Home Page
  - Mood selector
  - Write a reflection
  - Mental health tip/Quote of the day
- Blog Page
- Explore Therapists Page
  - Therapist booking flow

### Mockups

[View Figma File Here](https://www.figma.com/file/RSjKX5JxOcwYFy2YpPCU8V/MindFlex-Mobile-App---BrainStation-Capstone-Project?type=design&node-id=114%3A2707&mode=design&t=HpWs2gsAgtnHhmi7-1)

#### Home Page

![](/assets/README/homepage.png)

#### Blog Page

![](/assets/README/blogpage.png)

#### Explore Therapists Page

![](/assets/README/therapistspage.png)

#### Therapist Booking Flow

![](/assets/README/bookingflow.png)

### Data

- Database Tables:
  - Users (id, name, email, password)
  - Blogs (title, image, author, date, content)
  - Therapists (id, name, location, title, image, bio, specialties)
  - Reflections (id, user_id, title, content)

### Endpoints

- GET /blogs
- GET /blogs/:id
- GET /therapists
- GET therapists/:id
- POST /reflection
- POST /mood

### Auth

- Passport.js
  - For authentication/authorization for login and sign up pages (after core functionality has been implemented i.e. all the main pages)
- OAuth
  - For secure login and sign-up processes (once main functionality is completed).

## Roadmap

- Client setup

  - Add screens/pages and routing for basic structure
  - Create bottom nav and hamburger menu for navigation

- Server setup

  - Initialize express project with routes for all pages
  - Set up middleware for handling requests and responses
  - Create database schema with table definitions for user accounts, blog posts, reflections, therapists, appointments, etc.
  - Set up migrations and create seed data

- Feature: Blog page

  - Work on UI components to display blogs
  - GET /blogs to fetch all blog posts and GET /blog/:id to fetch a specific blog post

- Feature: Home page

  - Create clickable mood slider with range of emotions
  - Handle user input and update UI accordingly
  - Implement reflection overlay form with POST /reflection endpoint to save reflections

- Feature: Therapists page

  - Create therapist cards with relevant information (name, specialization, location, etc.)
  - Implement therapist details page to display detailed information about each therapist

- Feature: Therapist booking flow

  - Calendar integration for scheduling appointments
  - Paystack integration for secure payment processing during booking

- Feature: Create account & log in

  - Design and implement UI & backend logic using Passport.js and OAuth

- Styling and refinement

  - Tidy up across all pages

- Bug fixes and testing

## Nice-to-haves

- Functional notifications
- User profile page
- Third-party API for quote/tip of the day
- Splash screen
- Ability to view payment details in Payment details tab (hamburger menu)
- Therapist reviews section
- Retrieve user reflections and display them in the Reflections tab on hamburger menu

- For next sprint:
  - Topic based Forums page
  - Self-help exercises page/Exercise of the day
