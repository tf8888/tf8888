import * as THREE from 'three/webgpu'

const text = `
 ██████╗  █████╗ ██████╗ ██████╗ ██╗███████╗██╗     
██╔════╝ ██╔══██╗██╔══██╗██╔══██╗██║██╔════╝██║     
██║  ███╗███████║██████╔╝██████╔╝██║█████╗  ██║     
██║   ██║██╔══██║██╔══██╗██╔══██╗██║██╔══╝  ██║     
╚██████╔╝██║  ██║██████╔╝██║  ██║██║███████╗███████╗
 ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
                                                     
███████╗███╗   ██╗███████╗                            
██╔════╝████╗  ██║╚══███╔╝                            
█████╗  ██╔██╗ ██║  ███╔╝                             
██╔══╝  ██║╚██╗██║ ███╔╝                              
███████╗██║ ╚████║███████╗                            
╚══════╝╚═╝  ╚═══╝╚══════╝                            

╔═ Intro ═══════════════╗
║ Thank you for visiting my portfolio, you sneaky developer!
║ Full Stack Developer based in Calgary, AB, Canada.
╚═══════════════════════╝

╔═ Socials ═══════════════╗
║ Mail           ⇒ gabrielenz8@yahoo.com
║ GitHub         ⇒ https://github.com/tf8888
║ LinkedIn       ⇒ https://www.linkedin.com/in/gabriel-enz-5994753b8
╚═══════════════════════╝

╔═ Debug ═══════════════╗
║ You can access the debug mode by adding #debug at the end of the URL and reloading.
║ Press [V] to toggle the free camera.
╚═══════════════════════╝

╔═ Three.js ════════════╗
║ Three.js is the library used to render this 3D world (release: ${THREE.REVISION})
║ https://threejs.org/
╚═══════════════════════╝

╔═ Skills ═══════════════╗
║ Frontend  ⇒ TypeScript, JavaScript, React, Next.js, Tailwind CSS, shadcn UI, Material UI, Redux, Zustand
║ Backend   ⇒ Node.js, Express, FastAPI, Python, WebSocket.io, FFmpeg, OpenAI, Midjourney
║ AI & Auto ⇒ AI-powered content generation, Social media automation, Google Maps API, Stripe
║ DB/Cloud  ⇒ PostgreSQL, Supabase, AWS (EC2, S3, CloudWatch), Docker, CI/CD, GitHub Actions, Jenkins
║ Tools     ⇒ Git, GitHub, Trello, Agile/Scrum, Figma
╚═══════════════════════╝

╔═ Some more links ═════╗
║ Rapier (Physics library)  ⇒ https://rapier.rs/
║ Howler.js (Audio library) ⇒ https://howlerjs.com/
╚═══════════════════════╝
`
let finalText = ''
let finalStyles = []
const stylesSet = {
    letter: 'color: #ffffff; font: 400 1em monospace;',
    pipe: 'color: #D66FFF; font: 400 1em monospace;',
}
let currentStyle = null
for(let i = 0; i < text.length; i++)
{
    const char = text[i]

    const style = char.match(/[╔║═╗╚╝╔╝]/) ? 'pipe' : 'letter'
    if(style !== currentStyle)
    {
        currentStyle = style
        finalText += '%c'

        finalStyles.push(stylesSet[currentStyle])
    }
    finalText += char
}

export default [finalText, ...finalStyles]