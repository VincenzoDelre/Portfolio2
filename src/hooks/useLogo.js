import { graphql, useStaticQuery } from "gatsby";

const useLogo = () => {
    const data = useStaticQuery( graphql `
    query  {
        allDatoCmsLogo {
          nodes {
            contenido
            id
            titulo
            link
            slug
            imagen {
              gatsbyImageData(width: 100, height: 100)
            }
          }
        }
      }

      `)
      
      return data.allDatoCmsLogo.nodes.map(logo => ({
        titulo: logo.titulo,
        id: logo.id,
        contenido: logo.contenido,
        slug: logo.slug,
        imagen: logo.imagen,
        link: logo.link
    }))
    
}
 
export default useLogo;