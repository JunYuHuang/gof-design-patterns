# Notes

- name: Command
- problem:
  - need to make a request its own object
  - need to delay a request's fulfillment
  - need to support undo's
- solution:
  - wrap requests as complete objects so they can be delayed or undone
- trade-offs:
  - pros
    - splits work caller from work doer
    - commands are first-class objects and flexible
    - commands are composable
    - easy to add new commands
  - cons
    - more complexity / code
- misc
  - like ordering food at a restaurant
