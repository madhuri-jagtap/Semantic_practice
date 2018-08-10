import React from 'react'
import { Grid, Segment,Image,Icon, Card,Divider } from 'semantic-ui-react'

const Cardcomponent = () => (
    <div>
    <Grid columns={5} stackable>
<Grid.Column>
   <Card>
      <Image src='../images/marguerite-daisy-beautiful-beauty.jpg' />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Andrew is an musician.</Card.Description>
          </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
        mutual
        </a>
      </Card.Content>
    </Card>
</Grid.Column>
<Grid.Column>
   <Card>
      <Image src='../images/marguerite-daisy-beautiful-beauty.jpg' />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Andrew is an musician.</Card.Description>
          </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
        mutual
        </a>
      </Card.Content>
    </Card>
</Grid.Column>
<Grid.Column>
   <Card>
      <Image src='../images/marguerite-daisy-beautiful-beauty.jpg' />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Andrew is an musician.</Card.Description>
          </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
        mutual
        </a>
      </Card.Content>
    </Card>
</Grid.Column>
<Grid.Column>
   <Card>
      <Image src='../images/marguerite-daisy-beautiful-beauty.jpg' />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Andrew is an musician.</Card.Description>
          </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
        mutual
        </a>
      </Card.Content>
    </Card>
</Grid.Column>
<Grid.Column>
   <Card>
      <Image src='../images/marguerite-daisy-beautiful-beauty.jpg' />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Andrew is an musician.</Card.Description>
          </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
        mutual
        </a>
      </Card.Content>
    </Card>
</Grid.Column>
</Grid>

  <Grid columns={3} relaxed>
    <Grid.Column>
      <Segment basic>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</Segment>
    </Grid.Column>
    <Divider vertical>Or</Divider>
    <Grid.Column>
      <Segment basic>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</Segment>
    </Grid.Column>
    <Divider vertical>And</Divider>
    <Grid.Column>
      <Segment basic>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</Segment>
    </Grid.Column>
  </Grid>
  </div>
)
export default Cardcomponent;



