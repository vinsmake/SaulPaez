import { RychardRData } from './RychardRData'
import './RychardR.css'
import { TypeFlip } from '../../text/TypeFlip/TypeFlip'
import { NightClubButton } from '../../buttons/NightClubButton'
import { CamLent } from '../../specials/camLent/CamLent'


export const RychardR = () => {

    const { hero1, hero2, hero3, logo, signature } = RychardRData

    return (
        <>
            <section className="RychardR">
                <div className="RychardR-content">
                    <CamLent className="RychardR-logo" />

                    <h1 className="RychardR-title">{hero1}</h1>

                    <div className="RychardR-subheader">
                        <p><TypeFlip propWords={['Eventos', 'Bodas', 'Videografía', "Comerciales", "Marketing" ]} /></p>
                    </div>
                    <p className="RychardR-text">{hero3}</p>

                    <img src={signature} className='RychardR-signature' />
                    <div className='RychardR-contact'>
                        
                        <a href='https://www.instagram.com/paezdrs/'>{/* <TypeFlip propWords={['Save Contact', 'Guardar Contacto']} /> */} <NightClubButton/></a>

                    </div>
                </div>
            </section>
        </>
    )
}