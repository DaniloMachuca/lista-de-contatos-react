import Sidebar from '../../containers/Sidebar'
import List from '../../containers/List'
import AddBtn from '../../components/AddBtn'
import { Container } from '../../styles'

const Home = () => (
  <Container>
    <List />
    <Sidebar />
    <AddBtn />
  </Container>
)

export default Home
