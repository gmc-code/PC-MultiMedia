=========================
Make a clickable toy room
=========================

What do toys get up to when nobody is looking? In this tutorial you will make animated pictures (GIFs) in Photoshop and put them into a toy room on a web page. Each toy stays still until someone clicks it. Then it comes to life.

The toys move in lots of different ways. The train and the car drive across the floor, the robot marches, the ball bounces, the rocket blasts straight up, the paper plane glides and the wind-up frog jumps.

Click a picture to bring it to life.

.. gifscene::
    :theme: toyroom
    :title: The toy room
    :background: toyroom_images/background.png
    :folder: toyroom_images
    :sound:

    paper_plane.gif | Paper plane | x=42 y=18 width=9 seconds=8 move=wave-left
    yo_yo.gif | Yo-yo | x=80 y=38 width=6
    jack_in_box.gif | Jack-in-the-box | x=10 y=51.4 width=13 spawn=sparkle.gif count=8 spread=burst
    rocket.gif | Rocket | x=94 y=77 width=6.5 seconds=4 move=up
    blocks.gif | Blocks | x=57 y=66.6 width=11
    robot.gif | Robot | x=40 y=68 width=8 seconds=14 move=left
    rocking_horse.gif | Rocking horse | x=24 y=74 width=13
    teddy.gif | Teddy | x=88 y=78 width=11 spawn=heart.gif count=4 spread=up
    spinning_top.gif | Spinning top | x=72 y=80 width=6
    drum.gif | Drum | x=46 y=82 width=9 spawn=note.gif count=4 spread=up
    ball.gif | Ball | x=60 y=84 width=5.5 seconds=8 move=hop-right
    train.gif | Train | x=30 y=90 width=18 seconds=9 move=right
    frog.gif | Wind-up frog | x=80 y=90 width=8 seconds=1.2 move=jump
    toy_car.gif | Toy car | x=62 y=94 width=13 seconds=7 move=left

Seven of the pictures have ``move=`` on their lines, so they travel when they are clicked.
Click **Play all** to set the whole scene going.

----

As a grid
---------

Leave out ``:background:`` and the pictures are set out as cards. This one uses
``:play: toggle``, so a click starts a picture and another click stops it.

.. gifscene::
   :theme: toyroom
   :title: Toy room cards
   :folder: toyroom_images
   :columns: 4
   :play: toggle

   paper_plane.gif | Paper plane
   yo_yo.gif | Yo-yo
   jack_in_box.gif | Jack-in-the-box
   rocket.gif | Rocket
   blocks.gif | Blocks
   robot.gif | Robot
   rocking_horse.gif | Rocking horse
   teddy.gif | Teddy
   spinning_top.gif | Spinning top
   drum.gif | Drum
   ball.gif | Ball
   train.gif | Train
   frog.gif | Wind-up frog
   toy_car.gif | Toy car

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
* The **student kit**: :download:`toyroom_student_kit.zip <toyroom_kit/toyroom_student_kit.zip>`

Get the kit ready
~~~~~~~~~~~~~~~~~

#. Download the kit.
#. Find it in your **Downloads** folder. Right-click it and choose **Extract All**.
#. Open the new ``toyroom_student_kit`` folder. You should see this:

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
#. Click the drum. It should come to life.

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

Part 1: Make the teddy
----------------------

The eight pictures of the teddy are already drawn for you. You will turn them into a GIF.

Step 1: Load the pictures as layers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Open **Photoshop**.
#. Click **File > Scripts > Load Files into Stack...**
#. Click **Browse**. Go to ``photoshop_frames/teddy``.
#. Click ``teddy_01.png``. Hold **Shift** and click ``teddy_08.png`` so all eight pictures are
   selected. Click **Open**, then **OK**.
#. Look at the **Layers** panel. There are eight layers, one for each picture.

Step 2: Turn the layers into frames
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Click **Window > Timeline**. The Timeline panel opens at the bottom.
#. In the middle of the Timeline there is a button with a small arrow next to it. Click the
   **arrow** and choose **Create Frame Animation**. Then click the **button**.
#. Click the **menu icon** (four small lines) at the top right of the Timeline.
#. Choose **Make Frames From Layers**. You now have eight frames.
#. Frame 1 should be ``teddy_01``. If the frames are backwards, open the menu again and choose
   **Reverse Frames**.

Step 3: Set the delay and save
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Click the menu icon and choose **Select All Frames**.
#. Under any frame, click the time (it says **0 sec.**) and choose **0.12** seconds.
#. At the bottom left of the Timeline, change **Once** to **Forever**.
#. Press **Play** (the triangle) to watch the teddy waves hello. Press it again to stop.
#. Click **File > Export > Save for Web (Legacy)...**, choose **GIF** and make sure
   **Transparency** is ticked.
#. Click **Save...**, go to your ``gifs`` folder, name the file ``teddy`` and click **Save**.

.. important::

   File names for web pages should use **lowercase letters** with **no spaces**.
   ``paper_plane.gif`` is good. ``My Paper plane.gif`` will cause problems.

