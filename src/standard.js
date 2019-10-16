export default {
  tools: [
    {
      title: 'Bold',
      classes: "td-button icon-bold",
      template: "['strong', $selection]"
    },
    {
      title: 'Italic',
      classes: "td-button icon-italic",
      template: "['em', $selection]"
    },
    {
      title: 'Mark',
      classes: "td-button icon-underline",
      template: "['mark', $selection]"
    },
    {
      title: 'Large heading',
      classes: 'td-button icon-heading one',
      template: "['h1', $selection]"
    },
    {
      title: 'Middle heading',
      classes: 'td-button icon-heading two',
      template: "['h2', $selection]"
    },
    {
      title: 'Small heading',
      classes: 'td-button icon-heading three',
      template: "['h3', $selection]"
    },
    {
      title: 'Code',
      classes: 'td-button icon-code',
      template: "['code', $selection]"
    }
  ]
};