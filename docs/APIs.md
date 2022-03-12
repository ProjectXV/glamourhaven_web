# Glamour Haven Backend API

## Authentication
 - Method: Token Authentication
 
### Sample authentication header
```bash
{
    header: "Authorization": Token b872187981298702870812080 ,
}
```

Note that this authorization method will be used for most requests in this collection. Each endpoint will require authentication and some might 
require authorization in order to access them.

### BASE URL:
Accessing online:

```sh
https://glamourhaven.herokuapp.com/glamourhaven
```
or accessing on localhost

```sh
http://localhost:8000/glamourhaven
```

- URLs to access all the necessary API end-points
- `<str:pk>` is a variable name for the unique identifier of the object you are trying to accesses
        and in this case it is the primary key
        
## Collections

## 1. POST /add-employee

This endpoint allows you add an employee.
**must be logged in to an account with a staff status...preferably the glamourhaven admin account**

Request Type: `POST`

Endpoint: `{baseUrl}/add-employee`

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`

## Sample request

How to update add an employee

### Request Body Params

```bash
{
    "user": {
        "email": "string",
        "username": "string",
        "password": "string"
    },
    "first_name": "string",
    "last_name": "string",
    "phone_number": "number",
    "national_id": "number",
    "profile_picture": "string",
    "specialization": "string"
}
```

## 2. GET /employees

This endpoint allows you to list all current employees.

Request Type: `GET`

Endpoint: `{baseUrl}/employees`

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`

## 3. GET /employees/{employee_id}

This endpoint allows you to view a specific employee.

Request Type: `GET`

Endpoint: `{baseUrl}/employees/{employee_id}`

### Path Parameters

Params| Description | Required
---------|----------|---------
 employee_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 4. PATCH /employees/{employee_id}

This endpoint allows you to update employee profile.
**must be logged in as the employee who owns the account**

Request Type: `PATCH`

Endpoint: `{baseUrl}/employees/{employee_id}/update-profile/`

### Path Parameters

Params| Description | Required
---------|----------|---------
 employee_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`  

## Sample request

How to update employee profile

### Request Body Params

```bash
{
    "user": {
        "email": "string",
    },
    "phone_number": "number",
    "profile_picture": "string",
}
```


## 5. PUT/PATCH/DELETE /employees/{employee_id}/manage-employee

This endpoint allows you to manage employee accounts.
**must be logged in as admin i.e an account with a staff status**

Request Type: `PUT/PATCH/DELETE`

Endpoint: `{baseUrl}/employees/{employee_id}/manage-employee/`

### Path Parameters

Params| Description | Required
---------|----------|---------
 employee_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}` 

## Sample request

How to manage an employee

### Request Body Params

```bash
{
    "id": "number",
    "profile_picture": "string",
    "first_name": "string",
    "last_name": "string",
    "phone_number": "string",
    "national_id": "string",
    "specialization": "string"
}
```

## 6. POST /signup

This endpoint allows you to create a new client.

Request Type: `POST`

Endpoint: `{baseUrl}/signup`

### Request Headers
    
Content-Type: `application/json`

## Sample request

How to manage an employee

### Request Body Params

```bash
{
    "user": {
      "email": "string",
      "username": "string",
      "password": "string"
    },
    "phone_number": "string",
    "is_subscribed": "boolean",
    "specialization": "string"
}
```


## 7. GET /clients

This endpoint allows you to list all clients.

Request Type: `GET`

Endpoint: `{baseUrl}/clients`

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`     


## 8. GET /clients/{client_id}

This endpoint allows you to view a specific client.

Request Type: `GET`

Endpoint: `{baseUrl}/clients/{client_id}`

### Path Parameters

Params| Description | Required
---------|----------|---------
 client_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 9. PUT/PATCH /client/{client_id}/update-profile

This endpoint allows you to update client profile.
**must be logged in as the account owner**

Request Type: `PUT/PATCH`

Endpoint: `{baseUrl}/client/{client_id}/update-profile`

### Path Parameters

Params| Description | Required
---------|----------|---------
 client_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`

## Sample request

How to manage an employee

### Request Body Params

```bash
{
    "user": {
        "username": "string",
        "email": "string"
    },
    "phone_number": "string",
    "is_subscribed": "boolean"
}
```


## 10. POST /activate-account/{uid}/{token}/

This endpoint allows you to update client profile.
**include the user id and the token as received from the email in the url as shown below**

Request Type: `POST`

Endpoint: `{baseUrl}/activate-account/{uid}/{token}/`

### Path Parameters

Params| Description | Required
---------|----------|---------
 uid | string | yes
 token | string | yes

### Request Headers
    
Content-Type: `application/json`

## Sample request

How to manage an employee

### Request Body Params

```bash
{
    "uid": "string",
    "token": "boolean"
}
```
 
 
## 11. POST /add-commodity/

This endpoint allows you to update client profile.
**must be logged in as admin**

Request Type: `POST`

