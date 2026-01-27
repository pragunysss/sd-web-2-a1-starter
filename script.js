"use strict";

// Sample data - FIXED: Added missing comma after "Luke Skywalker"
const characters = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// Exercise 6 Data: Broken test data (Missing names)
const brokenCharacters = [
  { id: 11, age: 25 }, // Missing name
  { id: 12, name: "Mace Windu", age: 50 },
  { id: 13, age: 100 }, // Missing name
];

// Exercise 1: Print Character Names

console.log("--- Exercise 1 ---");
const namesList = document.getElementById("names-list");

characters.forEach((character) => {
  console.log(character.name);
  const li = document.createElement("li");
  li.textContent = character.name;
  namesList.appendChild(li);
});

// Exercise 2: Filter by Age (Under 40)

console.log("--- Exercise 2 ---");
const youngList = document.getElementById("young-characters-list");
const youngCharacters = characters.filter((char) => char.age < 40);

youngCharacters.forEach((character) => {

  console.log(character.name);
  const li = document.createElement("li");
  li.textContent = character.name;
  youngList.appendChild(li);
});


// Exercise 3 & 5: Reusable Function with Error Handling

console.log("--- Exercise 3 & 5 ---");

/* * This function handles Exercise 3 (Rendering) AND Exercise 5 (Error Handling)
*/
function renderCharacters(dataArray, listId, errorId) {
  const targetList = document.getElementById(listId);
  const errorContainer = errorId ? document.getElementById(errorId) : null;

  // Clear list before rendering
  targetList.innerHTML = "";
  if (errorContainer) errorContainer.innerHTML = "";

  dataArray.forEach((character) => {
    // EXERCISE 5 CHECK: Does the name property exist?
    if (character.name) {
      const li = document.createElement("li");
      li.textContent = character.name;
      targetList.appendChild(li);
    } else {
      // EXERCISE 5 ERROR HANDLING (took help from AI in this section as i was unable to do it by myself)
      const errorMessage = `Error: Character with ID ${character.id} is missing a name.`;
      console.error(errorMessage);

      if (errorContainer) {
        const errorDiv = document.createElement("div");
        errorDiv.textContent = errorMessage;
        errorDiv.className = "error-message"; 
        errorContainer.appendChild(errorDiv);
      }
    }
  });
}

// Run Exercise 3: Render the main list
renderCharacters(characters, "function-list", "error-messages");


// Exercise 4: Filter Function
console.log("--- Exercise 4 ---");

function filterAndRenderByAge(dataArray, ageThreshold) {
  // Filter the data
  const filteredData = dataArray.filter((char) => char.age < ageThreshold);
  
  // Render the filtered data
  renderCharacters(filteredData, "age-filter-list", null);
}

// Run Exercise 4: Filter under 30
filterAndRenderByAge(characters, 30);


// Exercise 6: Test Error Handling
console.log("--- Exercise 6 ---");
renderCharacters(brokenCharacters, "broken-array-list", "broken-array-errors");