import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { proceed } from '../../../state/reducers/Products/actions';

function Basket({ basket, proceed }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Link to='/products'><button className='btn btn-warning'>Return to list</button></Link>
                </div>
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {basket.map((item, index) =>
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name} {item.id}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Link to='/products'><button onClick={() => proceed(basket)} className='btn btn-success'>Proceed</button></Link>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    basket: state.product.basket
})

export default connect(mapStateToProps, { proceed })(Basket);