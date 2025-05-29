# URL Shortener Microservice

This is the boilerplate code for the URL Shortener Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice.

## API Endpoints

| Method | Endpoint                  | Description                         | Request Body / Params                   | Response Example                          |
|--------|---------------------------|-----------------------------------|---------------------------------------|-------------------------------------------|
| POST   | `/api/shorturl`       | Create a new shortened URL         | `{ url: "https://example.com" }`       | `{ original_url: "...", short_url: 1 }`   |
| GET    | `/api/shorturl/:short_url`| Redirect to the original URL       | URL parameter: `1`             | Redirects to original URL or returns error |
