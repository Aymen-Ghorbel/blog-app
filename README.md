# BlogApp

The goal is to build a simple blog application that have three pages:

### 1. The blogs list page:

- Displays a list of blogs previews
- Each blog has a title, content, author, an upvote and downvote buttons.
- Each blog has ‘continue reading’ link that redirect to the detailed blog page.
- For each blog, the style is determined by the upvote/downvote ratio.
(The blog preview’s border appears Blue if the upvotes are more than the downvotes and Red otherwise)
- Full text search filter for the blog’s content/title/author
![Home](https://user-images.githubusercontent.com/58705400/222916086-775e8e48-9cf5-4d61-8364-7223acfc3b8c.png)

### 2. Form for adding blogs:

- Contains a reactive form for adding blogs.
![New](https://user-images.githubusercontent.com/58705400/222916290-78c6e36d-650d-4c1c-95ba-985af042afd6.png)

### 3. Blog details page: 
Contains the same items as the blogs preview with a full content. 
![Details](https://user-images.githubusercontent.com/58705400/222916339-21dfc5b9-ffc9-4edd-affc-4935be86ecfa.png)

### Back-End
For the Back-End, I built a simple FastAPI server that has three main endpoints:

- Add blog: inserts a given blog in MongoDB database.
- Fetch blogs: fetches all the blogs in the MongoDB database.
- Fetch blog by id: fetches a blog by id from the MongoDB Database.

Source Code: [https://github.com/Aymen-Ghorbel/py-mongo]


## Version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
