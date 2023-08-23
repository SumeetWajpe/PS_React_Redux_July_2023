export class ProductModel {
    constructor(id = 0, title = "", price = 0, rating = 0, likes = 0, imageUrl = "", description = "") {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.likes = likes;
        this.imageUrl = imageUrl;
        this.description = description;
    }
}
