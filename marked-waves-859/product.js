const deodorants_roll = [
    {
        name: "NIVEA Deodorant Roll On Whitening Smooth Skin 50ml",
        image: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/203380/new-nivea-whitening-smooth-skin-roll-on-50-ml1_2_display_1557736874_1fa9174c.jpg",
        rating: 3.6,
        price: 159,
    }, {
        name: "Nivea Deodorant Roll On, Peral & Beauty 50 ml",
        image: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/201720/nivea-pearl-and-beauty-deo-roll-on-for-women-50-g-10_1_display_1553339041_0ddbdc32.jpg",
        rating: 4.0,
        price: 149,
    }, {
        name: "Nivea Deodorant Roll On, Peral & Beauty 150 ml",
        image: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/246891/nivea-deodorant-pearl-beauty-for-women-150-ml_2_display_1551356300_9d8e6ddd.jpg",
        rating: 4.5,
        price: 180,
    }, {
        name: "Nivea Deodorant DEO MILK Sensitive Roll On(40 ml) ",
        image: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/199330/nivea-women-deodorant-deo-milk-sensitive-roll-on-40-ml_1_display_1588660686_68e3b7b9.jpg",
        rating: 4.4,
        price: 158,
    }, {
        name: "NIVEA Deodorant Roll On Whitening Smooth Skin 25ml",
        image: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/239646/nivea-women-deodorant-roll-on-whitening-smooth-skin-25-ml_1_display_1621931680_42cfbaf3.jpg",
        rating: 4.3,
        price: 99,
    }, {
        name: "Eva Fresh 125ml Skin Friendly",
        image: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/199100/eva-deo-fresh-125-ml-74_2_display_1624275951_91f09f88.jpg",
        rating: 4.4,
        price: 140,
    }, {
        name: "Engage Floral Zest Deodorant for Women Citrus & spicy Skin Friendly, 150ml",
        image: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/242247/engage-floral-zest-deodorant-for-women-citrus-and-floral-skin-friendly-150ml_7_display_1628267322_5de70352.jpg",
        rating: 4.5,
        price: 150,
    }, {
        name: "Dove Eventone Deodorant For Women, 150ml",
        image: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/230723/dove-eventone-deodorant-for-women-150-ml_1_display_1614830903_c40a2e21.jpg",
        rating: 4.0,
        price: 176,
    }, {
        name: "Paco Rabanne Lady Millon Deodorant for Women 150 ml",
        image: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/151316/paco-rabanne-lady-million-deodorant-for-women-150-ml_1_display_1535460405_822d0538.jpg",
        rating: 5,
        price: 1279,
    }, {
        name: "NIVEA WOMAN Deodorant DEO MILK Fresh 150 ml",
        image: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/199328/nivea-women-deodorant-deo-milk-fresh-150-ml_1_display_1588660766_2bd3e900.jpg",
        rating: 5,
        price: 191,
    }, {
        name: "Plum BodyLovin Orchid You",
        image: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/234578/plum-bodylovin-orchid-you-not-body-mist_5_display_1617873623_ef07596b.jpg",
        rating: 4.3,
        price: 473,
    }, {
        name: "Ital Veloce La Bella Fine Fragrance Mist 210 ml",
        image: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/207300/ital-veloce-la-bella-fine-fragrance-mist-210-ml_1_display_1600079393_c6928210.jpg",
        rating: 3.9,
        price: 699,
    },
];


