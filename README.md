# Hyper UI Plugin for 11ty

This plugin gives shortcode access to a (currently) subset of [HyperUI](https://www.hyperui.dev/) by [Mark Mead](https://twitter.com/itsmarkmead).



## Usage

Describe how to install your plugin, such as:

```bash
npm install eleventy-plugin-tailwind-components
```

Then, include it in your `.eleventy.js` config file:

```js
const tailwind = require("eleventy-plugin-tailwind-components");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(tailwind);
};
```

## Current templates

### Card templates

```html
{% tailwind card <cardtype> dataObject %}
```

| property      | Type | Description       |
| ----------- | ---- | ------------- |
| title | string | A title for the card |
| description | string | a short description to show on the card |
| url | string | optional url |
| image | string | Url to an image to use in image-based cards |

| Card type | accepted data | description |
| ----------- | ---- | ------------- |
| gradient | title, description, url | Simple card with gradient border |
| image | title, description, image, url | Dark background card with image |
| borderImage | title, description, image, url | Simple light background, bordered card |


## Credits

Components from [HyperUI](https://www.hyperui.dev/) by [Mark Mead](https://twitter.com/itsmarkmead)