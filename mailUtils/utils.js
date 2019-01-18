const getDetails = business => ({
  la: business.coordinates.latitude,
  lo: business.coordinates.longitude,
  pn: business.phone,
  pc: business.location.zip_code,
  a: business.location.display_address,
  iurl: business.image_url,
  rname: business.name
});

module.exports = { getDetails };
