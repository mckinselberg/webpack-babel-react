import React from 'react';
import ReactDOM from 'react-dom';

import GenericComponent from './components/GenericComponent';

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<GenericComponent />, wrapper) : false;