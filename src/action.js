import $$$ from "./lib/tripledollar.mjs";

let knownAction = {
  bold: function (content) {
    return ['strong', content];
  },
  italic: function (content) {
    return ['em', content];
  },
  underline: function (content) {
    return ['mark', content];
  },
  cite: function (content) {
    return ['cite', content];
  },
  paragraph: function (content) {
    return ['p', content];
  },
  code: function (content) {
    return ['code', content];
  },
  'quote-right': function (content) {
    return ['quote', content];
  },
  'heading.one': function (content) {
  	return ['h1', content];
  },
  'heading.two': function (content) {
  	return ['h2', content];
  },
  'heading.three': function (content) {
  	return ['h3', content];
  },
  'heading.four': function (content) {
  	return ['h4', content];
  },
  'heading.five': function (content) {
  	return ['h5', content];
  },
  'heading.six': function (content) {
  	return ['h6', content];
  },
  angry: function (content) {
  	return content;
  }

}

let correction = {
	quote: 'quote-right'
}


function run (textarea, title) {
  title = correction[title] || title;
  if (knownAction[title]) {
    
    let sel = document.getSelection();
    let cur = textarea.selection;
    sel.setBaseAndExtent(cur.anchorNode, cur.anchorOffset, cur.focusNode, cur.focusOffset);
    let res = knownAction[title](sel.toString());
    
    if (sel.rangeCount) {
        let range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode($$$(res));
    }

  }
}

/*
documentFragment = range.cloneContents();
document.body.appendChild(documentFragment);
*/

function check (tool) {
	tool = correction[tool] || tool;
	if (knownAction[tool]) {
		return tool;
	}
	return 'angry';
}

export default { run, check }

