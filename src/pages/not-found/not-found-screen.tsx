function NotFoundScreen(): JSX.Element {
  return (
    <div
      style={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          padding: '20px 0',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 15px',
          }}
        >
          <a href="/" style={{ display: 'inline-block' }}>
            <img
              src="img/logo.svg"
              alt="6 cities logo"
              style={{ height: '40px' }}
            />
          </a>
        </div>
      </header>

      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px 20px',
        }}
      >
        <div style={{ maxWidth: '600px' }}>
          <div
            style={{
              fontSize: '120px',
              fontWeight: '700',
              color: '#4481c3',
              lineHeight: 1,
              marginBottom: '20px',
            }}
          >
            404
          </div>

          <h1
            style={{
              fontSize: '32px',
              marginBottom: '20px',
              color: '#333',
            }}
          >
            Page Not Found
          </h1>

          <p
            style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '30px',
              lineHeight: 1.6,
            }}
          >
            The page you are looking for might have been removed,
            <br />
            had its name changed or is temporarily unavailable.
          </p>

          <a
            href="/"
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              backgroundColor: '#4481c3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '25px',
              transition: 'background-color 0.3s',
              fontSize: '16px',
            }}
          >
            Go Back Home
          </a>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
