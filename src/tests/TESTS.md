✅ Test Cases Summary – Crypto-Creed Project

This folder contains the automated unit & component test cases written using Jest and React Testing Library.
The tests cover core user-facing features and ensure that critical components behave correctly.

✅ 1. Signup Component Tests (Signup.test.js)
✅ Covered Functionalities
Test	What It Validates
Renders form fields	Ensures Name, Email, Password, Confirm Password, and button appear
Empty field validation	Validate error logic when user submits without filling fields
Successful signup	Tests Firebase mock call + validates success behavior
Firebase mocks	createUserWithEmailAndPassword, addDoc mocked to avoid real backend calls

✅ Key Concepts Used
React Testing Library render, fireEvent
Mocking Firebase Authentication + Firestore
Mocking CryptoContext state
MUI input extraction helper

✅ 2. CoinTable Component Tests (CoinTable.test.js)
✅ Covered Functionalities
Test	What It Validates
Table renders correctly	Header + search bar appear
Search filter works	Filtering crypto coins by search value
Row click navigation	Ensures clicking a row triggers history.push() navigation
Axios API mock	Prevents real API calls from CoinGecko
✅ Key Concepts Used
Mocking Axios API calls
Mocking React Router useHistory() to capture push()
Mocking CryptoContext provider data
Mocking News Component (to avoid nested API calls)

✅ 3. News Component Tests (News.test.js)
✅ Covered Functionalities
Test	What It Validates
Loader appears initially	Verifies loading indicator when fetching news
News cards render	Ensures fetched API data is displayed correctly
✅ Key Concepts Used
Axios mock response
await findBy...() waiting for UI updates
Preventing real network requests
