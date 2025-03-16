// =================Parallax================
document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelectorAll(".parallax-layer").forEach((layer) => {
    const speed = parseFloat(layer.getAttribute("data-speed")) || 0.3;
    layer.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

// Set the date we're counting down to

// =================TIMER================

var countDownDate = new Date("Mar 29, 2025 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="timer"

  // ===========need to fix the timer to display in the format of days:hours:minutes:seconds==========

  // console.log(document.querySelector("#days-count").textContent);
  document.querySelector("#days-count").textContent = days;
  document.querySelector("#hours-count").textContent = hours;
  document.querySelector("#mins-count").textContent = minutes;
  document.querySelector("#secs-count").textContent = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".timer-caption").innerHTML = "Hackathon Ended";
    document.querySelector("#days-count").textContent = "00";
    document.querySelector("#hours-count").textContent = "00";
    document.querySelector("#mins-count").textContent = "00";
    document.querySelector("#secs-count").textContent = "00";
    return;
  }

  // document.getElementById("timer").innerHTML = days + " : " + hours + " : "
  //   + minutes + " : " + seconds + "  ";

  // // If the count down is over, write some text
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("timer").innerHTML = "EXPIRED";
  // }
}, 1000);

// =================Navigation Menu=================
function navFunction() {
  const navList = document.querySelector(".nav-list");
  const navToggler = document.querySelector(".nav-toggler");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  function updateNavList() {
    if (window.innerWidth > 576) {
      navList.classList.remove("active");
      navMenu.classList.remove("active");
      navToggler.classList.remove("open");
      body.classList.remove("nav-open");
    }
  }

  // Check screen width on load
  updateNavList();

  // Check screen width on resize
  window.addEventListener("resize", updateNavList);

  // Toggle classes on navToggler click
  navToggler.addEventListener("click", function () {
    navToggler.classList.toggle("open");
    navList.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("nav-open");
  });

  // Remove classes on navList item click
  navList.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", function () {
      navToggler.classList.remove("open");
      navList.classList.remove("active");
      navMenu.classList.remove("active");
      body.classList.remove("nav-open");
    });
  });
}

// Initialize the navigation function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", navFunction());

function changeClass() {
  var x = document.getElementsByClassName("cyber-button-small");
  var width = window.innerWidth > 0 ? window.innerWidth : screen.Width;
  console.log(width);
  if (x.length > 0) {
    if (width <= 640) {
      x[0].className = "cyber-button bg-red";
    } else {
      x[1].className = "cyber-button-small";
    }
  }
}

$(document).ready(function () {
  $(".accordion-title").click(function (e) {
    var accordionitem = $(this).attr("data-tab");
    $("#" + accordionitem)
      .slideToggle()
      .parent()
      .siblings()
      .find(".accordion-content")
      .slideUp();

    $(this).toggleClass("active-title");
    $("#" + accordionitem)
      .parent()
      .siblings()
      .find(".accordion-title")
      .removeClass("active-title");

    $("i.fa-chevron-down", this).toggleClass("chevron-top");
    $("#" + accordionitem)
      .parent()
      .siblings()
      .find(".accordion-title i.fa-chevron-down")
      .removeClass("chevron-top");
  });
});

// ====================== Sponsor Webiste ======================

