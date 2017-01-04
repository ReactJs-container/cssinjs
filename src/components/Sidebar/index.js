import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import cn from 'classnames'

import {Logo} from '../icons'
import GithubWidget from '../../containers/GithubWidget'
import Hamburger from '../Hamburger'
import Menu from '../Menu'

import config from '../../config'
import injectSheet from '../../utils/jss'
import styles from './styles'

class Sidebar extends Component {
  static propTypes = {
    sheet: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }

  /**
   * Just a trick. On menu click component recieve new props
   * If there is any new prop - just close menu
   * (because props change only if we navigate through application)
   */
  componentWillReceiveProps() {
    this.setState({
      showMenu: false
    })
  }

  onToggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const {classes} = this.props.sheet
    const {showMenu} = this.state

    return (
      <div className={classes.sidebar}>
        <Link to="/" className={classes.container}>
          <Logo className={classes.logo} />
        </Link>
        <GithubWidget className={classes.counter} repo={config.site.repo} />
        <button className={classes.toggle} onClick={this.onToggleMenu}>
          <Hamburger active={showMenu} />
        </button>
        <div className={cn(classes.menu, showMenu && classes.active)}>
          <Menu />
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Sidebar)
