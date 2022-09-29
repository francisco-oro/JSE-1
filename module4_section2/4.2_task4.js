// Task 4
let movies = [];
while(true){
    let name = prompt("Input the name of the next movie:");
    let rating = prompt("Input its rating from imdb.com");
    if(name === null || rating === null){
        break;
    } else {
        movies.push({
            name: name,
            rating: rating
        });
    }
}

console.log("Movies whose rating is under 7:");
for(let movie of movies){
    if(movie.rating < 7){
        console.log(`title: ${movie.name} / rating: ${movie.rating}`);
    }
}

console.log("Movies whose rating is greater than or equal to 7:");
for(let movie of movies) {
    if(movie.rating >= 7){
        console.log(`title: ${movie.name} / rating: ${movie.rating}`);
    }
}
    