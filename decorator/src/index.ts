interface Coffee {
    cost: () => number;
    traits: () => string[];
}

class BasicCoffee implements Coffee {
    cost() {
        return 8;
    }

    traits() {
        return ["Basic"];
    }
}

class MilkCoffee implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 3
    }

    traits() {
        return [...this.coffee.traits(), "Milk"];
    }
}

class WhipCoffee implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 5
    }

    traits() {
        return [...this.coffee.traits(), "Whip"];
    }
}

class VanillaCoffee implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 4
    }

    traits() {
        return [...this.coffee.traits(), "Whip"];
    }
}

export {
    BasicCoffee,
    MilkCoffee,
    WhipCoffee,
    VanillaCoffee
}