import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';

function CustomNavbar() {
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);

      const payload = JSON.parse(atob(token.split('.')[1]));
      setEmail(payload.email);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    router.push('/');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
       
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            {loggedIn ? (
              <>
                <Nav.Link style={{marginLeft:"35vh", color:"white"}}>Bienvenido {email}</Nav.Link>
                <br />
                <br />
                

                <Nav.Link style={{marginLeft:"50vh", color:"white"}} onClick={handleLogout}>Cerrar Sesión</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link style={{marginLeft:"50vh",color:"white" }} onClick={handleLogin} className="btn btn-custom me-8">Iniciar Sesión</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
