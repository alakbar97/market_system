import React, { useEffect } from 'react';
import './style.scss';
import Categories from '../../components/ProductComponents/Categories';
import { connect } from 'react-redux';

function Products({ products, match }) {

    const onLogout = () => {
        localStorage.removeItem('user_token');
        window.location.reload();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <button className='btn btn-warning'>Basket</button>
                    <button onClick={onLogout} className='btn btn-danger'>Log Out</button>
                </div>
                <div className="col-12">
                    <Categories query={match.params.category} />
                </div>
                <div className="col-12 table-responsive">
                    <table className='table table-dark table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item, index) =>
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name} {item.id}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <button className='btn btn-light'>Add to Basket</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.product.products
});

export default connect(mapStateToProps)(Products);