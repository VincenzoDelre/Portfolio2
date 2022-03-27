import { graphql, useStaticQuery } from "gatsby";

const useProyecto = () => {
    const data = useStaticQuery( graphql `
    query {
        allDatoCmsProyecto {
          nodes {
            contenido
            id
            titulo
            link
            slug
            imagen {
                gatsbyImageData(width: 1800, height: 800)
              }
          }
        }
      }
      
    `);

    return data.allDatoCmsProyecto.nodes.map(proyecto => ({
        titulo: proyecto.titulo,
        id: proyecto.id,
        contenido: proyecto.contenido,
        slug: proyecto.slug,
        imagen: proyecto.imagen,
        link: proyecto.link
    }))
   
}
 
export default useProyecto;