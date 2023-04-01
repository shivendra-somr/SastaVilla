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


function openRegistrationForm() {
    document.getElementById("registration-form").style.display = "block";
}

function closeRegistrationForm() {
    document.getElementById("registration-form").style.display = "none";
}

let container = document.querySelector("#productList");
// const container = document.createElement("div");
// container.setAttribute("id", "productList");

// console.log(conatiner.innerHTML)
// const fil = document.querySelector("#filter");
LSCart = JSON.parse(localStorage.getItem("cart")) || [];

// fil.addEventListener("change", function () {
//     if (fil.value == '') {
//         display(fetchedData);
//     }
//     else {
//         let filtered = fetchedData.filter((el) => {
//             if (fil.value == el.category) {
//                 return true;
//             }
//         })
//         display(filtered);
//     }
// })

const APIURL = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";
let api = fetch(APIURL);
let fetchedData = [];
api.then(function (response) {
    return response.json();
}).then((data) => {
    display(data.data);
    // console.log(data.data);
    fetchedData = data.data;
})
    .catch((err) => {
        console.log(err)
    })

function display(data) {
    container.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div");

        let pic = document.createElement("img");
        let Pname = document.createElement("h2");
        let price = document.createElement("p");
        let Category = document.createElement("h4");
        let desc = document.createElement("p");
        let add = document.createElement("button");

        pic.src = data[i].img;
        Pname.innerText = data[i].brand;
        price.innerText = `₹${data[i].price}`;
        Category.innerText = data[i].category;
        desc.innerText = data[i].details;
        add.innerText = "Add To Cart";



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

