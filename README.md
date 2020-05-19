## Run it locally

To use this locally, download the repository into your local machine and run `npm install` in the terminal. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Runs cypress tests locally.

## Link to Heroku

https://hatch-coding-assignment.herokuapp.com/

There might be a delay when opeing this link since Heroku takes some time to load up the application when not used for a while. There are slight differences in the app running on Heroku vs the one on master.

## Using the app

There is one login with the email: fake@email.com The password is: password. Otherwise you can create your own account by signing up. The accounts create wont last if you reload the app since they are not stored in a backend. In the app you can sort the candidates but clicking the header on how to sort it. You can open up a page for a specific candidate by clicking the candidate in the table.

## Coding Decisions

I used React router to create different pages for the application. I used a table to display the information in as intuitive way as possible with choosing the sorting in the header and opening a page for the candidate inside the table as well. I created a fake object for the login/signup authorization to similuate a functional backend. I created a function that does the sorting for all the headers although in the real world sorting should be done in the backend. I used Cypress to create a basic test for the application to verify its functionality. I deployed it on Heroku since its a free service for this small type of application.

