import React from 'react';

function AdminLink() {
    const footerStyles = {
        position: 'fixed',
        bottom: '0',
        right: '0',
        
    }
    return (
        <footer className="footer" style={footerStyles}>
            <h6>Admin</h6>
        </footer>
    )
}

export default AdminLink