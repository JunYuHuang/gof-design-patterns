namespace NaturalNumberToEmoji {
  /* The context */
  class Context {
    input: number;
    output: string;

    constructor(input: number) {
      this.input = input;
      this.output = "";
    }
  }

  /* The expression abstract class or interface */
  interface Expression {
    interpret: (context: Context) => void;
  }

  /* A terminal expression */
  /*
  2+ terminal expressions and 1+ non-terminal expressions are omitted to keep it simple.
  */
  class DigitExpression implements Expression {
    static toEmoji = new Map([
      [0, "0️⃣"],
      [1, "1️⃣"],
      [2, "2️⃣"],
      [3, "3️⃣"],
      [4, "4️⃣"],
      [5, "5️⃣"],
      [6, "6️⃣"],
      [7, "7️⃣"],
      [8, "8️⃣"],
      [9, "9️⃣"],
    ]);

    interpret(context: Context) {
      // base cases
      const input = context.input;
      if (Number.isNaN(input)) return;
      if (!Number.isInteger(input) || input < 0) {
        context.output = "💥";
        return;
      }

      // recursive case
      const output = context.output;
      const lastDigit = input % 10;
      const nextInput = Math.floor(input / 10) === 0 ?
        NaN : Math.floor(input / 10);
      const emoji = DigitExpression.toEmoji.get(lastDigit);
      context.output = emoji + output;
      context.input = nextInput;
      this.interpret(context);
    }
  }

  /* The client interpreter program */
  export class Program {
    interpret(naturalNumber: number) {
      const context = new Context(naturalNumber);
      const syntaxTree = [new DigitExpression()];

      for (const node of syntaxTree) {
        node.interpret(context);
      }

      return context.output;
    }
  }
}

export { NaturalNumberToEmoji };
