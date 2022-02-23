/**
 * @description parse elem html
 * @author wangfupeng
 */

import { DOMElement } from '../utils/dom'
import { IDomEditor, SlateDescendant, SlateElement } from '@wangeditor/editor'
import { LinkCardElement } from './custom-types'

function parseHtml(
  elem: DOMElement,
  children: SlateDescendant[],
  editor: IDomEditor
): SlateElement {
  const link = elem.getAttribute('data-link') || ''
  const title = elem.getAttribute('data-title') || ''
  const iconImgSrc = elem.getAttribute('data-iconImgSrc') || ''
  return {
    type: 'link-card',
    link,
    title,
    iconImgSrc,
    children: [{ text: '' }], // void node 必须有一个空白 text
  } as LinkCardElement
}

const parseHtmlConf = {
  selector: 'div[data-w-e-type="link-card"]',
  parseElemHtml: parseHtml,
}

export default parseHtmlConf
