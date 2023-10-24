import ColorfullSpan from '@/Components/CollorfullSpan'
import styles from './skills.module.css'

export default function Education(){
    return(
        <div className="content slide-in-left">
            <span className="title">
                Skills
            </span>
            <div className={styles.skillGrid}>
                <span>HTML</span>
                <span>MySQL</span>
                <span>CSS</span>
                <span>PostgreeSQL</span>
                <span>Javascript</span>
                <span>MongoDB</span>
                <span>Typescript</span>
                <span>Java</span>
                <span>NodeJS</span>
                <span>Python</span>
                <span>ReactJS / NextJS</span>
                <span>Amazon Web Services</span>
                <span>Svelte</span>
                <span>Git</span>
                <span>React Native</span>
                <span>Figma</span>
            </div>
            <img src="./separator.svg" alt="1" style={{margin:'20px 0'}}/>
            <p style={{fontSize:'14px'}}>I am multilingual and speak <ColorfullSpan {...{color:'#FFF',message:'fluent'}} /> <ColorfullSpan {...{color:'#6ea2f0',message:'English'}}/> and <ColorfullSpan {...{color:'#ba8209',message:'Spanish'}}/>, <ColorfullSpan {...{color:'#FFF',message:'intermediate'}} /> <ColorfullSpan {...{color:"rgb(237, 221, 40)",message:'German'}}/> and basic <ColorfullSpan {...{color:"#960c08",message:'Danish'}} />.</p>
            <p style={{fontSize:'14px'}}>I have great experience with <ColorfullSpan {...{color:"#19bf21",message:'teamwork'}}/> and also familiar with <ColorfullSpan {...{color:"#9019bf",message:"Agile methods"}}/> and some <ColorfullSpan {...{color:'#2d5afc',message:'workflow and prototyping tools'}}/>.</p>
        </div>
    )
}