Endpoint: `{baseUrl}/add-commodity/`

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`

## Sample request

How to manage an employee

### Request Body Params

```bash
{
    "commodity_name": "string",
    "category": "string",
    "description": "string",
    "price": "number",
    "pricing_unit": "number",
    "number_in_stock": "number",
    "commodity_main_image": "string",
    "commodity_extra_image1": "string",
    "commodity_extra_image2": "string"
}
```


## 12.GET /products/

This endpoint allows you to list all sale products in stock.

Request Type: `GET`

Endpoint: `{baseUrl}/products/`

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 13. GET products/{product_id}

This endpoint allows you to view a specific commodity.
**must be logged in as admin**

Request Type: `GET`

Endpoint: `{baseUrl}/products/{product_id}/`

Params| Description | Required
---------|----------|---------
 product_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 14. PUT/PATCH /commodity/{commodity_id}/update-commodity/

This endpoint allows you to update sale products.
**must be logged in as admin**

Request Type: `PUT/PATCH`

Endpoint: `{baseUrl}/commodity/{commodity_id}/update-commodity/`

Params| Description | Required
---------|----------|---------
 commodity_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`   


## 15. POST /add-service/

This endpoint allows you to add a new service.
**must be logged in as admin**

Request Type: `POST`

Endpoint: `{baseUrl}/add-service/`

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`   


## 16. GET /services/

This endpoint allows you to add a new service.

Request Type: `GET`

Endpoint: `{baseUrl}/services/`

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 17. GET /services/{service_id}/

This endpoint allows you to view a specific service.
**must be logged in as admin**

Request Type: `GET`

Endpoint: `{baseUrl}/services/{service_id}/`

Params| Description | Required
---------|----------|---------
 service_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 18. PUT/PATCH /services/{service_id}/

This endpoint allows you to update a service.
**must be logged in as admin**

Request Type: `PUT/PATCH`

Endpoint: `{baseUrl}/services/{service_id}/update-service/`

Params| Description | Required
---------|----------|---------
 service_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 19. POST /book-appointment/

This endpoint allows you to update a service.
**must be logged in as a client**

Request Type: `POST`

Endpoint: `{baseUrl}/book-appointment/`

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 20. GET /appointments/

This endpoint allows you to list all booked appointments.
**must be logged in as admin or employee**

Request Type: `GET`

Endpoint: `{baseUrl}/appointments/`

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 21. GET /appointments/{appointment_id}

This endpoint allows you to view a specific appointment.
**must be logged in as admin, employee or the client who booked the appointment**

Request Type: `GET`

Endpoint: `{baseUrl}/appointments/{appointment_id}`

Params| Description | Required
---------|----------|---------
 appointment_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 22. PUT/PATCH /appointments/{appointment_id}

This endpoint allows you to update a specific appointment.
**must be logged in as admin, employee or the client who booked the appointment**

Request Type: `PUT/PATCH`

Endpoint: `{baseUrl}/appointments/{appointment_id}`

Params| Description | Required
---------|----------|---------
 appointment_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 23. POST /client-contact/

This endpoint allows you to send an email to admin.

Request Type: `PUT/PATCH`

Endpoint: `{baseUrl}/client-contact/`

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 24. POST /login

This endpoint allows you to acquire an expiring auth token (login).

Request Type: `POST`

Endpoint: `{baseUrl}/login`

### Request Headers
    
Content-Type: `application/json`


## 25. POST /lnm-pay/

This endpoint allows you to send an email to admin.
**must be logged in as a client**

Request Type: `POST`

Endpoint: `{baseUrl}/lnm-pay/`

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 26. POST /submit-order/

This endpoint allows you to submit an order.
**must be logged in as a client**

Request Type: `POST`

Endpoint: `{baseUrl}/submit-order/`

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 27. GET /lnm-orders/

This endpoint allows you to submit an order.
**must be logged in as admin**

Request Type: `GET`

Endpoint: `{baseUrl}/lnm-orders/`

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 28. GET /lnmorders/{order_id}/

This endpoint allows you to submit an order.
**must be logged in as admin or the client who placed that specific order**

Request Type: `GET`

Endpoint: `{baseUrl}/lnmorders/{order_id}/`

Params| Description | Required
---------|----------|---------
 order_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 29. GET /client-lnmorders/{client_id}/

This endpoint allows you to view all of a specific client's orders.
**must be logged in as admin or the client who placed the orders**

Request Type: `GET`

Endpoint: `{baseUrl}/client-lnmorders/{client_id}/`

Params| Description | Required
---------|----------|---------
 client_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`


## 30. GET client-appointments/{client_id}/

This endpoint allows you to view all of a specific client's appointments.
**must be logged in as admin or the client who  booked the appointments**

Request Type: `GET`

Endpoint: `{baseUrl}/client-appointments/{client_id}/`

Params| Description | Required
---------|----------|---------
 client_id | string | yes

### Request Headers
    
Content-Type: `application/json`
    
Authorization: `Token ${token}`
