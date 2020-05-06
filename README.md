# Cautious
Cautious contains utility functions written in javascript.

# Purpose
We deal with a lot of dirty data. We find ourselves rewriting a lot of the same null-checking and try-catching patterns because we can't guarantee that the data we are processing is clean.  Instead of rewriting again and again, we wrote some convenience functions with null-checking and try-catching inside of them and use those throughout our tech stack.

# When not to use this
Your data is clean and reliably sticks to a certain schema

# Examples
## Before
```
if (Array.isArray(languages) && language.length > 1) {
  console.log("languages are", languages)
}
```

## After
```
if (some(languages)) {
  console.log("languages are", languages)
}
```
