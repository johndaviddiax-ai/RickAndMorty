import { useEffect, useState } from 'react'

// misma paleta del Header
const colors = {
  cream: '#f8fafc',
  sand: '#2563eb',
  ink: '#0f172a',
  card: '#1e293b',
  border: '#334155',
  muted: '#94a3b8',
};

const serif = {
  fontFamily: 'Arial, sans-serif',
  color: colors.cream,
};

const statusColors = {
  Alive: '#16a34a',
  Dead: '#dc2626',
  unknown: '#64748b',
};

export const Rickandmorty = () => {
  // estados
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hoveredId, setHoveredId] = useState(null);

  // pide los personajes cada vez que cambia la pagina o la busqueda
  useEffect(() => {
    async function getCharacters() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`
      );
      const data = await response.json();

      if (data.results) {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } else {
        // la API devuelve error cuando no hay coincidencias
        setCharacters([]);
        setTotalPages(1);
      }
    }
    getCharacters();
  }, [page, search]);

  // al escribir, guardamos el texto y volvemos a la pagina 1
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  // estilo de los botones de paginacion (cambia si esta deshabilitado)
  const buttonStyle = (disabled) => ({
    backgroundColor: disabled ? colors.border : colors.sand,
    color: disabled ? colors.muted : '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 16px',
    fontWeight: 'bold',
    cursor: disabled ? 'not-allowed' : 'pointer',
  });

  return (
    <main
      style={{
        ...serif,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '32px 16px',
        boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          margin: '0 0 24px 0',
          fontSize: '2rem',
          letterSpacing: '0.08em',
          fontWeight: 'bold',
        }}
      >
        Rick and Morty
      </h1>

      {/* buscador */}
      <input
        type="search"
        placeholder="Buscar personaje por nombre"
        aria-label="Buscar personaje"
        value={search}
        onChange={handleSearch}
        style={{
          display: 'block',
          width: '100%',
          maxWidth: '420px',
          margin: '0 auto 32px auto',
          padding: '10px 14px',
          fontSize: '1rem',
          backgroundColor: colors.ink,
          color: colors.cream,
          border: `1px solid ${colors.border}`,
          borderRadius: '8px',
          boxSizing: 'border-box',
        }}
      />

      {/* cuadricula responsiva: se acomoda sola segun el ancho */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '16px',
        }}
      >
        {characters.map((character) => (
          <div
            key={character.id}
            onMouseEnter={() => setHoveredId(character.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              backgroundColor: colors.card,
              border: `1px solid ${hoveredId === character.id ? colors.sand : colors.border}`,
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 3px 12px rgba(0, 0, 0, 0.15)',
              transform: hoveredId === character.id ? 'translateY(-4px)' : 'none',
              transition: 'transform 0.2s, border-color 0.2s',
            }}
          >
            {/* las imagenes de la API son cuadradas, asi se ven completas */}
            <img
              src={character.image}
              alt={character.name}
              style={{
                display: 'block',
                width: '100%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
              }}
            />

            <div style={{ padding: '12px', textAlign: 'center' }}>
              <h3
                title={character.name}
                style={{
                  margin: '0 0 4px 0',
                  fontSize: '1rem',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {character.name}
              </h3>

              <p style={{ margin: '0 0 10px 0', fontSize: '0.85rem', color: colors.muted }}>
                {character.species}
              </p>

              <span
                style={{
                  display: 'inline-block',
                  padding: '3px 12px',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  backgroundColor: statusColors[character.status] || statusColors.unknown,
                }}
              >
                {character.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {characters.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '40px', color: colors.muted }}>
          No se encontraron personajes.
        </p>
      )}

      {/* paginacion */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginTop: '32px',
        }}
      >
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          style={buttonStyle(page === 1)}
        >
          Anterior
        </button>

        <span>Página {page} de {totalPages}</span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          style={buttonStyle(page === totalPages)}
        >
          Siguiente
        </button>
      </div>
    </main>
  )
}