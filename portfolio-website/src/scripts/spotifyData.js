export const topData = async () => {
    return await fetch("https://ashleyy.dev/api/spotifyData/getTopData?email=friccinfricc420@outlook.com")
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
  };