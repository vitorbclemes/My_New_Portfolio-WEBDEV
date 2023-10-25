import styles from './files.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

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
            <div className='button'>Click on file to download</div>
        </div>
    )
}