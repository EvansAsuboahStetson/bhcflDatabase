export const handleGetSubmit = async (type, queryParameters = {}) => {
  console.log(`Fetching ${type} with query:`, queryParameters);
    // Construct URL with query parameters
    const queryParams = new URLSearchParams(queryParameters).toString();
    const url = `http://localhost:5000/api/${type}?${queryParams}`;

    console.log(`Fetching ${type} with query:`, queryParams);
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      return data; // Return the response data
    } catch (error) {
      console.error(`Error fetching ${type}:`, error);
    }
};
