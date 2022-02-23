/**
 * @description parse elem html test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import parseHtmlConf from '../../src/module/parse-elem-html'
import { LinkCardElement } from '../../src/module/custom-types'

describe('parse elem html', () => {
  const editor = createEditor()

  it('selector', () => {
    expect(parseHtmlConf.selector).toBe('div[data-w-e-type="link-card"]')
  })

  it('parse html', () => {
    // html 格式
    const title = '百度新闻'
    const link = 'http://news.baidu.com/'
    const iconImgSrc = 'https://news-bos.cdn.bcebos.com/mvideo/log-news.png'
    const linkCardHtml = `<div data-w-e-type="link-card" data-w-e-is-void data-title="${title}" data-link="${link}" data-iconImgSrc="${iconImgSrc}">
      <div class="info-container">
        <div class="title-container"><p>${title}</p></div>
        <div class="link-container"><span>${link}</span></div>
      </div>
      <div class="icon-container">
        <img src="${iconImgSrc}"/>
      </div>
    </div>`

    // html 生成 elem
    const div = document.createElement('div')
    div.innerHTML = linkCardHtml
    const elem = div.children[0]

    const linkCard = parseHtmlConf.parseElemHtml(elem, [], editor) as LinkCardElement
    expect(linkCard.type).toBe('link-card')
    expect(linkCard.link).toBe(link)
    expect(linkCard.title).toBe(title)
    expect(linkCard.iconImgSrc).toBe(iconImgSrc)
  })
})
