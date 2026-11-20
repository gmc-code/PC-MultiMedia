====================================
Adding interactivity with JavaScript
====================================

.. admonition:: Learning intentions

   * Link a JavaScript file to a page
   * Use variables, functions and events
   * Explain that page elements are **objects** with properties and methods
   * Build a dark mode button and a clickable image gallery
   * Use the browser console to find and fix errors

----

What JavaScript does
--------------------

HTML is the structure and CSS is the look. **JavaScript** is the behaviour: it
makes things happen when the user clicks, types or scrolls. It is a real
programming language, like Python.

Linking a script
~~~~~~~~~~~~~~~~

Put your code in a file called ``script.js`` and link it at the **end** of the
``<body>``, so the page loads first:

.. code-block:: html

   <body>
     ... your page ...
     <script src="script.js"></script>
   </body>

----

The building blocks
-------------------

If you have used Python, much of this will look familiar.

.. list-table::
   :header-rows: 1
   :widths: 25 40 35

   * - Idea
     - JavaScript
     - Python
   * - Variable
     - ``let score = 0;``
     - ``score = 0``
   * - Constant
     - ``const name = "Sam";``
     - (by convention) ``NAME = "Sam"``
   * - Print for testing
     - ``console.log(score);``
     - ``print(score)``
   * - If statement
     - ``if (score > 10) { ... }``
     - ``if score > 10:``
   * - Function
     - ``function sayHi() { ... }``
     - ``def say_hi():``
   * - Comment
     - ``// a comment``
     - ``# a comment``

* JavaScript uses ``{ }`` for blocks instead of indentation (but **indent anyway**
  so it is readable).
* Lines end with a semicolon ``;``.
* Names are usually written in **camelCase**: ``darkModeButton``.

----

Elements are objects
--------------------

When the browser reads your HTML it builds a model of the page called the
**DOM** (Document Object Model). Every element becomes an **object**. Objects
have:

