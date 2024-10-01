// Assume the JSON data is already loaded into the `jsonData` variable
let jsonData; // Declare a variable to hold the JSON data.

// Load the JSON data from a file using the fetch API
fetch('./bharatpe.json')
    .then(response => {
        // Check if the response was successful
        if (!response.ok) {
            // If not, throw an error
            throw new Error('Network response was not ok');
        }
        // Parse the response as JSON
        return response.json();
    })
    .then(data => {
        // Once the data is fetched, assign it to the jsonData variable
        jsonData = data;
        // Log the data to the console for debugging purposes
        console.log(jsonData);
        // Call the function to create dropdown menus from the product data
        createDropdowns(jsonData.BharatPe.Products);
    })
    .catch(error => {
        // If there was an error during the fetch operation, log it to the console
        console.error('There was a problem with the fetch operation:', error);
    });

// Function to create dropdown menus
function createDropdowns(obj, parentKey = '') {
    // Check if the input obj is an object and not null
    if (typeof obj !== 'object' || obj === null) {
        return; // Exit if it's not a valid object
    }

    // Get the container where dropdowns will be added
    const dropdownsContainer = document.getElementById('dropdowns');
    // Extract keys from the object
    const keys = Object.keys(obj);

    // Create a new select element (dropdown)
    const select = document.createElement('select');
    // Set a data attribute to track the parent key
    select.setAttribute('data-parent', parentKey);
    // Create a default option for the dropdown
    const defaultOption = document.createElement('option');
    defaultOption.textContent = `Select an option in ${parentKey || 'Root'}`;
    defaultOption.value = '';
    select.appendChild(defaultOption); // Add the default option to the dropdown

    // Loop through the keys of the object to create options
    keys.forEach(key => {
        const value = obj[key]; // Get the value associated with the key
        const option = document.createElement('option');
        option.value = key; // Set the value of the option
        option.textContent = key; // Set the displayed text of the option
        select.appendChild(option); // Add the option to the dropdown
    });

    // Add an event listener to handle changes in the dropdown
    select.addEventListener('change', () => {
        const selectedValue = select.value; // Get the selected value
        if (selectedValue) {
            const nextObj = obj[selectedValue]; // Get the next object based on selection
            clearDropdowns(dropdownsContainer, select); // Clear previous dropdowns
            createDropdowns(nextObj, selectedValue); // Create new dropdowns
            displayDetails(nextObj, selectedValue); // Display details for the selected item
        } else {
            clearDropdowns(dropdownsContainer, select); // Clear dropdowns if no selection
            document.getElementById('output').innerHTML = ''; // Clear the output area
        }
    });

    // Add the dropdown to the container in the DOM
    dropdownsContainer.appendChild(select);
}

// Function to clear previously created dropdowns
function clearDropdowns(container, currentSelect) {
    let next = currentSelect.nextElementSibling; // Get the next sibling element
    while (next) {
        // Remove the next dropdown from the container
        container.removeChild(next);
        next = currentSelect.nextElementSibling; // Move to the next sibling
    }
}

// Function to display details of the selected option
function displayDetails(optionData, optionName) {
    let output = `<h3>Details for ${optionName}:</h3>`; // Create a header for the details
    if (typeof optionData === 'object' && optionData !== null) {
        // If optionData is an object, format it for display
        output += formatObject(optionData);
    } else {
        // Otherwise, just display the value
        output += optionData;
    }
    // Update the output area in the DOM with the details
    document.getElementById('output').innerHTML = output;
}

// Function to format an object for display
function formatObject(obj, indent = '') {
    let output = ''; // Initialize an output string
    for (const key in obj) { // Loop through each key in the object
        if (Array.isArray(obj[key])) { // Check if the value is an array
            output += `${indent}<strong>${key}:</strong><ul>`; // Start a list for array items
            obj[key].forEach(item => {
                output += `<li>${item}</li>`; // Add each item as a list element
            });
            output += `</ul>`; // Close the list
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            // If the value is another object, call formatObject recursively
            output += `${indent}<strong>${key}:</strong><br>`;
            output += formatObject(obj[key], indent + '&nbsp;&nbsp;'); // Indent for nested objects
        } else {
            // For simple key-value pairs, display them directly
            output += `${indent}<strong>${key}:</strong> ${obj[key]}<br>`;
        }
    }
    return output; // Return the formatted string
}

// Get the toggle button and add an event listener for dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');

document.getElementById('darkModeToggle').checked = false; // Ensures the toggle starts off 
darkModeToggle.addEventListener('change', () => {
    // Toggle the 'dark-mode' class on the body element based on the checkbox state
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});


