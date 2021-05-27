import styled from 'styled-components'

import Navbar from 'components/navbar/navbar'
import Hero from 'components/hero/hero'
import AboutMe from 'components/aboutme/aboutMe'
import Projects from 'components/projects/projects'
import Contact from 'components/contact/contact'
import Footer from 'components/footer/footer'

const Layout = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr minmax(12ch, var(--width)) 1fr;
  overflow: visible;
  overflow-x: hidden;

  row-gap: 8rem;
  margin-bottom: 8rem;

  width: 100%;
`

export default function App() {
  return (
    <>
    <Navbar />
    <Layout>
      <Hero style={{ gridColumn: '1 / 4' }} />
      <AboutMe style={{ gridColumn: '2 / 3'}} />
      <Projects style={{ gridColumn: '2 / 3'}} />
      <Contact style={{ gridColumn: '2 / 3'}} />
      <Footer style={{ gridColumn: '2 / 3'}} />
    </Layout>
    </>
  );
}
