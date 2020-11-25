const user = {
  _id: "1",
  name: "Joe",
  email: "oemamma@yahoo.com",
  picture: "https://cloudinary.com/asdf"
}

module.exports = {
  Query: {
    me: () => user
  }
}