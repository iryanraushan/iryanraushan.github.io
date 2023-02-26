$(document).ready(function () {
    $("#menu").click(function () {
        $(this).toggleClass("fa-times");
        $("header").toggleClass("toggle");
    });

    $(window).on("scroll load", function () {
        $("#menu").removeClass("fa-times");
        $("header").removeClass("toggle");

        if ($(window).scrollTop() > 0) {
            $(".top").show();
        } else {
            $(".top").hide();
        }
    });

    // smooth scrolling

    $('a[href*="#"]').on("click", function (e) {
        e.preventDefault();

        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top,
            },
            500,
            "linear"
        );
    });
});

const dynamiContent = document.getElementById("qualification");

const phrases = [
    "software developer....",
];
let letterIndex = 0;
let phraseIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 100;


function printLetters(phrases) {
    if (letterIndex == phrases.length) {
        clearLetter();
    } else if (letterIndex < phrases.length) {
        dynamiContent.textContent += phrases.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function () {
            printLetters(phrases);
        }, typingSpeed);
    }
}

function clearLetter() {
    if (letterIndex == -1) {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        letterIndex = 0;
        printLetters(phrases[phraseIndex]);
    } else if (letterIndex > -1) {
        let updatedPhrases = "";
        for (let i = 0; i < letterIndex; i++) {
            updatedPhrases += phrases[phraseIndex].charAt(i);
        }
        dynamiContent.textContent = updatedPhrases;
        letterIndex -= 1;
        setTimeout(function () {
            clearLetter();
        }, erasingSpeed);
    }
}

printLetters(phrases[phraseIndex]);
