=====================================
Tutorial: design a social media post
=====================================

.. admonition:: Learning intentions

   * Set up a Photoshop document at the right size for social media
   * Use shapes, text, layer styles and clipping masks
   * Line things up with guides and the align tools
   * Follow a client's brand guide

----

Common social media sizes
-------------------------

Social media sites change their sizes from time to time, so check the platform's
help pages before a real job. These sizes are widely used:

.. list-table::
   :header-rows: 1
   :widths: 35 30 35

   * - Format
     - Size (pixels)
     - Shape
   * - Square feed post
     - 1080 × 1080
     - 1 : 1
   * - Portrait feed post
     - 1080 × 1350
     - 4 : 5
   * - Story / Reel / TikTok
     - 1080 × 1920
     - 9 : 16 (tall)
   * - Video thumbnail
     - 1280 × 720
     - 16 : 9 (wide)

.. admonition:: Safe zones

   On Stories and Reels the app puts buttons and captions over the top and bottom
   of your design. Keep important text and logos away from the top 250 and bottom
   340 pixels or so. The student kit has guide templates that show these areas.

----

The client
----------

**Riverbend Community Garden** is holding a **Spring Planting Day**. They want a
square post to invite local families.

.. admonition:: You need

   From the **graphic design student kit**, the ``riverbend_brand`` folder:

   * ``riverbend_logo.png``
   * ``riverbend_brand_guide.pdf`` (colours, fonts and rules)
   * ``garden_scene.png`` (an illustration you can use in the post)

Read the brand guide first. It says:

.. list-table::
   :widths: 30 70

   * - Main colours
     - Leaf green ``#2E7D32``, Sunflower yellow ``#F9C80E``, Soil brown ``#5D4037``
   * - Background colour
     - Cream ``#FFF8E7``
   * - Fonts
     - Headings: a bold rounded sans serif (such as **Nunito Black** or **Arial Rounded**). Body: a plain sans serif.
   * - Logo rules
     - Do not stretch, recolour or rotate the logo. Leave space around it.

----

Step 1: New document
--------------------

#. **File > New**.
#. Width **1080**, Height **1080**, **Pixels**. Resolution **72**.
   Colour Mode **RGB Color**. Background **White**. Click **Create**.
#. Save straight away as ``riverbend_post_yourname.psd``.

Step 2: Guides
--------------

Guides are lines that help you line things up. They do not print or export.

#. **View > Guides > New Guide Layout...**
#. Tick **Columns** (Number 3) and **Rows** (Number 3). Tick **Margin** and set all
   four to ``60 px``. Click **OK**.
#. You now have a rule of thirds grid and a 60 px margin. Keep text inside the
   margin.

.. tip::

   Show or hide guides with **Ctrl + ;** (semicolon).

Step 3: Background colour
-------------------------

#. Click the **Foreground colour** square at the bottom of the toolbar. Type the
   hex code ``FFF8E7`` and click **OK**.
#. Select the Background layer and press **Alt + Backspace** to fill it with the
   foreground colour.

Step 4: Add the illustration in a shape (clipping mask)
-------------------------------------------------------

A **clipping mask** lets a picture show only inside a shape.

#. Choose the **Ellipse tool** (**U**; hold the Rectangle tool to find it).
#. Hold **Shift** and drag a large circle in the top two thirds of the canvas. The
   fill colour does not matter.
#. Drag ``garden_scene.png`` onto the canvas and press **Enter**. Make sure its
   layer is **directly above** the circle layer.
#. Right-click the picture layer and choose **Create Clipping Mask**. The picture
   now only shows inside the circle.
#. Use the **Move tool** to move the picture around inside the circle until it
   looks good.

Step 5: Add the heading
-----------------------

#. Choose the **Type tool** (**T**). Click below the circle and type
   ``SPRING PLANTING DAY``.
#. In the **Character** panel set the font to the brand heading font, size about
   ``90 pt``, colour leaf green ``#2E7D32``.
#. Press **Ctrl + Enter** to finish.

Step 6: Add the details
-----------------------

#. Make a **new** text box (click somewhere else with the Type tool) and type:

   .. code-block:: text
      :class: no-copybutton

      Saturday 12 October, 10 am to 2 pm
      Bring the family: free seedlings for kids!

