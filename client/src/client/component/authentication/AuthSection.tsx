import React from 'react'
import LoginForm from '../form/LoginForm'
import RegisterForm from '../form/RegisterForm';
interface AuthProps {
  login: boolean;
}
const AuthSection:React.FC<AuthProps>= ({login}) => {
  return (
    <section className="tl-account-form-section">
        <div className="container">
            <div className="row flex justify-center">
                <div className="col-12 auth-container w-1/2">
                    <h3 className="single-form-title text-2xl font-bold ">{login? 'Connexion':'Registration'}</h3>
                    {login? (
                      <LoginForm/>
                    ) : (
                      <RegisterForm/>
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AuthSection