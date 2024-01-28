const request = async (path, method, body, event) => {
  event.preventDefault();
  try {
    const response = await axios[method](`http://localhost:3000/api/${path}`, body);

    return response
  } catch (error) {
    console.error('Login failed:', error, response);
  }
};