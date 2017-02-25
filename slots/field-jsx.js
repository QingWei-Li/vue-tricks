
export default {
  name: 'field',

  props: ['type', 'label'],

  render (h) {
    let tag = 'input'
    let { type, label } = this

    if (this.type === 'textarea') {
      tag = this.type
      type = ''
    }

    return (
      <div>
        <label>{ label }</label>
        { h(tag, { props: { type } }) }
      </div>
    )
  }
}


