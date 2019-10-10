export default {
  tools: [
    {
      title: 'Bold',
      classes: "fas fa-bold",
      template: "['strong', $selection]"
    },
    {
      title: 'Italic',
      classes: "fas fa-italic",
      template: "['em', $selection]"
    },
    {
      title: 'Mark',
      classes: "fas fa-underline",
      template: "['mark', $selection]"
    },
    {
      title: 'Large heading',
      classes: 'fas fa-heading one',
      template: "['h1', $selection]"
    },
    {
      title: 'Middle heading',
      classes: 'fas fa-heading two',
      template: "['h2', $selection]"
    },
    {
      title: 'Small heading',
      classes: 'fas fa-heading three',
      template: "['h3', $selection]"
    },
    {
      title: 'Code',
      classes: 'fas fa-code',
      template: "['code', $selection]"
    }
  ]
};