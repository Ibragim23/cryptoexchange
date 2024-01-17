import langIcon from '../assets/icons/iconoir_language.svg';
import langArrowIcon from '../assets/icons/back.svg';


const langoptions = (props) => {
    return(
        <div>
                <div className='lang-menu'>
                         <img id='labelImg' src={langIcon} alt={props.onChange} />
                    <select onChange={props.onChange}>
                        <option value={'en'}>ENG</option>
                        <option value={'ru'}>RU</option>
                    </select>
                        <img id='labelImg' src={langArrowIcon} alt={props.onChange} />
                </div>
            
        </div>
    )
}
export default langoptions;