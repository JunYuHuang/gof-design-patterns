/* The product class. `JiaoZi` is a kind of Chinese dumpling. */
class JiaoZi {
  fillings: string[] = [] as string[];
  cookStyle: string = "raw";
}

/* The builder interface */
interface JiaoZiBuilder {
  reset: () => void;
  addFilling: (filling: string) => void;
  setCookStyle: (cookStyle: string) => void;
  getJiaoZi: () => JiaoZi;
}

/* A concrete builder class */
class MyJiaoZiBuilder implements JiaoZiBuilder {
  private _jiaoZi: JiaoZi;

  constructor() {
    this._jiaoZi = new JiaoZi();
  }

  reset() {
    this._jiaoZi = new JiaoZi();
  }

  addFilling(filling: string) {
    this._jiaoZi.fillings.push(filling);
  }

  setCookStyle(cookStyle: string) {
    this._jiaoZi.cookStyle = cookStyle;
  }

  getJiaoZi() {
    const res = this._jiaoZi;
    this.reset();
    return res;
  }
}

export {
  MyJiaoZiBuilder
}
