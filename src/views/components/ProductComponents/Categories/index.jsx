import React, { useEffect } from 'react';
import './style.scss';
import { category } from '../../../../data/products';
import { filter } from '../../../../state/reducers/Products/actions';
import { connect } from 'react-redux';
import browser_history from '../../../../helpers/browser_history';


function Categories({ filter, query }) {
    useEffect(() => {
        filter(query);
    }, [query]);

    return (
        <nav className="nav nav-pills nav-fill">
            {category.map((item, index) =>
                <button onClick={() => browser_history.push(`/products/${item}`)} key={index} className="btn btn-info nav-item nav-link">{item}</button>
            )}
        </nav>
    )
};

export default connect(null, { filter })(Categories);