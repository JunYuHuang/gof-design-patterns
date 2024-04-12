# Notes

- name: Facade
- problem:
  - need a simple way to control many unlike classes
- solution:
  - create a class with a simple interface that glues and makes many unlike classes work together
- trade-offs:
  - pros
    - splits / shields code apart from a subsystem's complexity
    - weak coupling of client code and subsystem(s)
    - client code can still use subsystems
  - cons
    - facade may become a god object
- misc
  - almost everything is a facade
  - facade is an abstraction layer over some complicated subsystem(s)
