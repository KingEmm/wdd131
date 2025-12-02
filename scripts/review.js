const body = document.querySelector('body');
const review = document.getElementById('review')

body.style.width = '100%';
body.style.height = '100vh';

review.style.textAlign='center';
body.style.display='flex';
body.style.alignItems='center';
body.style.justifyContent='center';



const checkReview = ()=>{
	let numReview = window.localStorage.getItem("numReviews-ls");
	if(Number(numReview) == 1){
		review.textContent = `Thanks for your first Review 🤝`;
	}
	else if ( Number(numReview) !== 0) {
		review.innerText = `You have reviewed ${numReview} Times`;
	} else {
		review.innerHTML = `We would love to hear your review on our <a href="form.html">products</a> 😁`;
	}

}
checkReview()

setInterval(checkReview,10000);