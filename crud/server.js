const express = require("express");
const albumsData = require("./albums.json");
const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000 using express. I am Ready to accept requests!");
});


// This is the albums endpoint. IT will return all ALbums data available
// Parameters : none
// Return : all data from albums.json
app.get("/albums", (req, res) => {
  res.send(albumsData);
});

// Get specific album by id