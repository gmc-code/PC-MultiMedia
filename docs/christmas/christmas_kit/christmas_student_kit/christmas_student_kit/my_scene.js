// ============================================================
//  MY CHRISTMAS SCENE
//  This is the only file you need to change.
//  Change the words and numbers. Keep the commas, the brackets
//  and the "speech marks" exactly where they are!
// ============================================================

const sceneTitle = "My Christmas scene";
const sceneBackground = "images/background.png";
const sceneTheme = "christmas";

// One line for each GIF in your gifs folder.
//   file    = the file name of the GIF (spelt exactly the same)
//   name    = what the picture is called
//   x       = how far across it is (0 = left edge, 100 = right edge)
//   y       = how far down it is   (0 = top edge, 100 = bottom edge)
//   width   = how big it is (10 = one tenth of the width of the background)
//   seconds = how long it plays after a click (number of frames x delay)
//   move    = makes it travel (optional). seconds is then how long the trip takes.
//             "left" or "right"            straight across
//             "up" or "down"               straight up or down
//             "wave-left" or "wave-right"  bobbing up and down as it goes
//             "hop-left" or "hop-right"    bouncing along
//             "jump"                       leaps up and lands where it started
//   play    = "once", "toggle" or "hover" for this picture only (optional, see playMode below)
//   spawn   = another GIF that comes out of it when it plays (optional), e.g. "note.gif"
//   count   = how many copies come out (5 if left out, up to 20)
//   spread  = how the copies move: "burst", "up", "down", "fountain" or "trail"
//   spawnWidth = how big the copies are (optional, like width). "2-5" gives random sizes.
//   every   = copies come out one at a time, this many seconds apart (optional)
//   spawnFor = how many seconds the copies keep coming (optional)
//   life    = how many seconds each copy takes to finish (optional)
//   distance = how far each copy goes, as a percentage of the scene (optional)

const myGifs = [
  { file: "example_snowman.gif", name: "Snowman", x: 72, y: 66, width: 15, seconds: 1.2 },
];

// Extras.
// sceneEffect can be "snow", "confetti", "bubbles" or "wind".
// startEffect = true turns it on when the page opens (it always comes on at the end).
const sceneEffect = "snow";
// effectIntensity can be "light", "medium" or "heavy" (how much of the effect there is).
const effectIntensity = "medium";
const startEffect = true;
const playSound = true;

// "once" plays the GIF one time for each click.
// "toggle" means click to start and click again to stop.
// "hover" plays while the mouse is over the picture.
// A picture with its own play: on its line uses that instead.
const playMode = "once";

const finishIcon = "🎄";
const finishMessage = "You found them all. Merry Christmas!";
