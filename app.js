console.log("js attached and loaded")


// $.ajax({
//     url: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
//     success: (reponse) => {
//         console.log(reponse);
//     },

// }); 

const getRecipes = (foodItem) => {
    const promise = $.ajax({
        url: `https://www.themealdb.com/api/json/v2/8673533/search.php?s=${foodItem}`,
    }).then(
        (data) => {
        console.log(data);
        let randomIndex = Math.floor(Math.random() * data.meals.length) 
        $('#meal').html(data.meals[randomIndex].strMeal);
        $("#poster").html(`<img src="${data.meals[randomIndex].strMealThumb}">`);
        $("#instructions").html(data.meals[randomIndex].strInstructions);
        $("#fullrecipe").html(data.meals[randomIndex].strSource);
    },
    () => {
        console.log("bad request");
    }
    );
}

$("form").on("submit", (event) => {
    event.preventDefault();

    const foodItem = $('input').val();
    getRecipes(foodItem);
});
// $("button").on("click", (event) => {
// let random = Math.floor(Math.random() * data.meals.length) 

//     getRecipes(random);
// // });



// $("#button2").on("click", (event) => {
//     getRecipes(randomIndex);


// });
// // Make a button or div with an id="chicken" and you can attach this click listener:
$('#button1').on('click', () => {getRecipes("#button1")}) //hard code this one
$('#button2').on('click', () => {getRecipes("#button1")})



