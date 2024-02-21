import {Card, Col} from "react-bootstrap";
import he from "he";

function CardPost({post}) {

    // Pulisco i tag html dall'excerpt dell'articolo con il modulo he per risolvere le html entities e con un'espressione regolare apposita
    const cleanExcerpt = he.decode(post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""));

    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src="http://placebeard.it/640/480" alt="Hollywood Sign on The Hill" />
                <Card.Body>
                    <Card.Text>
                        ...
                    </Card.Text>
                    <Card.Title>{post.title.rendered}</Card.Title>
                    <Card.Text>
                        {cleanExcerpt}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardPost;