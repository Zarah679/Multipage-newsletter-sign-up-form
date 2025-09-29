# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- **Vanilla JavaScript** for form validation &interactivity  
- Mobile-first workflow 


### What I learned

Working on this project helped me practice:  
- Client-side form validation using JavaScript  
- Showing and hiding elements dynamically  
- Creating responsive layouts with CSS Grid/Flexbox  
- Managing a "success state" page transition  

Example snippet of my JavaScript validation logic:  

```js
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    // show error message
  } else {
    // redirect to success page
  }
});

### Continued development

In future projects, I want to focus more on:

-Improving accessibility (aria labels, focus states, screen reader support)

-Adding animations for smoother page transitions

-Experimenting with localStorage to remember user input

### Useful resources

MDN Web Docs - Form Validation
 – Helped me understand validation techniques

CSS Tricks - Flexbox Guide
 – Useful reference while building layouts

## Author

- Website - [Zarah Sada](https://www.your-site.com)
- Frontend Mentor - [@Zarah679](https://www.frontendmentor.io/profile/Zarah679)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
