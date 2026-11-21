=========================================
Make a clickable beach scene
=========================================

In Australia, Christmas comes in summer, so plenty of people spend it at the beach. In this
tutorial you will make animated pictures (GIFs) in Photoshop and put them into a beach scene
on a web page. Each picture stays still until someone clicks it. Then it comes to life.

This scene has a sun, a cloud, a seagull, a sailboat, a dolphin, a surfer, a flag, an umbrella, a sandcastle, an esky,
a kangaroo, a beach ball and a crab. The sun rays spin, the cloud floats across the sky, the
seagull and the sailboat bob up and down as they go, the kangaroo and the beach ball bounce
along the sand, and the dolphin leaps out of the water.

Click a picture to bring it to life.

.. gifscene::
    :title: Summer at the beach
    :background: beach_images/background.png
    :folder: beach_images
    :theme: beach
    :sound:

    sun.gif | Sun | x=86 y=15 width=13
    cloud.gif | Cloud | x=26 y=17.3 width=15 seconds=24 move=right
    seagull.gif | Seagull | x=62 y=33.9 width=8 seconds=10 move=wave-left
    sailboat.gif | Sailboat | x=42.7 y=48.2 width=7 seconds=20 move=wave-right
    dolphin.gif | Dolphin | x=80 y=57 width=10 seconds=1.5 move=jump spawn=drop.gif count=7 spread=fountain
    surfer.gif | Surfer | x=28 y=60 width=10 seconds=9 move=wave-right
    flag.gif | Red and yellow flag | x=6 y=69 width=6
    flag.gif | Other flag | x=46 y=69 width=6
    umbrella.gif | Beach umbrella | x=74 y=74 width=15
    sandcastle.gif | Sandcastle | x=89.4 y=66.7 width=10
    esky.gif | Esky | x=61.8 y=68.7 width=14.5 spawn=sparkle.gif count=6 spread=burst
    kangaroo.gif | Kangaroo | x=21 y=80 width=11 seconds=7 move=hop-right
    beach_ball.gif | Beach ball | x=37 y=90 width=5 seconds=7 move=hop-left
    crab.gif | Crab | x=66 y=93 width=6 seconds=10 move=left



Seven of the pictures have ``move=`` on their lines, so they travel when they are clicked.
Click **Play all** to set the whole beach going.

----

As a grid
---------------

Leave out ``:background:`` and the pictures are set out as cards. This one uses
``:play: toggle``, so a click starts a picture and another click stops it.

.. gifscene::
   :title: Beach cards
   :folder: beach_images
   :theme: beach
   :columns: 4
   :play: toggle

   sun.gif
   cloud.gif
   seagull.gif
   sailboat.gif
   dolphin.gif
   surfer.gif
   flag.gif | Red and yellow flag
   umbrella.gif | Beach umbrella
   sandcastle.gif
   esky.gif
   kangaroo.gif
   crab.gif
   beach_ball.gif | Beach ball

.. admonition:: What you will learn

   * How a GIF makes a moving picture out of still **frames**
   * How to use **layers** and the **Timeline** in Photoshop
   * How to export a GIF with a see-through background
   * How to make a picture travel along different **paths**: straight, bobbing, bouncing
     and jumping

----

What you need
-------------

* A computer with **Adobe Photoshop**
* The **student kit**: :download:`beach_student_kit.zip <beach_kit/beach_student_kit.zip>`

Get the kit ready
~~~~~~~~~~~~~~~~~

#. Download the kit.
#. Find it in your **Downloads** folder. Right-click it and choose **Extract All**.
#. Open the new ``beach_student_kit`` folder. You should see this:

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - File or folder
     - What it is for
   * - ``index.html``
     - Your web page. Double-click it to see your scene.
   * - ``my_scene.js``
     - The list of your GIFs. **This is the only file you change.**
   * - ``gifs``
     - Save the GIFs you make here.
   * - ``images``
     - The background picture.
   * - ``photoshop_frames``
     - Ready-made frames to turn into GIFs, one folder for each picture.
   * - ``engine``
     - The code that makes the scene work. Do not change it.

4. Double-click ``index.html``. It opens in your web browser.
#. Click the sun. Its rays should spin.

.. tip::

   Keep ``index.html`` open in your browser for the whole lesson. Each time you
   change something, press **F5** to refresh the page and see what happened.

----

How does a GIF work?
--------------------

A GIF is a stack of pictures called **frames**. The computer shows them one after
another, very quickly, so the picture looks like it is moving. A flip book works
the same way. Each frame is shown for a short time called the **delay**.

