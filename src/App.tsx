import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Store from './components/store/Store';
import { ShoppingItemProvider } from './context/ShoppingItemContext';



function App() {
    return (
        <ShoppingItemProvider>
            <Container>
                <Header/>
                <Store/>
            </Container>
        </ShoppingItemProvider>
    )
};

export default App;