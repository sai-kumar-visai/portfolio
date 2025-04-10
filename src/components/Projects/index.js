import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Online Platform' ?
            <ToggleButton active value="Online Platform" onClick={() => setToggle('Online Platform')}>ONLINE PLATFORM</ToggleButton>
            :
            <ToggleButton value="Online Platform" onClick={() => setToggle('Online Platform')}>ONLINE PLATFORM</ToggleButton>
          }
          <Divider />
          {toggle === 'Dynamic Application' ?
            <ToggleButton active value="Dynamic Application" onClick={() => setToggle('Dynamic Application')}>DYNAMIC APP'S</ToggleButton>
            :
            <ToggleButton value="Dynamic Application" onClick={() => setToggle('Dynamic Application')}>DYNAMIC APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="Responsive Mini Game" onClick={() => setToggle('Responsive Mini Game')}>MINI GAMES</ToggleButton>
            :
            <ToggleButton value="Responsive Mini Game" onClick={() => setToggle('Responsive Mini Game')}>MINI GAMES</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects