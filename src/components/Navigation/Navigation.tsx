import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import style from '../Navigation/Navigation.module.css';


export const Navigation:FC = () => {
    const getListNavigation = useAppSelector(state => state.navigation);

    return (
            <>
                {getListNavigation.map(element => 
                    <Link
                        to={element.path}
                        key={element.id}
                        className={style.link}
                    >
                        {element.title}
                    </Link>
                )}
            </>
    )
}