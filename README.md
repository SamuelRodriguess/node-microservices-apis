# Request Header Parser Microservice

![Project Screenshot](https://github.com/user-attachments/assets/b3f4fc11-2d2a-43f8-87c4-2cad4bc95627)

## 📋 Project Description

This microservice parses the request headers and returns a JSON object containing information about the client's IP address, preferred language, and software (user agent).

## 🚀 How to Use

### Example Usage

Send a GET request to:
```[project_url]/api/whoami```

Example Output

```json
{
  "ipaddress": "159.20.14.100",
  "language": "en-US,en;q=0.5",
  "software": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
```

## 🛠️ Installation

1. **Clone this repository:**
    ```
    git clone https://github.com/SamuelRodriguess/request-header-parser
    cd request-header-parser
    ```
2. **Install dependencies:**
    ```
    yarn install
    ```
3. **Start the server:**
    ```
    yarn start
    ```
4. **Test the endpoint:**
    - Open your browser or use a tool like Postman to visit:
      ```
      http://localhost:3000/api/whoami
      ```

---

## 📚 API Endpoints

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| GET    | `/api/whoami`      | Returns your IP, language, and software info |

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests.

---

## 📝 License

This project is part of the freeCodeCamp curriculum and is open source.

---

## 📢 Acknowledgements

- [freeCodeCamp](https://www.freecodecamp.org/)
- Node.js & Express.js
