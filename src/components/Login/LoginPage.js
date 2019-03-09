import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../reducers/auth.js';


const LoginPage = ({ startLogin }) => {
    return (
        <div>
              <button onClick={startLogin}>Login</button>
        </div>
    )

};

const mapDispatchToProps  = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(LoginPage);
