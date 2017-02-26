export default {
  props: ['label', 'type', 'placeholder',
  'maxlength', 'minlength', 'name', 'form',
  'value', 'disabled', 'readonly', 'autofocus'],

  render(h) {
    const props = {
      placeholder: this.placeholder,
      type: this.type
      // ...
    }

    return (
      <div>
        <label>{ this.label }</label>
        <input { ...{ attrs: props } } />
      </div>
    )
  }
}
