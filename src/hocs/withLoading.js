import Loading from '../components/Loading'

export const withLoading = Comp => {
  return {
    functional: true,
    name: 'withLoading',
    render(h, context) {
      const props = {
        show: context.props.show
      }
      const children = context.children ? [h(Loading, {props}), ...context.children] : [h(Loading, {props})]
      return h(
        Comp,
        {
          ...context.data,
        },
        children
      )
    }
  }
}