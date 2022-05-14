// Example use for the demo plugin:
// {{ 'Steph' | hello | safe }}
const fs = require("fs");
const Handlebars = require("handlebars");

function getFileContents(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

// function that takes string and uses it for handlebars template
function addData(htmlString, data) {
  const template = Handlebars.compile(htmlString);
  return template(data);
}


module.exports = (eleventyConfig, options) => {
  // Define defaults for your plugin config
  const defaults = {
    htmlTag: "h2",
  };

  // Syntax for the template tag:
  // {% tailwind directory component data %}

  eleventyConfig.addShortcode("tailwind", (directory, component, data) => {
    const template = getFileContents(`./templates/${directory}/${component}.html`).replace(/(\r\n|\n|\r)/gm, "");
    const htmlString = addData(template, data);
    return htmlString;
  });


  // You can create more than filters as a plugin, but here's an example
  eleventyConfig.addFilter("hello", (name) => {
    // Combine defaults with user defined options
    const { htmlTag } = {
      ...defaults,
      ...options,
    };

    return `<${htmlTag}>Hello, ${name}!</${htmlTag}>`;
  });
};
