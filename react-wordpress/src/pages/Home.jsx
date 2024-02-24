import {Col, Container, Row} from "react-bootstrap";
import PageTitle from "../components/PageTitle.jsx";
import BootstrapGrid from "../components/BootstrapGrid.jsx";
import CardPost from "../components/CardPost.jsx";
import MainSidebar from "../components/MainSidebar.jsx";

import React from 'react';
import {useCategories, usePostsLoader} from "../hooks/index.js";
import {useSelector} from "react-redux";

function Home() {
    // Ottengo i post e li salvo nello stato globale con un hook scritto da me
    usePostsLoader()
    useCategories()

    // Recupero i post appena salvati nello stato globale
    const posts = useSelector(state => state.posts.posts)
    console.log(posts)

    return (
        <>
            <Container>
                <PageTitle />
            </Container>

            <Container>
                <Row className="justify-content-around">
                    <Col md={8}>
                        <BootstrapGrid>
                            {posts && posts.map((post, index) => (
                                <CardPost key={index} post={post} />
                            ))}
                        </BootstrapGrid>
                    </Col>
                    <Col md={2}>
                        <MainSidebar />
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Home;