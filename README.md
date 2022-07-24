# React-Redux-Ecommerce App 

React-Redux-Ecommerce App is built with latest development tools.




 - ReactJs is use to develop the ui part.
 - JSON server for the data storage.
 - Redux-Saga middleware is use to synce the json API.



## Some feature 
 - This is APP follow functional base react architecture.
 - This is **Ecommerce Cart** application.
 - Can search by Product name, Brand name, Category etc.
 - Redux is connected with this React app by react-redux hooks (useDispatch, useSelector).
 

 ## Some Ui feature 
 - Can add or remove Product to Cart form product listing page. 
 - Also can be empty cart on one click from car page.


## Screenshots
#### Home page in full size 
![App Screenshot](https://github.com/airKing05/react-redux-eco/blob/main/screenShot/Screenshot%202022-07-24%20at%204.35.40%20PM.png?raw=true)
#### small device Views
![App Screenshot](https://github.com/airKing05/react-redux-eco/blob/main/screenShot/Screenshot%202022-07-24%20at%204.34.32%20PM.png?raw=true)

#### Products in side Cart
![App Screenshot](https://github.com/airKing05/react-redux-eco/blob/main/screenShot/Screenshot%202022-07-24%20at%205.00.53%20PM.png?raw=true)

#### Search section
![App Screenshot](https://github.com/airKing05/react-redux-eco/blob/main/screenShot/Screenshot%202022-07-24%20at%205.01.15%20PM.png?raw=true)



## API Reference

#### Get all items
Start Json server
```bash
  $ json-server --watch db.json --port 3001
```
**Product API**
```http
  GET /products
```

Product api data look like
```bash
  [
    {
            "id": 1,
            "name": "I phone 13",
            "color": "blue",
            "price": 100000,
            "category": "mobile",
            "brand": "apple",
            "photo": "https://bit.ly/3Ikr083"
    },
    {
            "id": 2,
            "name": "samsung note 10",
            "color": "black",
            "price": 70000,
            "category": "mobile",
            "brand": "samsung",
            "photo": "https://bit.ly/3NLI2wX"
    }
]
```



## Tech Stack

**Client:** React, Redux, Saga

**Server:** for the Database db.json file is created in using the JSON server.


## Installation

GitHub repository of React-Redux-Ecommerce App
```bash
https://github.com/airKing05/react-redux-eco.git
```

Install my-project with npm
```bash
  npm install my-project
  cd my-project
```

Install of Json server to connect the Database
```bash
npm install -g json-server  
```   