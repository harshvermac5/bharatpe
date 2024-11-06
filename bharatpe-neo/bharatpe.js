// Assume the JSON data is already loaded into the `jsonData` variable
let jsonData; // Declare a variable to hold the JSON data.

// Load the JSON data from a file using the fetch API
fetch('./bharatpe.json')
    .then(response => {
        // Check if the response was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the response as JSON
        return response.json();
    })
    .then(data => {
        // Once the data is fetched, assign it to the jsonData variable
        jsonData = data;

        // Only call createDropdowns if the first object's output is true
        if (jsonData.BharatPe.output === "true") {
            createDropdowns(jsonData.BharatPe.Products);
        } else {
            document.getElementById('output').innerHTML = ''; // Clear the output if false
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

// Function to create dropdown menus
function createDropdowns(obj, parentKey = '') {
    if (typeof obj !== 'object' || obj === null) {
        return; // Exit if it's not a valid object
    }

    const dropdownsContainer = document.getElementById('dropdowns');
    const keys = Object.keys(obj).filter(key => key !== 'output'); // Skip 'output'

    const select = document.createElement('select');
    select.setAttribute('data-parent', parentKey);
    const defaultOption = document.createElement('option');
    defaultOption.textContent = `Sub-Query in ${parentKey || 'BharatPe'}`;
    defaultOption.value = '';
    select.appendChild(defaultOption);

    keys.forEach(key => {
        const value = obj[key];
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key;
        select.appendChild(option);
    });

    select.addEventListener('change', () => {
        const selectedValue = select.value;
        if (selectedValue) {
            const nextObj = obj[selectedValue];
            clearDropdowns(dropdownsContainer, select);
            createDropdowns(nextObj, selectedValue);
            displayDetails(nextObj, selectedValue);
        } else {
            clearDropdowns(dropdownsContainer, select);
            document.getElementById('output').innerHTML = '';
        }
    });

    dropdownsContainer.appendChild(select);
}

// Function to clear previously created dropdowns
function clearDropdowns(container, currentSelect) {
    let next = currentSelect.nextElementSibling;
    while (next) {
        container.removeChild(next);
        next = currentSelect.nextElementSibling;
    }
}

// Function to display details of the selected option
function displayDetails(optionData, optionName) {
    let output = `<h3>Details for ${optionName}:</h3>`;
    if (typeof optionData === 'object' && optionData !== null) {
        output += formatObject(optionData);
    } else {
        output += optionData;
    }
    document.getElementById('output').innerHTML = output;
}

// Function to format an object for display
function formatObject(obj, indent = '') {
    let output = '';
    for (const key in obj) {
        if (key === 'output') continue; // Skip 'output' keys
        if (Array.isArray(obj[key])) {
            output += `${indent}<strong>${key}:</strong><ul>`;
            obj[key].forEach(item => {
                output += `<li>${item}</li>`;
            });
            output += `</ul>`;
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            output += `${indent}<strong>${key}:</strong><br>`;
            output += formatObject(obj[key], indent + '&nbsp;&nbsp;');
        } else {
            output += `${indent}<strong>${key}:</strong> ${obj[key]}<br>`;
        }
    }
    return output;
}
