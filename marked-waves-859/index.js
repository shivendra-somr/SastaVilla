let Slide = document.querySelector("#nearMe");

sliderItems = [{ pic: "https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63f6329e862cbd9dccdc8a1a/aarnaology.png" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63af7836915b6489789551ee/5.png" }, { pic: "https://cdn.sellerapp.com/img/sellerapp-amazon-logo.svg" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63956c0074f97cad5a73dfa8/whatsapp-image-2021-05-01-at-10-58-40-pm.jpeg" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63ea60ae1a90f3c6e36a8d6b/logo-napcl.png" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/573db1519f0d58741f0cc5c1/62416ecc58bb106c9f04fc47/shiv.jfif" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/573db1519f0d58741f0cc5c1/624b0c262dc1347372e6043e/hotel-tulsi-logo.jpeg" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/6389d61d2a921c82c12a92a9/logo-png.png" }, { pic: "https://cdn.sellerapp.in/Logos/default/default_logo.jpg" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63a06e1bc610b313299feb3e/brown-white-barber-shop-logo-design-business-identity-for-barber-shop-grooming-hairstyle-beard-shave.png" },{ pic: "https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63f6329e862cbd9dccdc8a1a/aarnaology.png" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63af7836915b6489789551ee/5.png" }, { pic: "https://cdn.sellerapp.com/img/sellerapp-amazon-logo.svg" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63956c0074f97cad5a73dfa8/whatsapp-image-2021-05-01-at-10-58-40-pm.jpeg" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63ea60ae1a90f3c6e36a8d6b/logo-napcl.png" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/573db1519f0d58741f0cc5c1/62416ecc58bb106c9f04fc47/shiv.jfif" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/573db1519f0d58741f0cc5c1/624b0c262dc1347372e6043e/hotel-tulsi-logo.jpeg" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/6389d61d2a921c82c12a92a9/logo-png.png" }, { pic: "https://cdn.sellerapp.in/Logos/default/default_logo.jpg" }, { pic: "https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63a06e1bc610b313299feb3e/brown-white-barber-shop-logo-design-business-identity-for-barber-shop-grooming-hairstyle-beard-shave.png" }]


// set the number of divs to display at a time
const windowSize = 4;

// create a function to display the divs
function showDivs(startIndex) {
    // clear any previously displayed divs
    const container = document.querySelector('.carousel');
    container.innerHTML = '';

    // loop through the divs to display
    for (let i = startIndex; i < startIndex + windowSize && i < sliderItems.length; i++) {
        // create a div element
        const div = document.createElement('div');
        // set the innerHTML of the div
        const image = document.createElement('img');
        const title = document.createElement('h4');
        const desc = document.createElement('p');
        image.src = sliderItems[i].pic;
        title.innerText = "Grocery";
        desc.innerText = "Home and Decor";
        div.append(image,title,desc);
        // append the div to the container
        container.appendChild(div);
    }
}

// set the initial index to display
let startIndex = 0;

// call the function to display the first set of divs
showDivs(startIndex);

// create a function to handle the next button click
function next() {
    console.log("next");
    startIndex += windowSize;
    if (startIndex>=sliderItems.length){
        startIndex = 0;
    }
    showDivs(startIndex);
}

// create a function to handle the prev button click
function prev() {
    console.log("prev");
    startIndex -= windowSize;
    if (startIndex < 0) {
        startIndex = 0;
    }
    showDivs(startIndex);
}

// add event listeners to the next and prev buttons
document.getElementById('rightArrow').addEventListener('click', next);
document.getElementById('leftArrow').addEventListener('click', prev);


function slideshowFun(images) {
    const img = document.createElement("img");
    const card = document.querySelector("#slideshow");
    card.innerHTML = '';
    img.src = images;
    card.append(img);
}

// Use the following data for slideshow
var productImages = [
    "https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png",
    "https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png",
    "https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png",
    "https://cdn.plotch.io/image/upload/C/V/1676097252_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png",
    "https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png"
]


window.addEventListener("load", function () {

    // add event-listeners;
    let img_index = 0;
    slideshowFun(productImages[img_index]);
    setInterval(function () {
        img_index++;
        if (img_index > productImages.length - 1) {
            img_index = 0;
        }
        slideshowFun(productImages[img_index])

    }, 2000)
});