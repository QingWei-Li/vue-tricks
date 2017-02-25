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


const h = this.$createElement;

this.$notify({
  title: 'GitHub',
  message: h('div', [
    h('p', '[GitHub] Subscribed to ElemeFE/element notifications'),
    h('el-button', {}, '已读')
  ])
});

