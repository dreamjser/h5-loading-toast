import LoadingToast from "@/index"

const loading = new LoadingToast({
  title: '努力加载'
})



setTimeout(() => {
  loading.show()
}, 200)

setTimeout(() => {
  loading.hide()
}, 2000)

