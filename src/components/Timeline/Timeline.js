import "./Timeline.css";
import { Container, Row, Col } from "react-bootstrap";
import InfoBox from "./InfoBox";

const steps = [
  {
    title: "1. Consultation",
    subTitle: "Your vision, our starting point",
    description:
      "Every project begins with a conversation. We discuss your space, your taste in sound, and the materials and finishes you love.",
  },
  {
    title: "2. Design",
    subTitle: "Sketches to specifications",
    description:
      "We translate your wishes into a concrete design — enclosure dimensions, driver selection, and the exact wood and finish for your speaker.",
  },
  {
    title: "3. Craft",
    subTitle: "Built by hand",
    description:
      "Your speaker is assembled in our workshop from recycled oak and premium components, with every joint and detail finished by hand.",
  },
  {
    title: "4. Tuning & delivery",
    subTitle: "Perfected, then delivered",
    description:
      "Each unit is acoustically tuned, quality-checked, and delivered to your door — ready to fill your space with sound.",
  },
];

function Timeline() {
  return (
    <div className="timeline">
      <Container>
        {steps.map((step, index) => (
          <Row key={step.title}>
            {index % 2 === 1 && <Col></Col>}
            <Col className="text-center p-5 my-2 animation">
              <InfoBox
                title={step.title}
                subTitle={step.subTitle}
                description={step.description}
              />
            </Col>
            {index % 2 === 0 && <Col></Col>}
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Timeline;
