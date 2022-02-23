/**
 * @description local test
 * @author wangfupeng
 */

import '../../src/module/local'
import { i18nChangeLanguage, t } from '@wangeditor/editor'

describe('local', () => {
  it('zh-CN', () => {
    expect(t('linkCard.toCard')).toBe('转为卡片')
  })
  it('en', () => {
    i18nChangeLanguage('en')
    expect(t('linkCard.toCard')).toBe('To Card')
  })
})
