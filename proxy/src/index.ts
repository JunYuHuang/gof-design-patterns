/*
The subject / service interface common to both the real subject and proxy
*/
interface Hashmap {
  get: (key: string) => string | null;
  set: (key: string, value: string) => void;
}

/* The real subject / service */
class MyHashmap implements Hashmap {
  private _keyToValue: { [key: string]: string };

  constructor() {
    this._keyToValue = Object.create(null);
  }

  get(key: string) {
    if (!(key in this._keyToValue)) return null;
    return this._keyToValue[key];
  }

  set(key: string, value: string) {
    this._keyToValue[key] = value;
  }
}

/* The proxy for the real subject / service */
class MyHashmapLogger implements Hashmap {
  private _myHashmap: MyHashmap;
  private _logs: string[];

  constructor(myHashmap: MyHashmap) {
    this._myHashmap = myHashmap;
    this._logs = [] as string[];
  }

  get(key: string) {
    const res = this._myHashmap.get(key);
    this._logs.push(`get('${key}') returned '${res}'`);
    return res;
  }

  set(key: string, value: string) {
    this._myHashmap.set(key, value);
    this._logs.push(`set('${key}', '${value}') called`);
  }

  logs() {
    return this._logs;
  }
}

export {
  MyHashmap,
  MyHashmapLogger
}
