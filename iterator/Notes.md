# Notes

- name: Iterator
- problem:
  - need an easy interface to traverse a complex data structure group of items
  - want to avoid duplicating traversal logic for the group
  - don't know what specific data structure group to traverse in the future
- solution:
  - an easy way to go thru each item in a group in order while hiding the group's real complexity
- trade-offs:
  - pros
    - allows varied ways to traversal a group
    - dumb downs the group interface
    - can have multiple traversals in progress for a group
  - cons
    - needless if traversed groups / collections are simple
    - may be slower than directly looping thru some collections
- misc
  - like getting and playing with each toy in a box one by one via a magical wand
  - like making some group of items traversable by some order (e.g. via a loop)
  - a facade for traversing a group of items
    - group may be (e.g. tree) or may not be a complex data structure (e.g. array)
  - composed of
    - interator interface
    - iterator concrete class
    - iterable collection interface
    - collection concrete class
    - client code