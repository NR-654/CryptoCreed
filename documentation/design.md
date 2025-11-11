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
