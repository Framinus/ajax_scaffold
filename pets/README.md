# Scaffolding for an AJAX demo
## The object:
- The pet name field is a text input (this is already part of the scaffold)
- When user hits <return> in the pet name field, record the change in the db via AJAX.
- After AJAX completes, display success / failure message on page in the browser.

## Implementation
- create click event on input field submit.
- have fetch call to route send new pet name to route.
- use get route to imbed pet id into page so that can get grabbed, too? (not sure if necessary, but easier for sure.)
- Set up post route to call updatePetName and change name in database.

## To install from scratch:

1. Fork or clone the repo
2. `$ npm install`
3. `$ npm run db:create`
4. `$ npm run db:seed`
5. `$ npm run dev:start`
