# CRUD Ops with React.js

### by F Njakai

[LinkedIn][def]|[Github][def2]

<img src="./src/assets/screenshot_0" alt="project-screenshot"/>

Create a [simple app][def3] that demontrates CRUD operations using 
* [Vite][def4] + [React][def5]
* [Axios][def6]
* [Semantic UI][def7]
* [Mock API][def8]

### CRUD Operations
`C`reate `R`ead `U`pdate `D`elete
These terms describe the four essential operations for creating and managing persistent data elements. Persistent data exists after the process that created it ends. 

This example is a landing page that is hooked to an instance of `Mock API`. Users can create, edit or delete a user. Also, users can view the list of users created.

Here is a summary of what each term is, its coresponding HTTP request and SQL function

||Operation|What it does|HTTP|SQL|
|:---:|:---:|:---:|:---:|:---:|
|C|Create|adds a new record/document to database|POST|INSERT|
|R|Read|returns records/documents from database table/collection/bucket based on specified criteria|GET|SELECT|
|U|Update|modifies existing records/documents in database based on specified criteria|PUT|UPDATE|
|D|Delete|remove one, some or all records/documents from database|DELETE|DELETE|

### MVC
`M`odel `V`iew `C`ontroller: an architectural pattern. In MVC, an application is separated into three main logical parts: the model, view, and controller. Each part is built to handle specific development aspects of an application.

The Model corresponds to all the logic related to data. This is the data being transferred between any combination of the three parts (e.g. between the View and Controller). In this example, data and schema on `Mock API` are the model.

The View component is for all the UI logic of the application, that is, what the user actually sees. `App.jsx`, and the `CSS` files by extension, make the view in this example.

The Controller is an intermediary; it processes all the incoming requests, manipulates data using the Model and interacts with the View to render output. In this example, the components  under `components` are the model.

#### MVC in chart format

<img src="./src/assets/mvc_process" alt="process-mvc"/>

_User_ uses _Controller_ to manipulate _Model_ that updates _View_ (using _Controller_) which is what _User_ sees


[def]: https://www.linkedin.com/in/fnjakai
[def2]: https://www.github.com/brk-a
[def3]: https://simple-crud-ops.vercel.app
[def4]: https://vitejs.dev/
[def5]: https://react.dev/
[def6]: https://axios-http.com/docs/intro
[def7]: https://semantic-ui.com/
[def8]: https://mockapi.io