import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';


export const Navigation:FC= () => {

    const getListNavigation = useAppSelector(state => state.navigation)
    console.log(getListNavigation);
    return (
            <>
                {getListNavigation.map(element => 
                    <Link to={element.path} key={element.id}>{element.title}</Link>
                )}
            </>
    )
}