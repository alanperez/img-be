# Backend

 - Requires
  - MySQL local database
  - Cloudinary account


# Project
  - `yarn` to install dependencies
  - `knex migrate:latest` to migrate database
  - `knex seed:run` to seed the database
  - `yarn dev` to run the server

  - User Model
    ```
      username - string
      password - string(hashed)
    ```
  - Image Model
    ```
      user_id - int
      image_url - string
      tag - string
    ```

# Features
  - User

    - Registration & Login
    - Upload Single Image
    - Delete Images
# Technologies

| Method | Endpoint                  | Access Control | Description                                           |
| ------ | ------------------------- | -------------- | ----------------------------------------------------- |
| GET    | `/images`              | public         | Returns the information for images.             |
| GET    | `/images/:id`              | public         | Returns Specific Image             |
| GET    | `/images/view/:id`          | User         | Retrieves list of images that a user has posted. |
| DELETE | `/images/:id`          | Users         | Delete their own image                                     |

#### Problem Routes

| Method | Endpoint               | Access Control | Description                                             |
| ------ | ---------------------- | -------------- | ------------------------------------------------------- |
| GET    | `/view/image/id`            | Users      | Returns info of a specific image                        |
| GET    | `/view/uploaded-images`         | Users      | Returns own info of all images uploaded           
| POST   | `/users/login` | Public      | Public can login           |
| POST   | `/users/register`        | public      | Public can register an acc.           |
| POST   | `/users/image/upload`        | Users     | Users can login           |


# Env  
```
 
  DB_HOST=127.0.0.1
  NAME_DB=shopifybe
  DB_USER=user
  DB_PASS=password
  DB_PORT=3306
  JWT_SECRET="dasdsada"

  CLOUD_NAME = 
  API_KEY= 
  API_SECRET=
  ```


# To-Do
 - Build Frontend
 - Implement Multiple Images Upload / Delete Multiple instead one by one

