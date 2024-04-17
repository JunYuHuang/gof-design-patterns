namespace Chat {
  type Message = {
    to: string;
    from: string;
    body: string;
  }

  /* The mediator interface */
  interface IRoom {
    addUser: (user: User) => void;
    send: (message: Message) => void;
  }

  /* The concrete mediator */
  export class Room implements IRoom {
    allMessages: Message[];
    users: { [name: string]: User };

    constructor() {
      this.allMessages = [];
      this.users = Object.create(null);
    }

    addUser(user: User) {
      this.users[user.name] = user;
    }

    send(message: Message) {
      const isTargetUserHere = message.to in this.users;
      if (!isTargetUserHere) return;

      this.allMessages.push(message);
      this.users[message.to].take(message);
    }
  }

  /* The concrete colleague / component */
  export class User {
    name: string;
    room: Room;
    takenMessages: Message[];

    constructor(name: string, room: Room) {
      this.name = name;
      this.room = room;
      this.takenMessages = [];
    }

    send(to: string, body: string) {
      const message = { from: this.name, to, body };
      this.room.send(message);
    }

    take(message: Message) {
      this.takenMessages.push(message);
    }
  }
}

export { Chat };
