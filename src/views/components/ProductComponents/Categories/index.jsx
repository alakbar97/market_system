import React from 'react';
import './style.scss';
import { category } from '../../../../data/products';
import { filter } from '../../../../state/reducers/Products/actions';
import { connect } from 'react-redux';


function Categories({ filter }) {

    return (
        <nav className="nav nav-pills nav-fill">
            {category.map((item, index) =>
                <button onClick={() => filter(item)} key={index} className="btn btn-info nav-item nav-link">{item}</button>
            )}
        </nav>
    )
};

export default connect(null, { filter })(Categories);