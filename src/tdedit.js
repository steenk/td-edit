import $$$ from "./lib/tripledollar.mjs";
import action from "./action.js";

const version = '0.1.0';
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
    ta.id = 'steen';
    ta.selection = {}
    $$$(ta).evt('change', handleChange, ta);
    ta.evt('keyup', (evt) => {
      ta.dispatchEvent(changeEvent);
    })
    ta.evt('click', (evt) => {
      ta.dispatchEvent(changeEvent);
    })
  });
}

function handleAction (evt, id) {
  if (evt.target.tagName === 'I') {
    let t = evt.target;
    let textarea = document.getElementById(id).parentElement.querySelector('.td-edit-textarea');
    let title = t.getAttribute('title');
    action.run(textarea, title);
  }
}

function handleChange (evt, ta) {
  let sel = document.getSelection();
  for (let key of ['anchorNode', 'focusNode', 'anchorOffset', 'focusOffset', 'isCollapsed', 'rangeCount', 'type']) {
    ta.selection[key] = sel[key];
  }
  if (!sel.type === 'Caret') {

  }
}


export default { version, init };

