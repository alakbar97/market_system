import React, { useEffect } from 'react';
import './style.scss';
import img from '../../../assets/img/login.jpg';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { login } from '../../../state/reducers/Auth/actions';
import browser_history from '../../../helpers/browser_history';

function Login({ user, login }) {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => login(data);

    useEffect(() => {
        if (user?.userData?.token) {
            localStorage.setItem('user_token', user?.userData?.token);
            browser_history.push('/products');
        }
    }, [user]);

    return (
        <div className="container-fluid p-0">
            <div className="row h-100 no-gutters">
                <div className="col-6 left-part">
                    <img src={img} alt="img" />
                </div>
                <div className="col-6 right-part">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <span className='text-danger'>{user?.errorMessage}</span>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input name="email" type="text" className="form-control" id="email" placeholder="Enter email" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password</label>
                            <input name='password' type="password" className='form-control' id='password' placeholder='Enter password' ref={register({ required: true, minLength: { value: 6, message: 'Length cannot be less than 6' }, maxLength: { value: 20, message: 'Length cannot be more than 20' } })} />
                            {errors.password && <span className='text-danger'>{errors?.password?.message ? errors?.password?.message : "This field is required"}</span>}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { login })(Login);