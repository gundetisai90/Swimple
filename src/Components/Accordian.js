import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Vision</Accordion.Header>
        <Accordion.Body>
        Be the #1 Sports Science Lab in India
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><FontAwesomeIcon icon={faBullseye} />Mission</Accordion.Header>
        <Accordion.Body>
        To facilitate and expedite athletes' path to performance excellence in sports by harnessing innovation and technology for enhanced learning experiences.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;