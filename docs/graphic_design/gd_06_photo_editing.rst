===========================
Tutorial: fixing photos
===========================

.. admonition:: Learning intentions

   * Crop and straighten a photo
   * Fix brightness and colour with **adjustment layers**
   * Select a subject and remove its background with a **layer mask**
   * Explain the difference between destructive and non-destructive editing

.. admonition:: You need

   Two or three photos **you have taken yourself** on a phone or camera: one
   that is a bit dark or dull, one that is crooked, and one of a person or object
   you could cut out. Email or upload them to your school drive.

----

Destructive and non-destructive editing
---------------------------------------

.. list-table::
   :header-rows: 1
   :widths: 25 75

   * - Type
     - Meaning
   * - **Destructive**
     - Changes the pixels themselves. If you save and close, you cannot undo it.
       Example: using the Eraser on a photo.
   * - **Non-destructive**
     - Changes are kept separate, so you can change or remove them later.
       Examples: adjustment layers, layer masks, Smart Objects.

.. tip::

   Professional designers work **non-destructively** whenever they can. It means
   the client can say "can you make it a bit less bright?" and you can fix it in
   seconds.

----

Part 1: Crop and straighten
---------------------------

#. Open your crooked photo.
#. Choose the **Crop tool** (**C**).
#. In the options bar, click the **Straighten** icon (a tilted ruler).
#. Drag a line along something that should be level, such as the horizon or the
   edge of a table. Photoshop rotates the photo.
#. Drag the crop handles to remove anything distracting at the edges. Use the
   rule of thirds overlay to place your subject.
#. To crop to a set shape, choose **1:1 (Square)** or **4:5** from the ratio menu
   in the options bar.
#. Press **Enter**.

----

Part 2: Adjustment layers
-------------------------

Adjustment layers change the look of the layers **below** them, without changing
the pixels.

#. Open your dark or dull photo.
#. At the bottom of the Layers panel, click the **half-black circle** (Create new
   fill or adjustment layer).

.. list-table::
   :header-rows: 1
   :widths: 25 75

   * - Adjustment
     - What to do
   * - **Brightness/Contrast**
     - The simplest fix. Raise brightness a little and add some contrast.
   * - **Levels**
     - Drag the black slider right to where the graph starts and the white slider
       left to where it ends. This often fixes a dull photo instantly.
   * - **Curves**
     - Drag the curve into a gentle "S" shape for more contrast.
   * - **Hue/Saturation**
     - Raise **Saturation** a little for stronger colour. Too much looks fake.
   * - **Vibrance**
     - Like saturation, but gentler on skin tones.
   * - **Black & White**
     - Turns the photo black and white. Try the colour sliders to change the mood.

3. Click the **eye** icon on an adjustment layer to compare before and after.
#. Lower an adjustment layer's **Opacity** to make the effect weaker.

----

Part 3: Cut out a subject
-------------------------

Step 1: Select the subject
~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Open the photo of a person or object.
#. Choose **Select > Subject**. Photoshop finds the main subject and puts "marching
   ants" around it.
#. If parts are missing, choose the **Quick Selection tool** (**W**). Paint over the
   missing parts to add them. Hold **Alt** and paint to remove parts.

Step 2: Make a layer mask
~~~~~~~~~~~~~~~~~~~~~~~~~

#. If your layer is called **Background** with a lock, click the lock to unlock it.
#. With the selection active, click the **Add layer mask** button (a rectangle with
   a circle) at the bottom of the Layers panel.
#. The background disappears. It is not deleted, only hidden by the mask.

.. admonition:: How masks work

   **White** on a mask **shows** the layer. **Black hides** it. Grey makes it
   partly see-through. Choose the **Brush** (**B**), click the mask thumbnail,
   and paint with black or white to fix the edges.

   Remember: *black conceals, white reveals.*

Step 3: Refine the edges
~~~~~~~~~~~~~~~~~~~~~~~~

#. Double-click the **mask thumbnail** to open **Select and Mask**.
#. Use the **Refine Edge Brush** on hair or fur.
#. Click **OK**.

Step 4: Use it
~~~~~~~~~~~~~~

Add a new layer **under** your subject and fill it with a brand colour, or drag
in a new background. Your subject now sits on top.

----

Part 4: Remove small distractions
---------------------------------

* **Spot Healing Brush** (**J**): click on a small mark, such as a speck of dust.
  Photoshop blends it with the area around it.
* **Remove tool** (in the same group as the Spot Healing Brush): paint over a
  bigger distraction, such as a rubbish bin in the background.

Work on a **new empty layer** with **Sample All Layers** ticked in the options
bar, so the original photo is not changed.

.. note::

   Newer versions of Photoshop include AI tools such as **Generative Fill**. These
   can add things that were never in the photo. Check your school's rules before
   using them, and be honest about where they were used.

----

Activity: before and after
--------------------------

Make a 1080 × 1080 "before and after" post:

#. Put the original photo on the left half and your edited version on the right.
#. Add the labels ``Before`` and ``After``.
#. Write three sentences in your workbook explaining what you changed and why.

----

Check your understanding
------------------------

.. classifying::
   :delimiter: =>
   :bins: Destructive, Non-destructive
   :instructions: Is each method destructive or non-destructive?

   Erasing part of a photo with the Eraser => Destructive
   Painting directly on the photo layer => Destructive
   Adding a Levels adjustment layer => Non-destructive
   Hiding the background with a layer mask => Non-destructive
   Using Remove tool on an empty layer with Sample All Layers => Non-destructive
   Deleting a selected area by pressing Delete => Destructive

.. mcqgroup::
   :show-instant-feedback:
   :shuffle-questions:

   .. multichoice::

      On a layer mask, what does painting with **black** do?

      [x] Hides that part of the layer | Yes. Black conceals.
      [ ] Shows that part of the layer | White reveals.
      [ ] Colours the photo black | No. The mask only controls visibility.
      [ ] Deletes the layer | No.

   .. multichoice::

      Why are adjustment layers better than changing the photo directly?

      [x] You can change or remove them later without harming the photo | Yes. They are non-destructive.
      [ ] They make the file smaller | Not the main reason.
      [ ] They work faster | Not the main reason.
      [ ] They are the only way to change brightness | There are other ways.

   .. multichoice::

      Which command finds the main person or object in a photo automatically?

      [x] Select > Subject | Yes.
      [ ] Select > All | That selects the whole canvas.
      [ ] Image > Crop | That crops the image.
      [ ] Filter > Blur | That blurs the image.

   .. multichoice::

      Which tool would you use to remove a small speck of dust?

      [x] Spot Healing Brush | Yes.
      [ ] Crop tool | That trims the edges.
      [ ] Type tool | That adds text.
      [ ] Move tool | That moves layers.

   .. multichoice::

      Your photo looks dull and grey. Which adjustment is a quick fix?

      [x] Levels | Yes. Moving the black and white sliders adds contrast.
      [ ] Black & White | That removes colour.
      [ ] Gaussian Blur | That makes it blurry.
      [ ] Invert | That makes a negative.
