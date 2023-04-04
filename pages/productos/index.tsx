import { GetStaticProps, NextPage } from 'next';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../../components/navadmin/admin";
import Link from "next/link";
import { ProductDTO } from '../../typess/types';

interface Props {
  products: ProductDTO[];
}

const ProductsPage: NextPage<Props> = ({ products }) => {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(/lkk.jpg)`,
        paddingTop: "6rem",
        paddingBottom: "2rem",
      }}
    >
      <div>
        <Navbar></Navbar>
      </div>
      <Row xs={1} sm={2} md={4} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ${product.price}
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg">
                    <Link style={{color:'white'}} href={`/productos/updateproduct/${product.id}`}>Editar</Link>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await fetch('http://kaabstore.somee.com/WebAPI_Kaab_Haak/Product');
  const products: ProductDTO[] = await response.json();

  return { props: { products } };
};

export default ProductsPage;
