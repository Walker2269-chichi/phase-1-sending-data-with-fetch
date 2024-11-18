function submitData(name, email) {
    // Destination URL
    const url = "http://localhost:3000/users";
  
    // Data to be sent
    const formData = {
      name: name,
      email: email,
    };
  
    // Configuration object
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    // Sending the POST request
    return fetch(url, configurationObject)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        // Appending the new ID to the DOM
        const newId = document.createElement("p");
        newId.textContent = `New ID: ${data.id}`;
        document.body.appendChild(newId);
      })
      .catch((error) => {
        // Handling error and appending the error message to the DOM
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
      });
  }
  
  // Example usage
  submitData("John Doe", "john.doe@example.com");
  