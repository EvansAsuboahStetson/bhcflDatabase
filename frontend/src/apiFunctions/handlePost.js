export const handleAddSubmit = async (type, data) => {
  console.log(`Adding ${type}:`, data);
  const url = `http://localhost:5000/api/${type}`;
  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Network response was not ok');

      return await response.json();  // Return the response data
  } catch (error) {
      console.error(`Error adding ${type}:`, error);
      throw error; // Rethrow the error so it can be caught where the function is called
  }
};
