const Spotify = require('spotify-web-api-js');

function MusicStats() {

  //to-do lol have to figure out token refreshing, prolly gonna steal the spotifyClient requesting code

  var spotifyApi = new Spotify();
  spotifyApi.setAccessToken('BQBRBg4ProlC3K9YUpKFXMlqaXbxphZXg9KoMxncLBiAKHZV7CN6lbYxvXJNZYXqpausCcbA0rJatgG6CSSBXvIKn7QnNMYA4stNXkv9Xa24V-nV2xnNQOGKH-AhqUv6dopbnx9N50PAPXb7Vnsh4nH6Y_3RCEZuqSjpsrMV2BKZHWz4kITKFhAp176oBIG1GEMBb7Oup-0bn-e7HfbIDAc71Vk');
    
  spotifyApi.getMyTopTracks() // note that we don't pass a user id
  .then(
    function (data: any) {
      console.log('User playlists', data);
    },
    function (err: any) {
      console.log(":(")
      console.log(err.responseText);
    }
  );

    return ( <>to be done lol have to figure out token refreshing</> );
}

export default MusicStats;