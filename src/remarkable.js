/* eslint-disable prettier/prettier */
import { Remarkable } from 'remarkable';

export default {
  name: 'vue-remarkable',
  props: {
    options: {
      type: Object,
      default: () => {}
    },
    className: {
      type: String
    },
    source: {
      type: String
    },
    container: {
      type: String,
      default: 'div'
    }
  },
  data() {
    return {
      md: undefined
    };
  },
  methods: {
    content () {
      if (this.source) {
        return <span domPropsInnerHTML={this.renderMarkdown(this.source.trim())} />
      } else {
        if (this.$slots.default) {
          const textChildren = this.$slots.default.filter(s => s.tag == undefined)
          const markdownSlotText = textChildren.reduce((acc, current) => {
            const { text } = current
            acc += '\n' + text.trim()
            return acc
          }, '')
          return <span domPropsInnerHTML={this.renderMarkdown(markdownSlotText)} />
        }
      }
    },
    renderMarkdown(source) {
      if (!this.md) {
        this.md = new Remarkable(this.options);
      }
  
      return this.md.render(source);
    }
  },
  render () {
    const Container = this.container;

    return (
      <Container class={this.className}>
        {this.content()}
      </Container>
    )
  }
}