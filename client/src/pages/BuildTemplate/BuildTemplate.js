import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import Jumbotron from "../../components/Jumbotron";
import SideNav from "../../components/SideNav"
import { Title, Input } from "../../components/InputField";
import "./buildTemplate.css";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import CustomInput from "../../build.components/Custom-input";
import TextInput from "../../build.components/Text-input";
import RadioInput from "../../build.components/Radio-input";
class BuildTemplate extends Component {

  state = {
    templates: [],
    templateName: "",
    template: [],
    key: 1000000, 
    title: "Build Template",
    nav: [],
    disabled: true,
    email: "true@true.com"
  }
  componentDidMount() {
    this.loadData();
  }
  loadData= () => {
    API.getTemplates(this.state.email)
      .then(res =>
        this.setState({templates:res.data})
      )
      .catch(err => console.log(err));
  };

  singleInput = (name) => {
    let newTemplate = this.state.template.slice();
    newTemplate.push(name)

    this.setState({template: newTemplate})
  }
  multiInput = (name) => {
    let newTemplate = this.state.template.slice();
    for(let i = 0; i < name.length; i++){
      newTemplate.push(name[i])
    }
    this.setState({template: newTemplate})
  }
  keyMaker = () => {
    const newKey = this.state.key - 1
    this.setState({key: newKey})
    return newKey;
  }
  createComponent = (componentName,props) => {
    const  components = {
      "CustomInput" : CustomInput,
      "TextInput" : TextInput,
      "RadioInput" : RadioInput
    }
    if (componentName === "TextInput"){
      props.onChange = this.writtenData
    }

    if (componentName === "RadioInput"){
      props.onChange = this.doNothing
      props.disabled = true;
    }
    props.onClick = this.selectElement
    props.onDelete = this.deleteElement
    props.param = props.key
    const component = React.createElement(components[componentName], props);
    return component;
  }
  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
    writtenData = event => {
      const value = event.target.value
      const editor = this.state.editor
      editor.props.value = value
      this.setState({editor: editor})
    }
    handleChange = (userOption) => {
      this.setState({userOption})
      for(let i = 0; i < this.state.templates.length; i++){
        let match = this.state.templates[i].templateName.includes(userOption.label)
        let id = this.state.templates[i]._id
        if(match) {
          window.location.href = `/buildTemplate/${id}`
        }
        }
    }
    handleInputWidthChange = event => {
      const { name, value } = event.target;
      const editor = this.state.editor
      let string = ""
      if(isNaN(value)){
        string = `${value}`
      } else {
        string = `${value}%`
      }
      editor.props[name] = string
      const key = editor.props.key
      for(let i = 0; i < this.state.template.length; i++) {
        if(this.state.template[i].props.key === key){
          let newTemplate = this.state.template
          newTemplate[i] = editor;
          console.log(newTemplate)
          this.setState({template: newTemplate})
        }
      }
      this.setState({
        [name]: value
      });
    };
    selecterStyle = key => {
      for(let i = 0; i < this.state.template.length; i++){
        if(this.state.template[i].props.key === key){
          const selected = this.state.template[i]
          selected.props.backgroundColor = "pink"
          this.setState({editor: selected})
        }
        }
    }
    deleteElement = key => {
      for(let i = 0; i < this.state.template.length; i++){
        if(this.state.template[i].props.key === key){
          const newTemplate = this.state.template
          newTemplate.splice(i,1)
          this.setState({editor: undefined})
        }
      }
    }
    selectElement = (key,type) => {
      if(type === "CustomInput"){
        this.customInputNav()
      } else if (type === "TextInput") {
        this.textInputNav()
      } else {
        this.radioInputNav()
      }
      if(this.state.editor){
        const selected = this.state.editor
        selected.props.backgroundColor = "white"
        selected.props.x = ""
        this.selecterStyle(key)
      } else {
        this.selecterStyle(key)
      }
    }
    handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
      if(this.state.templateName === ""){
        alert("Template Title is requried!")
      } else {
      const template = this.state.template
      let newTemplate = []
      for(let i = 0; i < template.length; i++){
        let element = template[i]
        delete element.props.x
        delete element.props.backgroundColor
        delete element.props.border
        delete element.props.onClick
        delete element.props.onDelete
        newTemplate.push(element)
      }
      API.saveTemplate({
      user: this.state.email,
      userTemplateName: `${this.state.email} ${this.state.templateName}`,
      templateName: this.state.templateName,
      template: newTemplate
      })
        .then(res => this.props.history.push(`/buildTemplate/${res.data._id}`))
        .catch(err => console.log(err));
      }
      
    };
    newTemplate = () => {
     this.props.history.push("/buildTemplate")
    }
    customInputNav = () => {
      const nav = [
            <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="width"
                placeholder="Width"
              />,
            <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="marginLeft"
                placeholder="Margin Left"
              />,
              <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="marginRight"
                placeholder="Margin Right"
              />,
              <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="placeholder"
                placeholder="placeholder"
              />,
              <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="name"
                placeholder="user value"
              /> 
      ]
      this.setState({nav: nav})
    }
    textInputNav = () => {
      const nav = [
        <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="width"
                placeholder="Width"
              />,
            <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="marginLeft"
                placeholder="Margin Left"
              />,
              <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="marginRight"
                placeholder="Margin Right"
              />,
              <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="color"
                placeholder="Color"
              />,
              <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="fontSize"
                placeholder="Font Size"
              />,
              <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="fontFamily"
                placeholder="Font Family"
              />
              
      ]
      this.setState({nav: nav})
    }
    radioInputNav = () => {
      const nav = [
          <Input
              width= "100%"
              onChange={this.handleInputWidthChange}
              name="label"
              placeholder="label"
                />,
          <Input
              width= "100%"
              onChange={this.handleInputWidthChange}
              name="value"
              placeholder="user value"
                />,
            <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="marginLeft"
                placeholder="Margin Left"
              />,
              <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="marginRight"
                placeholder="Margin Right"
              />,
              <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="color"
                placeholder="Color"
              />,
              <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="fontSize"
                placeholder="Font Size"
              />,
              <Input
                width= "100%"
                onChange={this.handleInputWidthChange}
                name="fontFamily"
                placeholder="Font Family"
              />,
              
      ]
      this.setState({nav: nav})
    }
  render() {
    const { userOption } = this.state;
    const userValue = userOption && userOption.value;
  return(
<div>
  <Jumbotron name = "Build Template" />
  <Container fluid>
   <Row>
      <Col size="md-5">
        <Title
                id="templateTitle"
                width="100vh"
                value = {this.state.templatename}
                onChange={this.handleInputChange}
                name="templateName"
                placeholder="Title (required)"
              />
              </Col>
              <Col size="md-2">
              <Button onClick = {this.handleFormSubmit} children = "Save Changes" className = "btn" id="pageButton"/>
              </Col>
              <Col size="md-5">
              <Select
        name="form-field-name2"
        placeholder="My Forms"
        value={userValue}
        onChange={this.handleChange}
        options= {this.state.templates.map(template => (
          { value: template.templateName, label: template.templateName } 
      ))}
      />
        </Col>
        </Row>
          {/* ====================================== */}
          {/* SIDE NAV */}
          {/* ===================================== */}
        <Row>
          <Col size="md 3">
          <SideNav children={[
              /* ===================================== */
              // Email Button
              /* ===================================== */
              <div id="pageButton" onClick = {() => this.singleInput({component: "CustomInput" ,props: {key: this.keyMaker(), x: "", border: "",onClick: this.selectElement, onDelete: this.deleteElement, param: this.state.key -1, type: "CustomInput",value: "",name: ""}})} children = "Custom Input" className = "navBtn"/>,              /* ===================================== */
              // Name Button 
              /* ===================================== */
              <div id="pageButton" onClick = {() => this.singleInput({component: "TextInput" ,props: {key: this.keyMaker(), fontSize: "20px" ,onDelete: this.deleteElement, param: this.state.key -1, value: "",name: this.state.key -1,onClick: this.selectElement, onChange: this.writtenData, type: "TextInput"}})} children = "Block Text Input" className = "navBtn"/> ,
              /* ===================================== */
              // Radio Button 
              /* ===================================== */
              <div id="pageButton" onClick = {() => this.singleInput({component: "RadioInput" ,props: {key: this.keyMaker(), color: "black",fontSize: "20px", x: "", label: "CheckBox Label",onClick: this.selectElement, onDelete: this.deleteElement, param: this.state.key -1, type: "RadioInput",value: "",name: ""}})} children = "CheckBox Input"className = "navBtn"/>,
              /* ===================================== */
        
        // End Button Array
        ]}/>
        <SideNav 
          children={this.state.nav} 
        />
        {/* End Button Div */}
          </Col>
          {/* ==================================== */}
          {/* PAPER */}
          {/* ==================================== */}
          
          <Col size="md 8">
        <Paper
        right = '35vh'
        children = {this.state.template.map(template => (
          this.createComponent(template.component,template.props)
        ))} style={{width: '50%', margin: 'auto'}}
      />
      </Col>
    </Row>
  </Container>
  </div>
)
}}
export default BuildTemplate;
