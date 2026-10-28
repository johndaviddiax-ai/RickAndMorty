
import React from 'react';
import { NavLink } from 'react-router-dom';

const colors = {
  blue: '#2563eb',
  ink: '#0f172a',
  muted: '#475569',
  border: '#cbd5e1',
};

export const Login = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = {
      correo: e.target.correo.value.trim(),
      password: e.target.password.value,
    };

    if (onSubmit) {
      onSubmit(datos);
    } else {
      console.log('Datos del login:', datos);
      alert('Falta conectar el inicio de sesión con el backend.');
    }
  };

  const inputStyle = {
    backgroundColor: '#ffffff',
    borderColor: colors.border,
    color: colors.ink,
  };

  return (
    <div style={{ backgroundColor: '#f1f5f9' }}>
      <div
        className="container d-flex align-items-center justify-content-center py-5"
        style={{ minHeight: '80vh' }}
      >
        <div
          className="card border-0 shadow-sm rounded-4 w-100"
          style={{
            maxWidth: 420,
            backgroundColor: '#ffffff',
            borderTop: `4px solid ${colors.blue}`,
          }}
        >
          <div className="card-body p-4 p-md-5">
            <div className="text-center mb-4">
              <h1 className="h3 fw-bold" style={{ color: colors.ink }}>
                Iniciar sesión
              </h1>
              <p style={{ color: colors.muted }}>
                Ingresa tus datos para continuar en TechPhone.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label fw-semibold" style={{ color: colors.ink }}>
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  className="form-control form-control-lg rounded-3"
                  style={inputStyle}
                  placeholder="tucorreo@ejemplo.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold" style={{ color: colors.ink }}>
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control form-control-lg rounded-3"
                  style={inputStyle}
                  placeholder="Ingresa tu contraseña"
                  autoComplete="current-password"
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="rememberMe"
                    style={{ color: colors.muted }}
                  >
                    Recordarme
                  </label>
                </div>

                <NavLink
                  to="/recuperar"
                  className="small text-decoration-none"
                  style={{ color: colors.blue }}
                >
                  ¿Olvidaste tu contraseña?
                </NavLink>
              </div>

              <button
                type="submit"
                className="btn btn-lg w-100 rounded-3 text-white"
                style={{ backgroundColor: colors.blue, borderColor: colors.blue }}
              >
                Iniciar sesión
              </button>

              <div className="text-center mt-4">
                <span style={{ color: colors.muted }}>
                  ¿No tienes una cuenta?{' '}
                </span>
                <NavLink
                  to="/registro"
                  className="text-decoration-none fw-semibold"
                  style={{ color: colors.blue }}
                >
                  Regístrate
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
