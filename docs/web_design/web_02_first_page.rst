=======================
Your first web page
=======================

.. admonition:: Learning intentions

   * Explain what tags, elements and attributes are
   * Write the basic structure every HTML page needs
   * Use headings and paragraphs
   * Find and fix simple mistakes in HTML

----

Tags and elements
-----------------

HTML uses **tags** to mark up content. Most tags come in pairs: an **opening
tag** and a **closing tag** with a slash.

.. figure:: images/html_element.svg
   :width: 100%
   :alt: Diagram of an HTML element: opening tag p, content Hello world, closing tag with slash p

   An HTML element is the opening tag, the content and the closing tag together.

.. code-block:: html

   <p>Hello world</p>

* ``<p>`` is the **opening tag**.
* ``</p>`` is the **closing tag**. Notice the slash ``/``.
* ``Hello world`` is the **content**.
* All of it together is an **element**.

Some elements have no content and no closing tag. These are called **empty** (or
**void**) elements, for example a line break ``<br>`` and an image ``<img>``.

----

The basic page structure
------------------------

Every HTML page starts with the same skeleton.

.. code-block:: html
   :linenos:

   <!DOCTYPE html>
   <html lang="en-AU">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My first page</title>
     </head>
     <body>
       <h1>Hello, I'm Sam</h1>
       <p>This is my very first web page.</p>
     </body>
   </html>

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Line
     - What it does
   * - ``<!DOCTYPE html>``
     - Tells the browser this is a modern HTML page.
   * - ``<html lang="en-AU">``
     - Wraps the whole page. ``lang`` says the language is Australian English,
       which helps screen readers and search engines.
   * - ``<head>``
     - Information **about** the page. It is not shown on the page itself.
   * - ``<meta charset="UTF-8">``
     - Lets the page show all letters and symbols, including emoji.
   * - ``<meta name="viewport" ...>``
     - Makes the page fit phone screens properly.
   * - ``<title>``
     - The text on the browser **tab** and in search results.
   * - ``<body>``
     - Everything you **see** on the page goes in here.

.. tip::

   In VS Code, type ``!`` in an empty ``.html`` file and press **Tab**. VS Code
   writes the whole skeleton for you.

Nesting
~~~~~~~

Elements go **inside** other elements. This is called **nesting**. The ``<h1>``
is inside ``<body>``, which is inside ``<html>``. Close the inside element
**before** the outside one.

.. code-block:: html
   :class: no-copybutton

   <!-- Correct -->
   <p>This is <strong>important</strong>.</p>

   <!-- Wrong: tags cross over -->
   <p>This is <strong>important.</p></strong>

**Indent** nested elements (2 spaces) so the structure is easy to see.

----

Headings and paragraphs
-----------------------

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - Code
     - Use
   * - ``<h1>`` ... ``</h1>``
     - The main heading. Use **one** per page.
   * - ``<h2>`` to ``<h6>``
     - Smaller headings for sections and sub-sections, in order.
   * - ``<p>`` ... ``</p>``
     - A paragraph.
   * - ``<br>``
     - A line break inside a paragraph (use sparingly).
   * - ``<hr>``
     - A horizontal line between sections.
   * - ``<strong>`` ... ``</strong>``
     - Important text (shown in **bold**).
   * - ``<em>`` ... ``</em>``
     - Emphasised text (shown in *italics*).
   * - ``<!-- note -->``
     - A **comment**. Notes for people; the browser ignores them.

.. important::

   Choose a heading level for its **meaning**, not its size. ``<h2>`` is a section
   of the ``<h1>`` topic. You will change sizes later with CSS.

----

Tutorial: build "About me"
--------------------------

#. In VS Code, open the ``01_first_page`` folder from the kit.
#. Open ``index.html``. It has the skeleton but an empty body.
#. Inside ``<body>``, add:

   * an ``<h1>`` with your first name
   * an ``<h2>`` called ``About me`` and a paragraph about yourself
   * an ``<h2>`` called ``My interests`` and a paragraph about two hobbies
   * an ``<h2>`` called ``Goal for this course`` and one paragraph

