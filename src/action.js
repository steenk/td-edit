import $$$ from "./lib/tripledollar.mjs";

function topTag (tdstring) {
  let re = /^\s*\[\s*[\'\"](.+)[\'\"]/;
  let found = re.exec(tdstring);
  return (found[1] || '').toUpperCase();
}

function toolKey (classes) {
  return (['i'].concat(classes.split(/\s/).filter(x => x !== 'active' && x))).join('.');
}

var knownAction;

function create (conf) {
  let actions = {};

  conf.tools.forEach((tool) => {
    let key = toolKey(tool.classes);
    actions[key] = ($selection) => {
      $selection = $selection || '';
      return JSON.parse(tool.template.replace(/\$selection/g, "'" + $selection + "'").replace(/'/g, '"'));
    }
    actions[topTag(tool.template)] = key;
  });
  knownAction = actions;
  return {
    knownAction: actions
  }
}

function mapToFA (tag) {
	return knownAction[tag];
}

let correction = {
	cite: 'quote-right'
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
    if (!cur.focusNode || cur.focusNode.length < cur.focusOffset) return;
    sel.setBaseAndExtent(cur.anchorNode, cur.anchorOffset, cur.focusNode, cur.focusOffset);

    if (sel.rangeCount) {
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
		let newNode = $$$(knownAction[style]('-'));
		range.insertNode(newNode);
		sel.selectAllChildren(newNode);
	}
	if (!styles[style] && has) {
		console.log(style + ' should be removed')
	}

	return has;
}

function setStyle (textarea, styles) {
	let sel = document.getSelection();
  let cur = textarea.selection;
  sel.setBaseAndExtent(cur.anchorNode, cur.anchorOffset, cur.focusNode, cur.focusOffset);
  for (let style in styles) {
  	hasStyle(cur.anchorNode, style, styles);
  }
}

function check (tool) {
	if (knownAction[tool]) {
		return tool;
	}
	return 'angry';
}

export default { run, check, mapToFA, remove, setStyle, create, toolKey }

