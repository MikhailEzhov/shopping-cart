import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Store from './components/store/Store';



function App() {
    return (
        <Container>
            <Header/>
            <Store/>
        </Container>
    )
};

export default App;