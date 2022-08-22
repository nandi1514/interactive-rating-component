// Variables

const submitBtn = document.querySelector('.submit-btn');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thankyou-card');
const ratingBtns = document.querySelectorAll('.rate-btn');
const score = document.getElementById('score');
let stars_score = 3 //default value

submitBtn.addEventListener("click", onSumbit); 
ratingBtns.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function onSumbit() {
    ratingCard.classList.add('hide');
    score.textContent = stars_score;
    thankYouCard.classList.remove('hide');
    console.log('sumbit btn clicked');
}

function handleRatingBtnClick(event) {
    ratingBtns.forEach(btns => {
        btns.classList.remove('active');
    });

    if (event.target.classList.contains('rate-btn')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }

    // parse stars score
    stars_score = event.target.textContent;
    console.log(stars_score);
}

