/**
 * @description module entry
 * @author wangfupeng
 */

import './local' // 多语言

import { IModuleConf } from '@wangeditor/core'
import withLinkCard from './plugin'
import renderElemConf from './render-elem'
import elemToHtmlConf from './elem-to-html'
import parseHtmlConf from './parse-elem-html'
import { convertToLinkCardMenuConf } from './menu/index'

const module: Partial<IModuleConf> = {
  editorPlugin: withLinkCard,
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  menus: [convertToLinkCardMenuConf],
}

export default module
