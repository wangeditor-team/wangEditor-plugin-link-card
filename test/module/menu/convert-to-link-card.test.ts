/**
 * @description convert to link-card menu test
 * @author wangfupeng
 */

import { SlateEditor } from '@wangeditor/editor'
import createEditor from '../../utils/create-editor'
import { LinkCardElement, LinkElement } from '../../../src/index'
import ConvertToLinkCard from '../../../src/module/menu/ConvertToLinkCard'
import withLinkCard from '../../../src/module/plugin'

describe('convert to link-card menu', () => {
  let editor = withLinkCard(createEditor())
  let startLocation = SlateEditor.start(editor, [])
  const menu = new ConvertToLinkCard()

  function genLinkCardElem() {
    const linkCard: LinkCardElement = {
      type: 'link-card',
      title: 'aaa',
      link: 'bbb',
      iconImgSrc: 'ccc',
      children: [{ text: '' }],
    }
    return linkCard
  }

  function genLinkElem() {
    const link: LinkElement = {
      type: 'link',
      url: 'ddd',
      children: [{ text: 'hello' }],
    }
    return link
  }

  beforeEach(() => {
    editor = withLinkCard(createEditor())
    startLocation = SlateEditor.start(editor, [])
  })

  it('getValue', () => {
    expect(menu.getValue(editor)).toBe('')
  })

  it('isActive', () => {
    expect(menu.isActive(editor)).toBe(false)
  })

  it('isDisabled', () => {
    // 选中空编辑器
    editor.select(startLocation)
    expect(menu.isDisabled(editor)).toBeTruthy()

    // 选中 link 节点
    editor.insertNode(genLinkElem())
    editor.select({ path: [0, 1, 0], offset: 0 })
    expect(menu.isDisabled(editor)).toBeFalsy()
  })

  // TODO exec 测试
  // 需要 `editor.getMenuConfig('convertToLinkCard')` ，目前无法很简单找到，待定...
})
