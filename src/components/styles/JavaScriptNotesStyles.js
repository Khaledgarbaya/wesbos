import styled from 'styled-components';

const JavaScriptNotesStyles = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 350px) 1fr;
  gap: 5rem;
  @media (max-width: 1100px) {
    grid-template-columns: 25% 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    aside {
      display: none;
    }
  }
  /* Overriding the build in styles, it's too large but I want to keep the 1500px for blog posts. So stupid it just might work */
  .gatsby-resp-image-wrapper {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .gatsby-resp-image-wrapper {
    max-width: 700px !important;
  }
  .gatsby-resp-image-wrapper[style*='max-width: 1500px'] {
    max-width: 700px !important;
  }

  /* Code blocks are formatted a little different than a blog post */
  pre[data-language] {
    width: 100%;
    margin-left: 0;
  }

  article {
    max-width: 1000px;
  }
`;

export default JavaScriptNotesStyles;
