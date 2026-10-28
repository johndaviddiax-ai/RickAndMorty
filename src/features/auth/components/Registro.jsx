
import React from 'react';
import { NavLink } from 'react-router-dom';

const colors = {
  blue: '#2563eb',
  ink: '#0f172a',
  muted: '#475569',
  border: '#cbd5e1',
};

export const Registro = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = {
      nombre: e.target.nombre.value.trim(),
      correo: e.target.correo.value.trim(),
      telefono: e.target.telefono.value.trim(),
      password: e.target.password.value,
    };

    if (datos.password !== e.target.confirmarPassword.value) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (onSubmit) {
      onSubmit(datos);
    } else {
      console.log('Datos del registro:', datos);
      alert('Formulario validado. Falta conectar el registro con el backend.');
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
            maxWidth: 450,
            backgroundColor: '#ffffff',
            borderTop: `4px solid ${colors.blue}`,
          }}
        >
          <div className="card-body p-4 p-md-5">
            <div className="text-center mb-4">
              <h1 className="h3 fw-bold" style={{ color: colors.ink }}>
                Crear cuenta
              </h1>
              <p style={{ color: colors.muted }}>
                Regístrate en TechPhone y comienza a comprar.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-semibold" style={{ color: colors.ink }}>
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="form-control rounded-3"
                  style={inputStyle}
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="correo" className="form-label fw-semibold" style={{ color: colors.ink }}>
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  className="form-control rounded-3"
                  style={inputStyle}
                  placeholder="tucorreo@ejemplo.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="telefono" className="form-label fw-semibold" style={{ color: colors.ink }}>
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="form-control rounded-3"
                  style={inputStyle}
                  placeholder="Tu número de teléfono"
                  autoComplete="tel"
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
                  className="form-control rounded-3"
                  style={inputStyle}
                  placeholder="Crea una contraseña"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
                <small style={{ color: colors.muted }}>
                  Mínimo 8 caracteres.
                </small>
              </div>

              <div className="mb-4">
                <label htmlFor="confirmarPassword" className="form-label fw-semibold" style={{ color: colors.ink }}>
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  id="confirmarPassword"
                  name="confirmarPassword"
                  className="form-control rounded-3"
                  style={inputStyle}
                  placeholder="Repite tu contraseña"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg w-100 rounded-3 text-white"
                style={{ backgroundColor: colors.blue, borderColor: colors.blue }}
              >
                Crear cuenta
              </button>

              <div className="text-center mt-4">
                <span style={{ color: colors.muted }}>
                  ¿Ya tienes una cuenta?{' '}
                </span>
                <NavLink
                  to="/login"
                  className="text-decoration-none fw-semibold"
                  style={{ color: colors.blue }}
                >
                  Inicia sesión
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
