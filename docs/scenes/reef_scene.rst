===========================
Make a clickable coral reef
===========================

Coral reefs are full of life: fish dart about, turtles glide past and crabs scuttle over the sand. In this tutorial you will make animated pictures (GIFs) in Photoshop and put them into an underwater scene on a web page. Each picture stays still until someone clicks it. Then it comes to life.

Things move in lots of different ways under the water. The clownfish, the turtle and the submarine bob along, the jellyfish floats straight up, and the shark and the hermit crab travel straight across.

Click a picture to bring it to life.

.. gifscene::
    :theme: reef
    :title: Under the sea
    :background: reef_images/background.png
    :folder: reef_images
    :sound:

    submarine.gif | Submarine | x=70 y=18 width=14 seconds=16 move=wave-left spawn=bubble.gif count=12 spread=trail spawnwidth=2.5
    shark.gif | Shark | x=30 y=30 width=18 seconds=10 move=left
    jellyfish.gif | Jellyfish | x=60 y=32 width=7 seconds=12 move=up
    fish_school.gif | School of fish | x=82 y=42 width=13 seconds=12 move=wave-left
    turtle.gif | Turtle | x=47 y=50 width=14 seconds=18 move=wave-left
    clownfish.gif | Clownfish | x=20 y=55 width=8 seconds=9 move=wave-right
    seahorse.gif | Seahorse | x=7 y=62 width=5.5
    pufferfish.gif | Pufferfish | x=38 y=68 width=8 spawn=bubble.gif spread=up spawnwidth=1.5-4 every=0.25 spawnfor=3 life=4
    octopus.gif | Octopus | x=88 y=72 width=11
    eel.gif | Eel | x=25 y=80 width=10
    anemone.gif | Anemone | x=12 y=89 width=10
    treasure_chest.gif | Treasure chest | x=62 y=86 width=11 spawn=coin.gif count=8 spread=fountain
    hermit_crab.gif | Hermit crab | x=42 y=92 width=7 seconds=14 move=right
    starfish.gif | Starfish | x=78 y=93 width=6

Seven of the pictures have ``move=`` on their lines, so they travel when they are clicked.
Click **Play all** to set the whole scene going.

----

As a grid
---------

Leave out ``:background:`` and the pictures are set out as cards. This one uses
``:play: toggle``, so a click starts a picture and another click stops it.

.. gifscene::
   :theme: reef
   :title: Under the sea cards
   :folder: reef_images
   :columns: 4
   :play: toggle

   submarine.gif | Submarine
   shark.gif | Shark
   jellyfish.gif | Jellyfish
   fish_school.gif | School of fish
   turtle.gif | Turtle
   clownfish.gif | Clownfish
   seahorse.gif | Seahorse
   pufferfish.gif | Pufferfish
   octopus.gif | Octopus
   eel.gif | Eel
   anemone.gif | Anemone
   treasure_chest.gif | Treasure chest
   hermit_crab.gif | Hermit crab
   starfish.gif | Starfish

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
* The **student kit**: :download:`reef_student_kit.zip <reef_kit/reef_student_kit.zip>`

Get the kit ready
~~~~~~~~~~~~~~~~~

#. Download the kit.
#. Find it in your **Downloads** folder. Right-click it and choose **Extract All**.
#. Open the new ``reef_student_kit`` folder. You should see this:

.. list-table::
   :header-rows: 1
   :widths: 30 70

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
#. Click the clownfish. It should come to life.

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

Part 1: Make the starfish
-------------------------

The six pictures of the starfish are already drawn for you. You will turn them into a GIF.

Step 1: Load the pictures as layers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Open **Photoshop**.
#. Click **File > Scripts > Load Files into Stack...**
#. Click **Browse**. Go to ``photoshop_frames/starfish``.
#. Click ``starfish_01.png``. Hold **Shift** and click ``starfish_06.png`` so all six pictures are
   selected. Click **Open**, then **OK**.
#. Look at the **Layers** panel. There are six layers, one for each picture.