#. Use the body font, about ``36 pt``, colour soil brown ``#5D4037``.
#. Make the date **bold** so it stands out (hierarchy).

Step 7: Add a "button" shape
----------------------------

#. Choose the **Rectangle tool**. In the Properties panel, set the corner radius to
   about ``40 px``.
#. Draw a rectangle under the details. Set the fill to sunflower yellow ``#F9C80E``.
#. Type ``All welcome`` on top of it in soil brown.
#. Add a gentle shadow: double-click the rectangle layer (not the name) to open
   **Layer Style**. Tick **Drop Shadow**, set Opacity to about ``25%``, Distance
   ``6``, Size ``10``.

Step 8: Add the logo
--------------------

#. Drag ``riverbend_logo.png`` onto the canvas. Hold **Shift** while you resize so
   it does not stretch. Press **Enter**.
#. Place it in a corner inside the margin.

Step 9: Line everything up
--------------------------

#. In the Layers panel, **Ctrl**-click the heading, details and button layers.
#. Choose the **Move tool**. In the options bar, click **Align horizontal centres**.
#. Check that nothing touches the 60 px margin.

Step 10: Export
---------------

#. Save the PSD (**Ctrl + S**).
#. **File > Export > Export As...**
#. Format **PNG** (or **JPG** at quality 80 or above). Check the size is 1080 × 1080.
#. Click **Export** and name it ``riverbend_post_yourname.png``.

----

Make it better: checklist
-------------------------

.. list-table::
   :header-rows: 1
   :widths: 75 25

   * - Check
     - Done?
   * - Can you read the heading from across the room (or at phone size)?
     - ☐
   * - Is the most important information the most obvious? (hierarchy)
     - ☐
   * - Do all the colours come from the brand guide?
     - ☐
   * - Is the logo the right shape, not stretched?
     - ☐
   * - Is there enough white space? Does it feel crowded?
     - ☐
   * - Are things lined up?
     - ☐

Extension challenges
--------------------

* Make a **Story** version (1080 × 1920) using the same design. Keep text out of
  the safe zones.
* Make a **"one week to go"** post that uses **repetition** so it clearly belongs
  to the same set.
* Turn your post into a short animated GIF: make the heading fade in using what you
  learned in :doc:`/animation/anim_05_tweening_banner`.

----

Check your understanding
------------------------

.. ordering:: text
   :no-indent:

   Read the client's brand guide
   Create a new 1080 x 1080 RGB document
   Add guides and a margin
   Fill the background with the brand colour
   Add pictures, shapes and text
   Align everything and check the hierarchy
   Export as PNG or JPG

.. mcqgroup::
   :show-instant-feedback:
   :shuffle-questions:

   .. multichoice::

      What size is a standard square feed post?

      [x] 1080 × 1080 pixels | Yes.
      [ ] 1080 × 1920 pixels | That is a Story or Reel.
      [ ] 1280 × 720 pixels | That is a video thumbnail.
      [ ] 300 × 300 pixels | Too small for a clear post.

   .. multichoice::

      What does a **clipping mask** do?

      [x] Shows a picture only inside the shape of the layer below it | Yes.
      [ ] Cuts the canvas to a smaller size | That is the Crop tool.
      [ ] Deletes a layer | No.
      [ ] Adds a shadow | That is a layer style.

   .. multichoice::

      Why should you hold **Shift** when resizing a logo?

      [x] To keep its proportions so it does not stretch | Yes.
      [ ] To make it bigger faster | No.
      [ ] To change its colour | No.
      [ ] To make a copy | No.

   .. multichoice::

      What is a **brand guide**?

      [ ] A list of social media sites | No.
      [x] A document from the client with rules about their colours, fonts and logo | Yes.
      [ ] A Photoshop tutorial | No.
      [ ] A type of font | No.

   .. multichoice::

      Why keep important text out of the **safe zones** on a Story?

      [x] App buttons and captions can cover those areas | Yes.
      [ ] The text will print in the wrong colour | Stories are not printed.
      [ ] Photoshop will not let you type there | It will.
      [ ] It makes the file smaller | No.
