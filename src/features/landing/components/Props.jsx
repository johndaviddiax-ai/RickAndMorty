
import React from 'react';

function getImageUrl(person, size = 's') {
  return `https://i.imgur.com/${person.imageId}${size}.jpg`;
}

function Avatar({ person, size }) {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: 'cover',
        borderRadius: '50%',
        border: '4px solid #dbeafe',
        backgroundColor: '#eaf2ff'
      }}
    />
  );
}

function TeamCard({ person, role, description }) {
  return (
    <article
      style={{
        backgroundColor: '#ffffff',
        padding: '30px 22px',
        borderRadius: '20px',
        textAlign: 'center',
        border: '1px solid #e2e8f0',
        boxShadow: '0 8px 25px rgba(15, 23, 42, 0.07)',
        transition: 'transform 0.2s ease'
      }}
    >
      <Avatar person={person} size={100} />

      <p
        style={{
          color: '#087bff',
          fontSize: '12px',
          fontWeight: 'bold',
          letterSpacing: '1px',
          marginTop: '20px'
        }}
      >
        {role}
      </p>

      <h3
        style={{
          color: '#101c30',
          fontSize: '21px',
          margin: '10px 0'
        }}
      >
        {person.name}
      </h3>

      <p
        style={{
          color: '#64748b',
          fontSize: '14px',
          lineHeight: '1.7',
          margin: 0
        }}
      >
        {description}
      </p>
    </article>
  );
}

export default function Profile() {
  const team = [
    {
      person: {
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2'
      },
      role: 'VENTAS',
      description: 'Te ayudamos a elegir el celular ideal para ti.'
    },
    {
      person: {
        name: 'Aklilu Lemma',
        imageId: 'OKS67lh'
      },
      role: 'ASESORÍA TECNOLÓGICA',
      description: 'Encuentra la tecnología que se adapta a tus necesidades.'
    },
    {
      person: {
        name: 'Lin Lanying',
        imageId: '1bX5QH6'
      },
      role: 'ATENCIÓN AL CLIENTE',
      description: 'Te acompañamos antes y después de tu compra.'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: '#f4f7fb',
        padding: '60px 24px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <header
        style={{
          textAlign: 'center',
          maxWidth: '650px',
          margin: '0 auto 40px'
        }}
      >
        <span
          style={{
            color: '#087bff',
            fontWeight: 'bold',
            fontSize: '13px',
            letterSpacing: '2px'
          }}
        >
          CONOCE TECHPHONE
        </span>

        <h2
          style={{
            color: '#101c30',
            fontSize: 'clamp(28px, 4vw, 40px)',
            margin: '15px 0'
          }}
        >
          Tecnología y confianza
        </h2>

        <p
          style={{
            color: '#64748b',
            fontSize: '16px',
            lineHeight: '1.7'
          }}
        >
          Nuestro equipo está listo para ayudarte a encontrar
          tu próximo celular.
        </p>
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          maxWidth: '1050px',
          margin: '0 auto'
        }}
      >
        {team.map((member) => (
          <TeamCard
            key={member.person.name}
            person={member.person}
            role={member.role}
            description={member.description}
          />
        ))}
      </div>
    </section>
  );
}
