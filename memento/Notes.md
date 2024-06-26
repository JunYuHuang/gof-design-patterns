# Notes

- name: Memento
- problem:
  - allow making and restoring from object state saves
  - directly getting state would break wrapper
- solution:
  - lets saving to and restoring from an object's old state while hiding the object's guts
- trade-offs:
  - pros
    - keeps casing borders (of classes)
    - makes originator simple
  - cons
    - mementos may be costly
    - hard to do tight and wide interfaces
    - hidden costs for caretakers
- misc
  - like saving and restoring progress in a video game via a magical spell
  - AKA snapshot, token
  - composition =
    - originator class +
    - memento class +
    - caretaker class
  - originator: object that updates and manages its state
  - memento: a frozen snapshot of an originator's internal state at some point of time
  - caretaker:
    - manages a list of memento objects
    - can restore the originator object to an earlier saved state
    - saves the mementos created by the originator
