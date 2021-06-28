import './App.css'
import Grid from './lib/Grid'
import Cell from './lib/Cell'
import SiteWrapper from './lib/SiteWrapper'

function App() {
  return (
    <SiteWrapper>
      <div className="App">
        <Grid isContainer>
          <Cell mediaQuerySpan={[2, 3, 1, 4]}>first col</Cell>
          <Cell mediaQuerySpan={[2, 1, 1, 1]}>second col</Cell>

          {/* <Cell mediaQuerySpan={[4, 4, 4, 4]}>
            <Grid>
              <Cell>1</Cell>
              <Cell>1</Cell>
              <Cell>1</Cell>
              <Cell>1</Cell>
            </Grid>
          </Cell> */}
        </Grid>
      </div>
      <div className="debug"></div>
    </SiteWrapper>
  )
}

export default App
