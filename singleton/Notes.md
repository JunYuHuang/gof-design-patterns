# Notes

- name: Singleton
- problem:
  - need a class that should have at most 1 instance existing at any time
  - need global access to the object of that class
- solution:
  - build a class that has a private constructor and a static method that returns the single instance of that class
- trade-offs:
  - pros
    - strict access to sole instance
    - reduced name space (i.e. better than global variables)
    - object is initialized only once
  - cons
    - violates single responsibility
    - can mask bad design
    - need special handling in multithreaded environments
    - may be hard to unit test
- misc
  - TODO
