//Question 1.
//Using constructor method.

let InstagramPost1 = {}
InstagramPost1.handleOfAuthor = 'Foodnetworkng';
InstagramPost1.content = 'Food'
InstagramPost1.link = 'https://www.instagram.com/p/CouUHgWDjIy/';
InstagramPost1.numberOfViews =2000000;
InstagramPost1.numberOfLikes = 89000;
console.log(InstagramPost1)


function InstagramPost (handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}
const InstagramPost2 = new InstagramPost('Foodnetworkng', 'Food', 'https://www.instagram.com/reel/CouUHgWDjIy/?utm_source=ig_web_copy_link', '2.1 Million', '900k');
console.log(InstagramPost2);
//Question 2.
//Using the second method
const InstagramPost3 = new InstagramPost('Bukkola_', 'Personal', 'https://www.instagram.com/p/CkNbqY0DiQu/', '85 Million', '871k');
console.log(InstagramPost3);

const InstagramPost4 = new InstagramPost('Maraji_', 'Skit', 'https://www.instagram.com/p/ComFhT_rjUV/', 3000000, '67.5k');
console.log(InstagramPost4);




//Question 3
//Using factory method.

function createPerson(name, age, location) {
    return{
        name: name,
        age: age,
        location: location,
    }
}

//Question 3a
const musa = createPerson('Musa Dawodu', '19 years old', 'Lekki Lagos State Nigeria');
console.log(musa);

//Question 3b
function createJambScores(eng, govt, lit, crk) {
    return{
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    }
}

const musasJambScores = createJambScores(70, 85, 82, 94);
console.log(musasJambScores);

Object.assign(musa, musasJambScores);
console.log(musa);



//Question 4

const firstSong = {
    artist: 'Davido',
    song: 'I got a friend',
    year: 2020,
    album: 'A better time',
}

//First Method: Using Object.assign
//To add new song title.
const secondSong = Object.assign({}, firstSong)
secondSong.title = 'Jowo';
console.log(secondSong);

//Second Method: Using spread syntax.
//To add new song.
const thirdSong = {...firstSong};
console.log (thirdSong);

thirdSong.song = 'The Best';
console.log(thirdSong);


//Third Method: Using JSON parse()
//To add new song title.
const fourthSong = JSON.parse(JSON.stringify(firstSong));
fourthSong.song = 'Tanana';

console.log(fourthSong);