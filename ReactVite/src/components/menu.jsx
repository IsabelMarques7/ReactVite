import style from './menu.module.css'

export default function Menu() {
    return(
        <div className={style['wrap-menu']}>
           
           <p>
                <a href={'/contact'}>Contact</a>
            </p>
            <p>
                <a href={'/calc'}>Calculations</a>
            </p>
            <p>
                <a href={'/tec'}>Tecnologies</a>
            </p>
           
        </div>
    )
}