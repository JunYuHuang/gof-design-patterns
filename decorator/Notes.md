# Notes

- name: Decorator
- problem:
  - need to add extra power / features to an object during on the fly (i.e. during run time)
  - don't want to update the object's class
- solution:
  - create an outer object that wraps and adds extra power to an inner object of a different class
  - pros
    - more flexible than (static) inheritance
    - avoids premature super class(es) abstractions
  - cons
    - a decorator and its wrappee are unlike
    - many little objects
- misc
  - i.e. wrapper
  - like adding extra ingredients to a magical potion to improves its power
  - like wearing layered clothing