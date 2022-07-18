import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Store from './components/store/Store';
import { ShoppingCartProvider } from './context/ShoppingCartContext';



function App() {
    return (
        <ShoppingCartProvider>
            <Container>
                <Header/>
                <Store/>
            </Container>
        </ShoppingCartProvider>
    )
};

export default App;