Step 2: Turn the layers into frames
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Click **Window > Timeline**. The Timeline panel opens at the bottom.
#. In the middle of the Timeline there is a button with a small arrow next to it. Click the
   **arrow** and choose **Create Frame Animation**. Then click the **button**.
#. Click the **menu icon** (four small lines) at the top right of the Timeline.
#. Choose **Make Frames From Layers**. You now have six frames.
#. Frame 1 should be ``starfish_01``. If the frames are backwards, open the menu again and choose
   **Reverse Frames**.

Step 3: Set the delay and save
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Click the menu icon and choose **Select All Frames**.
#. Under any frame, click the time (it says **0 sec.**) and choose **0.15** seconds.
#. At the bottom left of the Timeline, change **Once** to **Forever**.
#. Press **Play** (the triangle) to watch the starfish waves its arms. Press it again to stop.
#. Click **File > Export > Save for Web (Legacy)...**, choose **GIF** and make sure
   **Transparency** is ticked.
#. Click **Save...**, go to your ``gifs`` folder, name the file ``starfish`` and click **Save**.

.. important::

   File names for web pages should use **lowercase letters** with **no spaces**.
   ``submarine.gif`` is good. ``My Submarine.gif`` will cause problems.

----

Part 2: Put the starfish in the scene
-------------------------------------

#. In your kit folder, right-click ``my_scene.js`` and choose **Open with > Notepad**.
#. Find the list called ``myGifs``. It has one line, for the example clownfish:

   .. code-block:: javascript

      const myGifs = [
        { file: "example_clownfish.gif", name: "Clownfish", x: 20, y: 55, width: 8, seconds: 9, move: "wave-right" },
      ];

#. Add a line for your starfish under it:

   .. code-block:: javascript

      const myGifs = [
        { file: "example_clownfish.gif", name: "Clownfish", x: 20, y: 55, width: 8, seconds: 9, move: "wave-right" },
        { file: "starfish.gif", name: "Starfish", x: 78, y: 93, width: 6, seconds: 0.9 },
      ];

#. Save (**Ctrl + S**), go to your browser, press **F5** and click your starfish.

.. list-table::
   :header-rows: 1
   :widths: 20 80

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

The GIF only shows the movement **on the spot**: fins flicking, wheels turning, arms
waving. The ``move`` setting decides the **path** the picture takes across the scene.

.. list-table::
   :header-rows: 1
   :widths: 24 46 30

   * - ``move``
     - What the picture does
     - In this scene
   * - ``"left"`` or ``"right"``
     - Goes straight off that side and comes back in on the other side
     - shark, hermit crab
   * - ``"up"`` or ``"down"``
     - Goes straight off the top or bottom and comes back in the other end
     - jellyfish
   * - ``"wave-left"`` or ``"wave-right"``
     - Travels across, bobbing up and down like a wave
     - submarine, school of fish, turtle, clownfish
   * - ``"hop-left"`` or ``"hop-right"``
     - Bounces across in hops
     - (none yet)
   * - ``"jump"``
     - Leaps up in an arc, nose up then nose down, and lands where it started
     - (none yet)

.. admonition:: Try it

   * Add a line for the hermit crab with ``move: "hop-right"``. Does a hopping hermit crab look right? Why not?
   * Make one of the travelling pictures' ``seconds`` smaller. Is it faster or slower? Why?
   * A picture should **face the way it travels**. Look at each one that moves. Does its
     ``move`` match the way it faces?

----

Part 4: Make the rest of the scene
----------------------------------

Each picture has its own folder in ``photoshop_frames``. Make each GIF the same way as the
starfish in Part 1, using the delay from the table. Save it in your ``gifs`` folder with the
name shown.

