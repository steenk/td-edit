import $$$ from "./lib/tripledollar.mjs";

let knownAction = {
  bold: function (content) {
    return ['strong', content];
  },
  'STRONG': 'bold',
  italic: function (content) {
    return ['em', content];
  },
  'EM': 'italic',
  underline: function (content) {
    return ['mark', content];
  },
  'MARK': 'underline',
  cite: function (content) {
    return ['cite', content];
  },
  paragraph: function (content) {
    return ['p', content];
  },
  'P': 'paragraph',
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

function mapToFA (tag) {
	let name = knownAction[tag];
	if (name) {
		return '.fa-' + name;
	}
}

let correction = {
	quote: 'quote-right'
}

function remove (textarea, title) {
	let sel = document.getSelection();
	let elem = textarea.selection.anchorNode.parentElement;
	if (knownAction[elem.tagName] && knownAction[elem.tagName] === title) {
		elem.parentNode.replaceChild(textarea.selection.anchorNode, elem);
	}
}

function run (textarea, title) {
  title = correction[title] || title;
  if (knownAction[title]) {
    
    let sel = document.getSelection();
    let cur = textarea.selection;
    if (cur.focusNode.length < cur.focusOffset) return;

    sel.setBaseAndExtent(cur.anchorNode, cur.anchorOffset, cur.focusNode, cur.focusOffset);

    let res = knownAction[title](sel.toString());

    if (sel.rangeCount) {
        let range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode($$$(res));
        sel.empty();
    }

  }
}

function check (tool) {
	tool = correction[tool] || tool;
	if (knownAction[tool]) {
		return tool;
	}
	return 'angry';
}

export default { run, check, mapToFA, remove }

