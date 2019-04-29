# rest-api


| Route            | HTTP   | Headers                              | Body                                                    | Description                              | Response Success                                             | Response Error    |
| :--------------- | :----- | :----------------------------------- | ------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------ | ----------------- |
| `/api/todos`     | GET    | Valid JWT Token                      | None                                                    | Get all user's todos                     | Show all the todo list in `array of object` :<br/> [{ id: Integer,title: String,description:String}] with status code 200 | Status code : 400 |
| `/api/todos/:id` | GET    | Valid JWT Token                      | None                                                    | Get a single todo (Owner only)           | Show specific the todo list in as` object` :<br/> { id: Integer,title: String,description:String} with status code 200 | Status code : 400 |
| `/api/todos`     | POST   | Valid JWT Token, Authorization Token | Title:String(required)<br>Description:String(required)  | Create a todo (Authenticated users only) | Show created todo list in as` object` :<br/> { id: Integer,title: String,description:String} with status code 201 | Status code : 400 |
| `/api/todos/:id` | DELETE | Valid JWT Token, Authorization Token | None                                                    | Delete a todo (Owner only)               |                                                              | Status code : 400 |
| `/api/todos/:id` | PUT    | Valid JWT Token, Authorization Token | Title:String(required)<br/>Description:String(required) | Update a todo with new info (Owner only) | Show updated todo list in as` object` :<br/> { id: Integer,title: String,description:String} with status code 200 | Status code : 400 |
| `/api/todos/:id` | PATCH  | Valid JWT Token, Authorization Token | Title:String(required)<br/>Description:String(required) | Update a todo with new info (Owner only) | Show updated todo list in as` object` :<br/> { id: Integer,title: String,description:String} with status code 200 | Status code : 400 |



<br/><br/>
### User Routes
| Route           | HTTP | Headers | Body                                                       | Description  | Response Success                                             | Response Error    |
| :-------------- | :--- | :------ | ---------------------------------------------------------- | ------------ | ------------------------------------------------------------ | ----------------- |
| `/api/signin` | POST | None    | Username:String(required)<br>Description:String(required)  | Sign in user | Show all the todo list in an `object` :<br/> { msg: String,token:string } with status code 200 | Status code : 400 |
| `/api/signup` | POST | None    | Username:String(required)<br/>Description:String(required) | Sign up user | Show specific the todo list in as ` object` :<br/> { id: Integer,title: String,description:String} with status code 201 | Status code : 400 |
