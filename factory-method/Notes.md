# Notes

- name: Factory Method
- problem:
  - need an interface for creating objects of unlike classes / types
  - don't know which specific objects to make ahead of time
- solution:
  - use a super class that entrusts object creation to its subclasses
  - subclasses may change the created objects
- trade-offs:
  - pros
    - avoids tight binding / coupling between creator and concrete classes
    - gives hooks for subclasses
    - connects parallel class hierarchies?
  - cons
    - client code may subclass the super class to make a specific concrete super class?
    - more complexity due to new subclasses
- misc
  - like having a magical potion making machine that can create different types of potions
  - AKA virtual constructor