function SponsorSite(sponsorName) {
  const sponsorLinks = {
    "uemjaipur": "https://uem.edu.in/uem-jaipur/",
    "zeroindex": "https://zeroindex.tech/",
    "acm": "https://acm-uemj.uem.edu.in/",
    "iic": "https://iic.mic.gov.in/",
    "doitc": "https://doitc.rajasthan.gov.in/",
    "istart": "https://istart.rajasthan.gov.in/",
    "risein": "https://www.risein.com/",
    "coredao": "https://coredao.org/",
    "educhain": "https://opencampus.xyz/",
    "devdockai": "https://devdock.ai/",
    "github": "https://github.com/",
    "nukhba": "https://www.nukhba.com/",
    "jonathan": "https://www.instagram.com/jonny.chang.ceo/",
    "dorahacks": "https://dorahacks.io/",
    "securedapp": "https://securedapp.io/",
    "reskilll": "https://reskilll.com/",
    "msazure": "https://azure.microsoft.com/en-us/",
    "azuredev": "https://azdev.reskilll.com/",
    "commudle": "https://www.commudle.com/",
    "xyzdomain": "https://gen.xyz/",
    "interviewbuddy": "https://interviewbuddy.net/",
    "appwrite": "https://appwrite.io/",
    "flatlogic": "https://flatlogic.com/",
    "zsecurity": "https://zsecurity.org/",
    "codecrafters": "https://codecrafters.io/",
    "sybgen": "https://sybgen.com/",
    "interviewcake": "https://www.interviewcake.com/",
    "aopsonline": "https://artofproblemsolving.com/",
    "balsamiq": "https://balsamiq.com/",
    "blockpen": "https://www.blockpen.xyz/",
    "cssbattle": "https://cssbattle.dev/",
    "oreilly": "https://www.oreilly.com/",
    "offsec": "https://www.offsec.com/",
    "orphus": "https://www.orphus.in/",
    "theglobalhues": "https://theglobalhues.com/",
    "techsoc": "https://tech-soc.vercel.app/",
    "juverse": "https://linktr.ee/juverse",
    "aryahackathon": "https://www.instagram.com/arya_hackathon_club/",
    "hackclubjaipur": "https://forms.hackclub.com/scrapyard-signup?event=jaipur",
  };

  const link = sponsorLinks[sponsorName];
  if (link) {
    window.open(link, "_blank");
  } else {
    alert("Sponsor not found");
  }
}

// ====================== Timeline Shift ======================
function showTimeline(day, scroll = true) {
  var day1Timeline = document.getElementById("day1-timeline");
  var day2Timeline = document.getElementById("day2-timeline");
  var day1Btn = document.getElementById("day1-btn");
  var day2Btn = document.getElementById("day2-btn");
  var timelineSection = document.querySelector(".timeline-section");

  if (day === "day1") {
    day1Timeline.classList.add("show");
    day1Timeline.classList.remove("hide");
    day2Timeline.classList.add("hide");
    day2Timeline.classList.remove("show");
    day1Btn.classList.add("active");
    day2Btn.classList.remove("active");
  } else if (day === "day2") {
    day1Timeline.classList.add("hide");
    day1Timeline.classList.remove("show");
    day2Timeline.classList.add("show");
    day2Timeline.classList.remove("hide");
    day1Btn.classList.remove("active");
    day2Btn.classList.add("active");
  }
  if (scroll) {
    timelineSection.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showTimeline("day1", false);
});

document.getElementById("day1-btn").addEventListener("click", function () {
  showTimeline("day1");
});

document.getElementById("day2-btn").addEventListener("click", function () {
  showTimeline("day2");
});

// ====================== FAQs Read More/Hide ======================
function toggleFAQs() {
  var moreFAQs = document.getElementById("more-faqs");
  var readMoreBtn = document.getElementById("read-more-btn");

  if (moreFAQs.style.display === "none") {
    moreFAQs.style.display = "block";
    readMoreBtn.textContent = "Read Less";
  } else {
    moreFAQs.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }
}


// ====================== Scroll Reveal ======================

// Function to apply ScrollReveal to all elements with a specific class
// function applyScrollReveal(selector) {
//   const elements = document.querySelectorAll(selector);
//   elements.forEach(element => {
//     ScrollReveal().reveal(element);
//   });
// }

// Apply ScrollReveal to all relevant sections
// document.addEventListener('DOMContentLoaded', function() {
//   applyScrollReveal('.about-stats');
//   applyScrollReveal('.prize-section');
//   applyScrollReveal('.tracks-section');
//   applyScrollReveal('.sponsor-section');
//   applyScrollReveal('.judges-section');
//   applyScrollReveal('.footer-section');
// });


/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '60px',
//   duration: 2500,
//   delay: 2000,
//   // reset: true
// })

// sr.reveal('.timer-section, .buttons, .about-us, .about0us-desc')
// sr.reveal('.home__info div', { delay: 600, origin: 'bottom', interval: 75 })
// sr.reveal(`.skills__content:nth-child(1), contact__content:nth-child(1)`, { origin: 'left' })
// sr.reveal('.skills__content:nth-child(2), contact__content:nth-child(2)', { origin: 'right' })
// sr.reveal('.qualification__content, .services__card', { interval: 75 })
