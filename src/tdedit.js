import $$$ from "./lib/tripledollar.mjs";
import action from "./action.js";
import standard from "./standard.js"

const version = '0.3.0';
const changeEvent = new Event('change');

function toIdent (tag, classes) {
  return String(tag).toLowerCase() + '.' + classes.split(/\s/).join('.');
}

function init (conf) {

  conf = conf || standard;
  
  action.create(conf); // testing
  let holders = $$$.queryAll('.td-rich-editor');
  Array.from(holders).forEach((ed) => {
    let num_id = Math.random() * 1000000000000000000;
    $$$(ed);
    ed.id = 'ED' + num_id;

    // toolbar
    var tb = ed.query('.td-edit-toolbar');
    if (!tb) {
      tb = $$$('div.td-edit-toolbar');
      ed.ins(tb);
      conf.tools.forEach((tool) => {
        let title = action.check(tool);
        tb.ins([toIdent('i', tool.classes), {title: tool.title}]);
      })
    }
    tb.id = 'TB' + num_id;
    tb.evt('click', handleAction, action, tb.id);

    // textarea
    var ta = ed.query('.td-edit-textarea');
    if (!ta) {
      ta = $$$('div.td-edit-textarea');
      ed.ins(ta);
    }
    ta.setAttribute('contenteditable', true);
    ta.id = 'TA' + num_id;
    ta.toolbarId = 'TB' + num_id;
    ta.selection = {};
    ta.evt('change', handleChange, action, ta, tb);
    ta.evt('keyup', (evt) => {
      ta.dispatchEvent(changeEvent);
    })
    ta.evt('click', (evt) => {
      ta.dispatchEvent(changeEvent);
    })

  });

}

function resetToolbar (tb) {
  let all = tb.queryAll('.active');
  Array.from(all).forEach((but) => {
    but.classList.remove('active');
  })
}

function selectedStyles (tb) {
  let all = tb.queryAll('i');
  let styles = {};
  Array.from(all).forEach((but) => {
    styles[action.toolKey(but.className)] = but.classList.contains('active');
  });
  return styles;
}

function handleAction (evt, act, id) {
  if (evt.target.tagName === 'I') {
    let t = evt.target;
    let tb = document.getElementById(id);
    let textarea = document.getElementById('TA' + id.substring(2));
    let title = action.toolKey(t.className);
    if (t.classList.contains('active')) {
      t.classList.remove('active');
      act.remove(textarea, title);
    } else {
      if (textarea.selection.type === 'Caret') {
        t.classList.toggle('active');
        act.setStyle(textarea, selectedStyles(tb))
      } else if (textarea.selection.type === 'Range') {
        act.run(textarea, title);
      }
    }
  }
}

function handleChange (evt, act, ta, tb) {
  resetToolbar(tb);
  let sel = document.getSelection();
  if (!sel.anchorNode) {
    console.log('no anchor', sel.type);
    return;
  }
  for (let key of ['anchorNode', 'focusNode', 'anchorOffset', 'focusOffset', 'isCollapsed', 'rangeCount', 'type']) {
    ta.selection[key] = sel[key];
  }
  let parent = sel.anchorNode.parentNode;
  if (!parent.classList.contains('td-edit-textarea')) {
    let fa = act.mapToFA(parent.tagName);
    let but = tb.querySelector(fa);
    if (but) {
      but.classList.add('active')
    }
  }
}

export default { version, init };

