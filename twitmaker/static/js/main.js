document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    axios.post(
      this.action,
      formData
    ).then(function(response) {
      console.log(response.data);
      let d = response.data;
      let tweet = document.createElement('li');
      tweet.innerHTML = `
        <time>${d.time}</time>
        <p>${d.message}</p>
      `;
      tweet.className = "tweet";
      // const newTweet = document.createElement('li');
      // newTweet.className = 'tweet';
      // const timeStamp = document.createElement('time');
      // timeStamp.innerText = response.data.time;
      // const message = document.createElement('p');
      // message.innerText = response.data.message;
      // newTweet.appendChild(timeStamp);
      // newTweet.appendChild(message);
      const tweets = document.querySelector('.tweets');
      tweets.appendChild(tweet);

    }).catch(function(error) {
      console.log(error);
    });
  });
});
