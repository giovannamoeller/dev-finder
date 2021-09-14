import { Container, Spinner } from './styles';

export function Loading({ isVisible }) {

  return (
    <Container isVisible={isVisible}>
        <Spinner/>
    </Container>
  )
}