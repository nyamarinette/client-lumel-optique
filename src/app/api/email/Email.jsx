import {
  Body,
  Button,
  Container,
  Html,
  Img,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

export const Email = ({ fullname, email, service, communication, message }) => {
  return (
    <Html>
      <Body>
        <Container>
          <Section>
            <Img
              src="https://maria-bucket-1.s3.us-east-1.amazonaws.com/D%C3%A9veloppeuse+Web/Les+plateformes+web+de+ma+client%C3%A8le/Bethel+Eyes+Care_Site+Internet/Les+images+du+site+internet/Leur+logos/Bethel+Eyes+care_logo.jpg"
              width="200"
              height="200"
              alt="Le logo de Lumel Optique"
              style={{
                borderRadius: "15px",
              }}
            />

            <Text>
              Salut, <br></br>
              {"  "}Vous avez reçu une nouvelle soumission via le formulaire de
              contact de votre site internet " Lumel Optique ".<br></br>
            </Text>

            <Text>
              <p className="text-lg text-zinc-300">
                Voici les détails de la demande:
              </p>
              <ul className="flex flex-col space-y-4">
                <li>
                  <strong>
                    {" "}
                    <i>Nom du client: </i>{" "}
                  </strong>{" "}
                  {fullname}
                </li>
                <br></br>
                <li>
                  <strong>
                    {" "}
                    <i>Email: </i>{" "}
                  </strong>
                  <a className="font-medium" href={`mailto:${email}`}>
                    {" "}
                    {email}
                  </a>{" "}
                </li>
                <br></br>
                <li>
                  <strong>
                    {" "}
                    <i>Service desiré: </i>
                  </strong>{" "}
                  {service}
                </li>
                <br></br>
                <li>
                  <strong>
                    {" "}
                    <i>Méthode de communication choisie: </i>{" "}
                  </strong>{" "}
                  {communication}
                </li>
                <br></br>
                <li>
                  <strong>
                    {" "}
                    <i>Message: </i>{" "}
                  </strong>{" "}
                  {message}
                </li>
                <br></br>
              </ul>

              <Button
                href="https://lumeloptique.com"
                style={{
                  background: "#000",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: "5px",
                }}
              >
                Repondre à ce client
              </Button>

              <p>
                Merci de traiter cette demande dès que possible.
                <br />
                Bien cordialement,
                <br />
                L'equipe marketing de Lumel Optique
              </p>
            </Text>

            <Text>
              {" "}
              © Lumel Optique - © {new Date().getFullYear()} Clinique Optique
              Privée - Tous droits réservés - Douala, Cameroun.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;