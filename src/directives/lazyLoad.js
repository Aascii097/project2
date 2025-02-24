import { useIntersectionObserver } from '@vueuse/core'
export const LazyPlugin={
  install(app){
    app.directive('img-lazy',{
      mounted(el,binding){
    const {stop}=useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
       if(isIntersecting){
        el.src=binding.value
       stop()
       }
      },
    )
      }
    })
  }
}
