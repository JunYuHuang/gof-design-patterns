/* An optional request class */
class StringRequest {
  input: string;
  handlerMethod: string;

  constructor(input: string, handlerMethod: string) {
    this.input = input;
    this.handlerMethod = handlerMethod;
  }
}

/* The handler interface */
interface IStringHandler {
  setNextHandler: (handler: IStringHandler) => void;
  handle: (request: StringRequest) => string;
}

/* An optional base handler class */
abstract class BaseStringHandler implements IStringHandler {
  nextHandler: IStringHandler | null = null;

  handle(request: StringRequest) {
    return request.input;
  }

  setNextHandler(handler: IStringHandler) {
    this.nextHandler = handler;
  }
}

// ========================
// CONCRETE HANDLER CLASSES
// ========================

class UnknownStringHandler extends BaseStringHandler { }

class TrimStringHandler extends BaseStringHandler {
  handle(request: StringRequest) {
    if (request.handlerMethod !== "trim") {
      return this.nextHandler!.handle(request);
    }
    return request.input.trim();
  }
}

class ToUpperCaseStringHandler extends BaseStringHandler {
  handle(request: StringRequest) {
    if (request.handlerMethod !== "uppercase") {
      return this.nextHandler!.handle(request);
    }
    return request.input.toUpperCase();
  }
}

class ToLowerCaseStringHandler extends BaseStringHandler {
  handle(request: StringRequest) {
    if (request.handlerMethod !== "lowercase") {
      return this.nextHandler!.handle(request);
    }
    return request.input.toLowerCase();
  }
}

export {
  StringRequest,
  UnknownStringHandler,
  TrimStringHandler,
  ToUpperCaseStringHandler,
  ToLowerCaseStringHandler
}
