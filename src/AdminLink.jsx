import React from 'react';
import PropTypes from 'prop-types';


function AdminLink(props) {
    const footerStyles = {
        position: 'fixed',
        bottom: '0',
        right: '0',
        
    }
    return (
        <footer className="footer" style={footerStyles}>
            <h6 onClick={props.onChangingAdminView}>Admin</h6>
        </footer>
    )
}

AdminLink.propTypes = {
    onChangingAdminView: PropTypes.func
}

export default AdminLink