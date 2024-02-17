export const topData = async () => {
    return await fetch("https://ashleyy.dev/api/spotifyData/getTopData?email=friccinfricc420@outlook.com")
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
  };

  /*export const topData = async () => {
    return await fetch("http://localhost:8080/api/spotifyData/getTopData?email=friccinfricc420@outlook.com")
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
  };*/