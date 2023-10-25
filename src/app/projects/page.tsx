'use client'

import ColorfullSpan from "@/Components/CollorfullSpan";
import React, { useEffect, useState } from "react";
import styles from './projects.module.css'

export default function Github() {
    const [data, setData] = useState<any[] | []>([]);
    const [selectedRepo,setSelectedRepo] = useState('');

    useEffect(() => {
        const fetchData = async() =>{
            await fetch('https://api.github.com/users/vitorbclemes/repos')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter((d:any)=>d.name!='vitorbclemes').sort((a:any,b:any)=>{
                    if(a.name.endsWith('WEBDEV')) {return 1;}
                    if(b.name.endsWith('UC')) {return -1;}
                });
                setData(filteredData);
                setSelectedRepo(data[0].html_url)
            })
            .catch(error => console.error('Error fetching data: ', error));
        };
        fetchData();
    }, []);

    return (
        <div className="content slide-in-right">
                <>
                    <span className="title">Github Workshop</span>
                    <p>This section it's just a helper tool to access my Git repositories. It uses the GITHUB API to fetch my public repos</p>
                    <p>You may notice some of then are related to web development (tagged as <ColorfullSpan {...{color:'#ba8209',message:'WEB-DEV'}}/>), while others are projects from my university classes (tagged as <ColorfullSpan {...{color:'#6ea2f0',message:'UC'}}/>)</p>
                    <select value={selectedRepo} onChange={(e)=>setSelectedRepo(e.target.value)} className={styles.select}>
                        {data.map((repo) => (
                            <option key={repo.id} value={repo.html_url}>{repo.name}</option>
                        ))}
                    </select>
                    <a href={selectedRepo} className="button clickable" target="_blank">GO TO REPO</a>
                </>
        </div>
    );
}