----

Part 2: Put the teddy in the scene
----------------------------------

#. In your kit folder, right-click ``my_scene.js`` and choose **Open with > Notepad**.
#. Find the list called ``myGifs``. It has one line, for the example drum:

   .. code-block:: javascript

      const myGifs = [
        { file: "example_drum.gif", name: "Drum", x: 46, y: 82, width: 9, seconds: 0.8 },
      ];

#. Add a line for your teddy under it:

   .. code-block:: javascript

      const myGifs = [
        { file: "example_drum.gif", name: "Drum", x: 46, y: 82, width: 9, seconds: 0.8 },
        { file: "teddy.gif", name: "Teddy", x: 88, y: 78, width: 11, seconds: 0.96 },
      ];

#. Save (**Ctrl + S**), go to your browser, press **F5** and click your teddy.

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
     - robot, train, toy car
   * - ``"up"`` or ``"down"``
     - Goes straight off the top or bottom and comes back in the other end
     - rocket
   * - ``"wave-left"`` or ``"wave-right"``
     - Travels across, bobbing up and down like a wave
     - paper plane
   * - ``"hop-left"`` or ``"hop-right"``
     - Bounces across in hops
     - ball
   * - ``"jump"``
     - Leaps up in an arc, nose up then nose down, and lands where it started
     - wind-up frog

.. admonition:: Try it

   * Add a line for the toy car with ``move: "hop-left"``. Does a hopping car look right? Why not?
   * Make one of the travelling pictures' ``seconds`` smaller. Is it faster or slower? Why?
   * A picture should **face the way it travels**. Look at each one that moves. Does its
     ``move`` match the way it faces?

----

Part 4: Make the rest of the scene
----------------------------------

Each picture has its own folder in ``photoshop_frames``. Make each GIF the same way as the
teddy in Part 1, using the delay from the table. Save it in your ``gifs`` folder with the
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
   * - ``yo_yo``
     - 10
     - 0.1
     - ``yo_yo.gif``
     - Goes down and up
     - (stays put)
   * - ``jack_in_box``
     - 12
     - 0.12
     - ``jack_in_box.gif``
     - Pops out of the box
     - (stays put)
   * - ``blocks``
     - 8
     - 0.1
     - ``blocks.gif``
     - Top block hops
     - (stays put)
   * - ``rocking_horse``
     - 8
     - 0.15
     - ``rocking_horse.gif``
     - Rocks back and forth
     - (stays put)
   * - ``spinning_top``
     - 8
     - 0.08
     - ``spinning_top.gif``
     - Spins and wobbles
     - (stays put)
   * - ``drum``
     - 8
     - 0.1
     - ``drum.gif``
     - Drumsticks bang
     - (stays put)
   * - ``paper_plane``
     - 6
     - 0.12
     - ``paper_plane.gif``
     - Wobbles as it glides
     - ``"wave-left"``
   * - ``rocket``
     - 4
     - 0.1
     - ``rocket.gif``
     - Flame flickers
     - ``"up"``
   * - ``robot``
     - 8
     - 0.12
     - ``robot.gif``
     - Marches, lights flash
     - ``"left"``
   * - ``ball``
     - 8
     - 0.08
     - ``ball.gif``
     - Spins
     - ``"hop-right"``
   * - ``train``
     - 6
     - 0.1
     - ``train.gif``
     - Wheels turn, smoke puffs
     - ``"right"``
   * - ``frog``
     - 8
     - 0.1
     - ``frog.gif``
     - Key turns, legs kick
     - ``"jump"``
   * - ``toy_car``
     - 6
     - 0.08
     - ``toy_car.gif``
     - Wheels spin
     - ``"left"``

Then add a line for each GIF to ``myGifs``. For the pictures that stay put, use the GIF maths
to work out the number that goes in place of each ``?``.

.. code-block:: javascript

   { file: "yo_yo.gif", name: "Yo-yo", x: 80, y: 38, width: 6, seconds: ? },
   { file: "jack_in_box.gif", name: "Jack-in-the-box", x: 10, y: 51.4, width: 13, seconds: ? },
   { file: "blocks.gif", name: "Blocks", x: 57, y: 66.6, width: 11, seconds: ? },
   { file: "rocking_horse.gif", name: "Rocking horse", x: 24, y: 74, width: 13, seconds: ? },
   { file: "spinning_top.gif", name: "Spinning top", x: 72, y: 80, width: 6, seconds: ? },
   { file: "drum.gif", name: "Drum", x: 46, y: 82, width: 9, seconds: ? },
   { file: "paper_plane.gif", name: "Paper plane", x: 42, y: 18, width: 9, seconds: 8, move: "wave-left" },
   { file: "rocket.gif", name: "Rocket", x: 94, y: 77, width: 6.5, seconds: 4, move: "up" },
   { file: "robot.gif", name: "Robot", x: 40, y: 68, width: 8, seconds: 14, move: "left" },
   { file: "ball.gif", name: "Ball", x: 60, y: 84, width: 5.5, seconds: 8, move: "hop-right" },
   { file: "train.gif", name: "Train", x: 30, y: 90, width: 18, seconds: 9, move: "right" },
   { file: "frog.gif", name: "Wind-up frog", x: 80, y: 90, width: 8, seconds: 1.2, move: "jump" },
   { file: "toy_car.gif", name: "Toy car", x: 62, y: 94, width: 13, seconds: 7, move: "left" },

