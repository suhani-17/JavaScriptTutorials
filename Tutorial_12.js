var artworks = [
    {
        description : "The Tortured Poets Department",
        address: "https://static.independent.co.uk/2024/04/18/14/crop%202.jpg"
    },
    {
        description : "Midnights",
        address: "https://media.newyorker.com/photos/6353080576c31adb3224668e/master/pass/Jackson-Swift-Midnights.jpg"
    },
    {
        description : "Red",
        address: "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"
    },
    {
        description: "My Batman action figure",
        address: "hi.JPG"
    }
]

var feed = document.getElementById('art-feed');

for (var i = 0; i < artworks.length; i++) {
  var feedBox = document.createElement('div');
  feedBox.setAttribute('class', 'feed-box');

  var feedImage = document.createElement('div');
  feedImage.setAttribute('class', 'feed-image');

  var img = document.createElement('img');
  img.setAttribute('src', artworks[i].address);

  var feedDescription = document.createElement('div');
  feedDescription.setAttribute('class', 'feed-description');

  var text = document.createTextNode(artworks[i].description)


  feedImage.appendChild(img);
  feedDescription.appendChild(text);

  feedBox.appendChild(feedImage);
  feedBox.appendChild(feedDescription);

  feed.appendChild(feedBox);
}