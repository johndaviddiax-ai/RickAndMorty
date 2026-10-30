import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const colors = {
    cream: '#ffffff',
    sand: '#060606',
    terracotta: '#2563eb',
    ink: '#0f172a',
    muted: '#64748b',
};

const serif = {
    fontFamily: 'Arial, sans-serif',
    color: colors.ink,
};

export const Recuperar = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(email);
        setSent(true);
    };

    return (
        <div style={{ backgroundColor: '#f1f5f9' }}>
            <div
                className="container d-flex align-items-center justify-content-center py-5"
                style={{ minHeight: '70vh' }}
            >
                <div
                    className="card border-0 shadow rounded-4 w-100"
                    style={{
                        maxWidth: 420,
                        backgroundColor: colors.cream,
                        borderTop: `4px solid ${colors.terracotta}`,
                    }}
                >
                    <div className="card-body p-4 p-md-5">
                        {sent ? (
                            <div className="text-center">
                                <h1
                                    className="h3 mb-2"
                                    style={{ ...serif, fontWeight: 'bold' }}
                                >
                                    Revisa tu correo
                                </h1>

                                <p className="mb-4" style={{ color: colors.muted }}>
                                    Si <strong>{email}</strong> está registrado, te enviamos un
                                    enlace para restablecer tu contraseña.
                                </p>

                                <NavLink
                                    to="/Login"
                                    className="btn btn-lg w-100 rounded-pill text-white"
                                    style={{
                                        backgroundColor: colors.terracotta,
                                        borderColor: colors.terracotta,
                                    }}
                                >
                                    Volver a iniciar sesión
                                </NavLink>
                            </div>
                        ) : (
                            <>
                                <div className="text-center mb-4">
                                    <h1
                                        className="h3 mb-1"
                                        style={{ ...serif, fontWeight: 'bold' }}
                                    >
                                        Recuperar cuenta
                                    </h1>

                                    <p className="mb-0" style={{ color: colors.muted }}>
                                        Ingresa tu correo y te enviaremos un enlace para
                                        restablecer tu contraseña.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="recuperarEmail"
                                            className="form-label fw-semibold small"
                                            style={{ color: '#2563eb' }}
                                        >
                                            Correo electrónico
                                        </label>

                                        <input
                                            type="email"
                                            className="form-control form-control-lg rounded-pill px-4"
                                            style={{
                                                backgroundColor: colors.cream,
                                                borderColor: colors.sand,
                                                color: '#0f172a',
                                            }}
                                        id="recuperarEmail"
                                        placeholder="tucorreo@ejemplo.com"
                                        autoComplete="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-lg w-100 rounded-pill text-white"
                                        style={{
                                            backgroundColor: colors.terracotta,
                                            borderColor: colors.terracotta,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Enviar enlace
                                    </button>

                                    <div className="text-center mt-4">
                                        <NavLink
                                            to="/Login"
                                            className="small text-decoration-none"
                                            style={{ color: colors.terracotta }}
                                        >
                                            ← Volver a iniciar sesión
                                        </NavLink>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recuperar;
