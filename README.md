# Request Header Parser Microservice

This is a simple microservice that parses the request headers sent by the client and returns useful information such as IP address, preferred language, and software details.

## Features

- Parses the client's IP address  
- Detects the preferred language from the `Accept-Language` header  
- Extracts software information from the `User-Agent` header  
- Returns the parsed data as a JSON response  

---

# Tracker User App

A backend application for managing users and their physical exercises. It allows creating users, adding exercises with description, duration, and date, and querying exercise logs with date filters and result limits. This project is ideal for learning CRUD operations, in-memory data handling, and RESTful routing with Node.js and Express.

**Key Features:**  
- Create and list users  
- Register exercises for each user  
- Query exercise logs with filters (start date, end date, and limit)  
- Use unique IDs with `bson-objectid`  
- Basic error handling and validations

---

# Url Shortener

A microservice that provides URL shortening functionality. Users can submit a long URL and receive a shortened version that redirects to the original address. Perfect for learning about HTTP redirection, simple storage, and URL manipulation.

**Key Features:**  
- Generate unique shortened URLs  
- Automatic redirection to the original URL when accessing the short link  
- Basic URL validation  
- In-memory or simple database storage  
- RESTful API endpoints for URL creation and access  

---

## Technologies Used

- Node.js  
- Express.js  