.. admonition:: GIF maths

   **Length of the GIF = number of frames × delay**

   A GIF with 8 frames and a delay of 0.15 seconds lasts 8 × 0.15 = **1.2 seconds**.

----

Part 1: Make the crab
---------------------

The six pictures of the crab are already drawn for you. You will turn them into a GIF.

Step 1: Load the pictures as layers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Open **Photoshop**.
#. Click **File > Scripts > Load Files into Stack...**
#. Click **Browse**. Go to ``photoshop_frames/crab``.
#. Click ``crab_01.png``. Hold **Shift** and click ``crab_06.png`` so all six pictures are
   selected. Click **Open**, then **OK**.
#. Look at the **Layers** panel. There are six layers, one for each picture.

Step 2: Turn the layers into frames
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Click **Window > Timeline**. The Timeline panel opens at the bottom.
#. In the middle of the Timeline there is a button with a small arrow next to it. Click the
   **arrow** and choose **Create Frame Animation**. Then click the **button**.
#. Click the **menu icon** (four small lines) at the top right of the Timeline.
#. Choose **Make Frames From Layers**. You now have six frames.
#. Frame 1 should be ``crab_01``. If the frames are backwards, open the menu again and choose
   **Reverse Frames**.

Step 3: Set the delay and save
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Click the menu icon and choose **Select All Frames**.
#. Under any frame, click the time (it says **0 sec.**) and choose **0.1** seconds.
#. At the bottom left of the Timeline, change **Once** to **Forever**.
#. Press **Play** (the triangle) to watch the crab snap its claws. Press it again to stop.
#. Click **File > Export > Save for Web (Legacy)...**, choose **GIF** and make sure
   **Transparency** is ticked.
#. Click **Save...**, go to your ``gifs`` folder, name the file ``crab`` and click **Save**.

.. important::

   File names for web pages should use **lowercase letters** with **no spaces**.
   ``beach_ball.gif`` is good. ``My Beach Ball.gif`` will cause problems.

----

Part 2: Put the crab on the beach
---------------------------------

#. In your kit folder, right-click ``my_scene.js`` and choose **Open with > Notepad**.
#. Find the list called ``myGifs``. It has one line, for the sun:

   .. code-block:: javascript

      const myGifs = [
        { file: "example_sun.gif", name: "Sun", x: 86, y: 15, width: 13, seconds: 0.8 },
      ];

#. Add a line for the crab under the sun line:

   .. code-block:: javascript

      const myGifs = [
        { file: "example_sun.gif", name: "Sun", x: 86, y: 15, width: 13, seconds: 0.8 },
        { file: "crab.gif", name: "Crab", x: 66, y: 93, width: 6, seconds: 0.6 },
      ];

#. Save (**Ctrl + S**), go to your browser, press **F5** and click the crab.

The crab snaps its claws on the spot. Now make it scuttle across the sand. Change the end of
its line to this, then save and refresh:

.. code-block:: javascript

   { file: "crab.gif", name: "Crab", x: 66, y: 93, width: 6, seconds: 10, move: "left" },

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Setting
     - Meaning
   * - ``file``
     - The file name of your GIF. It must be spelt exactly the same.
   * - ``name``
     - What your picture is called.
   * - ``x`` and ``y``
     - Where it is: ``x`` across (0 left, 100 right), ``y`` down (0 top, 100 bottom).
   * - ``width``
     - How big it is. 10 means one tenth of the width of the background.
   * - ``seconds``
     - How long it plays after a click. For a picture that travels, how long the
       **whole trip** takes.
   * - ``move``
     - The path it travels along (see the next part). Leave it out to stay on the spot.

.. tip::

   Click the **Arrange** button above the scene to drag pictures into place and resize them.
   Then copy the box of code under the scene and paste it over the lines inside ``myGifs``.

----

Part 3: Ways to move
--------------------

The GIF only shows the movement **on the spot**: legs hopping, wings flapping, a tail
flicking. The ``move`` setting decides the **path** the picture takes across the scene.

.. list-table::
   :header-rows: 1
   :widths: 24 46 30

   * - ``move``
     - What the picture does
     - Good for
   * - ``"left"`` or ``"right"``
     - Goes straight off that side and comes back in on the other side
     - a crab, a cloud
   * - ``"up"`` or ``"down"``
     - Goes straight off the top or bottom and comes back in the other end
     - a bubble, a balloon
   * - ``"wave-left"`` or ``"wave-right"``
     - Travels across, bobbing up and down like a wave
     - a seagull, a boat, a surfer
   * - ``"hop-left"`` or ``"hop-right"``
     - Bounces across in hops
     - a kangaroo, a ball
   * - ``"jump"``
     - Leaps up in an arc, nose up then nose down, and lands where it started
     - a dolphin