.. list-table::
   :header-rows: 1
   :widths: 20 9 9 22 22 18

   * - Folder
     - Frames
     - Delay
     - Save as
     - What it does
     - ``move``
   * - ``seahorse``
     - 8
     - 0.12
     - ``seahorse.gif``
     - Bobs up and down
     - (stays put)
   * - ``pufferfish``
     - 12
     - 0.12
     - ``pufferfish.gif``
     - Puffs up into a spiky ball
     - (stays put)
   * - ``octopus``
     - 8
     - 0.12
     - ``octopus.gif``
     - Waves its arms and blinks
     - (stays put)
   * - ``eel``
     - 12
     - 0.12
     - ``eel.gif``
     - Peeps out of its rock
     - (stays put)
   * - ``anemone``
     - 8
     - 0.15
     - ``anemone.gif``
     - Sways in the current
     - (stays put)
   * - ``treasure_chest``
     - 10
     - 0.15
     - ``treasure_chest.gif``
     - Opens to show gold
     - (stays put)
   * - ``submarine``
     - 6
     - 0.1
     - ``submarine.gif``
     - Propeller spins, bubbles trail
     - ``"wave-left"``
   * - ``shark``
     - 6
     - 0.12
     - ``shark.gif``
     - Swishes its tail
     - ``"left"``
   * - ``jellyfish``
     - 8
     - 0.12
     - ``jellyfish.gif``
     - Squeezes and stretches
     - ``"up"``
   * - ``fish_school``
     - 6
     - 0.1
     - ``fish_school.gif``
     - Tails flick
     - ``"wave-left"``
   * - ``turtle``
     - 8
     - 0.15
     - ``turtle.gif``
     - Paddles its flippers
     - ``"wave-left"``
   * - ``clownfish``
     - 6
     - 0.1
     - ``clownfish.gif``
     - Swishes its tail
     - ``"wave-right"``
   * - ``hermit_crab``
     - 6
     - 0.1
     - ``hermit_crab.gif``
     - Scuttles and snaps
     - ``"right"``

Then add a line for each GIF to ``myGifs``. For the pictures that stay put, use the GIF maths
to work out the number that goes in place of each ``?``.

.. code-block:: javascript

   { file: "seahorse.gif", name: "Seahorse", x: 7, y: 62, width: 5.5, seconds: ? },
   { file: "pufferfish.gif", name: "Pufferfish", x: 38, y: 68, width: 8, seconds: ? },
   { file: "octopus.gif", name: "Octopus", x: 88, y: 72, width: 11, seconds: ? },
   { file: "eel.gif", name: "Eel", x: 25, y: 80, width: 10, seconds: ? },
   { file: "anemone.gif", name: "Anemone", x: 12, y: 89, width: 10, seconds: ? },
   { file: "treasure_chest.gif", name: "Treasure chest", x: 62, y: 86, width: 11, seconds: ? },
   { file: "submarine.gif", name: "Submarine", x: 70, y: 18, width: 14, seconds: 16, move: "wave-left" },
   { file: "shark.gif", name: "Shark", x: 30, y: 30, width: 18, seconds: 10, move: "left" },
   { file: "jellyfish.gif", name: "Jellyfish", x: 60, y: 32, width: 7, seconds: 12, move: "up" },
   { file: "fish_school.gif", name: "School of fish", x: 82, y: 42, width: 13, seconds: 12, move: "wave-left" },
   { file: "turtle.gif", name: "Turtle", x: 47, y: 50, width: 14, seconds: 18, move: "wave-left" },
   { file: "clownfish.gif", name: "Clownfish", x: 20, y: 55, width: 8, seconds: 9, move: "wave-right" },
   { file: "hermit_crab.gif", name: "Hermit crab", x: 42, y: 92, width: 7, seconds: 14, move: "right" },

When your own ``clownfish.gif`` is working, delete the ``example_clownfish.gif`` line so you do not have
two of them.

.. admonition:: Check your GIF maths
   :class: dropdown

   seahorse 0.96, pufferfish 1.44, octopus 0.96, eel 1.44, anemone 1.2, treasure chest 1.5

.. admonition:: Think about it

   * The jellyfish uses ``move: "up"``. Why does that suit a jellyfish better than ``"left"``?
   * The pufferfish GIF has 12 frames with a delay of 0.12. How long does it last?
   * The submarine and the school of fish both use ``"wave-left"``. Which way must they face?

