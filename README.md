# @dreamjser/h5-loading-toast

## 安装

```
  // npm安装
  npm i @dreamjser/h5-loading-toast

  // yarn安装
  yarn add @dreamjser/h5-loading-toast

  // pnpm安装
  pnpm add @dreamjser/h5-loading-toast
```


## 使用

```
import LoadingToast from '@dreamjser/h5-loading-toast'

const loading = new LoadingToast({
  title: '努力加载...'
})

loading.show()

loading.hide()
```

### LoadingToast(opts)

+ opts.title 加载标题，默认"加载中..."
