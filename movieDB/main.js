var movies = [
    {
        watched : true,
        name : '"Atlantis"',
        rating : 5
    },
    {
        watched : false,
        name : '"Frozen"',
        rating : 4
    },
    {
        watched : true,
        name: '"Fight Club"',
        rating : 5
    }
];

movies.forEach(function(mov){
    var watch = mov.watched? "seen ":"not seen "
    console.log("You have " + watch + mov.name + " - " + mov.rating + " stars" );
});