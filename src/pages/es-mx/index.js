import React from "react"
import { css } from "@emotion/core"
import { Container, Section, Title, Column } from "rbx"
import Layout from "../../components/layout"

export default () => (
  <Layout locale="es-mx">
    <Container>
      <Section>
        <Title size={2}>Página de inicio <span css={css`color:red;`}>Enroute</span>.</Title>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit nisi. Vivamus volutpat, erat in volutpat laoreet, metus ex vulputate turpis, et lobortis diam magna id turpis. Integer luctus nibh nec dolor mattis ornare. Vestibulum fringilla non neque ac congue. Praesent mollis sed odio eget sodales. Mauris mattis eget ligula non fermentum. Vestibulum porta, sapien eu mollis blandit, eros ligula aliquam nulla, quis rhoncus purus quam eget enim. Duis consectetur augue vel dui sagittis luctus. Pellentesque ullamcorper porta metus, eu dignissim libero imperdiet vel. Maecenas non lacus pulvinar, eleifend odio quis, pellentesque odio. Phasellus eu congue ligula, quis viverra enim. Phasellus aliquet ex non felis vehicula iaculis. Cras eget eros vitae eros egestas bibendum eu quis metus. Integer faucibus tincidunt massa, id interdum nunc ultrices ut.
        </p>
      </Section>
    </Container>
    <Container css={css`background-color:#005a86;color:#fff;margin-bottom:20px`}>
      <Section>
        <Column.Group>
          <Column>
            <Title css={css`color:#fff;`}>Asdf 1</Title>
            Morbi commodo urna id varius euismod. Morbi sagittis, justo ullamcorper dapibus pharetra, dui nisl efficitur magna, a volutpat augue lorem sed erat. Nullam sem nisi, rutrum at felis in, sodales venenatis lectus. Mauris vel est leo.
          </Column>
          <Column>
            <Title css={css`color:#fff;`}>Asdf 2</Title>
            Vestibulum viverra arcu neque, eget mollis augue luctus non. Praesent feugiat, mi id congue porttitor, est arcu sollicitudin nulla, eget pretium metus felis non metus. Ut pretium sapien auctor ipsum fringilla condimentum. Maecenas blandit arcu sit amet enim.
          </Column>
          <Column>
            <Title css={css`color:#fff;`}>Asdf 3</Title>
            Aliquet, nec imperdiet dolor blandit. Fusce suscipit, libero vel ultrices auctor, ligula eros viverra metus, ut cursus massa quam vel eros. Praesent eu ex volutpat, rutrum diam non, sagittis orci.
          </Column>
          </Column.Group>
      </Section>
    </Container>
  </Layout>
)
