'use client'
import styles from './experience.module.css';
import { useState,useEffect } from 'react';

type BackgroundProps = {
    title:string,
    subTitle:string,
    description:string,
}

function ExpModule(data : BackgroundProps){
    return(
        <>
            <div className={styles.viewHeader}>
                <span className={styles.viewHeaderTitle}>{data.title}</span>
                <span className={styles.viewHeaderSub}>{data.subTitle}</span>
            </div>
            <p style={{marginTop:'20px'}}>
                {data.description}
            </p>
        </>
    )
}


export default function Experience() {
  const [selectedView, setSelectedView] = useState(0);
  const [page,setPage] = useState(0);



  const handleView = (arg:number) =>{
    setSelectedView(arg);
    setPage(0)
  };

  const ProfessionalData : BackgroundProps[] = [
    {
        title:'Freelancer',
        subTitle:'SINCE 2019',
        description:'Development of WEB and Mobile applications aimed at customers independently. Use of React and React Native frameworks integrated with PostgreSQL and MongoDB databases',
    },
    {
        title:'Routech - Routing Logistics Tech',
        subTitle:'SINCE 2021',
        description:'Fullstack development of a SaaS application for route planning logistics. Experience with Integration between Svelte (Front) and NodeJS languages ​​with MongoDB (Backend). In addition to development, it also involves participation in the creative process of new features and screen prototyping. Code control via Github and management of functions in the Kanban method.',
    }
  ];

  const PersonalData : BackgroundProps[] = [
    {
        title:'Rotary Youth Exchange Program',
        subTitle:'AUGUST 2017 - JUNE 2018',
        description:'Exchange in the city of Esbjerg, Denmark. Ranked fourth best candidate in the regional district and best exchange student in the foreign district. It included a year of High School and interaction with more than 40 different nationalities.'
    },
    {
        title:'Scientific Initiation Scholarship',
        subTitle:'JUNE 2020 - JUNE 2021',
        description: 'Implementation of an algorithm in Java for semi-supervised classification of data flow with the Moa Framework, guided by Dr. Fabiano Baldo and presented at the 31st Scientific Initiation Week.'
    },
    {
        title:'Athletic Association of the Technological Sciences Center',
        subTitle:'JANUARY 2020 - DECEMBER 2022',
        description:"Member of the association responsible for organizing the university's sporting and festive events, including relations with other courses and universities. Experiences of 1 year as a member and 2 years on the board, being Financial Director and Presidency, respectively."
    },
  ];

  const componentProps = selectedView == 0 ? ProfessionalData[page] : PersonalData[page];

  return (
    <div className="content slide-in-right">
      <div className={styles.header}>
        <div className={`${styles.view} clickable ${selectedView === 0 ? styles.selectedView : ''}`} onClick={()=>handleView(0)}>Professional</div>
        <div className={`${styles.view} clickable ${selectedView === 1 ? styles.selectedView : ''}`} onClick={()=>handleView(1)}>Personal</div>
      </div>
      <>
        <ExpModule {...componentProps}/>
        <div className='flexRow' style={{marginTop:'2em'}}>
            <div className={`${styles.pageSelector} ${page == 0 ? styles.selectedPage : ''} clickable `} onClick={()=>setPage(0)}>1</div>
            <div className={`${styles.pageSelector} ${page == 1 ? styles.selectedPage : ''} clickable `} onClick={()=>setPage(1)}>2</div>
            {selectedView == 1 &&
                <div className={`${styles.pageSelector} ${page == 2 ? styles.selectedPage : ''} clickable `} onClick={()=>setPage(2)}>3</div>
            }
        </div>
      </>
    </div>
  );
}
