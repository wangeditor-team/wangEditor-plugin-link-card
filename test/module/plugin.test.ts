/**
 * @description plugin test
 * @author wangfupeng
 */

import { DomEditor } from '@wangeditor/editor'
import createEditor from '../utils/create-editor'
import withLinkCard from '../../src/module/plugin'
import { LinkCardElement } from '../../src/index'

describe('link-card plugin', () => {
  const editor = withLinkCard(createEditor())
  const linkCard: LinkCardElement = {
    type: 'link-card',
    title: 'aaa',
    link: 'bbb',
    iconImgSrc: 'ccc',
    children: [{ text: '' }],
  }

  it('isVoid', () => {
    expect(editor.isVoid(linkCard)).toBe(true)
  })

  it('如果 link-card 是 editor 最后一个 elem，会追加一个 paragraph', () => {
    editor.insertNode(linkCard)
    const elemLength = editor.children.length
    const lastElem = editor.children[elemLength - 1]
    expect(DomEditor.getNodeType(lastElem)).toBe('paragraph')
  })
})
