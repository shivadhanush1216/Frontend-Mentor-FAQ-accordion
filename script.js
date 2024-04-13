const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

btn1.addEventListener("click", () => {


    const paragraphs = document.getElementsByClassName("none1");
    Array.from(paragraphs).forEach(paragraph => {
        // Toggle the display between "block" and "none"
        paragraph.style.display = (paragraph.style.display === "block") ? "none" : "block";
    });

})

btn2.addEventListener("click", () => {
    const paragraphs = document.getElementsByClassName("none2");
    Array.from(paragraphs).forEach(paragraph => {
        // Toggle the display between "block" and "none"
        paragraph.style.display = (paragraph.style.display === "block") ? "none" : "block";
    });
})

btn3.addEventListener("click", () => {
    const paragraphs = document.getElementsByClassName("none3");
    Array.from(paragraphs).forEach(paragraph => {
        // Toggle the display between "block" and "none"
        paragraph.style.display = (paragraph.style.display === "block") ? "none" : "block";
    });
})

btn4.addEventListener("click", () => {
    const paragraphs = document.getElementsByClassName("none4");
    Array.from(paragraphs).forEach(paragraph => {
        // Toggle the display between "block" and "none"
        paragraph.style.display = (paragraph.style.display === "block") ? "none" : "block";
    });
})