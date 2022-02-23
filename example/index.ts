/**
 * @description examples entry
 * @author wangfupeng
 */

import {
  IDomEditor,
  createEditor,
  createToolbar,
  Boot,
  IEditorConfig,
  i18nChangeLanguage,
} from '@wangeditor/editor'
import module from '../src/index'

// 注册
Boot.registerModule(module)

// i18nChangeLanguage('en')

// 编辑器配置
const editorConfig: Partial<IEditorConfig> = {
  onChange(editor: IDomEditor) {
    const html = editor.getHtml()
    // @ts-ignore
    document.getElementById('text-html').value = html
    const contentStr = JSON.stringify(editor.children, null, 2)
    // @ts-ignore
    document.getElementById('text-json').value = contentStr
  },
  hoverbarKeys: {
    link: {
      menuKeys: ['editLink', 'unLink', 'viewLink', 'convertToLinkCard'],
    },
  },
}

const linkCardHtml = `<div data-w-e-type="link-card" data-w-e-is-void data-title="百度新闻" data-link="http://news.baidu.com/" data-iconImgSrc="https://news-bos.cdn.bcebos.com/mvideo/log-news.png">
  <div class="info-container">
    <div class="title-container"><p>百度新闻</p></div>
    <div class="link-container"><span>http://news.baidu.com/</span></div>
  </div>
  <div class="icon-container">
    <img src="https://news-bos.cdn.bcebos.com/mvideo/log-news.png"/>
  </div>
</div>`

// 创建编辑器
const editor = createEditor({
  selector: '#editor-container',
  config: editorConfig,
  // content: [
  //   {
  //     // @ts-ignore
  //     type: 'paragraph',
  //     children: [{ text: 'hello world' }],
  //   },
  //   {
  //     // @ts-ignore
  //     type: 'link-card',
  //     title: '网页标题网页标题网页标题',
  //     link: 'https://zhuanlan.zhihu.com/',
  //     iconImgSrc: '',
  //     children: [{ text: '' }],
  //   },
  // ],
  html: `<p>hello&nbsp;world</p>${linkCardHtml}`,
  // html: `<p>hello&nbsp;<a href="http://news.baidu.com/" target="_blank">百度新闻</a>&nbsp;world</p>`,
})
const toolbar = createToolbar({
  editor,
  selector: '#toolbar-container',
  config: {},
})

// @ts-ignore 为了便于调试，暴露到 window
window.editor = editor
// @ts-ignore
window.toolbar = toolbar
