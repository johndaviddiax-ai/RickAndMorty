
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#080f1c',
      color: '#cbd5e1',
      fontFamily: 'Arial, sans-serif',
      padding: '55px 6% 20px',
      borderTop: '3px solid #087bff',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '35px',
      paddingBottom: '35px',
    },
    logo: {
      color: '#ffffff',
      fontSize: '27px',
      fontWeight: '800',
      margin: '0 0 16px',
    },
    description: {
      color: '#94a3b8',
      fontSize: '14px',
      lineHeight: '1.8',
      maxWidth: '320px',
    },
    heading: {
      color: '#ffffff',
      fontSize: '16px',
      margin: '0 0 18px',
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      alignItems: 'flex-start',
    },
    link: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '14px',
    },
    bottom: {
      borderTop: '1px solid #263449',
      paddingTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '15px',
    },
    copyright: {
      color: '#94a3b8',
      fontSize: '13px',
      margin: 0,
    },
    socialLink: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      backgroundColor: '#1e293b',
      color: '#ffffff',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>

          {/* Información de la tienda */}
          <section>
            <h2 style={styles.logo}>
              Tech<span style={{ color: '#087bff' }}>Phone</span>
            </h2>

            <p style={styles.description}>
              Tu tienda de tecnología. Encuentra celulares,
              accesorios y las novedades de las mejores marcas
              en un solo lugar.
            </p>

            <p style={{ color: '#94a3b8', fontSize: '14px' }}>
              Tecnología que conecta contigo.
            </p>
          </section>

          {/* Navegación */}
          <section>
            <h3 style={styles.heading}>Explora</h3>

            <nav style={styles.list}>
              <Link to="/" style={styles.link}>
                Inicio
              </Link>

              <Link to="/celulares" style={styles.link}>
                Celulares
              </Link>

              <Link to="/Props" style={styles.link}>
                Nosotros
              </Link>

              <Link to="/Login" style={styles.link}>
                Iniciar sesión
              </Link>
            </nav>
          </section>

          {/* Atención al cliente */}
          <section>
            <h3 style={styles.heading}>Atención al cliente</h3>

            <div style={styles.list}>
              <a href="/#productos" style={styles.link}>
                Productos destacados
              </a>

              <a href="/#productos" style={styles.link}>
                Ofertas
              </a>

              <a href="mailto:contacto@techphone.com" style={styles.link}>
                Contáctanos
              </a>
            </div>
          </section>

          {/* Redes sociales */}
          <section>
            <h3 style={styles.heading}>Síguenos</h3>

            <p style={styles.description}>
              Mantente al día con nuestros productos y novedades.
            </p>

            <div style={{ display: 'flex', gap: '12px', marginTop: '18px' }}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={styles.socialLink}
              >
                IG
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                style={styles.socialLink}
              >
                f
              </a>

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                style={styles.socialLink}
              >
                TT
              </a>
            </div>
          </section>
        </div>

        {/* Derechos de autor */}
        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} TechPhone. Todos los derechos reservados.
          </p>

          <p style={styles.copyright}>
            Diseñado para los amantes de la tecnología.
          </p>
        </div>
      </div>
    </footer>
  );
};
