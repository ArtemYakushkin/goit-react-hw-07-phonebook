import Form from "./Form/Form";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";
import { Container, Section, Title, TitleContact } from './App.styled';

const App = () => (
  <Container>
    <Section>
      <Title>Phonebook</Title>
      <Form />
    </Section>
    <Section>
      <TitleContact>Contacts</TitleContact>
      <Filter />
      <ContactsList />
    </Section>
  </Container>
);

export default App;
