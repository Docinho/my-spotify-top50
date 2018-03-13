var fs = require("fs");
console.log("\n *START* \n");
var content = fs.readFileSync("dadosSpotify.json");
console.log("\n *EXIT* \n");
 var jsonContent = JSON.parse(content);

let genres = {};
jsonContent.nodes = jsonContent.items.map(item => {
    let image = item.images[0];
    item.genres.forEach(genre =>{
        if(!genres[genre]){
            genres[genre] = [];
        }
        genres[genre].push(item.id);
    });
    return {
        "genres": item.genres,
        "img" : image ? image.url : "",
        "name": item.name,
        "id" : item.id,
        "url" : item.uri,
        "popularity" : item.popularity
    };
});

console.log(genres);

 jsonContent.nodes.forEach(function(element) {
 }, this);