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
        // $('#video').html(data.meals[randomIndex].strYoutube);  would be nice to dislay hyper link or small video thumb nail
        $("#poster").html(`<img src="${data.meals[randomIndex].strMealThumb}">`);
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

// // Make a button or div with an id="chicken" and you can attach this click listener:
// $('#chicken').on('click', () => {getRecipes("chicken")})



