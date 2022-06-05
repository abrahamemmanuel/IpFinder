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

##### **Posts**
The Posts API allows you to do the following:
- Find IP Location with a given IP address in the fake database
- Add a new IP address to the fake database

##### **'NOTE: IP to geolocation lookup for domain or service name is not supported on my free subscription account. This feature is available to all paid subscriptions only, that means you can only find or add IP location by IP address not domain name**


**name:** Find or add IP location
**method:** POST
**end point:** {{base_url}}/api/v1/geolocations/find-add

Request Headers   |  Value |
---------- | :--------- |
Accept |  application/json
Content-Type |  application/json

Body Param   | Type| Description |
---------- | :--------- |:--------- |
ip_address (*required*) | string | IP address to be added to the fake database or to be used for lookup


**name:** Get All Active IP Locations in the fake database
**method:** GET
**end point:** {{base_url}}/api/v1/geolocations/active-ips

Request Headers   |  Value |
---------- | :--------- |
Accept |  application/json
Content-Type |  application/json


**name:** Get Single Active IP Locations in the fake database
**method:** GET
**end point:** {{base_url}}/api/v1/geolocations/active-ips/:id

Request Headers   |  Value |
---------- | :--------- |
Accept |  application/json
Content-Type |  application/json



**name:** - Update the info of the IPLocation by id in the fake database
**method:** PUT
**end point:** {{base_url}}/api/v1/geolocations/active-ips/:id

Request Headers   |  Value |
---------- | :--------- |
Accept |  application/json
Content-Type |  application/json


**name:** - Renders an object inactive
**method:** DELETE
**end point:** {{base_url}}/api/v1/geolocations/active-ips/:id

Request Headers   |  Value |
---------- | :--------- |
Accept |  application/json
Content-Type |  application/json


### Pre-requisites
- Node.js
- Express.js

### Setup / Installation
- Clone this repo
- cd into config folder
- Touch a new file in the config folder and name it config.env (config/config.env)
- Copy the contents in config/config.env.example file and paste it in config/config.env
- Set your env variables in the config.env file
- run ```npm install``` to install all the required dependencies
- run ```npm run dev``` to start the server
- To empty fake database set the array in the DatabaseFactory/geolocations.js file to empty array