.. admonition:: Try it

   * Change the crab to ``move: "hop-left"``. Does a hopping crab look right? Why not?
   * Change the crab's ``seconds`` from 10 to 4. Is it faster or slower? Why?
   * A picture should **face the way it travels**. Which way does the seagull face? Which
     ``move`` must it use?

----

Part 4: Make the rest of the beach
----------------------------------

Each picture has its own folder in ``photoshop_frames``. Make each GIF the same way as the
crab in Part 1, using the delay from the table. Save it in your ``gifs`` folder with the
name shown.

.. list-table::
   :header-rows: 1
   :widths: 18 10 10 20 20 22

   * - Folder
     - Frames
     - Delay
     - Save as
     - What it does
     - ``move``
   * - ``sun``
     - 8
     - 0.1
     - ``sun.gif``
     - Rays spin
     - (stays put)
   * - ``flag``
     - 6
     - 0.12
     - ``flag.gif``
     - Flaps in the wind
     - (stays put)
   * - ``umbrella``
     - 8
     - 0.15
     - ``umbrella.gif``
     - Sways in the breeze
     - (stays put)
   * - ``sandcastle``
     - 6
     - 0.12
     - ``sandcastle.gif``
     - Its flag waves
     - (stays put)
   * - ``esky``
     - 12
     - 0.15
     - ``esky.gif``
     - Lid opens, a drink pops out
     - (stays put)
   * - ``cloud``
     - 6
     - 0.2
     - ``cloud.gif``
     - Puffs and blinks
     - ``"right"``
   * - ``seagull``
     - 6
     - 0.1
     - ``seagull.gif``
     - Flaps its wings
     - ``"wave-left"``
   * - ``sailboat``
     - 8
     - 0.15
     - ``sailboat.gif``
     - Rocks on the water
     - ``"wave-right"``
   * - ``surfer``
     - 8
     - 0.1
     - ``surfer.gif``
     - Balances on the board
     - ``"wave-right"``
   * - ``kangaroo``
     - 8
     - 0.1
     - ``kangaroo.gif``
     - Hops
     - ``"hop-right"``
   * - ``beach_ball``
     - 8
     - 0.08
     - ``beach_ball.gif``
     - Spins
     - ``"hop-left"``
   * - ``dolphin``
     - 6
     - 0.1
     - ``dolphin.gif``
     - Flicks its tail
     - ``"jump"``

Then add a line for each GIF to ``myGifs``. For the pictures that stay put, use the GIF maths
to work out the number that goes in place of each ``?``.

.. code-block:: javascript

   { file: "sun.gif", name: "Sun", x: 86, y: 15, width: 13, seconds: ? },
   { file: "flag.gif", name: "Red and yellow flag", x: 6, y: 69, width: 6, seconds: ? },
   { file: "flag.gif", name: "Other flag", x: 46, y: 69, width: 6, seconds: ? },
   { file: "umbrella.gif", name: "Beach umbrella", x: 74, y: 74, width: 15, seconds: ? },
   { file: "sandcastle.gif", name: "Sandcastle", x: 55, y: 84, width: 10, seconds: ? },
   { file: "esky.gif", name: "Esky", x: 92, y: 85, width: 8, seconds: ? },
   { file: "cloud.gif", name: "Cloud", x: 34, y: 13, width: 15, seconds: 24, move: "right" },
   { file: "seagull.gif", name: "Seagull", x: 62, y: 27, width: 8, seconds: 10, move: "wave-left" },
   { file: "sailboat.gif", name: "Sailboat", x: 58, y: 45.5, width: 7, seconds: 20, move: "wave-right" },
   { file: "surfer.gif", name: "Surfer", x: 28, y: 60, width: 10, seconds: 9, move: "wave-right" },
   { file: "kangaroo.gif", name: "Kangaroo", x: 21, y: 80, width: 11, seconds: 7, move: "hop-right" },
   { file: "beach_ball.gif", name: "Beach ball", x: 37, y: 90, width: 5, seconds: 7, move: "hop-left" },
   { file: "dolphin.gif", name: "Dolphin", x: 80, y: 57, width: 10, seconds: 1.5, move: "jump" },

When your own ``sun.gif`` is working, delete the ``example_sun.gif`` line so you do not have
two suns.

.. admonition:: Check your GIF maths
   :class: dropdown

   sun 0.8, flag 0.72, umbrella 1.2, sandcastle 0.72, esky 1.8

