import React from 'react';
import './MainBlog.css';

// Datos de ejemplo para los posts del blog
const blogPosts = [
    {
        id: 1,
        title: "Título del Post 1",
        excerpt:
            "Este es un breve extracto del contenido del blog, un resumen atractivo que invita al lector a continuar leyendo...",
        image: "./images/projects/hack.png",
        link: "/post/1",
    },
    {
        id: 2,
        title: "Título del Post 2",
        excerpt:
            "Aquí un extracto interesante que muestra de qué se trata este post. ¡No te lo pierdas!",
        image: "./images/projects/awaq.png",
        link: "/post/2",
    },
    {
        id: 2,
        title: "Título del Post 2",
        excerpt:
            "Aquí un extracto interesante que muestra de qué se trata este post. ¡No te lo pierdas!",
        image: "./images/projects/awaq.png",
        link: "/post/2",
    },
];

const MainBlog = () => {
    return (
        <section className="blog-container">
            <p className="blog-title">Blog</p>
            <div className="blog-grid">
                {blogPosts.map((post) => (
                    <article key={post.id} className="blog-card">
                        <img src={post.image} alt={post.title} className="blog-image" />
                        <div className="blog-content">
                            <h3 className="blog-card-title">{post.title}</h3>
                            <a href={post.link} className="blog-card-button">
                                Leer más
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default MainBlog;
