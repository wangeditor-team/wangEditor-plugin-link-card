/**
 * @description render elem test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import renderElemConf from '../../src/module/render-elem'
import { LinkCardElement } from '../../src/index'

describe('link-card render-elem', () => {
  const editor = createEditor()
  const linkCard: LinkCardElement = {
    type: 'link-card',
    title: 'aaa',
    link: 'bbb',
    iconImgSrc: 'ccc',
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(renderElemConf.type).toBe('link-card')
  })

  it('render elem', () => {
    const vnode = renderElemConf.renderElem(linkCard, null, editor) as any
    expect(vnode.sel).toBe('div')
    expect(vnode.data.props.contentEditable).toBe(false)

    const textContainerVnode = vnode.children[0]
    const titleVnode = textContainerVnode.children[0]
    expect(titleVnode.text).toBe('aaa')

    const linkVnode = textContainerVnode.children[1]
    expect(linkVnode.text).toBe('bbb')

    const iconContainerVnode = vnode.children[1]
    const imgVnode = iconContainerVnode.children[0]
    expect(imgVnode.data.props.src).toBe('ccc')
  })
})
