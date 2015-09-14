# UberDictionary

[Heroku link][heroku]

[heroku]: http://flux-capacitr.herokuapp.com

## Minimum Viable Product
UberDictionary is a clone of UrbanDictionary built on Rails and Backbone. Users can:


- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create new words with defs
- [ ] View words and defs
- [ ] Create a list of favorites
- [ ] Thumbs up, or thumbs down defs
- [ ] Search for defs by word
- [ ] Click user name for list of defs by user
- [ ] View recent/relevant defs based on current view
- [ ] Create media entries for defs (imgs, audio, etc)

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Def Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at App Academy. By the end of this phase, users will be able to create defs using a simple text form in a Rails view. The most important part of this phase will be pushing the app to Heroku and ensuring that everything works before moving on to phase 2.

[Details][phase-one]

### Phase 2: Viewing Defs (~2 days)
I will add API routes to serve def data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create defs and view defs, all
inside a single Backbone app.

[Details][phase-two]

### Phase 3: Editing and Displaying Defs (~2 days)
I plan to use third-party libraries to add functionality to the `DefForm` and
`DefShow` views in this phase. First I'll need to add a Markdown editor to the `DefForm`, and make sure that the Markdown is properly escaped and formatted in the `DefShow` view. I also plan to integrate Filepicker for file upload so users can add images or audio to defs.

[Details][phase-three]

### Phase 4: Recent Defs (~1-2 days)
I'll start by adding a `feed` route that uses the databases defs to serve a list of def posts ordered chronologically. On the Backbone side, I'll make a `FeedShow` view whose `defs` collection fetches from the new route. Ultimately, this will be the page users see after logging in.

[Details][phase-four]

### Phase 5: Searching for Defs (~2 days)
I'll need to add `search` routes to both the Defs controller. On the Backbone side, there will be a `SearchResults` composite view has a `DefsIndex` subview. These views will use plain old 'defs' collections, but they will fetch from the new `search` routes.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Custom def urls
- [ ] Pagination/infinite scroll
- [ ] Activity history (e.g. likes, user defs)
- [ ] Def types (image posts, quote posts, etc)
- [ ] Multiple sessions/session management
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
