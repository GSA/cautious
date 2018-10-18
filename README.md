# cautious
(WIP) Cautious Utility Functions in JavaScript

# why?
We have found ourselves reusing a lot of the same null-checking and try-catching for function calls because we can't always guarantee that the data we are processing is clean.  This is especially useful for front-end web develompent because we don't want a site to crash because of a little dirty data.

# when not to use this
You probably don't need this library if you completely control the input data of your site and don't want your site to load if there's an error in the data

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
