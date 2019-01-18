const getCardWithTwoImages = (tRef, title, content, siurl, biurl) => tRef.showImageCard(title, content, {
    smallImageUrl: siurl, // "https://via.placeholder.com/720x480",
    largeImageUrl: biurl // "https://via.placeholder.com/1200x800"
  });

const getCardWithOneImage = (tRef, { title, content, imageUrl }) => tRef.showImageCard(title, content, imageUrl);
module.exports = { getCardWithTwoImages,
getCardWithOneImage };
