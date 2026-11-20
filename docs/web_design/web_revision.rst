====================
Web design revision
====================

Vocabulary flashcards
---------------------

.. flashcards:: Web design words
   :id: y10mm-web-vocab
   :shuffle:

   # How the web works
   Browser | The app that shows web pages, such as Chrome or Edge
   Web server | A computer that stores websites and sends them when asked
   URL | The full address of a web page
   DNS | Turns a domain name into an IP address
   HTTPS | The secure, encrypted way browsers and servers talk

   # HTML
   Tag | A keyword in angle brackets, such as <p>
   Element | An opening tag, its content and the closing tag together
   Attribute | Extra information inside an opening tag, such as href="about.html"
   Alt text | A description of an image for people who cannot see it
   Semantic element | An element whose name describes its purpose, such as <nav> or <footer>
   Relative path | A file path worked out from the current page, such as images/dog.jpg

   # CSS
   Selector | The part of a CSS rule that chooses which elements to style
   Property | What you are changing, such as color or font-size
   Class | A reusable name for styling elements, selected with a dot
   Box model | Content, padding, border and margin around every element
   Flexbox | A CSS layout tool for arranging items in a row or column
   Media query | CSS that only applies at certain screen sizes
   Cascade | The rules CSS uses to decide which style wins

   # Design and JavaScript
   UX | User experience: how easy and pleasant a site is to use
   UI | User interface: how a site looks
   Wireframe | A simple box sketch of a page layout
   DOM | The browser's model of the page as objects JavaScript can change
   Event | Something that happens, such as a click
   Accessibility | Making websites that everyone can use

Mixed quiz
----------

.. mcqgroup::
   :show-instant-feedback:
   :shuffle-questions:
   :num-questions: 10

   .. multichoice::

      Which language controls the **presentation** of a web page?

      [ ] HTML | HTML is content and structure.
      [x] CSS | Correct.
      [ ] JavaScript | JavaScript is behaviour.
      [ ] Python | Not used in the browser here.

   .. multichoice::

      Which tag makes a link?

      [x] ``<a>`` | Correct.
      [ ] ``<link>`` | That links a stylesheet.
      [ ] ``<href>`` | ``href`` is an attribute.
      [ ] ``<url>`` | Not a real tag.

   .. multichoice::

      Which selector means "the element with id ``logo``"?

      [x] ``#logo`` | Correct.
      [ ] ``.logo`` | That is a class.
      [ ] ``logo`` | That is an element name.
      [ ] ``*logo`` | Not valid.

   .. multichoice::

      In the box model, which layer is outside the border?

      [x] Margin | Correct.
      [ ] Padding | Padding is inside.
      [ ] Content | Content is in the middle.
      [ ] Outline | Not part of the box model we studied.

   .. multichoice::

      Which property turns on flexbox?

      [x] ``display: flex;`` | Correct.
      [ ] ``flex: on;`` | Not valid.
      [ ] ``layout: flex;`` | Not valid.
      [ ] ``position: flex;`` | Not valid.

   .. multichoice::

      Why does ``color: navy;`` work but ``colour: navy;`` does not?

      [x] CSS uses American spelling | Correct.
      [ ] Navy is not a colour | It is.
      [ ] The semicolon is wrong | It is fine.
      [ ] Capitals are needed | No.

   .. multichoice::

      Which is the best alt text?

      [x] ``alt="Animated GIF of a skateboard rolling across a sunset banner"`` | Correct.
      [ ] ``alt="gif"`` | Too vague.
      [ ] ``alt="banner_final_v3.gif"`` | A file name is not a description.
      [ ] No alt at all | Every image needs alt.

   .. multichoice::

      What does a media query like ``@media (max-width: 600px)`` do?

      [x] Applies CSS only when the screen is 600px wide or less | Correct.
      [ ] Limits images to 600px | Not exactly.
      [ ] Makes every page 600px wide | No.
      [ ] Plays media | No.

   .. multichoice::

      In JavaScript, what does ``addEventListener("click", showMenu)`` do?

      [x] Runs ``showMenu`` when the element is clicked | Correct.
      [ ] Runs ``showMenu`` straight away | Only when clicked.
      [ ] Creates a new button | No.
      [ ] Deletes the menu | No.

   .. multichoice::

      A wireframe shows...

      [x] where things go on a page, using simple boxes | Correct.
      [ ] the finished colours and photos | That is a mock-up.
      [ ] all the pages and links | That is a site map.
      [ ] the CSS code | No.

   .. multichoice::

      What should the home page file always be called?

      [x] ``index.html`` | Correct.
      [ ] ``home.html`` | Servers look for index.html.
      [ ] ``Index.HTML`` | Use lower case.
      [ ] ``main page.html`` | No spaces.

   .. multichoice::

      Which element should hold the main menu of links?

      [x] ``<nav>`` | Correct.
      [ ] ``<menu-bar>`` | Not a real element.
      [ ] ``<footer>`` | That is the bottom of the page.
      [ ] ``<aside>`` | That is side content.

Crossword
---------

.. crossword:: Web design crossword
   :wordbank:

   BROWSER    | App that shows web pages
   SERVER     | Computer that sends web pages when asked
   ELEMENT    | Opening tag, content and closing tag together
   ATTRIBUTE  | Extra information inside an opening tag
   SELECTOR   | Chooses which elements a CSS rule styles
   PADDING    | Space inside the border of a box
   MARGIN     | Space outside the border of a box
   FLEXBOX    | CSS tool for rows and columns
   WIREFRAME  | Simple box sketch of a page layout
   RESPONSIVE | Fits any screen size
   EVENT      | Something that happens, like a click
   CLASS      | CSS name selected with a dot

Word search
-----------

.. wordsearch:: Web design word search
   :directions: medium
   :answers: button

   HTML
   CSS
   JAVASCRIPT
   BROWSER
   SERVER
   HEADING
   PARAGRAPH
   LINK
   IMAGE
   SELECTOR
   PADDING
   MARGIN
   FLEXBOX
   NAVIGATION
   WIREFRAME
