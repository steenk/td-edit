import $$$ from "./lib/tripledollar.mjs";
import action from "./action.js";

const version = '0.2.1';
const changeEvent = new Event('change');

function init (conf) {
  conf = conf || {
    tools: ['bold', 'italic', 'underline', 'paragraph', 'code', 'quote', 'heading.one', 'heading.two',
      'heading.three', 'list', 'list-ol', 'steen'], 
  }
  let holders = $$$.queryAll('.td-rich-editor');
  Array.from(holders).forEach((ed) => {
    $$$(ed).ins(['div.td-edit-toolbar'],[ 'div.td-edit-textarea', {contenteditable:true}]);
  });
  let toolbars = $$$.queryAll('.td-edit-toolbar');
  Array.from(toolbars).forEach((tb) => {
    let id = 'TB' + Math.random() * 1000000000000000000;
    $$$(tb).id = id;
    conf.tools.forEach((tool) => {
      let title = action.check(tool);
      tb.ins(['i.fas.fa-' + title, {title: tool}]);
    });
    tb.evt('click', handleAction, id);
  });
  let textarea = $$$.queryAll('.td-edit-textarea');
  Array.from(textarea).forEach((ta) => {
    ta.selection = {}
    let tb = ta.parentElement.querySelector('.td-edit-toolbar')
    ta.toolbarId = tb.id;
    $$$(ta).evt('change', handleChange, ta, tb);
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
    styles[but.getAttribute('title')] = but.classList.contains('active');
  });
  return styles;
}

function handleAction (evt, id) {
  if (evt.target.tagName === 'I') {
    let t = evt.target;
    let tb = document.getElementById(id);
    let textarea = tb.parentElement.querySelector('.td-edit-textarea');
    let title = t.getAttribute('title');
    if (t.classList.contains('active')) {
      t.classList.remove('active');
      action.remove(textarea, title);
    } else {
      if (textarea.selection.type === 'Caret') {
        t.classList.toggle('active');
        action.setStyle(textarea, selectedStyles(tb))
      } else if (textarea.selection.type === 'Range') {
        action.run(textarea, title);
      }
    }
  }
}

function handleChange (evt, ta, tb) {
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
    let fa = action.mapToFA(parent.tagName);
    let but = tb.querySelector(fa);
    if (but) {
      but.classList.add('active')
    }
  }
}


export default { version, init };

