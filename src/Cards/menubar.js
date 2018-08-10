import React from 'react'
import {Menu,Input,Dropdown,Container,Card,Grid,Image,Icon, Button} from 'semantic-ui-react';
import Cardcomponent from '../Cards/Cardconponent';
import './semanticui.css';
// import logo from '../logo.svg';
const options = [
  { key: '.com', text: '.com', value: '.com' },
  { key: '.net', text: '.net', value: '.net' },
  { key: '.org', text: '.org', value: '.org' },
]
const ButtonExampleButton = () => (
  
    <div className="ui container oneline">
      <Container>
      <Menu stackable>
        <Menu.Item>
          <Image size="mini" src='../images/download.png' alt="hello" />
        </Menu.Item>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>About Us</Menu.Item>
        <Menu.Item>Career</Menu.Item>
        <Menu.Item><Input 
    label={<Dropdown defaultValue='.net' options={options} />}
    labelPosition='right'
    placeholder='Search'
  /></Menu.Item>
        </Menu>
   





   
      {/* <Button.Group floated='right'>
         <Button circular color='facebook' icon='facebook'/>
         <Button circular color='linkedin' icon='linkedin'/>
         <Button circular color='google plus' icon='google plus'/>
         </Button.Group> */}
    </Container>
` <Cardcomponent/>
   
</div>
);

export default ButtonExampleButton;