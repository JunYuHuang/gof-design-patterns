# Notes

- name: Composite
- problem:
  - need to make a tree-like object structure
  - want to treat both simple and complex elements the same
- solution:
  - allows composing objects into tree structures and working with them as lone objects
- trade-offs:
  - pros
    - makes ranks of basic and composite objects
    - simplifies the client interface; treats both basic and composite / complex objects the same
    - easy to add new component types
  - cons
    - may make design too general (for very unlike components)
- misc
  - like being a wizard who creates spells and arranges them into spellbooks
  - AKA N-ary tree
