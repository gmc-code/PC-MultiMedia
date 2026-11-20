===========================
Links and images
===========================

.. admonition:: Learning intentions

   * Use attributes to give elements extra information
   * Link to other pages on your site and to other websites
   * Add images with useful alt text
   * Use relative file paths correctly

----

Attributes
----------

An **attribute** gives an element extra information. Attributes go **inside the
opening tag** and are written as ``name="value"``.

.. code-block:: html
   :class: no-copybutton

   <a href="about.html">About me</a>
      \___________/
        attribute: name is href, value is about.html

----

Links
-----

Links use the ``<a>`` (anchor) element. The ``href`` attribute says where the link
goes.

.. code-block:: html

   <!-- A page in the same folder -->
   <a href="about.html">About me</a>

   <!-- Another website (an absolute URL) -->
   <a href="https://www.abc.net.au">ABC website</a>

   <!-- Open in a new tab -->
   <a href="https://www.abc.net.au" target="_blank">ABC website</a>

   <!-- An email link -->
   <a href="mailto:hello@example.com">Email us</a>

   <!-- Jump to a part of the same page with an id -->
   <a href="#contact">Go to contact details</a>
   ...
   <h2 id="contact">Contact</h2>

.. admonition:: Write good link text

   The words inside the link should say **where it goes**. Screen reader users often
   jump from link to link, so ``Click here`` is unhelpful. Write
   ``Read the bushfire safety guide`` instead.

----

File paths
----------

A **relative path** describes where a file is **compared to the page you are
writing**.

.. code-block:: text
   :class: no-copybutton

   my_site/
   ├── index.html
   ├── about.html
   ├── images/
   │   └── dog.jpg
   └── projects/
       └── gif.html

.. list-table::
   :header-rows: 1
   :widths: 30 35 35

   * - From this page
     - To this file
     - Path
   * - ``index.html``
     - ``about.html``
     - ``about.html``
   * - ``index.html``
     - ``images/dog.jpg``
     - ``images/dog.jpg``
   * - ``projects/gif.html``
     - ``index.html``
     - ``../index.html``
   * - ``projects/gif.html``
     - ``images/dog.jpg``
     - ``../images/dog.jpg``

``../`` means "go **up** one folder".

.. warning::

   Never use a path to your own computer, such as ``C:/Users/sam/Desktop/dog.jpg``.
   It works on your computer but breaks for everyone else.

----

Images
------

.. code-block:: html

   <img src="images/dog.jpg" alt="A brown kelpie catching a frisbee at the beach">

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Attribute
     - What it does
   * - ``src``
     - The path to the image file (source).
   * - ``alt``
     - **Alternative text**: describes the image for people who cannot see it, and
       shows if the image fails to load. **Every image needs one.**
   * - ``width`` / ``height``
     - Optional. The size in pixels. Usually better done with CSS.

``<img>`` is an **empty element**: it has no closing tag.

Writing good alt text
~~~~~~~~~~~~~~~~~~~~~

* Describe what matters in the picture, in one short sentence.
* Do not start with "Image of" or "Picture of". Screen readers already say it is
  an image.
* If the image is only decoration, use an empty alt: ``alt=""``.

.. list-table::
   :header-rows: 1
   :widths: 50 50

   * - Poor
     - Better
   * - ``alt="dog"``
     - ``alt="A brown kelpie catching a frisbee at the beach"``
   * - ``alt="image1.jpg"``
     - ``alt="Students planting seedlings in the school garden"``
   * - ``alt="Picture of my GIF"``
     - ``alt="Animated GIF of a surfer riding a wave at sunrise"``

A picture with a caption
~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: html

   <figure>
     <img src="images/bounce.gif" alt="A red ball bouncing and squashing on the floor">
     <figcaption>My bouncing ball GIF, made in Photoshop.</figcaption>
   </figure>

Image sizes for the web
~~~~~~~~~~~~~~~~~~~~~~~

Photos from a phone can be 4000 pixels wide and several megabytes. That makes
pages slow, especially on mobile data. Before you use a photo, resize it in
Photoshop (**Image > Image Size**) to about **1200 pixels wide** or less and
export it as a JPG or WebP.

----

Tutorial: a fact page with links and pictures
---------------------------------------------

#. Open the ``02_links_images`` folder from the kit. It has ``index.html``,
   ``facts.html`` and an ``images`` folder.
#. In ``index.html``, add a link to ``facts.html`` with the text
   ``Read my fact page``.
#. In ``facts.html``:

   * Choose a topic you like (an animal, a sport, a place in Australia...).
   * Add an ``<h1>`` and at least three ``<h2>`` sections with paragraphs.
   * Add at least two images using ``<figure>`` and ``<figcaption>``. Use the kit
     images, or your own photos copied into ``images``.
   * Write a good ``alt`` for every image.
   * Add a link to a trustworthy website about your topic that opens in a new tab.
   * Add a link back to ``index.html`` with the text ``Back to home``.

#. Test **every** link and check every image appears.

----

Check your understanding
------------------------

.. mcqgroup::
   :show-instant-feedback:
   :shuffle-questions:

   .. multichoice::

      Which attribute tells a link where to go?

      [x] ``href`` | Yes.
      [ ] ``src`` | ``src`` is used for images.
      [ ] ``alt`` | ``alt`` describes images.
      [ ] ``link`` | Not an attribute of ``<a>``.

   .. multichoice::

      Which attribute holds the path to an image file?

      [ ] ``href`` | ``href`` is for links.
      [x] ``src`` | Yes. Short for source.
      [ ] ``alt`` | ``alt`` is the description.
      [ ] ``title`` | Not the file path.

   .. multichoice::

      Which is the best alt text?

      [ ] ``alt="photo"`` | Too vague.
      [ ] ``alt="IMG_2041.jpg"`` | A file name is not a description.
      [x] ``alt="A koala sleeping in a gum tree"`` | Yes. Short and descriptive.
      [ ] ``alt="Picture of a picture of a koala"`` | Do not start with "picture of".

   .. multichoice::

      A page is inside the ``projects`` folder. How does it link to ``index.html`` in the folder above?

      [x] ``../index.html`` | Yes. ``../`` goes up one folder.
      [ ] ``index.html`` | That looks inside the projects folder.
      [ ] ``projects/index.html`` | That goes further down.
      [ ] ``C:/index.html`` | Never use a path on your computer.

   .. multichoice::

      Why should you resize phone photos before putting them on a website?

      [x] Big files make pages load slowly, especially on mobile data | Yes.
      [ ] Browsers cannot show big photos | They can, but slowly.
      [ ] Small photos look sharper | Not true.
      [ ] HTML only allows 100 KB images | No such rule.

   .. multichoice::

      Which link text is most helpful?

      [ ] Click here | Does not say where it goes.
      [ ] Link | Does not say where it goes.
      [x] Read the bushfire safety guide | Yes.
      [ ] More | Does not say where it goes.

.. clozegroup::
   :show-instant-feedback:

   .. cloze:: text

      Extra information in an opening tag is called an @@attribute@@.
      The anchor element uses the @@href@@ attribute to say where a link goes.
      An image needs alt text so people using a @@screen reader@@ know what it shows.
      To go up one folder in a path you write two @@dots@@ and a slash.
      The image element has no closing tag because it is an @@empty@@ element.