#. Use ``<strong>`` for one important word and ``<em>`` for another.
#. Change the ``<title>`` to ``About [your name]``.
#. Save (**Ctrl + S**) and open the page in your browser. Check the tab text.

Your body might start like this:

.. code-block:: html

   <body>
     <h1>Sam Nguyen</h1>

     <h2>About me</h2>
     <p>I'm in Year 10 and I live in <strong>Melbourne</strong>.</p>

     <h2>My interests</h2>
     <p>I love basketball and <em>drawing comics</em>.</p>
   </body>

----

Debugging: find the mistakes
----------------------------

When a page looks wrong, check for these common bugs:

.. list-table::
   :header-rows: 1
   :widths: 40 60

   * - Bug
     - What happens
   * - A missing closing tag, such as ``<h1>Hello`` with no ``</h1>``
     - The rest of the page may turn into a giant heading
   * - A missing slash, such as ``<p>Hi<p>``
     - Starts a new paragraph instead of closing one
   * - Spelling, such as ``<hl>`` (letter L) instead of ``<h1>`` (number one)
     - The browser ignores the unknown tag
   * - Forgetting to **save**
     - Nothing changes in the browser!

.. tip::

   Paste your code into the `W3C Markup Validator <https://validator.w3.org/#validate_by_input>`_
   to find errors automatically.

----

Check your understanding
------------------------

Put the lines of this page in the correct order.

.. ordering:: html

   <!DOCTYPE html>
   <html lang="en-AU">
     <head>
       <title>My page</title>
     </head>
     <body>
       <h1>Welcome</h1>
       <p>Thanks for visiting.</p>
     </body>
   </html>

.. mcqgroup::
   :show-instant-feedback:
   :shuffle-questions:

   .. multichoice::

      Which is a correct **closing** tag?

      [ ] ``<p>`` | That is an opening tag.
      [x] ``</p>`` | Yes. Closing tags have a slash.
      [ ] ``<p/>`` | Not used for paragraphs.
      [ ] ``<\p>`` | Wrong slash direction.

   .. multichoice::

      Where does the content you **see** on the page go?

      [ ] In the <head> | The head holds information about the page.
      [x] In the <body> | Yes.
      [ ] In the <title> | The title shows on the browser tab.
      [ ] Before <!DOCTYPE html> | Nothing should go before the doctype.

   .. multichoice::

      What does the <title> element control?

      [x] The text on the browser tab | Yes, and the name in search results.
      [ ] The biggest heading on the page | That is <h1>.
      [ ] The page background | That is CSS.
      [ ] The file name | No.

   .. multichoice::

      How many <h1> headings should a page usually have?

      [x] One | Yes. It is the main heading of the page.
      [ ] None | A page should have a main heading.
      [ ] One for every section | Use <h2> for sections.
      [ ] As many as you like | Use one so the structure is clear.

   .. multichoice::

      Which code is nested correctly?

      [x] ``<p>I <em>love</em> it</p>`` | Yes. The inner element closes first.
      [ ] ``<p>I <em>love it</p></em>`` | The tags cross over.
      [ ] ``<em><p>I love it</em></p>`` | The tags cross over.
      [ ] ``<p>I <em>love it</p>`` | The <em> is never closed.

   .. multichoice::

      A page's heading and **everything after it** shows up huge. What is the most likely bug?

      [x] The <h1> has no closing tag | Yes. The browser thinks the heading never ends.
      [ ] The <title> is too long | That would not affect the page.
      [ ] The file is called index.html | That is correct.
      [ ] There is a comment | Comments are ignored.

.. clozegroup::
   :show-instant-feedback:

   .. cloze:: text

      A closing tag has a @@slash@@ before the tag name.
      An opening tag plus content plus closing tag make an @@element@@.
      Information about the page goes in the @@head@@ section.
      Everything you see on the page goes in the @@body@@ section.
      Putting elements inside other elements is called @@nesting@@.
