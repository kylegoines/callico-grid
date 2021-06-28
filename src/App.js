import './App.css'
import Grid from './lib/Grid'
import Cell from './lib/Cell'
import SiteWrapper from './lib/SiteWrapper'
import Container from './lib/Container'
import ColSpan from './lib/ColSpan'

function App() {
  return (
    <SiteWrapper debug={true}>
      <div className="App">
        <Grid isContainer>
          <Cell mediaQuerySpan={[2, 3, 1, 4]}>first col</Cell>
          <Cell mediaQuerySpan={[2, 1, 1, 1]}>second col</Cell>
        </Grid>
      </div>

      <Container>
        <ColSpan mediaQuerySpan={[4, 5, 8, 6]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ColSpan>
      </Container>
    </SiteWrapper>
  )
}

export default App