----

Part 5: Design your own GIF
---------------------------

Now add a picture that is all your own.

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
   * - Whale
     - Water sprays from its blowhole
     - ``"left"``
   * - Diver
     - Kicks their flippers
     - ``"wave-right"``
   * - Stingray
     - Its wings ripple
     - ``"wave-left"``
   * - Clam
     - It opens to show a pearl
     - (stays put)
   * - Bubble
     - It wobbles
     - ``"up"``
   * - Dolphin
     - Flicks its tail
     - ``"jump"``

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
   * - show a scene with at least one GIF I designed myself
     -

----

Spawning more GIFs
------------------

A picture can make copies of another, smaller GIF come out of it when it plays. In the scene
at the top of this page, the pufferfish keeps blowing bubbles, the treasure chest throws out a fountain of coins and the submarine leaves a trail of bubbles behind it. Click them to see.

Add ``spawn`` to a line with the file name of the small GIF. ``count`` is how many copies come
out and ``spread`` is how they move:

.. code-block:: javascript

   { file: "pufferfish.gif", name: "Pufferfish", x: 38, y: 68, width: 8, seconds: 1.44, spawn: "bubble.gif", count: 6, spread: "up" },

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

   { file: "submarine.gif", name: "Submarine", x: 70, y: 18, width: 14, seconds: 16, move: "wave-left", spawn: "bubble.gif", count: 12, spread: "trail", spawnWidth: 2.5 },

Streams of copies
~~~~~~~~~~~~~~~~~

Add ``every`` and the copies keep coming out, one at a time, instead of all at once. In this
line the pufferfish keeps blowing bubbles of mixed sizes, one every quarter of a second for 3 seconds, and each one floats up for about 4 seconds:

.. code-block:: javascript

   { file: "pufferfish.gif", name: "Pufferfish", x: 38, y: 68, width: 8, seconds: 1.44, spawn: "bubble.gif", spread: "up", spawnWidth: "1.5-4", every: 0.25, spawnFor: 3, life: 4 },

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
   * - ``bubble``
     - 4
     - 0.15
     - ``bubble.gif``
   * - ``coin``
     - 6
     - 0.08
     - ``coin.gif``

.. tip::

   Keep a spawned GIF small and simple: 120 × 120 pixels and 4 to 6 frames is plenty.
   Lots of copies are on the screen at once, so a big GIF will slow the page down.

.. admonition:: Try it

   * Change the ``spread`` on one of the lines. Which one suits the picture best?
   * Give the turtle ``spawn: "bubble.gif"`` with ``spread: "trail"``. How many bubbles look right?
   * Design your own small GIF in Photoshop and spawn it from one of your pictures.

.. note::

   Spawned GIFs only appear in a scene with a background, not in a grid of cards. You do not
   need to click them, and they are not counted in **Clicked ... of ...**.

----

Extra challenges
----------------

#. **New title and message.** Change ``sceneTitle`` and ``finishMessage`` in ``my_scene.js``.
#. **Effects.** Change ``sceneEffect`` to ``"bubbles"``, ``"confetti"`` or ``"snow"``.
   Which one suits your scene best? Set ``startEffect`` to ``true`` to have it on from the start.
#. **Play modes.** Change ``playMode`` from ``"once"`` to ``"toggle"``. What is different?
   Try ``"hover"`` too.
#. **Night dive.** Make a darker version of the background for a night dive and add glowing jellyfish. Make it 1600 pixels wide and 900 pixels high,
   save it as a PNG in the ``images`` folder and change ``sceneBackground`` to its name.
#. **Tell a story.** Make a scene where the pictures, played one after another, tell a short
   story about a fish looking for its way home across the reef.

Handing in your work
--------------------

Right-click your ``reef_student_kit`` folder and choose
**Send to > Compressed (zipped) folder**. Hand in the zip file. It holds your web page, your
GIFs and your code together.
