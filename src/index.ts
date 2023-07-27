import './index.css'

export type OptionsLoading = {
  title?: string
}

export default class LoadingToast {
  opts: OptionsLoading
  constructor(opts?: OptionsLoading) {
    const wrapEle = this.getWrapElement()
    const defaultOpts: OptionsLoading = {
      title: '加载中...'
    }
    this.opts = {...defaultOpts, ...opts}
    if(!wrapEle) {
      this.createLoadingElement()
    }else{
      this.updateTitle()
    }

  }

  static loadingClass = 'dreamjser-loading-wrap'

  private getWrapElement() {
    return document.querySelector(`.${LoadingToast.loadingClass}`) as HTMLDivElement
  }

  private updateTitle() {
    const ele = document.querySelector('.dreamjser-loading-title') as HTMLDivElement
    ele.innerHTML = this.opts.title as string
  }

  private createLoadingElement() {
    const className = LoadingToast.loadingClass
    const wrapEleCreate = document.createElement('div')


    wrapEleCreate.className = className
    wrapEleCreate.innerHTML =
    `
      <div class="dreamjser-loading-box">
        <div class="dreamjser-loading-icon"></div>
        <p class="dreamjser-loading-title">${this.opts.title}</p>
      </div>
    `

    document.body.appendChild(wrapEleCreate)
  }

  show() {
    const wrapEle = this.getWrapElement()
    wrapEle.style.display = 'flex'
  }
  hide() {
    const wrapEle = this.getWrapElement()
    wrapEle.style.display = 'none'
  }
}
