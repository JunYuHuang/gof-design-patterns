interface BentoInterface {
  carb: string;
  protein: string;
  vegetable: string;
  condiments: string[];
}

abstract class Bento {

  /*
  The template method. In languages that support it, this method would have a `final` modifier that prevents the method from being overriden in the `Bento` class' concrete subclasses.
  */
  make() {
    this.addCarb();
    this.addProtein();
    this.addVegetable();
    this.addCondimentsHook();
  }

  /* A method that must be implemented by a concrete subclass */
  abstract addCarb(): void;

  /* A method that must be implemented by a concrete subclass */
  abstract addProtein(): void;

  /* A method that must be implemented by a concrete subclass */
  abstract addVegetable(): void;

  /* A hook that may be overridden by a concrete subclass */
  addCondimentsHook() { }
}

class RiceBento extends Bento implements BentoInterface {
  carb = "";
  protein = "";
  vegetable = "";
  condiments: string[] = [];

  addCarb() {
    this.carb = "white rice";
  }

  addProtein() {
    this.protein = "smoked salmon";
  }

  addVegetable() {
    this.vegetable = "broccoli";
  }
}

class NoodleBento extends Bento implements BentoInterface {
  carb = "";
  protein = "";
  vegetable = "";
  condiments: string[] = [];

  addCarb() {
    this.carb = "ramen noodles";
  }

  addProtein() {
    this.protein = "braised beef";
  }

  addVegetable() {
    this.vegetable = "bok choy";
  }

  addCondimentsHook() {
    this.condiments.push("soy sauce", "teriyaki sauce");
  }
}

export {
  RiceBento,
  NoodleBento,
}
