// Enable text selection if it is disabled via CSS
document.body.style.userSelect = 'auto'; // Revert if the site is blocking text selection

// Remove the prevention of right-click context menu
document.addEventListener('contextmenu', function(e) {
  e.stopPropagation(); // Prevent the default context menu block
}, true);

// Remove or replace restrictions on the copy event (Ctrl+C)
document.addEventListener('copy', function(e) {
  // Here you can manipulate the copied content, if needed
  console.log('Content copied');
}, true);

// Allow standard copy/paste keyboard shortcuts (Ctrl+C and Ctrl+V)
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.key === 'c' || e.key === 'v')) {
    console.log('Copy or Paste keyboard shortcut pressed');
  }
}, false);

// Allow the default paste behavior
document.addEventListener('paste', function(e) {
  e.stopPropagation(); // Prevent blocking the paste behavior
}, true);

