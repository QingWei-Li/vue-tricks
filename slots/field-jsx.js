export default {
  name: 'field',

  props: ['type', 'label'],

  render (h) {
    const tag = this.type === 'textarea' ? 'textarea' : 'input'
    const type = this.type === 'textarea' ? '' : this.type

    return (
      <div>
        <label>{ this.label }</label>
        { h(tag, { props: { type } }) }
      </div>
    )
  }
}
