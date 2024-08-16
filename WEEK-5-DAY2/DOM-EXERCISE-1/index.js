let h1Element = document.querySelector('h1');
console.log(h1Element);


let article = document.querySelector('article');
let lastParagraph = article.querySelectorAll('p')[article.querySelectorAll('p').length - 1];
article.removeChild(lastParagraph);


let h2Element = document.querySelector('h2');
h2Element.addEventListener('click', function() {
    h2Element.style.backgroundColor = 'red';
});


let h3Element = document.querySelector('h3');
h3Element.addEventListener('click', function() {
    h3Element.style.display = 'none';
});


let boldButton = document.getElementById('boldButton');
boldButton.addEventListener('click', function() {
    let paragraphs = document.querySelectorAll('article p');
    paragraphs.forEach(function(paragraph) {
        paragraph.style.fontWeight = 'bold';
    });
});


h1Element.addEventListener('mouseover', function() {
    let randomFontSize = Math.floor(Math.random() * 101) + 'px';
    h1Element.style.fontSize = randomFontSize;
});
