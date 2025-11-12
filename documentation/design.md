# ✅ 1. How We Improved the Design of the Software

## ✅ 1.1 Modularized UI Components
Earlier, components were long and contained mixed UI + logic.

### Improvements:
- Split large pages into smaller reusable components  
- Each component now does only **one job**  
- Removed code duplication and unnecessary `<br/>` elements

✅ Result: Cleaner UI structure + easier future modifications

---

## ✅ 1.2 Centralized Global State via CryptoContext
Instead of passing props everywhere, we now use:

to manage:
- currency  
- symbol  
- coins list  
- alerts  

✅ Result: No prop-drilling  
✅ Improves maintainability & consistency  
✅ Enables cleaner architecture  

---

## ✅ 1.3 Added Automated Test Coverage
Before, there were **0 automated tests**.  
Now we added:

- Signup tests  
- CoinTable tests  
- News tests  
- Firebase mocks  
- Axios mocks  
- Router mocks  

This directly improves software design because:
- Components must be deterministic  
- Side effects must be isolated  
- API calls must be mockable  

✅ Result: Highly testable and stable codebase

---

## ✅ 1.4 Cleaned Unused Code & Dependencies
- Removed unused imports  
- Fixed structure in `HomePage.js`  
- Ensured consistent directory structure  

✅ Result: Cleaner project architecture

---
# ✅ 2. Design Pattern Used

## ✅ 2.1 SOLID Principles

**S — Single Responsibility**  
Each component has one clear job:  
`Signup.js` (user signup) • `CoinTable.js` (crypto list) • `News.js` (news fetch) • `CryptoContext.js` (global state).  
➡️ Improves clarity & reduces bugs.

**O — Open/Closed**  
Components are open for new features (e.g., sorting, compare coins) but closed for modifying core logic.  
➡️ Easier feature expansion.

**L — Liskov Substitution**  
Mocks can replace real components (e.g., mocked Firebase, Axios, News) without breaking tests.  
➡️ Ensures flexibility in testing.

**I — Interface Segregation**  
Context removes the need for large prop chains.  
➡️ Each component only uses what it needs.

**D — Dependency Inversion**  
Components rely on abstractions (Context, mocks) not implementations (real APIs).  
➡️ Enables modular, testable design.

## ✅ 2.2 Context Pattern
`CryptoContext.js` uses React Context to share global state across components.

✅ Eliminates prop drilling  
✅ Centralizes global logic  

---

## ✅ 2.3 Observer Pattern (state updates)
React state & context cause UI to automatically update when:

- currency changes  
- coins list updates  
- user logs in/out  

✅ Natural implementation of Observer Pattern through React  

---

## ✅ 2.4 Factory Pattern (in testing)
Mocks act like factories that create fake Firebase & Axios objects.

``
jest.mock("firebase/auth", () => ({
  createUserWithEmailAndPassword: jest.fn()
}));``

---

# ✅ 3. Key Refactoring Done to Improve Design

✅ 3.1 Moved API Calls Out of Components  
API logic originally lived inside UI components.  
We moved all stateful logic into **CryptoContext**.  

✅ Cleaner UI  
✅ Stronger separation  
✅ Better testability  

---

✅ 3.2 MUI Input Extraction Helper Added  
Material UI labels are not simple `<label>` elements,  
so a helper was added in tests to reliably get input fields.  

✅ More stable component tests  

---

✅ 3.3 HomePage Layout Refactored  
Earlier `HomePage` used inline JSX and multiple `<br />` tags.  

Refactoring done:  
- Cleaned layout  
- Removed redundant HTML  
- Improved readability  

✅ Better UI structure  

---

✅ 3.4 Refactor: UserData Component  
- Added **useEffect()** to dynamically fetch user data from Firestore  
- Used `getDocs` and `deleteDoc` for real-time updates  
- Implemented **search filter** for name & email  
- Ensured UI consistency after deletion  

✅ Result: More efficient, readable, and maintainable code

---
