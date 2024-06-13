import projectlist from './projectlist'
import React from 'react'
import './skill.css'
type Projects= {
    id:number,
    image:string,
    link:string,
    name:string,
    data:string
}
export default function Project(){
    const [num,setNum]=React.useState(0)
    const [project,setProject]=React.useState<Projects | undefined>(projectlist[0])
    React.useEffect(() => {
        const newproject =()=> projectlist.find((one)=> one.id===num)
        setProject(newproject)
    },[num])
    const size=projectlist.length
    console.log(size)
    const handleChange=(para:string)=> {
        setNum((prev)=> para==="next"?(prev+1)%size:(prev-1)%size)
    }
    if(!project){
        return <div>Loading...</div>
    }
    return (
        <>
            <h1>Here are my works</h1>
            <p>i have also worked on other project but some of them are these</p>
            <div className="project-mid">
                <div className="project-button" onClick={()=> handleChange("next")} >
                        <p>P</p>
                        <p>R</p>
                        <p>E</p>
                        <p>V</p>
                    </div>

                    <div className="project-mid-i">
                        <div  key={project.id} className="project-b"  >
                            <h2  className="project-scroll" >{project.name}</h2>
                            <p className="project-scroll"  > {num+1} of {size}</p>
                            <a href={project.link}>
                                <img className="project-img" src={`${project.image}`}/>
                            </a>

                        </div>
                
            </div>
            <div className="project-button" onClick={()=> handleChange("next")} >
                 <p>N</p>
                 <p>E</p>
                 <p>X</p>
                 <p>T</p>
             </div>
            </div>
            
            <div>
                <h2>Description</h2>
                <p>{project.data} </p>
            </div>
            
        </>
    )
}