.. admonition:: Think about it

   * The same ``flag.gif`` is used twice, with two different lines. Why might a real beach
     have two red and yellow flags?
   * The kangaroo's GIF lasts 0.8 seconds but its line says ``seconds: 7``. What does the
     7 control?
   * Click the dolphin. Its jump takes 1.5 seconds. What would ``seconds: 4`` look like?

----

Part 5: Design your own GIF
---------------------------

Now add a beach picture that is all your own.

#. Click **File > New**. Make it **300** pixels wide and **300** pixels high. Set
   **Background Contents** to **Transparent**. Click **Create**.
#. Draw your picture on the first layer. This is the **resting** picture people see before
   they click.
#. Right-click the layer and choose **Duplicate Layer**. Change the copy a little bit.
#. Keep duplicating and changing until you have 4 to 8 layers.
#. Open the Timeline, use **Make Frames From Layers**, set the delay and looping, and play it.
#. Export it as a GIF into your ``gifs`` folder.
#. Add a line for it in ``my_scene.js``. Choose a ``move`` that suits it, or leave ``move``
   out so it stays put.

.. list-table:: Ideas
   :header-rows: 1
   :widths: 30 40 30

   * - Picture
     - How it could move on the spot
     - ``move``
   * - Fish
     - Its tail swishes
     - ``"wave-right"``
   * - Jellyfish
     - It squeezes and stretches
     - ``"up"``
   * - Pelican
     - Its wings flap
     - ``"wave-left"``
   * - Whale
     - A spout of water sprays up
     - ``"left"``
   * - Ice cream
     - It melts and drips
     - (stays put)
   * - Thongs
     - They flip and flop
     - ``"hop-right"``

.. tip::

   * Small changes between frames make smooth movement. Big changes look jumpy.
   * Draw a travelling picture **facing the way it will go**.
   * Design your own characters. Do not copy characters from films, shows or games.

----

Fix-it guide
------------

.. list-table::
   :header-rows: 1
   :widths: 40 60

   * - What you see
     - How to fix it
   * - A yellow box says **I cannot read my_scene.js**
     - There is a typing mistake. Check that each line ends with a comma, each ``{`` has a
       ``}``, and every name and ``move`` has speech marks at both ends.
   * - A red dashed box says **Cannot find ...**
     - The file name in your line does not match your GIF. Check the spelling and that the
       GIF is in the ``gifs`` folder.
   * - Nothing changed
     - Did you save ``my_scene.js``? Did you press **F5**?
   * - There is a white square around the picture
     - Tick **Transparency** when you export. If the bottom layer is a white layer called
       *Background*, hide it or delete it.
   * - It stays on the spot when it should travel
     - Check the spelling of ``move``. It must be one of the words in the Part 3 table, in
       lowercase, with speech marks.
   * - It travels backwards
     - Change ``left`` to ``right`` (or the other way), or flip the picture in Photoshop
       (**Image > Image Rotation > Flip Canvas Horizontal**) and export again.
   * - It moves too fast or too slowly
     - Change ``seconds`` for the trip, or the delay under the frames in Photoshop for the
       movement on the spot.

----

Checklist
---------

.. list-table::
   :header-rows: 1
   :widths: 85 15

   * - I can ...
     - Done
   * - explain what frames and delay are
     -
   * - make frames from layers in the Timeline
     -
   * - export a GIF with a see-through background
     -
   * - work out the length of a GIF from its frames and delay
     -
   * - make at least five GIFs from the kit
     -
   * - choose a ``move`` that suits each travelling picture
     -
   * - show a beach scene with at least one GIF I designed myself
     -

----

Spawning more GIFs
------------------

A picture can make copies of another, smaller GIF come out of it when it plays. In the scene
at the top of this page, the dolphin splashes water drops up and over as it jumps, and the esky bursts into sparkles when it opens. Click them to see.

Add ``spawn`` to a line with the file name of the small GIF. ``count`` is how many copies come
out and ``spread`` is how they move:

.. code-block:: javascript

   { file: "dolphin.gif", name: "Dolphin", x: 80, y: 57, width: 10, seconds: 1.5, move: "jump", spawn: "drop.gif", count: 7, spread: "fountain" },

.. list-table::
   :header-rows: 1
   :widths: 20 45 35

   * - ``spread``
     - What the copies do
     - Good for
   * - ``"burst"``
     - Fly out in all directions and fade away
     - fireworks, sparkles, a party popper
   * - ``"up"``
     - Float upwards, drifting from side to side
     - bubbles, music notes, hearts, balloons
   * - ``"down"``
     - Fall, getting faster as they go
     - raindrops, leaves, snowflakes
   * - ``"fountain"``
     - Shoot up, then curve over and fall
     - coins, water splashes
   * - ``"trail"``
     - Drop out one at a time behind a picture while it plays
     - presents from a sleigh, bubbles from a submarine

