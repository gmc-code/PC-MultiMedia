===========================
Lists, tables and media
===========================

.. admonition:: Learning intentions

   * Make bulleted and numbered lists
   * Show data in a table with headings
   * Embed video and audio
   * Use a simple form

----

Lists
-----

.. list-table::
   :header-rows: 1
   :widths: 50 50

   * - Code
     - Result
   * - .. code-block:: html

          <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Mangoes</li>
          </ul>

     - **Unordered list** (bullets). Use when order does not matter.

       * Apples
       * Bananas
       * Mangoes
   * - .. code-block:: html

          <ol>
            <li>Open Photoshop</li>
            <li>Make the frames</li>
            <li>Export the GIF</li>
          </ol>

     - **Ordered list** (numbers). Use for steps or rankings.

       1. Open Photoshop
       2. Make the frames
       3. Export the GIF

* ``<ul>`` = unordered list, ``<ol>`` = ordered list
* ``<li>`` = list item. Every item goes in its own ``<li>``.
* Lists can be **nested**: put a whole ``<ul>`` inside an ``<li>``.

.. note::

   Website **navigation menus** are usually lists of links. You will style one in
   :doc:`web_07_layout_flexbox`.

   .. code-block:: html

      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="gallery.html">Gallery</a></li>
        </ul>
      </nav>

----

Tables
------

Tables are for **data** that has rows and columns, such as a timetable or
results. (Do not use tables to lay out a whole page. That is CSS's job.)

.. code-block:: html

   <table>
     <caption>Australian capital cities</caption>
     <thead>
       <tr>
         <th>City</th>
         <th>State or territory</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>Melbourne</td>
         <td>Victoria</td>
       </tr>
       <tr>
         <td>Darwin</td>
         <td>Northern Territory</td>
       </tr>
     </tbody>
   </table>

.. list-table::
   :header-rows: 1
   :widths: 25 75

   * - Tag
     - Meaning
   * - ``<table>``
     - The whole table
   * - ``<caption>``
     - A title for the table (helps screen readers)
   * - ``<thead>`` / ``<tbody>``
     - The heading part and the body part
   * - ``<tr>``
     - A table **row**
   * - ``<th>``
     - A **heading** cell (bold and centred by default)
   * - ``<td>``
     - A **data** cell

----

Video and audio
---------------

Your own video or audio file:

.. code-block:: html

   <video src="media/my_animation.mp4" controls width="640"></video>

   <audio src="media/theme.mp3" controls></audio>

``controls`` shows the play, pause and volume buttons. Use **MP4** for video and
**MP3** for audio, as all browsers can play them.

A YouTube video: click **Share > Embed** under the video and copy the
``<iframe>`` code into your page.

.. code-block:: html
   :class: no-copybutton

   <iframe width="560" height="315"
           src="https://www.youtube.com/embed/VIDEO_ID"
           title="Video about stop motion animation"
           allowfullscreen></iframe>

.. warning::

   Do not set videos to play automatically with sound. Visitors find it annoying,
   and it is an accessibility problem.

----

A simple form
-------------

Forms collect information. In this course your forms will not send data
anywhere, but they show you how forms are built.

.. code-block:: html

   <form>
     <label for="name">Your name</label>
     <input type="text" id="name" name="name" required>

     <label for="email">Email</label>
     <input type="email" id="email" name="email">

     <label for="message">Message</label>
     <textarea id="message" name="message" rows="4"></textarea>

     <button type="submit">Send</button>
   </form>

* Every ``<input>`` should have a ``<label>``. The label's ``for`` matches the
  input's ``id``. Clicking the label then puts the cursor in the box, and screen
  readers read the label out.
* ``type="email"`` checks the text looks like an email address.
* ``required`` means the box cannot be left empty.

----

Tutorial: add to your fact page
-------------------------------

Open your ``facts.html`` from the last lesson (or ``03_lists_tables`` in the kit)
and add:

#. An **unordered list** of at least four facts.
#. An **ordered list**, such as "Top 5 ..." or the steps to do something.
#. A **table** with a caption, a heading row and at least three data rows.
#. A short **video** (YouTube embed or your own file) with a ``title``.
#. A **navigation list** at the top linking ``index.html`` and ``facts.html``.

----

Check your understanding
------------------------

.. classifying::
   :delimiter: =>
   :instructions: Which list type suits each content?

   Steps to export a GIF => Ordered list
   Top 10 songs of the year => Ordered list
   A recipe method => Ordered list
   Things to pack for camp => Unordered list
   Links in a navigation menu => Unordered list
   Fun facts about echidnas => Unordered list

.. mcqgroup::
   :show-instant-feedback:
   :shuffle-questions:

   .. multichoice::

      Which tag makes a numbered list?

      [x] ``<ol>`` | Yes. Ordered list.
      [ ] ``<ul>`` | That makes bullets.
      [ ] ``<li>`` | That is one item.
      [ ] ``<nl>`` | Not a real tag.

   .. multichoice::

      Which tag makes one **row** in a table?

      [ ] ``<td>`` | That is one cell.
      [x] ``<tr>`` | Yes. Table row.
      [ ] ``<th>`` | That is a heading cell.
      [ ] ``<row>`` | Not a real tag.

   .. multichoice::

      What does the ``controls`` attribute do on a video?

      [x] Shows play, pause and volume buttons | Yes.
      [ ] Makes the video play automatically | That is ``autoplay``.
      [ ] Makes the video loop | That is ``loop``.
      [ ] Hides the video | No.

   .. multichoice::

      How does a ``<label>`` connect to its ``<input>``?

      [x] The label's ``for`` matches the input's ``id`` | Yes.
      [ ] The label goes after ``</form>`` | No.
      [ ] They are always connected automatically | Only if ``for`` and ``id`` match, or the input is inside the label.
      [ ] With an ``href`` | No.

   .. multichoice::

      When should you use an HTML table?

      [x] For data in rows and columns, like a timetable | Yes.
      [ ] To lay out a whole page | Use CSS for layout.
      [ ] To make text bold | Use ``<strong>``.
      [ ] For every image | No.
