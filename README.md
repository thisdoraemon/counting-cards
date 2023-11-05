# Card Counting Function

This simple JavaScript function allows you to implement card counting for a card game. Card counting is a technique often used in blackjack to keep track of the ratio of high-value cards to low-value cards in a deck, which can help players make informed betting decisions.

## Usage
The `cc` function takes a single argument, card, which represents the value of a playing card. It updates the count based on the card value and returns a string indicating the current count and whether to "Bet" or "Hold."

Here's how the function works:
- If the card value is 2, 3, 4, 5, or 6, the function increments the count by 1.
- If the card value is 10, 'J' (Jack), 'Q' (Queen), 'K' (King), or 'A' (Ace), the function decrements the count by 1.
- For any other card values, the count remains unchanged.
- The function returns a string in the format: <count> <Bet/Hold>, where <count> represents the current count, and <Bet/Hold> indicates whether it's a good time to bet or hold based on the count. If the count is greater than 0, it returns "Bet"; otherwise, it returns "Hold."

## Example
```javascript
const cc = require('./your-cc-file'); // Replace with the actual file path to your cc function

console.log(cc(2));  // Output: "1 Bet"
console.log(cc(10)); // Output: "-1 Hold"
console.log(cc('J')); // Output: "-2 Hold"
```

## Credit
The card counting function in this project is based on the "Card Counting" lesson from FreeCodeCamp's JavaScript Data Structures and Algorithms course. You can find the lesson [here](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures).
