# 200 WOMEN

This is the site for 200 WOMEN, and it is built using React 15.

I have tried to stick to the BEM convention (block, element, modifier) convention
for css.

Base styles (header and layout styles) are delivered via css, 
but styles for the 'item cards' are defined in javascript. This
is to decrease the size of the initial load so the first meaningful
paint happens quickly.

The site is rendered at build time, then 'rehydrated' when the javascript bundle
loads on the client machine.

# Build process:

  1. React app is rendered to a string at build time,
     passing env=node as a prop. This string is passed into
     a mustache template.

  2. SCSS and js are compiled, concatenated and minified.

# What happens when the page is loaded?

  1. First, a static version of the site is delivered in plain
     HTML which is seen by the user until 'bundle.js' loads.
     The state used for the App is DEFAULT_STATE.

  2. When 'bundle.js' has been loaded, parsed and executed, the
     React app is rendered again. If there are no changes to be made
     then the DOM is not touched (except for the attachment of event 
     listeners). In our case, since the static version does not contain
     any of the 'item cards', these will be rendered but the heading etc
     will not be.

  3. Initially, the app is rendered using DEFAULT_STATE (the same state 
     used on the server). Then, once the App component has mounted, the
     state is updated (inside componentDidMount()) with the client side state.

     We use DEFAULT_STATE initially so that the render tree can be updated efficiently
     via setState. If the client state was used straight away, the whole tree would
     have to be discarded and re-rendered.