"use strict"

class Bike {
    constructor(bikesEL) {
        this.title = bikesEL.title
        this.description = bikesEL.description
        this.price = bikesEL.price
        this.imgID = bikesEL.imgID
        this.category = bikesEL.category
    }

    toHtml() {
        return `<div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                        <a href="#"><img class="card-img-top" src="img/bikes/${this.imgID}.jpg" alt=""></a>
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="#">${this.title}</a>
                            </h4>
                            <h5>$${this.price}</h5>
                            <p class="card-text">${this.description}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">&#9733; &#9733; &#9733; &#9734; &#9734;</small>
                        </div>
                    </div>
                </div>`

    }
}
