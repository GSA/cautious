# cautious
Cautious Utility Functions in JavaScript

# why?
We deal with a lot of dirty data. We have found ourselves rewriting a lot of the same null-checking and try-catching patterns because we can't guarantee that the data we are processing is clean.  Instead of rewriting again and again, lets write just once some convience functions with null-checking and try-catching inside of them and use those throughout our tech stack.

# when not to use this
Your data is clean and reliably sticks to a certain schema

# examples
## before
```
if (Array.isArray(languages) && language.length > 1) {
  console.log("languages are", languages)
}
```

## after
```
if (some(languages)) {
  console.log("languages are", languages)
}
```
