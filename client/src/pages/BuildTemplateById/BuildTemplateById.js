import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Button from "../../components/Button"
import Paper from "../../components/Paper"
import Jumbotron from "../../components/Jumbotron";
import SideNav from "../../components/SideNav"
import { Title, Input } from "../../components/InputField";
import "./BuildTemplateById.css";
import EmailInput from "../../build.components/Email-input";
import NameInput from "../../build.components/Name-input";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import CityInput from "../../build.components/City-input";
import StateInput from "../../build.components/State-input";
import ZipInput from "../../build.components/Zip-input";
import StreetAddressInput from "../../build.components/StreetAddress-input";
import LanguageInput from "../../build.components/Language-input";
import NationalityInput from "../../build.components/Nationality-input";
import GenderInput from "../../build.components/Gender-input";
import CustomInput from "../../build.components/Custom-input";
import TextInput from "../../build.components/Text-input"
import RadioInput from "../../build.components/Radio-input";

class BuildTemplateById extends Component {

  state = {
    templates: [],
    templateName: "",
    template: [],
    _id: "",
    url: "",
    key: 1000000,
    name: "Template",
    nav: [],
  }

  componentDidMount() {
    
    this.loadData();
  }
  loadData= () => {
  console.log(this.props.match.params.id)
  API.getTemplate(this.props.match.params.id)
  .then(res => 
    
    this.setState({ 
      template: res.data.template, 
      templateName: res.data.templateName, 
      _id: res.data._id, 
      userOption: res.data.templateName, 
      key: 1000000 - res.data.template.length}))
    .catch(err => console.log(err));

  API.getTemplates()
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
      "EmailInput" : EmailInput,
      "NameInput" : NameInput,
      "CityInput" : CityInput,
      "StateInput" : StateInput,
      "ZipInput" : ZipInput,
      "StreetAddressInput" : StreetAddressInput,
      "GenderInput" : GenderInput,
      "NationalityInput" : NationalityInput,
      "LanguageInput" : LanguageInput,
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
      console.log(value)
    }
    handleChange = (userOption) => {
      let url = `/buildTemplate/${userOption.value}`
      this.props.history.push(url)
      this.setState({userOption:userOption, url: url}, () => {this.loadData()})
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
    deleteTemplate = (id) => {
      API.deleteTemplate(id)
      .then(res =>  this.props.history.push("/buildTemplate"))
      .catch(err => console.log(err));
    }
    updateTemplate = (id) => {
      const template = this.state.template
      let newTemplate = []
      for(let i = 0; i < template.length; i++){
        let element = template[i]
        delete element.props.x
        delete element.props.backgroundColor
        delete element.props.border
        delete element.props.onClick
        delete element.props.onDelete
        delete element.props.param
        newTemplate.push(element)
      }
      API.updateTemplate(id, {
        templateName: this.state.templateName,
        template: newTemplate
      })
      .then(res => this.loadData())
      .catch(err => console.log(err));
    }
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
    <Jumbotron name = "Template" />
      <Container fluid>
      <Row>
        <Col size="md-12">
        <Button onClick = {this.newTemplate} children = "Create a New Template" className = "btn" id="pageButton"/>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
        <div style={{width: '50%', margin: 'auto', position: 'relative', left:'25vw', marginBottom: '1vh'}}> 
                <Select
          name="form-field-name2"
          value={userValue}
          onChange={this.handleChange}
          options= {this.state.templates.map(template => (
            { value: template._id, label: template.templateName } 
        ))}
        />
        </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Button onClick = {() => this.updateTemplate(this.state._id)} children = "Save Changes" className = "btn" id="pageButton"/>
          <Button onClick = {() => this.deleteTemplate(this.state._id)} display = {this.state.delete} children = "Delete Template" className = "btn" id="deleteButton"/>
          </Col></Row>
            {/* ====================================== */}
            {/* SIDE NAV */}
            {/* ===================================== */}
      <Row>
            <SideNav children={[
              /* ===================================== */
              // Email Button
              /* ===================================== */
              <div id="pageButton" onClick = {() => this.singleInput({component: "CustomInput" ,props: {key: this.keyMaker(), x: "", border: "",onClick: this.selectElement, onDelete: this.deleteElement, param: this.state.key -1, type: "CustomInput",value: "",name: ""}})} children = "Custom Input" className = "navBtn"/>,              /* ===================================== */
              // Name Button 
              /* ===================================== */
              <div id="pageButton" onClick = {() => this.singleInput({component: "TextInput" ,props: {key: this.keyMaker(), onDelete: this.deleteElement, param: this.state.key -1, value: "",name: this.state.key -1,onClick: this.selectElement, onChange: this.writtenData, type: "TextInput"}})} children = "Block Text Input" className = "navBtn"/> ,              /* ===================================== */
             
              /* ===================================== */
              // Language Button 
              /* ===================================== */
              <div id="pageButton" onClick = {() => this.singleInput({component: "RadioInput" ,props: {key: this.keyMaker(), color: "black",fontSize: "20px", x: "", label: "CheckBox Label",onClick: this.selectElement, onDelete: this.deleteElement, param: this.state.key -1, type: "RadioInput",value: "",name: ""}})} children = "CheckBox Input"className = "navBtn"/>,
              /* ===================================== */
              // Nationality Button 
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.singleInput({component: "NationalityInput" ,props: {key:this.keyMaker(), value: "",name: "nationality"}})} children = "Nationality Input" className = "navBtn"/>,
              /* ===================================== */
              // Gender Button 
              /* ===================================== */
          <div id="pageButton" onClick = {() => this.singleInput({component: "GenderInput" ,props: {key:this.keyMaker(), value: "",name: "gender"}})} children = "Gender Input" className = "navBtn"/>,     
        
        // End Button Array
        ]}/>
        <SideNav 
          children={this.state.nav} 
        />
        {/* End Button Div */}
            
            <Col size="md 8">
            {/* ================================ */}
            {/* PAPER */}
            {/* ================================ */}
          <Paper
          right = '35vh'
          children = {this.state.template.map(template => (
            this.createComponent(template.component,template.props)
          ))}
        />
          
        </Col>
        </Row>
    </Container>
  </div>
)
}}
export default BuildTemplateById;
