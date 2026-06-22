const quotes = [
"Believe you can and you're halfway there.",
"Success starts with self-discipline.",
"Dream big. Work hard. Stay focused.",
"Every day is a second chance.",
"Small steps every day lead to big results.",
"Your only limit is your mind.",
"Stay patient. Stay positive.",
"Work hard in silence, let success make the noise.",
"Great things never come from comfort zones.",
"Be stronger than your excuses.",
"Don't stop until you're proud.",
"Progress is progress, no matter how small.",
"Difficult roads often lead to beautiful destinations.",
"Push yourself because no one else will do it for you.",
"Success is the sum of small efforts repeated daily.",
"Stay hungry. Stay foolish.",
"Your future is created by what you do today.",
"Focus on the goal, not the obstacles.",
"Consistency beats motivation.",
"One day or day one. You decide.",
"Believe in yourself and all that you are.",
"Be fearless in the pursuit of what sets your soul on fire.",
"Make today count.",
"Discipline is choosing what you want most over what you want now.",
"The harder you work, the luckier you get.",
"Success doesn't come from what you do occasionally.",
"Never give up on a dream because of the time it will take.",
"Turn your wounds into wisdom.",
"Your attitude determines your direction.",
"Great things take time.",
"Fall seven times, stand up eight.",
"Stay focused and never quit.",
"Don't wait for opportunity. Create it.",
"Success begins outside your comfort zone.",
"You are capable of amazing things.",
"Keep moving forward.",
"Every accomplishment starts with the decision to try.",
"Challenges are opportunities in disguise.",
"The best way out is always through.",
"Be the energy you want to attract.",
"Success is earned, not given.",
"Make yourself a priority.",
"Dream it. Wish it. Do it.",
"Your only competition is who you were yesterday.",
"Small actions every day create big results.",
"Nothing changes if nothing changes.",
"Stay strong, the weekend is coming.",
"Keep your face toward the sunshine.",
"Success is a journey, not a destination.",
"Trust the process.",
"Every expert was once a beginner.",
"Hard work beats talent when talent doesn't work hard.",
"Stay committed to your goals.",
"Create a life you can't wait to wake up to.",
"The secret of getting ahead is getting started.",
"Do something today your future self will thank you for.",
"Success is built one day at a time.",
"Keep learning and keep growing.",
"Believe in the power of yet.",
"Make progress, not excuses.",
"Start where you are. Use what you have.",
"Be patient with yourself.",
"Success follows preparation.",
"Focus on solutions, not problems.",
"Your dreams are worth the effort.",
"Keep showing up.",
"Don't be afraid to fail.",
"Be proud of how far you've come.",
"Turn setbacks into comebacks.",
"Work hard and stay humble.",
"Your potential is endless.",
"Rise above the storm and you will find the sunshine.",
"Stay positive and work hard.",
"Keep your goals bigger than your fears.",
"Success is hidden in your daily routine.",
"Do more of what makes you grow.",
"The best project you'll ever work on is yourself.",
"Keep going. You're getting there.",
"Strength grows in moments of struggle.",
"Take the risk or lose the chance.",
"Don't limit your challenges. Challenge your limits.",
"Wake up with determination.",
"Go the extra mile. It's never crowded.",
"Make your life a masterpiece.",
"Action is the foundation of success.",
"Believe, achieve, repeat.",
"Your effort matters.",
"Success loves persistence.",
"Stay focused on your mission.",
"Be unstoppable.",
"Keep climbing. The view is worth it.",
"Confidence comes from preparation.",
"Today is another opportunity to improve.",
"Growth begins at the end of your comfort zone.",
"You are stronger than you think.",
"Never underestimate your ability to change your life.",
"Great things happen when you don't give up.",
"The best time to start was yesterday. The next best time is now."
];

let currentQuoteIndex = 0;
let isLiked = false;

function newQuote() {
    currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[currentQuoteIndex];

    const quoteNumber = document.getElementById("quoteNumber");
    if (quoteNumber) {
        quoteNumber.innerText = currentQuoteIndex + 1;
    }

    // Reset like state on new quote
    isLiked = false;
    document.querySelector(".like-btn").classList.remove("active");
}

function likeQuote() {

    isLiked = !isLiked;

    const likeBtn =
        document.querySelector(".like-btn");

    if(isLiked){

        likeBtn.classList.add("active");

        likeBtn.style.animation = "none";
        likeBtn.offsetHeight;
        likeBtn.style.animation = "heartPop .4s ease";

    }else{

        likeBtn.classList.remove("active");
    }
}

function copyQuote(){

    const quote =
        document.getElementById("quote").innerText;

    navigator.clipboard.writeText(quote);

    const btn =
        document.querySelector(".copy-btn");

    btn.innerHTML = "✅";

    btn.classList.add("copied");

    setTimeout(() => {

        btn.innerHTML = "📋";

        btn.classList.remove("copied");

    },1000);
}

window.onload = function () {
    newQuote();
};