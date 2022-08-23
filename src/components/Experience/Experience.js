import React from 'react';
import Style from './About.module.scss';
import { Box } from '@mui/material';
import { info } from '../../info/Info';
import Terminal from '../about/Terminal';


export default function Experience() {
    const firstName = info.firstName.toLowerCase()

    function mev() {
        return <>
            <p><span style={{color: info.baseColor}}>company $</span> Mev Software</p>
            <p>
                <span style={{color: info.baseColor}}>position $ </span>
                Full technologies Developer
            </p>
            <p>
                <span style={{color: info.baseColor}}>period $ </span>
                Nov 2013 - Dec 2015
            </p>
            <p>
                <span style={{color: info.baseColor}}>technologies $ </span>
                PHP | jQuery | Angular | Laravel
            </p>
        </>;
    }

    function digital() {
        return <>
            <p><span style={{color: info.baseColor}}>company $</span> Digital Core Studio</p>
            <p>
                <span style={{color: info.baseColor}}>position $ </span>
                Full technologies Developer
            </p>
            <p>
                <span style={{color: info.baseColor}}>period $ </span>
                Feb 2016 - Nov 2017
            </p>
            <p>
                <span style={{color: info.baseColor}}>technologies $ </span>
                PHP | jQuery | Angular | Laravel
            </p>
        </>;
    }

    function greppy() {
        return <>
            <p><span style={{color: info.baseColor}}>company $</span> Greppy Systems</p>
            <p>
                <span style={{color: info.baseColor}}>position $ </span>
                Full technologies Developer
            </p>
            <p>
                <span style={{color: info.baseColor}}>period $ </span>
                Greppy Systems
            </p>
            <p>
                <span style={{color: info.baseColor}}>technologies $ </span>
                PHP | ReactJS | NodeJS | Symphony
            </p>
        </>;
    }

    function code() {
        return <>
            <p><span style={{color: info.baseColor}}>company $</span> 7code</p>
            <p>
                <span style={{color: info.baseColor}}>position $ </span>
                Full technologies Developer
            </p>
            <p>
                <span style={{color: info.baseColor}}>period $ </span>
                Apr 2019 - Mar 2020
            </p>
            <p>
                <span style={{color: info.baseColor}}>technologies $ </span>
                PHP | VueJS | NodeJS
            </p>
        </>;
    }

    function endava() {
        return <>
            <p><span style={{color: info.baseColor}}>company $</span> Endava</p>
            <p>
                <span style={{color: info.baseColor}}>position $ </span>
                Software Engineer
            </p>
            <p>
                <span style={{color: info.baseColor}}>period $ </span>
                Mar 2020 - Mar 2021
            </p>
            <p>
                <span style={{color: info.baseColor}}>technologies $ </span>
                ReactJS | React Native | NodeJS
            </p>
        </>;
    }

    function binar() {
        return <>
            <p><span style={{color: info.baseColor}}>company $</span> BinarCode</p>
            <p>
                <span style={{color: info.baseColor}}>position $ </span>
                Software Engineer
            </p>
            <p>
                <span style={{color: info.baseColor}}>period $ </span>
                BinarCode - Present
            </p>
            <p>
                <span style={{color: info.baseColor}}>technologies $ </span>
                PHP | VueJS | Tailwind
            </p>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={binar()}/>
            <Terminal text={endava()}/>
            <Terminal text={code()}/>
            <Terminal text={digital()}/>
            <Terminal text={mev()}/>
        </Box>
    )
}
