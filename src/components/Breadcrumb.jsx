import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Map paths to readable names
  const pathNameMap = {
    about: 'About',
    projects: 'Projects',
    certifications: 'Certifications',
    contact: 'Contact'
  };

  if (pathnames.length === 0) {
    return null; // Don't show breadcrumb on home page
  }

  return (
    <nav
      style={{
        paddingTop: '100px',
        paddingBottom: '1.5rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <Link
          to="/"
          style={{
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '0.875rem',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          Home
        </Link>

        {pathnames.map((name, index) => (
          <React.Fragment key={index}>
            <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
            {index === pathnames.length - 1 ? (
              <span
                style={{
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'capitalize'
                }}
              >
                {pathNameMap[name] || name}
              </span>
            ) : (
              <Link
                to={`/${pathnames.slice(0, index + 1).join('/')}`}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {pathNameMap[name] || name}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;
