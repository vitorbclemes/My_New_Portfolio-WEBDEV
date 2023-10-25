import styles from './files.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const button = {
    background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FF9F00)',
    color:'#FFF',
    border:'1px solid #5c1385',
    borderRadius:'15px',
    padding:'10px',
    marginBottom:'20px'
};

export default function Files(){
    return(
        <div className="content slide-in-right">
            <span className="title">Files</span>
            <div className={styles.grid}>
                <a href='./files/Curriculo_Vitor_Bernstorff_Clemes.pdf' download='Curriculo_Vitor_Bernstorff_Clemes.pdf' className='flexColumn flexCenter clickable'>
                    <FontAwesomeIcon icon={faFilePdf} style={{height:'130px',width:'90px'}} color="#FFF" />
                    <span className={styles.fileDescription}>Currículo (Português)</span>
                </a>
                <a href='./files/Resume_Vitor_Bernstorff_Clemes.pdf' download='Resume_Vitor_Bernstorff_Clemes.pdf' className='flexColumn flexCenter clickable'>
                    <FontAwesomeIcon icon={faFilePdf} style={{height:'130px',width:'90px'}} color="#FFF" />
                    <span className={styles.fileDescription}>Resume (English)</span>
                </a>
            </div>
            <div style={button}>Click on file to download</div>
        </div>
    )
}