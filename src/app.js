import tdedit from "./tdedit.js";

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    tdedit.init();
  }
}

