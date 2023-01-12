import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './NavBar';
import NameSelect from './NameSelect';
import NamesToggle from './NamesToggle';

function MainPage(props) {
  return (
    <>
      <NavBar></NavBar>
      <Container style={styles.container}>
        <Row>
          {/* Left column displays your crushes */}
          <Col sm style={{ padding: 10 }}>
            <div style={styles.subtitle}>Find the one here:</div>
            <NameSelect addName={{}}></NameSelect>
            <div style={{ height: 30 }}></div>
            <NamesToggle></NamesToggle>
          </Col>

          {/* Right column displays Matches */}
          <Col sm style={{ padding: 10, marginLeft: '5%' }}>
            <div>Your Matches:</div>

          </Col>
        </Row>
      </Container>
    </>
  )
}

const styles = {
  container: {
    marginTop: 25,
  },
  subtitle: {
    fontStyle: 'italic',
    fontSize: 18,
    marginBottom: 10,
  }
};

export default MainPage;