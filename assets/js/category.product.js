class Category { //categoria possui varios produtos => 1:N
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