When your own ``drum.gif`` is working, delete the ``example_drum.gif`` line so you do not have
two of them.

.. admonition:: Check your GIF maths
   :class: dropdown

   yo yo 1.0, jack in box 1.44, blocks 0.8, rocking horse 1.2, spinning top 0.64, drum 0.8

.. admonition:: Think about it

   * The rocket uses ``move: "up"``. What happens when it goes off the top of the scene?
   * The jack-in-the-box GIF has 12 frames with a delay of 0.12. How long does it last?
   * The robot and the toy car both use ``"left"``. Which way must they face?

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
   * - Dinosaur
     - Stomps and roars
     - ``"left"``
   * - Kite
     - Its tail flaps
     - ``"wave-right"``
   * - Bouncy ball
     - Squashes as it lands
     - ``"hop-left"``
   * - Music box
     - A dancer spins
     - (stays put)
   * - Balloon
     - It wobbles
     - ``"up"``
   * - Jumping bean
     - It wiggles
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
at the top of this page, the jack-in-the-box bursts into sparkles, the drum sends music notes floating up and the teddy blows hearts. Click them to see.

Add ``spawn`` to a line with the file name of the small GIF. ``count`` is how many copies come
out and ``spread`` is how they move:

.. code-block:: javascript

   { file: "drum.gif", name: "Drum", x: 46, y: 82, width: 9, seconds: 0.8, spawn: "note.gif", count: 4, spread: "up" },

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

   { file: "train.gif", name: "Train", x: 30, y: 90, width: 18, seconds: 9, move: "right", spawn: "heart.gif", count: 8, spread: "trail", spawnWidth: 3 },

Streams of copies
~~~~~~~~~~~~~~~~~

Add ``every`` and the copies keep coming out, one at a time, instead of all at once. In this
line the teddy keeps blowing hearts of different sizes for 2 seconds:

.. code-block:: javascript

   { file: "teddy.gif", name: "Teddy", x: 88, y: 78, width: 11, seconds: 0.96, spawn: "heart.gif", spread: "up", spawnWidth: "2-4", every: 0.25, spawnFor: 2, life: 3, distance: 30 },

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
   * - ``sparkle``
     - 4
     - 0.1
     - ``sparkle.gif``
   * - ``note``
     - 4
     - 0.12
     - ``note.gif``
   * - ``heart``
     - 4
     - 0.12
     - ``heart.gif``

.. tip::

   Keep a spawned GIF small and simple: 120 × 120 pixels and 4 to 6 frames is plenty.
   Lots of copies are on the screen at once, so a big GIF will slow the page down.

.. admonition:: Try it

   * Change the ``spread`` on one of the lines. Which one suits the picture best?
   * Give the rocket ``spawn: "sparkle.gif"`` with ``spread: "trail"`` so it leaves sparks behind it.
   * Design your own small GIF in Photoshop and spawn it from one of your pictures.

.. note::

   Spawned GIFs only appear in a scene with a background, not in a grid of cards. You do not
   need to click them, and they are not counted in **Clicked ... of ...**.

----

Extra challenges
----------------

#. **New title and message.** Change ``sceneTitle`` and ``finishMessage`` in ``my_scene.js``.
#. **Effects.** Change ``sceneEffect`` to ``"bubbles"``, ``"confetti"``, ``"snow"`` or ``"wind"``.
   Which one suits your scene best? Set ``startEffect`` to ``true`` to have it on from the start.
   Change ``effectIntensity`` to ``"light"``, ``"medium"`` or ``"heavy"`` to have less or more of it.
   (Try them first: click the **✦ Confetti** button above the scene and choose Light, Medium or Heavy.)
#. **Play modes.** Change ``playMode`` from ``"once"`` to ``"toggle"``. What is different?
   Try ``"hover"`` too.
   One picture can have its own mode too: add ``play: "toggle"`` (or ``"once"``, ``"hover"``)
   to its line.
#. **Bedtime.** Make a night-time version of the room with the curtains closed and a night light glowing. Make it 1600 pixels wide and 900 pixels high,
   save it as a PNG in the ``images`` folder and change ``sceneBackground`` to its name.
#. **Tell a story.** Make a scene where the pictures, played one after another, tell a short
   story about the toys waking up one by one when the lights go out.

Handing in your work
--------------------

Right-click your ``toyroom_student_kit`` folder and choose
**Send to > Compressed (zipped) folder**. Hand in the zip file. It holds your web page, your
GIFs and your code together.
