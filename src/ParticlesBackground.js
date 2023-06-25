import Particles from "react-particles";
import Rocket from "./Rocket";
import Button from '@mui/material/Button';


function ParticlesBackground({particlesInit,  particlesLoaded}) {


  return (
    <div >
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          smooth: true,
          detectRetina: false,
          fpsLimit: 120,
          fullScreen: true,         
          particles: {
            number: {
              value: 2000,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#ffffff"],
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
            },
            size: {
              value: 3,
              random: {
                enable: true,
                minimumValue: 1,
              },
            },
            move: {
              size: true,
              enable: true,
              speed: 0.25,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out",
              },
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
              trail: {
                enable: true,
                length: 5,
                fillColor: "#222",
              },
              warp: true,
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
            },
          },       
          absorbers: {
            orbits: true,
            destroy: true,
            opacity: 1,
            color: "#000",
            size: {
              value: 5,
              limit: 10,
              random: false,
              density: 50,
            },
            position: {
              x: 50,
              y: 50,
            },
          },
          background: {
            color: "#222",
          },
        }}
        id="tsparticles"
      />

      
      <main className="box">
        <h3>Paul Q. Yetman</h3>
        <h3>Full Stack Developer</h3>
        <div style={{display: 'flex', alignItems: 'center',
          justifyContent: 'center'}}>
        <Button variant="outlined" size="small" style={{color: 'white', borderColor: "white"}} >
            Enter
          </Button>
        </div>
      </main>
      <div style={{
      display: 'flex',  
      alignItems: 'center',
      justifyContent: 'center',
      height : window.innerHeight,
    
    }} >

      <Rocket />
      </div>
    </div>
  );
}

export default ParticlesBackground;
