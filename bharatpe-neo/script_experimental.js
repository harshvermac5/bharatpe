document.addEventListener('DOMContentLoaded', function() {

    // Assuming JSON data is loaded from a file (like bharatpe.json)
    let jsonData; 

    fetch('./bharatpe.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            jsonData = data;
            console.log('JSON Data Loaded:', jsonData);

            // Create dropdowns starting from BharatPe.Products
            createDropdowns(jsonData.BharatPe.Products);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    // Function to create dropdowns dynamically
    function createDropdowns(obj, parentKey = '') {
        if (typeof obj !== 'object' || obj === null) return; // Exit if not a valid object

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

            // If the value is an array or object, create a dropdown for it
            if (Array.isArray(value) || typeof value === 'object') {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = key;
                select.appendChild(option);
            } else {
                // If it's a simple value (string/number), we can just display it
                const option = document.createElement('option');
                option.value = key;
                option.textContent = key;
                select.appendChild(option);
            }
        });

        select.addEventListener('change', () => {
            const selectedValue = select.value;
            if (selectedValue) {
                const nextObj = obj[selectedValue];
                clearDropdowns(dropdownsContainer, select);
                
                // Check if the 'output' key is true
                if (nextObj.output === "true") {
                    // If 'output' is true, display the object directly without further dropdowns
                    displayDetails(nextObj, selectedValue);
                } else if (Array.isArray(nextObj)) {
                    // If the selected value is an array (like "list"), display it directly in the output
                    displayArray(nextObj, selectedValue);
                } else {
                    // Otherwise, create a new dropdown or show more details
                    createDropdowns(nextObj, selectedValue);
                    displayDetails(nextObj, selectedValue);
                }
            } else {
                clearDropdowns(dropdownsContainer, select);
                document.getElementById('output').innerHTML = '';
            }
        });

        dropdownsContainer.appendChild(select);
    }

    // Function to clear previous dropdowns
    function clearDropdowns(container, currentSelect) {
        let next = currentSelect.nextElementSibling;
        while (next) {
            container.removeChild(next);
            next = currentSelect.nextElementSibling;
        }
    }

    // Function to display array directly in the output area
    function displayArray(arr, key) {
        let output = `<h3>Array for ${key}:</h3><ul>`;
        arr.forEach(item => {
            output += `<li>${item}</li>`;
        });
        output += `</ul>`;
        document.getElementById('output').innerHTML = output;
    }

    // Function to display details of the selected option
    function displayDetails(optionData, optionName) {
        let output = `<h3>Details for ${optionName}:</h3>`;
        
        // Only display if 'output' is true
        if (typeof optionData === 'object' && optionData !== null) {
            if (optionData.output === "true") {
                output += formatObject(optionData);
            } else {
                output += "<p>No details to display for this selection.</p>";
            }
        } else {
            output += optionData; // If it's a simple value, display it directly
        }

        document.getElementById('output').innerHTML = output;
    }

    // Function to format an object for display
    function formatObject(obj, indent = '') {
        let output = '';
        for (const key in obj) {
            if (key === 'output') continue; // Skip 'output' keys
            if (Array.isArray(obj[key])) {
                // Handle arrays separately (won't create dropdowns)
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

});
