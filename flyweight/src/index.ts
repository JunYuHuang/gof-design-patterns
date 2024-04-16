/* The optional flyweight interface */
interface IBlock {
  render: () => string;
}

/* The shared flyweight */
class BlockType implements IBlock {
  private _type: string;
  private _variant: string;

  constructor(type: string, variant: string) {
    this._type = type;
    this._variant = variant;
  }

  render() {
    return [this._type, this._variant].toString();
  }

  id() {
    return this.render();
  }

  // helper for finding shared flyweights in the factory
  static idFrom(type: string, variant: string) {
    return [type, variant].toString();
  }
}

/* The unique flyweight / context */
class Block implements IBlock {
  posX: number;
  posY: number;
  blockType: BlockType;
  private _renderValue: string;

  constructor(blockType: BlockType, posX: number, posY: number) {
    this.blockType = blockType;
    this.posX = posX;
    this.posY = posY;
    this._renderValue = [
      this.blockType.id(), this.posX, this.posY
    ].join(",");
  }

  render() {
    return this._renderValue;
  }
}

/* The shared flyweight factory */
class BlockTypeFactory {
  static blockTypes: Map<string, BlockType> = new Map();

  static get(type: string, variant: string) {
    const id = BlockType.idFrom(type, variant);

    // if in cache, return the flyweight
    if (this.blockTypes.has(id))
      return this.blockTypes.get(id);

    // if not in cache, create and return the flyweight
    const newBlockType = new BlockType(type, variant);
    this.blockTypes.set(newBlockType.id(), newBlockType);
    return newBlockType;
  }
}

type spawnBlockArgs = {
  type: string;
  variant: string;
  posX: number;
  posY: number;
}

/* The client that uses the flyweights */
class BlockClient {
  blocks: Block[];
  blockClass: typeof Block;
  blockTypeFactoryClass: typeof BlockTypeFactory;

  // dependency injection unrelated to flyweight pattern
  constructor(
    blockClass: typeof Block,
    blockTypeFactory: typeof BlockTypeFactory
  ) {
    this.blocks = [];
    this.blockClass = blockClass;
    this.blockTypeFactoryClass = blockTypeFactory;
  }

  spawnBlock(args: spawnBlockArgs) {
    const { type, variant, posX, posY } = args;
    const blockType = this.blockTypeFactoryClass.get(type, variant)!;
    const block = new this.blockClass(blockType, posX, posY);
    this.blocks.push(block);
  }

  render() {
    const res = [];
    for (const block of this.blocks) {
      res.push(block.render());
    }
    return res.join();
  }
}

export {
  BlockClient,
  Block,
  BlockTypeFactory
}
