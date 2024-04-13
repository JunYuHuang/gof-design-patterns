/* The component interface */
abstract class Component {
  protected _cost: number;

  constructor(cost: number) {
    this._cost = cost;
  }

  /* An `operation()` method common to both leaves and composites */
  abstract cost(): number;

  add(component: Component) { }

  remove(component: Component) { }

  children() {
    return [] as Component[];
  }
}

/* The leaf */
class Product extends Component {
  cost() {
    return this._cost;
  }
}

/* The composite */
class Box extends Component {
  private _children: Component[];

  constructor(cost: number) {
    super(cost);
    this._children = [] as Component[];
  }

  cost() {
    let res = this._cost;
    for (const child of this._children) {
      res += child.cost();
    }
    return res;
  }

  add(component: Component) {
    this._children.push(component);
  }

  remove(component: Component) {
    this._children = this._children.filter(
      (oldComp) => oldComp !== component
    );
  }

  children() {
    return this._children;
  }
}

export {
  Product,
  Box
}
