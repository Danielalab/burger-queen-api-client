import React from 'react';

const LoginForm = () => (
  <div className="w-50 d-flex flex-direction-column justify-content-center">
    <form className="p-2 d-flex flex-direction-column align-items-center">
      <h2 className="mx-2">
        Bienvenidxs a
        <br />
        <span className="font-title text-upper-case">burger queen</span>
      </h2>
      <div className="form-control">
        <input type="email" id="email" />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-control">
        <input type="password" id="password" />
        <label htmlFor="password">Password</label>
      </div>
      <button type="submit" className="button-success btn-large text-upper-case text-bold mx-2">
        iniciar sesión
      </button>
    </form>
  </div>
);

export default LoginForm;
