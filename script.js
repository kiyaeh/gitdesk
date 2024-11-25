// Select the button and heading elements
const button = document.getElementById("changeTextBtn");
const heading = document.getElementById("heading");

// Add a click event listener to the button
button.addEventListener("click", () => {
  heading.textContent = "You clicked the button!";
  heading.style.color = "darkred";
});
