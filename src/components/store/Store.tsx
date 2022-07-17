import { Col, Row } from "react-bootstrap";
import StoreItem from "../storeItem/StoreItem";
import data from "../../data/items.json";



function Store() {
    return (
        <main className="mt-3 mb-3">
            <Row lg={3} md={2} xs={1}>
                {data.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </main>
    )
};

export default Store;