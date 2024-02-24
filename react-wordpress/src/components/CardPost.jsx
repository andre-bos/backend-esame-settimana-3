import {Card, Col} from "react-bootstrap";
import he from "he";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseEndpoint} from "../apiParams.jsx";

function CardPost({post}) {

    // Pulisco i tag html dall'excerpt dell'articolo con il modulo he per risolvere le html entities e con un'espressione regolare apposita
    const cleanExcerpt = he.decode(post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""));

    const [categorie, setCategorie ] = useState('')

    useEffect(() => {
        console.log(post.categories)
        let c = "";
        post.categories.forEach(id => {
            axios.get(baseEndpoint + 'categories/' + id).then(response => {
                c +=  response.data.name + ' '
                setCategorie(c);
            })
        })

    }, []);

    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src="" alt="Hollywood Sign on The Hill" />
                <Card.Body>
                    <Card.Text>
                        Categorie: {categorie.toString()}
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