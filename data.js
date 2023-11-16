const submitButton = document.querySelector("#submit-button")
const thankYouCard = document.querySelector("#thank-you-card")
const ratingCard = document.querySelector("#rating-card")
const ratingButtons = document.querySelectorAll(".rating-button")
const selectedRating = document.querySelector("#selected-rating")
const rating = 5

submitButton.addEventListener("click", event => {
    event.preventDefault();
    console.log("submit button clicked")
    thankYouCard.classList.remove("hidden")
    ratingCard.classList.add("hidden")
})

ratingButtons.forEach(ratingButton => {
    ratingButton.addEventListener("click", event => {
        event.preventDefault();
        console.log(ratingButton.innerHTML)
        selectedRating.innerHTML = ratingButton.innerHTML
    })
})