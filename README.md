<h1 align="center">Vue Remarkable</h1>

[![Build Status](https://travis-ci.org/katalonne/vue-remarkable.svg?branch=master)](https://travis-ci.org/katalonne/vue-remarkable)
[![codebeat badge](https://codebeat.co/badges/299f68a9-8267-4f8d-a3e8-9abc5910f582)](https://codebeat.co/projects/github-com-katalonne-vue-remarkable-master)
[![GitHub open issues](https://img.shields.io/github/issues/katalonne/vue-remarkable.svg)](https://github.com/katalonne/vue-remarkable/issues?q=is%3Aopen+is%3Aissue)
[![npm version](https://img.shields.io/npm/v/vue-remarkable.svg)](https://www.npmjs.com/package/vue-remarkable)
[![MIT License](https://img.shields.io/github/license/katalonne/vue-remarkable.svg)](https://github.com/katalonne/vue-remarkable/blob/master/LICENSE)

Vue component for rendering Markdown with [remarkable](https://github.com/jonschlinkert/remarkable).

## Demo
[Vue Remarkable](https://katalonne.github.io/vue-remarkable/)

## Installation
```bash
yarn add vue-remarkable

npm install --save vue-remarkable
```

## Usage

```javascript
import vueRemarkable from 'vue-remarkable';

export default {
  components: {
    vueRemarkable
  }
}
```

```html
<vue-remarkable>
{{`
# Vue is awesome 
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
`}}
</vue-remarkable>
<!-- or -->
<vue-remarkable :source="`
# Vue is awesome 
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
`"/>
```

## Props

| Property     | Type    | Default |
|--------------|---------|---------|
| source       | String  |         |
| container    | String  | div     |
| class-name   | String  |         |
| options      | Object  | {}      |

## License

MIT © [katalonne](https://github.com/katalonne)