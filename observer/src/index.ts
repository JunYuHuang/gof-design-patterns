interface GameEventListener {
    id: string;
    update: (gameEvent: string) => any;
}

type listenersType = {
    [id: string] : GameEventListener
}

class GameEventManager {
    private _listeners: listenersType;
    private _events: string[];

    constructor() {
        this._listeners = Object.create(null);
        this._events = [];
    }

    addListener(listener: GameEventListener) {
        this._listeners[listener.id] = listener;
    }

    removeListener(listenerId: string) {
        delete this._listeners[listenerId];
    }

    notify(event: string) {
        this._events.push(event);
        for (const listener of Object.values(this._listeners)) {
            listener.update(event);
        }
    }
}

class GameClient implements GameEventListener {
    private _id: string;
    private _loggedGameEvents: string[];

    constructor(id: string) {
        this._id = id;
        this._loggedGameEvents = [];
    }

    get id() {
        return this._id;
    }

    update(gameEvent: string) {
        this._loggedGameEvents.push(gameEvent);
    }

    loggedGameEvents() {
        return this._loggedGameEvents;
    }
}

export {
    GameEventManager,
    GameClient
}