# Countdown To Percent Pledge

## Application Notes

- I've linked `Materialize` directly through their CDN due to some ongoing gem maintenance and deprecation issues. My preference for a production application is to bring that kind of thing in-house to be able to control when we do upgrades in order to be able to predict when and if designs will break. 

- The countdown is set to start 14 days out from whenever you start it. If we were to build out a real-world counter, we'd need to build in use cases for ending states, as well as edge cases.

## Required Elements
- See a live countdown timer that ticks down every second (start the count at 14 days)
- See hover states for all interactive elements on the page
- Fully responsive design at all screen sizes
- Mouseover elements for all social icons
- Good commit history


## Bonus Elements
- Unit tests
- Make the countdown timer flip in the middle


## Technical Specifications

- Use RoR, Ruby, ERB, HTML, CSS, JS
- Optional: `sassc-rails`, `Materialize`, `ViewComponent`, `Stimulus`, or other frameworks or pre-processors as necessary

## Evaluation Criteria

- Completeness: Does your timer meet the requirements established in the brief?
- Correctness: Does the functionality act in sensible, thought-out ways?
- Responsiveness: Is the countdown timer responsive and does it function sensibly at different screen/device sizes?
- Maintainability: Is it written in a clean, maintainable way?
- Accessibility: Do any user interactions with the timer follow WCAG/accessibility best practices? (We're aware that the colorways indicated in the design do not meet color contrast standards.)