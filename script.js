let parent = document.querySelector(".cards");

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((obj) => {
            let card = document.createElement("div")
            card.className = "card";

            card.innerHTML = `
            <div class="text">
                <h2>${obj.title}</h2>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <span>${obj.rating.rate}</span>
                </div>
                <p class="left">Items left: ${obj.rating.count}</p>
                <p class="details">${obj.description}</p>
            </div>
            <div class="pricing">
                <div class="image" data-price=$${obj.price}>
                    <img src="${obj.image}" class="card-img-top" alt="...">
                </div>
                <a href="#">Shop Now</a>
            </div>
        `

            parent.appendChild(card);
        })
    }).catch((err) => {
        const errElement = document.createElement("h1");
        errElement.innerHTML = `No Data Found (${err})`;
        errElement.style.color = "white";
        errElement.style.textAlign = "center";
        parent.appendChild(errElement);
    })