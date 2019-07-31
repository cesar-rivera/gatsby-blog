import React from "react"
import "rbx/index.css"
import { Navbar, Container, Footer, Content } from "rbx"

class Layout extends React.Component {
  constructor({ children }) {
    super()
    this.children = children
    this.state = { locale: "en-us" }
  }
  
  render(){
    return (
      <div>
        <Navbar color="warning">
          <Container>
            <Navbar.Brand>
              <Navbar.Item href="/"><strong>Enroute Blog</strong></Navbar.Item>
              <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
              <Navbar.Segment align="start">
                <Navbar.Item href="/">Home</Navbar.Item>
                <Navbar.Item href={"/" + this.props.locale + "/blog/"}>Blog</Navbar.Item>
                <Navbar.Item href={"/" + this.props.locale + "/about/"}>About</Navbar.Item>
              </Navbar.Segment>
              <Navbar.Segment align="end">
                <Navbar.Item href={this.props.locale === "en-us" ? "/es-mx/" : "/en-us/"}>{this.props.locale === "en-us" ? "MX" : "US"}</Navbar.Item>
              </Navbar.Segment>
            </Navbar.Menu>
          </Container>
        </Navbar>
        {this.children}
        <Footer>
          <Content textAlign="centered">
            <p>
              <strong>rbx</strong> by <a href="https://github.com/dfee">Devin Fee</a>.
              The source code is released under the{' '}
              <a href="https://opensource.org/licenses/mit-license.php">
                MIT License
              </a>
              . The website content is licensed{' '}
              <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC BY NC SA 4.0
              </a>
              .
            </p>
          </Content>
        </Footer>
      </div>
    )
  }
}

export default Layout