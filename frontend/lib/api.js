//TODO: refactor this with axios

async function fetcher(url, options = {}) {
  try {
    let response;
    if (!options) {
      response = await fetch(url);
    } else {
      response = await fetch(url, options);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetcher;
