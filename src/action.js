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
  console.log('run', textarea, title)
  if (knownAction[title]) {
    
    let sel = document.getSelection();
    let cur = textarea.selection;
    console.log(cur.type)
    if (!cur.focusNode || cur.focusNode.length < cur.focusOffset) return;
    sel.setBaseAndExtent(cur.anchorNode, cur.anchorOffset, cur.focusNode, cur.focusOffset);

    if (sel.rangeCount) {
    	console.log(sel.rangeCount)
        let range = sel.getRangeAt(0);
        if (sel.type === 'Range') {
        	let res = knownAction[title](sel.toString());
        	range.deleteContents();
        	range.insertNode($$$(res));
        	sel.empty();
        	return;
        }
        if (sel.type === 'Caret') {
        	console.log(textarea.toolbarId)
        }
    }

  }
}

function hasStyle (node, style, styles) {
	var has = false;
	var elem = node.nodeType === 1 ? node : node.parentElement;
	while (!elem.classList.contains('td-edit-textarea')) {
		//console.log(knownAction[elem.tagName], 'vs', style)
		if (knownAction[elem.tagName] === style) has = true;
		elem = elem.parentNode;
	}
	if (styles[style] && !has) {
		console.log(style + ' should be created');
		let sel = document.getSelection();
		let range = sel.getRangeAt(0);
		let newNode = $$$(knownAction[style]('⃗'));
		range.insertNode(newNode);
		sel.selectAllChildren(newNode);
	}
	if (!styles[style] && has) {
		console.log(style + ' should be removed')
	}

	return has;
}

function setStyle (textarea, styles) {
	console.log(styles);
	let sel = document.getSelection();
  let cur = textarea.selection;
  sel.setBaseAndExtent(cur.anchorNode, cur.anchorOffset, cur.focusNode, cur.focusOffset);
  for (let style in styles) {
  	hasStyle(cur.anchorNode, style, styles);
  	//console.log(style, hasStyle(cur.anchorNode, style, styles));
  }
}

function check (tool) {
	tool = correction[tool] || tool;
	if (knownAction[tool]) {
		return tool;
	}
	return 'angry';
}

export default { run, check, mapToFA, remove, setStyle }

