import React from 'react';
import { NavLink } from 'react-router-dom';

const BRAND = 'Johnda';

const colors = {
  cream: '#f8fafc',
  sand: '#2563eb',
  ink: '#0f172a',
};

const serif = {
  fontFamily: 'Arial, sans-serif',
  color: colors.ink,
};

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/Props', label: 'Props' },
  { to: '/Login', label: 'Iniciar sesión' },
  {to: '/randm', label: 'Rickandmorty'}
];

const categories = ['Limpiadores', 'Sérums', 'Hidratantes', 'Protección solar'];

export const Header = () => {
  return (
    <header className='sticky-top'>
      <nav
        className="navbar md:navbar-expand xl"
        style={{
          backgroundColor: colors.ink,
          borderBottom: `3px solid ${colors.sand}`,
          padding: '12px 0',
          boxShadow: '0 3px 12px rgba(0, 0, 0, 0.15)',
        }}
      >
        <div className="container-fluid">
          <NavLink
            className="navbar-brand fs-3 fw-light"
            to="/"
            style={{
              ...serif,
              color: '#ffffff',
              letterSpacing: '0.08em',
              fontWeight: 'bold',
            }}
          >
            {BRAND}
          </NavLink>

          <button
            className="btn-icon navbar-toggler"
            type="button"
            data-bs-toggle="drawer"
            data-bs-target="#navbarDrawer"
            aria-controls="navbarDrawer"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon" aria-hidden="true"></span>
          </button>

          <dialog
            className="drawer drawer-end"
            tabIndex={-1}
            id="navbarDrawer"
            aria-labelledby="navbarDrawerLabel"
          >
            <div className="drawer-header">
              <h5 className="drawer-title" id="navbarDrawerLabel">
                Menú
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="drawer"
                aria-label="Cerrar"
              ></button>
            </div>

            <div className="drawer-body mb-2 md:mb-0">
              <ul className="nav navbar-nav me-auto">
                {links.slice(0, 1).map(({ to, label, end }) => (
                  <li className="nav-item" key={to}>
                    <NavLink
                      className="nav-link"
                      to={to}
                      end={end}
                      style={({ isActive }) => ({
                        color: isActive ? colors.sand : '#ffffff',
                        fontWeight: isActive ? 'bold' : '500',
                      })}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}

                <li className="nav-item">
                  <button
                    className="nav-link"
                    type="button"
                    data-bs-toggle="menu"
                    aria-expanded="false"
                    style={{ color: '#ffffff' }}
                  >
                    Productos
                  </button>

                  <div className="menu">
                    {categories.map((cat) => (
                      <a
                        className="menu-item"
                        href="/#productos"
                        key={cat}
                      >
                        {cat}
                      </a>
                    ))}
                    <hr className="menu-divider" />
                    <a className="menu-item" href="/#productos">
                      Ver todo
                    </a>
                  </div>
                </li>

                {links.slice(1).map(({ to, label }) => (
                  <li className="nav-item" key={to}>
                    <NavLink
                      className="nav-link"
                      to={to}
                      style={({ isActive }) => ({
                        color: isActive ? colors.sand : '#ffffff',
                        fontWeight: isActive ? 'bold' : '500',
                      })}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </dialog>
        </div>
      </nav>
    </header>
  );
};