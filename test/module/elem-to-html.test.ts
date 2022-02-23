/**
 * @description elem-to-html test
 * @author wangfupeng
 */

import elemToHtmlConf from '../../src/module/elem-to-html'
import { LinkCardElement } from '../../src/index'

describe('link-card elem-to-html', () => {
  const title = '百度新闻'
  const link = 'http://news.baidu.com/'
  const iconImgSrc = 'https://news-bos.cdn.bcebos.com/mvideo/log-news.png'
  const linkCard: LinkCardElement = {
    type: 'link-card',
    title,
    link,
    iconImgSrc,
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(elemToHtmlConf.type).toBe('link-card')
  })

  it('elem to html', () => {
    const html = elemToHtmlConf.elemToHtml(linkCard, '')
    expect(html).toBe(
      `<div data-w-e-type="link-card" data-w-e-is-void data-title="${title}" data-link="${link}" data-iconImgSrc="${iconImgSrc}">
    <div class="info-container">
      <div class="title-container"><p>${title}</p></div>
      <div class="link-container"><span>${link}</span></div>
    </div>
    <div class="icon-container">
      <img src="${iconImgSrc}"/>
    </div>
  </div>`
    )
  })
})