* **Properties**: information about the object, such as ``textContent`` (its
  text) or ``src`` (an image's file).
* **Methods**: things the object can do, such as ``addEventListener()`` or
  ``classList.toggle()``.

.. code-block:: javascript

   // Find an element and store the object in a variable
   const heading = document.querySelector("h1");

   // Change a property
   heading.textContent = "Welcome back!";

   // Use a method
   heading.classList.add("highlight");

``document.querySelector()`` finds the **first** element that matches a CSS
selector, so you can use ``"h1"``, ``".card"`` or ``"#menu"``, just like in CSS.

----

Events
------

An **event** is something that happens, like a click. You tell an element to
**listen** for an event and run a function when it happens.

.. code-block:: javascript

   const button = document.querySelector("#hello-button");

   function showMessage() {
     alert("Hello!");
   }

   button.addEventListener("click", showMessage);

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - Event
     - Happens when
   * - ``click``
     - The element is clicked or tapped
   * - ``mouseover``
     - The mouse moves onto the element
   * - ``input``
     - The user types in a text box
   * - ``submit``
     - A form is submitted
   * - ``keydown``
     - A key is pressed

----

Tutorial 1: dark mode button
----------------------------

Open the ``08_javascript`` folder from the kit.

Step 1: HTML
~~~~~~~~~~~~

Add a button inside your ``<header>``:

.. code-block:: html

   <button id="theme-button">Dark mode</button>

Step 2: CSS
~~~~~~~~~~~

Add styles for a ``dark`` class on the body:

.. code-block:: css

   body.dark {
     background-color: #121212;
     color: #eeeeee;
   }

   body.dark a {
     color: #8ab4f8;
   }

Step 3: JavaScript
~~~~~~~~~~~~~~~~~~

In ``script.js``:

.. code-block:: javascript

   const themeButton = document.querySelector("#theme-button");

   function toggleTheme() {
     document.body.classList.toggle("dark");

     // Change the button text to match
     if (document.body.classList.contains("dark")) {
       themeButton.textContent = "Light mode";
     } else {
       themeButton.textContent = "Dark mode";
     }
   }

   themeButton.addEventListener("click", toggleTheme);

``classList.toggle("dark")`` adds the class if it is missing and removes it if it
is there. The **CSS** does the styling; the **JavaScript** only switches the class.
This keeps the three languages doing their own jobs.

----

Tutorial 2: a clickable gallery
-------------------------------

Show one big image. When a small thumbnail is clicked, the big image changes.

.. code-block:: html

   <img id="big-image" src="images/work1.png" alt="Bouncing ball GIF">

   <div class="thumbnails">
     <img src="images/work1.png" alt="Bouncing ball GIF">
     <img src="images/work2.png" alt="Riverbend garden post">
     <img src="images/work3.png" alt="Skate park banner">
   </div>

.. code-block:: css

   .thumbnails {
     display: flex;
     gap: 10px;
   }

   .thumbnails img {
     width: 100px;
     cursor: pointer;
     border: 3px solid transparent;
   }

   .thumbnails img.selected {
     border-color: #f9c80e;
   }

.. code-block:: javascript

   const bigImage = document.querySelector("#big-image");
   const thumbnails = document.querySelectorAll(".thumbnails img");

   function showImage(event) {
     const clicked = event.target;          // the thumbnail that was clicked
     bigImage.src = clicked.src;            // copy its picture
     bigImage.alt = clicked.alt;            // and its alt text

     // Move the yellow border to the clicked thumbnail
     for (const thumb of thumbnails) {
       thumb.classList.remove("selected");
     }
     clicked.classList.add("selected");
   }

   for (const thumb of thumbnails) {
     thumb.addEventListener("click", showImage);
   }

``querySelectorAll`` finds **all** matching elements, and the ``for`` loop adds the
same event listener to each one. Notice that ``showImage`` is one **reusable
function** used by every thumbnail: this is **modular** code.

----

Debugging JavaScript
--------------------

When JavaScript breaks, nothing happens, so you need the **console**.

#. Press **F12** and click the **Console** tab.
#. Red messages are errors. Each shows the file and **line number**.
#. Add ``console.log("got here");`` inside a function to check it runs.

.. list-table::
   :header-rows: 1
   :widths: 50 50

   * - Error message
     - Likely cause
   * - ``Cannot read properties of null``
     - ``querySelector`` found nothing. Check the id or class spelling, and that
       ``#`` or ``.`` is included.
   * - ``... is not defined``
     - A typo in a variable or function name. JavaScript is **case sensitive**:
       ``themebutton`` is not ``themeButton``.
   * - ``Unexpected token``
     - A missing or extra bracket, brace or quote.
   * - No error, nothing happens
     - Is the ``<script>`` tag linked? Did you save? Is the event name spelled
       ``"click"``?

----

Extension challenges
--------------------

* Make a **"back to top"** button that runs ``window.scrollTo(0, 0);``.
* Add a **greeting** that says "Good morning", "Good afternoon" or "Good evening"
  using ``new Date().getHours()`` and an ``if``/``else if``/``else``.
* Make a **show/hide** section: a button that toggles a ``hidden`` class on a
  paragraph.

----

Check your understanding
------------------------

.. ordering:: javascript

   const button = document.querySelector("#theme-button");
   function toggleTheme() {
     document.body.classList.toggle("dark");
   }
   button.addEventListener("click", toggleTheme);

.. mcqgroup::
   :show-instant-feedback:
   :shuffle-questions:

   .. multichoice::

      Where is the best place to put ``<script src="script.js"></script>``?

      [x] At the end of the ``<body>`` | Yes. The page elements exist before the script runs.
      [ ] Before ``<!DOCTYPE html>`` | Nothing goes before the doctype.
      [ ] Inside the ``<title>`` | No.
      [ ] In the CSS file | No.

   .. multichoice::

      What does ``document.querySelector("#menu")`` do?

      [x] Finds the element with the id ``menu`` | Yes.
      [ ] Creates a new menu | No.
      [ ] Deletes the menu | No.
      [ ] Finds all elements with the class ``menu`` | Class uses a dot, and this finds only the first.

   .. multichoice::

      In ``heading.textContent = "Hi";``, what is ``textContent``?

      [x] A property of the heading object | Yes.
      [ ] A method | Methods are called with brackets, like ``toggle()``.
      [ ] An event | No.
      [ ] A CSS selector | No.

   .. multichoice::

      What does ``classList.toggle("dark")`` do?

      [x] Adds the class if it is missing, removes it if it is there | Yes.
      [ ] Always adds the class | That is ``add``.
      [ ] Always removes the class | That is ``remove``.
      [ ] Changes the colour to black | The CSS does the styling.

   .. multichoice::

      The console says ``Cannot read properties of null``. What is the most likely cause?

      [x] ``querySelector`` did not find the element, often because of a spelling mistake | Yes.
      [ ] The CSS file is missing | That would not cause this error.
      [ ] The image is too big | No.
      [ ] JavaScript is turned off | Then there would be no error.

   .. multichoice::

      Which event runs when a button is clicked or tapped?

      [x] ``click`` | Yes.
      [ ] ``press`` | Not a standard event name.
      [ ] ``tap`` | Not a standard event name.
      [ ] ``submit`` | That is for forms.

.. clozegroup::
   :show-instant-feedback:

   .. cloze:: text

      The model of the page that JavaScript can change is called the @@DOM@@.
      Information about an object such as its text is a @@property@@.
      Something an object can do such as toggle a class is a @@method@@.
      Something that happens such as a click is an @@event@@.
      To print a message for testing you use console.@@log@@.
