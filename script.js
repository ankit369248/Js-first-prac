function fetchData() {
    const url = document.getElementById('apiUrl').value;
    const output = document.getElementById('responseOutput');
  
    output.textContent = 'Loading...';
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error: ' + response.status + ' ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        output.textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        output.textContent = 'Failed to fetch data.\n' + error;
      });
  }
  