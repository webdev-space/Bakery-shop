function showcaseItems(url , Name , About) {
    let items = document.body.querySelector(".items-grid")
    let itemcard = document.createElement('div')
    itemcard.classList.add("card")
    // itemcard.classList.add("show")
    itemcard.innerHTML = `<div class="items-info">
                    <div class="items-img"><img src="${url}" alt=""></div>
                    <div class="item-name items">${Name}</div>
                    <div class="item-about items">${About}</div>
                    <div class="item-button">Order Now</div>
                </div>
                `
    items.append(itemcard)
    
    console.log("hello")
}

showcaseItems("assets\\images\\crossian.jpeg" , "Crossiann", "Its a french sweet.")
showcaseItems("assets\\images\\glazed-chocolate-donuts-thumbnail.jpg" , "glazed chocolate donuts",)
showcaseItems("assets\\images\\cookies.jpeg" , "Cookies", "Its a french sweet.")
showcaseItems("assets\\images\\macrons.jpeg" , "Macrons", "Its a french sweet.")
showcaseItems("assets\\images\\crossian.jpeg" , "Crossiann", "Its a french sweet.")
showcaseItems("assets\\images\\glazed-chocolate-donuts-thumbnail.jpg" , "glazed chocolate donuts",)
showcaseItems("assets\\images\\cookies.jpeg" , "Cookies", "Its a french sweet.")
showcaseItems("assets\\images\\macrons.jpeg" , "Macrons", "Its a french sweet.")

const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));