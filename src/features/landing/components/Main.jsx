
import React from 'react';

const features = [
  {
    id: 1,
    icon: '',
    title: 'Envío gratis',
    description: 'Recibe tus pedidos en casa sin costo adicional en compras seleccionadas.',
  },
  {
    id: 2,
    icon: '',
    title: 'Compra segura',
    description: 'Compra tus dispositivos con confianza y protección de tus datos.',
  },
  {
    id: 3,
    icon: '',
    title: 'Garantía oficial',
    description: 'Disfruta de respaldo y tranquilidad con tus productos.',
  },
];

const products = [
  {
    id: 1,
    name: 'iPhone Pro',
    description: 'Potencia, diseño y cámaras profesionales.',
    price: '$4.299.000',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80',
    tag: 'Más vendido',
  },
  {
    id: 2,
    name: 'Samsung Galaxy',
    description: 'Una pantalla increíble para tu día a día.',
    price: '$2.499.000',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80',
    tag: 'Popular',
  },
  {
    id: 3,
    name: 'Xiaomi Redmi',
    description: 'Gran rendimiento a un precio competitivo.',
    price: '$1.199.000',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    tag: 'Oferta',
  },
];

export const Main = () => {
  const sectionStyle = {
    padding: '70px 24px',
    fontFamily: 'Arial, sans-serif',
  };

  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: '#087bff',
    color: '#ffffff',
    padding: '14px 26px',
    borderRadius: '10px',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '15px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <main style={{ color: '#101c30', backgroundColor: '#ffffff' }}>

      {/* Banner principal */}
      <section
        style={{
          ...sectionStyle,
          background: 'linear-gradient(120deg, #07111f, #102c52)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          flexWrap: 'wrap',
          minHeight: '350px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ flex: '1 1 300px', maxWidth: '570px' }}>
          <span
            style={{
              color: '#38a0ff',
              fontWeight: 'bold',
              letterSpacing: '2px',
              fontSize: '13px',
            }}
          >
            TU MUNDO, EN TUS MANOS
          </span>

          <h1
            style={{
              fontSize: 'clamp(34px, 5vw, 54px)',
              lineHeight: '1.12',
              margin: '18px 0',
            }}
          >
            Encuentra tu próximo celular
          </h1>

          <p
            style={{
              color: '#cbd5e1',
              fontSize: '18px',
              lineHeight: '1.7',
              marginBottom: '28px',
            }}
          >
            Descubre las mejores marcas, tecnología para todos
            y precios que se adaptan a ti.
          </p>

          <a href="#productos" style={buttonStyle}>
            Explorar celulares →
          </a>
        </div>

        <div
          style={{
            flex: '1 1 280px',
            textAlign: 'center',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=85"
            alt="Celular moderno"
            style={{
              width: '100%',
              maxWidth: '390px',
              maxHeight: '330px',
              objectFit: 'contain',
              borderRadius: '20px',
            }}
          />
        </div>
      </section>

      {/* Beneficios */}
      <section
        style={{
          ...sectionStyle,
          backgroundColor: '#f4f7fb',
          paddingTop: '35px',
          paddingBottom: '35px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            maxWidth: '1150px',
            margin: '0 auto',
          }}
        >
          {features.map(({ id, icon, title, description }) => (
            <article
              key={id}
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                padding: '20px',
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #e5ebf3',
              }}
            >
              <span style={{ fontSize: '30px' }}>{icon}</span>

              <div>
                <h2 style={{ fontSize: '17px', margin: '0 0 8px' }}>
                  {title}
                </h2>

                <p
                  style={{
                    color: '#64748b',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    margin: 0,
                  }}
                >
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Productos destacados */}
      <section
        id="productos"
        style={{
          ...sectionStyle,
          maxWidth: '1200px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '15px',
            flexWrap: 'wrap',
            marginBottom: '30px',
          }}
        >
          <div>
            <span
              style={{
                color: '#087bff',
                fontWeight: 'bold',
                fontSize: '12px',
                letterSpacing: '1.5px',
              }}
            >
              NUESTRA SELECCIÓN
            </span>

            <h2 style={{ fontSize: '30px', margin: '10px 0 0' }}>
              Productos destacados
            </h2>
          </div>

          <a
            href="#productos"
            style={{
              color: '#087bff',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Ver productos →
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '24px',
          }}
        >
          {products.map((product) => (
            <article
              key={product.id}
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '18px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 25px rgba(15, 23, 42, 0.05)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  padding: '18px',
                  backgroundColor: '#f8fafc',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#e4f0ff',
                    color: '#087bff',
                    padding: '6px 10px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                  }}
                >
                  {product.tag}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '200px',
                    objectFit: 'contain',
                    marginTop: '12px',
                  }}
                />
              </div>

              <div style={{ padding: '22px' }}>
                <h3 style={{ fontSize: '20px', margin: '0 0 10px' }}>
                  {product.name}
                </h3>

                <p
                  style={{
                    color: '#64748b',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    minHeight: '45px',
                  }}
                >
                  {product.description}
                </p>

                <p
                  style={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    margin: '18px 0',
                    color: '#101c30',
                  }}
                >
                  {product.price}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    alert(`Has seleccionado ${product.name}`)
                  }
                  style={{
                    ...buttonStyle,
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  Ver producto
                </button>
              </div>
            </article>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            color: '#64748b',
            fontSize: '12px',
            marginTop: '25px',
          }}
        >
          Precios de ejemplo. Reemplázalos por los precios reales de tu catálogo.
        </p>
      </section>
    </main>
  );
};