.. list-table:: Other spawn settings
   :header-rows: 1
   :widths: 20 80

   * - Setting
     - Meaning
   * - ``count``
     - How many copies come out each time (5 if you leave it out, up to 20). With ``"trail"``
       it is how many drop out during one trip.
   * - ``spawnWidth``
     - How big the copies are, the same way as ``width``. Leave it out and they are a third of
       the size of the picture. Use a range in speech marks, such as ``"2-5"``, and each copy
       gets a random size between the two numbers.
   * - ``every``
     - Makes the copies come out one at a time, this many seconds apart, like a stream.
       ``every: 0.25`` sends four a second. ``count`` is not used when ``every`` is there.
   * - ``spawnFor``
     - How many seconds the stream keeps going. Leave it out and it stops when the picture
       stops playing. Without ``every``, ``count`` copies are spread out over this time.
   * - ``life``
     - How many seconds each copy takes to finish its path and fade away. A smaller number is
       quicker, a bigger number is slower.
   * - ``distance``
     - How far each copy goes, as a percentage of the scene. ``distance: 40`` makes bubbles rise
       about 40% of the way up the scene.

``"trail"`` suits a picture that travels. This one drops a copy every few seconds as it goes:

.. code-block:: javascript

   { file: "sailboat.gif", name: "Sailboat", x: 58, y: 45.5, width: 7, seconds: 20, move: "wave-right", spawn: "drop.gif", count: 12, spread: "trail", spawnWidth: 2 },

Streams of copies
~~~~~~~~~~~~~~~~~

Add ``every`` and the copies keep coming out, one at a time, instead of all at once. In this
line the dolphin throws out a quick shower of small drops while it jumps:

.. code-block:: javascript

   { file: "dolphin.gif", name: "Dolphin", x: 80, y: 57, width: 10, seconds: 1.5, move: "jump", spawn: "drop.gif", spread: "fountain", spawnWidth: "1-2.5", every: 0.1, spawnFor: 1.5, life: 1.2, distance: 15 },

.. admonition:: Try it

   * Make ``every`` smaller. What happens to the number of copies?
   * Change ``life`` to 1, then to 6. How does it change the way the copies move?
   * Try ``spawnWidth: "1-6"``. Does a mix of sizes look better than all the same size?

.. note::

   A scene can show up to 60 copies at once. Any more are skipped, so the page does not slow
   down.

Make the small GIFs
~~~~~~~~~~~~~~~~~~~

The kit has frames for these in ``photoshop_frames``. Make each one into a GIF the same way as
the others and save it in your ``gifs`` folder.

.. list-table::
   :header-rows: 1
   :widths: 25 15 15 45

   * - Folder
     - Frames
     - Delay
     - Save as
   * - ``drop``
     - 4
     - 0.1
     - ``drop.gif``
   * - ``sparkle``
     - 4
     - 0.1
     - ``sparkle.gif``

.. tip::

   Keep a spawned GIF small and simple: 120 × 120 pixels and 4 to 6 frames is plenty.
   Lots of copies are on the screen at once, so a big GIF will slow the page down.

.. admonition:: Try it

   * Change the ``spread`` on one of the lines. Which one suits the picture best?
   * Give the surfer ``spawn: "drop.gif"`` with ``spread: "trail"`` so it leaves spray behind it.
   * Design your own small GIF in Photoshop and spawn it from one of your pictures.

.. note::

   Spawned GIFs only appear in a scene with a background, not in a grid of cards. You do not
   need to click them, and they are not counted in **Clicked ... of ...**.

----

Extra challenges
----------------

#. **New title and message.** Change ``sceneTitle`` and ``finishMessage`` in ``my_scene.js``.
#. **Weather.** Change ``sceneEffect`` from ``"bubbles"`` to ``"confetti"`` or ``"snow"``.
   Which one suits a beach best?
#. **Play modes.** Change ``playMode`` from ``"once"`` to ``"toggle"``. What is different?
   Try ``"hover"`` too.
#. **Under the sea.** Make a picture 1600 pixels wide and 900 pixels high of the sea floor.
   Save it as a PNG in the ``images`` folder, change ``sceneBackground`` to its name and fill
   it with fish, crabs and bubbles that use ``"up"`` and ``"wave-left"``.
#. **Tell a story.** Make a scene where the pictures, played one after another, tell a short
   story about a day at the beach.

Handing in your work
--------------------

Right-click your ``beach_student_kit`` folder and choose
**Send to > Compressed (zipped) folder**. Hand in the zip file. It holds your web page, your
GIFs and your code together.