// Registration and Login Form
function openRegistrationForm() {
    document.getElementById("registration-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

function closeRegistrationForm() {
    document.getElementById("registration-form").style.display = "none";
}

function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("registration-form").style.display = "none";
}

function closeLoginForm() {
    document.getElementById("login-form").style.display = "none";
}

let container = document.querySelector("#productList");
// const container = document.createElement("div");
// container.setAttribute("id", "productList");

// console.log(conatiner.innerHTML)
const filPrice = document.querySelector("#pricefilter");
const filCat = document.querySelector("#categoryfilter");
LSCart = JSON.parse(localStorage.getItem("cart")) || [];

filPrice.addEventListener("change", function () {
    console.log(filPrice.value);
    if (filPrice.value == '') {
        display(fetchedData);
    }
    else {
        let filtered = fetchedData.filter((el) => {
            if (filPrice.value == "1st") {
                if (el.price < 500) {
                    return true;
                }
            }
            else if (filPrice.value == "2nd") {
                if (el.price >= 500 && el.price < 1000) {
                    return true;
                }
            }
            else if (filPrice.value == "3rd") {
                if (el.price >= 1000 && el.price < 2000) {
                    return true;
                }
            }
            else if (filPrice.value == "4th") {
                if (el.price >= 2000 && el.price < 5000) {
                    return true;
                }
            }
            else if (filPrice.value == "5th") {
                if (el.price > 5000) {
                    return true;
                }
            }
        })
        display(filtered);
    }
})
filCat.addEventListener("change", function () {
    console.log(filCat.value);
    if (filCat.value == '') {
        display(fetchedData);
    }
    else {
        let filtered = fetchedData.filter((el) => {
            if (filCat.value == "1st") {
                if (el.category == "fragrances" || el.category == "skincare") {
                    return true;
                }
            }
            else if (filCat.value == "2nd") {
                if (el.category == "groceries") {
                    return true;
                }
            }
            else if (filCat.value == "3rd") {
                if (el.category == "home-decoration") {
                    return true;
                }
            }
            else if (filCat.value == "4th") {
                if (el.category == "laptops") {
                    return true;
                }
            }
            else if (filCat.value == "5th") {
                if (el.category == "smartphones") {
                    return true;
                }
            }
        })
        display(filtered);
    }
})

const APIURL = "https://dummyjson.com/products";
let api = fetch(APIURL);
let fetchedData = [];
api.then(function (response) {
    return response.json();
}).then((data) => {
    display(data.products);
    // console.log(data.products);
    fetchedData = data.products;
})
    .catch((err) => {
        console.log(err)
    })

function display(data) {
    container.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div");

        let pic = document.createElement("img");
        let Pname = document.createElement("h4");
        let price = document.createElement("h3");
        let Category = document.createElement("h4");
        let desc = document.createElement("p");
        let add = document.createElement("button");

        pic.src = data[i].thumbnail;
        Pname.innerText = data[i].title;
        price.innerText = `$${data[i].price}`;
        Category.innerText = data[i].category;
        desc.innerText = data[i].description;
        add.innerText = "Add To Cart";
        add.setAttribute("id", "ADD");


        add.addEventListener("click", () => {
            const existingProductIndex = LSCart.findIndex((product) => product.id === data[i].id);

            if (existingProductIndex >= 0) {
                alert("Product Already in Cart");
            } else {
                LSCart.push({ ...data[i], quantity: 1 });
                localStorage.setItem("cart", JSON.stringify(LSCart));
                alert("Product Added To Cart");
            }
        })

        card.append(pic, Pname, price, Category, desc, add);
        container.append(card);
    }
}

let Search = document.querySelector("#Search");

Search.addEventListener("input", function () {
    // console.log(Search.value);
    let searchterm = Search.value.toLowerCase();
    if (searchterm === "") {
        display(fetchedData);
    }
    else {
        let results = fetchedData.filter(function (el) {
            // console.log(el.products)
            if (el.title.toLowerCase().includes(searchterm)) {
                return true
            }
        })
        display(results);
    }
})

let sortBy = document.querySelector("#sortBy");

sortBy.addEventListener("change", () => {
    if (sortBy.value === '') {
        display(fetchedData);
    } else if (sortBy.value == "lowToHigh") {
        let tempL = fetchedData.slice().sort((a, b) => { return a.price - b.price })
        display(tempL);
    } else if (sortBy.value == "highToLow") {
        let tempH = fetchedData.slice().sort((a, b) => { return b.price - a.price })
        display(tempH);
    }
})