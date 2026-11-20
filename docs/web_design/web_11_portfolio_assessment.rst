=================================
Assessment: website portfolio
=================================

.. admonition:: Task summary

   **Type:** Portfolio

   **You will:** design, build, test and evaluate a website of at least four linked
   pages that shows off the work you made in Multimedia this semester.

   **Hand in:** design folio (criteria, site map, wireframes, style guide), the
   zipped website folder, a testing table and an evaluation.

----

The brief
---------

**Client:** you, as a young multimedia designer.

**Purpose:** a portfolio website that you could show to a future employer,
course or client. It presents your animation and graphic design work and tells
visitors who you are.

**Audience:** teachers, employers and people looking for a designer.

Requirements
~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - Area
     - Must have
   * - **Pages**
     - At least 4 pages: **Home** (``index.html``), **About**, **Animation**,
       **Graphic design**. Optional: Contact, Web, Blog.
   * - **HTML**
     - Correct page structure on every page; semantic elements (``header``,
       ``nav``, ``main``, ``footer``); headings in order; at least one list and
       one table or form
   * - **Navigation**
     - The same menu on every page. All links work.
   * - **Media**
     - Your GIFs and social media posts, each with alt text and a caption. At
       least one video or audio file, or embed.
   * - **CSS**
     - One external stylesheet linked to every page; a consistent colour scheme
       and font pairing; box model spacing; flexbox layout
   * - **Responsive**
     - At least one media query; works at 375 px without sideways scrolling
   * - **JavaScript**
     - At least one interactive feature (dark mode, gallery, show/hide, greeting)
   * - **Accessibility**
     - Passes the accessibility checklist in :doc:`web_08_responsive_accessibility`
   * - **Legal**
     - A credits section for any images, fonts or code you did not create

.. tip::

   The ``portfolio_template`` folder in the starter kit gives you four linked
   pages with a basic header, nav and footer. You may start from it, but you must
   change the design to make it your own.

----

Stage 1: Investigate and define
-------------------------------

#. Look at **three** designer portfolio websites. For each, note one UX strength,
   one UI strength and one weakness.
#. Write at least **five design criteria** that are specific and testable (see
   :doc:`web_09_ux_design`). Include at least one each for usability, appearance,
   responsiveness and accessibility.

Stage 2: Design
---------------

#. **Site map** showing all pages and links.
#. **Two different** home page wireframes. Compare them against your criteria and
   choose one, with reasons.
#. **Wireframes** for the other pages (desktop and mobile for at least the home
   page).
#. **Style guide**: your colour palette (hex codes and contrast ratios), fonts,
   heading sizes, and an example button and card.

Stage 3: Build
--------------

* Build in this order: HTML structure for all pages → navigation → CSS → images
  and media → responsive → JavaScript.
* Keep your files organised:

  .. code-block:: text
     :class: no-copybutton

     portfolio_yourname/
     ├── index.html
     ├── about.html
     ├── animation.html
     ├── design.html
     ├── css/
     │   └── style.css
     ├── js/
     │   └── script.js
     └── images/

* Comment your CSS and JavaScript so someone else could understand it.
* Save versions: zip your folder at the end of each lesson
  (``portfolio_v3.zip``).

Stage 4: Test
-------------

Use ``testing_table.pdf`` from the kit, or copy this table.

.. list-table::
   :header-rows: 1
   :widths: 30 30 20 20

   * - Test
     - Expected result
     - Actual result
     - Fixed?
   * - Click every menu link on every page
     - Goes to the right page
     -
     -
   * - Every image loads and has alt text
     - No broken images
     -
     -
   * - View at 375 px wide
     - No sideways scroll; menu is usable
     -
     -
   * - HTML validator (validator.w3.org)
     - No errors
     -
     -
   * - Tab through the page with the keyboard
     - Can reach every link and button
     -
     -
   * - Dark mode (or your JS feature)
     - Works and can be switched back
     -
     -
   * - Contrast checker on text colours
     - At least 4.5 : 1
     -
     -

Ask **two** classmates to use your site and complete a task (for example "Find
Sam's bouncing ball GIF"). Record how long it took and any problems.

Stage 5: Evaluate
-----------------

Answer the evaluation questions below.

----

Rubric
------

.. list-table::
   :header-rows: 1
   :widths: 16 21 21 21 21

   * - Criterion
     - Beginning
     - Developing
     - Proficient
     - Advanced
   * - **Design** (criteria, site map, wireframes, style guide)
     - Little planning
     - Some wireframes; criteria are vague
     - Testable criteria; complete site map, wireframes and style guide; two ideas compared
     - Thorough, professional design folio; ideas critically compared with clear reasons
   * - **HTML and structure**
     - Several pages broken or missing
     - All pages exist; some structure errors
     - Valid, semantic HTML; working navigation; media with alt text
     - Clean, well-commented, validated code across all pages
   * - **CSS and responsive design**
     - Little styling
     - Consistent styling; layout breaks on phones
     - External CSS, flexbox layout, working media query, consistent design
     - Polished, original design that works well at all sizes
   * - **JavaScript**
     - No working interactivity
     - One feature, partly working
     - One feature fully working with a reusable function
     - Two or more features; clear, modular, commented code
   * - **Testing and evaluation**
     - Little testing
     - Some tests recorded
     - Full testing table; user feedback; problems fixed
     - Evaluation judges the site against every criterion with evidence and realistic improvements

----

Evaluation questions
--------------------

.. structuredquestion:: Website evaluation
   :total-marks: 15

   .. subquestion:: Evaluate your website against each of your design criteria. For each, say whether it was met and give evidence.
      :marks: 5

      .. model-answer::

         Lists each criterion with a clear judgement (met, partly met, not met)
         and specific evidence from testing, for example "Met: in user testing both
         classmates found the GIF in under 10 seconds."

   .. subquestion:: Explain why content, structure and presentation are kept separate in your website. Give an example from your code.
      :marks: 3

      .. model-answer::

         Explains that HTML holds content and structure and CSS holds presentation,
         so the look can be changed in one file and the content can be read by
         screen readers and search engines. Gives an example, such as changing the
         brand colour once in style.css to update every page.

   .. subquestion:: Describe one bug you found while building or testing and how you fixed it.
      :marks: 3

      .. model-answer::

         Describes the symptom, how it was found (validator, console, testing),
         the cause and the fix, for example a broken image caused by a capital
         letter in the file name.

   .. subquestion:: Describe two improvements you would make in the future, and explain how each would benefit users.
      :marks: 4

      .. model-answer::

         Two specific, realistic improvements (such as compressing images to WebP
         or adding captions to the video) each linked to a clear user benefit
         (faster loading on mobile data; accessibility for deaf users).

----

Hand-in checklist
-----------------

.. list-table::
   :header-rows: 1
   :widths: 75 25

   * - Item
     - Done?
   * - Design criteria (at least five, testable)
     - ☐
   * - Site map and wireframes (two home page ideas compared)
     - ☐
   * - Style guide with hex codes and contrast ratios
     - ☐
   * - Website folder, zipped, with ``index.html`` at the top level
     - ☐
   * - Completed testing table and user feedback
     - ☐
   * - Credits for images, fonts and code
     - ☐
   * - Evaluation answers
     - ☐
