### WELCOME TO THE DOC (Author: **a.emmanuel2@yahoo.com**)

This API gives you access to pretty much all the features you can use on mobile and web and lets you extend them for use in your application. It strives to be RESTful and is organized around the main resources you would be interacting with - with a few notable exceptions.

In this section, you'll find guides, resources and references.

**Error Codes**
___

Here is a comprehensive breakdown of all client and server-side errors that can occur during usage.

Error   | Error Message | Response Code | Description  |
---------- | :--------- | :--------- | :--------- |
internal server error| Server Error| 500 | This happens when the server could not return any of the above error


**Common HTTP Response Code From This API**

As stated earlier, this API is RESTful and as such, uses conventional HTTP response codes to indicate the success or failure of requests.

Codes   | Description  |
---------- | :--------- |
200, 201   | Request was successful and intended action was carried out
400   | A validation or client-side error occurred and the request was not fulfilled.
404   | Request could not be fulfilled as the requested resource does not exist.
500, 501, 502, 503, 504   | Request could not be fulfilled due to an error on our API's end.


#### Keys

**success** (*boolean* ) | This indicates the outcome of the intended action that was carried out

**message** (*string*) | This indicates the description of the outcome of the intended action that was carried out

**data** (*array of object*) | This indicates the **payload** returned

**count** (*integer*) | This indicates the number of items returned in the payload



#### Quick Start
___

##### **Food Specs**
The Food Specs API allows you to do the following:
- Search for foods by their specifications and also order price in asc or desc order


**name:** Search Foods by Specs
**method:** Get
**end point:** {{base_url}}/api/v1/fooospecs

Request Headers   |  Value |
---------- | :--------- |
Accept |  application/json
Content-Type |  application/json

Query Param   | Type| Description |
---------- | :--------- |:--------- |
specifications (*optional*) | string | This indicates the search criteria which is a comma separated list of key value pairs. For example, `specifications=vetegan,low-carbs,`
order (*optional*) | string | This is the order in which the results are returned. It can be either `asc` or `desc`

**Sample Request**
```
{{base_url}}/api/v1/foodspecs?specifications=low-carb,vegan&order=desc
```

**Sample Response**
```
{
    "success": true,
    "message": 'Foods retrieved successfully',
    "count": 15,
    "data": [
        {
            "_id": "627d33017da0866a9391ff2a",
            "name": "Sopa de morango",
            "price": 33.34,
            "specifications": [
                "vegan",
                "lactose-free",
                "low-carb",
                "gluten-free"
            ],
            "createdAt": "2022-05-12T16:17:05.163Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff20",
            "name": "0e1psulas de castanha do par4",
            "price": 32.59,
            "specifications": [
                "vegan",
                "sugar-free"
            ],
            "createdAt": "2022-05-12T16:17:05.159Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff1a",
            "name": "Chips de milho",
            "price": 32.24,
            "specifications": [
                "low-carb",
                "vegan",
                "gluten-free",
                "vegetarian",
                "lactose-free"
            ],
            "createdAt": "2022-05-12T16:17:05.151Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff19",
            "name": "rice de castanha do beans",
            "price": 27.37,
            "specifications": [
                "lactose-free",
                "low-carb"
            ],
            "createdAt": "2022-05-12T16:17:05.150Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff27",
            "name": "Salgadinho de milho",
            "price": 25.1,
            "specifications": [
                "vegan",
                "lactose-free",
                "vegetarian",
                "low-carb"
            ],
            "createdAt": "2022-05-12T16:17:05.162Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff1b",
            "name": "wwrss de morango",
            "price": 24.29,
            "specifications": [
                "low-carb"
            ],
            "createdAt": "2022-05-12T16:17:05.151Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff24",
            "name": "Sopa de lio",
            "price": 20.79,
            "specifications": [
                "low-carb",
                "sugar-free",
                "vegan",
                "lactose-free"
            ],
            "createdAt": "2022-05-12T16:17:05.160Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff22",
            "name": "Salgadinho de morango",
            "price": 16.12,
            "specifications": [
                "gluten-free",
                "low-carb",
                "lactose-free",
                "sugar-free"
            ],
            "createdAt": "2022-05-12T16:17:05.160Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff21",
            "name": "Barrinhas de mandioquinha",
            "price": 14.41,
            "specifications": [
                "vegan",
                "low-carb",
                "sugar-free"
            ],
            "createdAt": "2022-05-12T16:17:05.159Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff1e",
            "name": "Chips de morango",
            "price": 13.83,
            "specifications": [
                "gluten-free",
                "low-carb"
            ],
            "createdAt": "2022-05-12T16:17:05.153Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff18",
            "name": "Sopa de castanha do eggs",
            "price": 9.82,
            "specifications": [
                "low-carb"
            ],
            "createdAt": "2022-05-12T16:17:05.150Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff1c",
            "name": "6rdhgf de milho",
            "price": 9.16,
            "specifications": [
                "lactose-free",
                "gluten-free",
                "sugar-free",
                "vegan",
                "vegetarian"
            ],
            "createdAt": "2022-05-12T16:17:05.152Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff1d",
            "name": "Sopa de milho",
            "price": 7.4,
            "specifications": [
                "vegan",
                "gluten-free",
                "vegetarian",
                "low-carb",
                "lactose-free"
            ],
            "createdAt": "2022-05-12T16:17:05.152Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff23",
            "name": "psulas de milho",
            "price": 7.36,
            "specifications": [
                "vegan",
                "vegetarian",
                "sugar-free"
            ],
            "createdAt": "2022-05-12T16:17:05.160Z",
            "__v": 0
        },
        {
            "_id": "627d33017da0866a9391ff2b",
            "name": "Barrinhas de dod",
            "price": 5.9,
            "specifications": [
                "lactose-free",
                "vegan"
            ],
            "createdAt": "2022-05-12T16:17:05.163Z",
            "__v": 0
        }
    ]
}
```

### Pre-requisites
- Node.js
- Express.js
- MongoDB
- Mongoose

### Setup / Installation
- Clone this repo
- cd into config folder
- Touch a new file in the config folder and name it config.env (config/config.env)
- Copy the contents in config/config.env.example file and paste it in config/config.env
- Set your env variables
- cd into tests folder
- Go to line 7 in Food.test.js and replace the file path with the path on your machine
- run ```npm install``` to install all the required dependencies
- run ```npm run dev``` to start the server
- run ```npm run test``` to run the test cases
- run ```node seeder -i``` to insert fake records into database
- run ```node seeder -d``` to destroy fake records from db
- run ```node seeder -c``` if you are not sure whether data are in already in db
# IpFinder
