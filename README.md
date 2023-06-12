# SignupAssessment

## Running the application

- Development: You can run `npm start` to start the application in development mode. The application can be found on `http://localhost:4200/` and will automatically reload if you change any of the source files.
- Production: You can visit `https://signup-assessment.web.app` to view SignUp Assessment hosted on Firebase.

## Testing

- `npm test` will execute the unit tests.
- `npm run test:coverage` will provide the coverage report in the `coverage/` directory.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Architecture Decisions

- I opted to include Angular Material for this assessment as it gave access to ready made CSS for the Navbar, buttons, inputs, etc.
- I chose to use `Validators.pattern` in place of the built in Angular `Validators.email` due to it allowing email addresses like `michael@email`. The pattern I implemented enforces a, for example, `.com` to follow the `michael@email`.
- Although the form captures the user's password, since the example in the PDF did not include it, I did not send it in the POST.
- In the `password.validator.ts` I chose to use negative testing with `if` statements returning `null` to avoid a complex one-line ternary operator to drive whether an error appears or not. I felt this makes the code a bit more readable.

## Improvements

- When the submit button on the form is pressed, I would like to add a loading spinner to the button and disable it to indicate something is happening instead of the current solution. The reason this was not added in was the out of the box solution from Material wasn't suited to be inside of a button and would require some custom CSS. I thought my time would be better spent on other areas than smaller CSS details.
- The API_BASE_URL would be moved to environment variables, this would ensure that for different environments like local, staging, uat, production, etc would be able to have dynamic base urls.
- Add a debounce to the form inputs so they don't validate immediately. For example, typing into the password field will straight away throw the error message for minimum of 8 characters required. An improvement would be validating on blur or else adding time before validating.
- On submission, the form is reset and the inputs turn red. This is incorrect due to `signUpForm` containing `required` errors in each of the form controls, even though the form itself is pristine.
- The only integration test is testing the on click for the button in the sign up spec. I would like to add a few more, as well as automation testing with Cypress or another framework.
