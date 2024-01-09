
//asyncHandler.js


const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler }



// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }


// ```

// // Yeh ek function hai jise asyncHandler naam se define kiya gaya hai.
// const asyncHandler = (requestHandler) => {
//     // Yeh ek aur function hai jo (req, res, next) parameters lekar return hota hai.
//     return (req, res, next) => {
//         // Yeh ek Promise hai, jisme resolve hokar requestHandler function ko call kiya jata hai.
//         Promise.resolve(requestHandler(req, res, next))
//             // Agar koi error aata hai toh catch block me jaake next(err) ko call karta hai.
//             .catch((err) => next(err))
//     }
// }

// // asyncHandler function ko export kiya gaya hai.
// export { asyncHandler }

// ```



/* Ab main ise kuch steps mein explain karunga:

1. `asyncHandler` ek function hai jo ek argument `requestHandler` le leta hai.
2. Is function ka kaam ek naya function return karna hai, jo `(req, res, next)` parameters lekar hota hai.
3. Is returned function mein, `Promise.resolve()` ke zariye `requestHandler(req, res, next)` ko call kiya jata hai. Yeh ensure karta hai ki `requestHandler` ek Promise return karta hai ya nahi.
4. Agar Promise resolve hoti hai, toh sab kuch theek hai. Agar koi error aata hai, toh `catch` block me jaake `next(err)` ko call kiya jata hai.
5. Is entire logic ka purpose asynchronous code ko handle karna hai, jisse agar koi promise reject hoti hai toh woh error sahi tareeke se handle ho sake.

Is code ka use kisi route handler ya middleware mein hota hai jisme async operations kiya jaa rahe hain. `asyncHandler` ka use karte hue, errors sahi tareeke se handle ho sakte hain. */