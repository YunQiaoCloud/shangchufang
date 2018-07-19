import React, { Component } from 'react'
import TweenOne from 'rc-tween-one'
import { SearchBar, WingBlank, WhiteSpace } from 'antd-mobile'

class SearchBarWrap extends Component {
  state = {
    isFocus: false
  }

  onFocus() {
    const {
      isHideCover
    } = this.props
    if (!isHideCover) {
      this.setState(() => ({ isFocus: true }))
    }
  }

  onCancel() {
    this.setState(() => ({ isFocus: false }))
    this.setState(() => ({ value: '' }))
  }

  onChange(val) {
    this.setState(() => ({ value: val }))
  }

  onSubmit(value) {
    this.onCancel()
    const { onSearch } = this.props

    onSearch(value)
    this.setState(() => ({ value }))
  }

  render() {
    const {
      isFocus
    } = this.state

    const dom = [1, 2].map((item, index) => {
      return (
        <div className="Home-search-recommend-item" onClick={e => e.stopPropagation()} key={item}>
          清蒸鲈鱼
          {' '}
          {index}
        </div>
      )
    })

    return (
      <div className={`Home-search ${isFocus ? 'focused' : ''}`}>
        <SearchBar
          placeholder="搜索菜谱"
          type="password"
          onChange={val => this.onChange(val)}
          onFocus={() => this.onFocus()}
          onCancel={() => this.onCancel()}
          onSubmit={q => this.onSubmit(q)}
        />
        {
          isFocus
            ? (
              <TweenOne
                className="Home-search-cover"
                onClick={() => this.onCancel()}
                animation={{
                  duration: 300,
                  opacity: 1
                }}
              >
                <WingBlank>
                  <WhiteSpace size="lg" />
                  <h6 className="Home-search-recommend-title">
                    推荐搜索
                  </h6>
                  <WhiteSpace size="lg" />
                  {dom}
                </WingBlank>
              </TweenOne>

            ) : null
        }

      </div>
    )
  }
}

export default SearchBarWrap
