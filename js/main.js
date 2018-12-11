// Initial Ratings
const ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    phillips: 4.1,
    lg: 4.3,
    tesla: 3.1
}

// Total Stars
const starsTotal = 5;

// intializes the  getRatings fuction  when the document loads
document.addEventListener('DOMContentLoaded', getRatings);

// Querring Form Elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Init product (initialize the product variable)
let product;

// Listening for product change
productSelect.addEventListener('change', (e) => {
    product = e.target.value;
    // Enables rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

// Listens for rating control change
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    // this makes sure 5 or under
    if (rating > 5) {
        alert('Please rate 1 - 5');
        return;
    }

    // Changes the product current using the get ratting function rating
    ratings[product] = rating;

    getRatings();
});

// Get ratings function
function getRatings() {
    //loops through the rating array
    for (let rating in ratings) {
        // Get percentage
        const starPercentage = (ratings[rating] / starsTotal) * 100;

        // Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

        // Set width of stars-inner to percentage
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

        // Add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
}