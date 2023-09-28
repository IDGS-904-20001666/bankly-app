import React from 'react'
import { ReactComponent as Logo } from '../assets/img/logos/logo_white.svg';

export const LogoComponent = props => 
{
    return (
        <Logo width={props.width} height={props.height} />
    )
}