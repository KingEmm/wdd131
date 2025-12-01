// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let review = document.getElementById('review')

let numReview = window.localStorage.getItem("numReviews-ls");
console.log(numReview)
// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (Number(numReview) !== 0) {
	review.innerText = numReview;
} else {
	review.textContent = `This is your first visit. 🥳 Welcome!`;
}
