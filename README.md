# Yoga Classes Admission Form

## Introduction

As the chosen outsourcing firm responsible for building the admission form for monthly yoga classes, our goal is to create a user-friendly and efficient system that allows eligible individuals to enroll in the classes. This admission form adheres to specific requirements outlined by the client:

### Requirements:

- Eligibility: Only individuals aged between 18-65 can enroll.
- Payment: Participants are required to pay a monthly fee of 500/- Rs INR.
- Enrollment: Individuals can enroll any day of the month but are required to pay for the entire month.
- Batches: Four available batches: 6-7AM, 7-8AM, 8-9AM, and 5-6PM. Participants can choose any batch each month and switch to another batch in subsequent months.

## Functionality

This admission form implements the following functionalities:

- **Signup:** Allows new users to register for the yoga classes using the endpoint `POST /api/signup`.
- **Login:** Registered users can log in using the endpoint `POST /api/login` to access their profiles.
- **Update Profile:** Users can update their profiles (including gender, age, batch preference) via the endpoint `PUT /api/user`.

## API Endpoints

- **Signup Endpoint:** `POST /api/signup`
  - Use this endpoint for new user registrations.

- **Login Endpoint:** `POST /api/login`
  - Use this endpoint for user login to access profiles.

- **User Profile Update Endpoint:** `PUT /api/user`
  - Use this endpoint to update user profiles.

## Local Development

To run the project locally:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the necessary environment variables.
4. Start the development server using `npm start`.

## Technologies Used

- **Backend Framework:** NODEJS, EXPRESSJS
- **Database:** MONGO DB
- **API Testing:** POSTMAN
- **Frontend (if applicable):** REACTJS

## Screenshots

![image](https://github.com/gaurav147-star/flexmoney-frontend/assets/78996081/a5d3ad2d-c8c1-414b-85f7-a9ddea9f33aa)
![image](https://github.com/gaurav147-star/flexmoney-frontend/assets/78996081/78957365-1d90-4cee-945f-2df4d588407b)
![image](https://github.com/gaurav147-star/flexmoney-frontend/assets/78996081/de1c0584-1499-4784-9544-e76e8165e272)


