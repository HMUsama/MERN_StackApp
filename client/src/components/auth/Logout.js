import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'reactstrap';
import { logout } from '../../store/action/AuthAction'

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {
        return (
            <Fragment>
                <NavLink onClick={this.props.logout} href="#">
                    Logout
                </NavLink>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, {logout})(Logout)
