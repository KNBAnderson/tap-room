import React from 'react';
import {Link} from 'react-router-dom'

function AdminKeg(){
  return (
    <div id="admin-keg">
      {<Link to ="/restock" className="link"><button>Restock</button></Link> }<br/>
      {<Link to ="/edit" className="link"><button>Edit</button></Link> }
      <hr/>
      {<Link to ="/something" className="link"><button>Pint sold</button></Link> }
      {<Link to ="/something" className="link"><button>Growler sold</button></Link> }
      {<Link to ="/something" className="link"><button>Large growler sold</button></Link> }
    </div>
  );
}

export default AdminKeg;