import React from 'react';

const BiDbStock = ({
    id = null,
    fill = '#222',
    width = '100%',
    height = '100%',
    viewBox = '0 0 21 26',
    style = {},
}) => (
    <svg width={width} height={height} viewBox={viewBox} style={style}>
        <defs>
            <linearGradient id={`${id}_a`} x1="66.614%" x2="32.388%" y1="50.447%" y2="49.88%">
                <stop offset="0%" stopColor="#E70"/>
                <stop offset="9.97%" stopColor="#E70"/>
                <stop offset="26.44%" stopColor="#EC7200"/>
                <stop offset="47.89%" stopColor="#E56305"/>
                <stop offset="72.08%" stopColor="#D94913"/>
                <stop offset="98.12%" stopColor="#CA1B1D"/>
                <stop offset="99.97%" stopColor="#C8161D"/>
                <stop offset="100%" stopColor="#C8161D"/>
            </linearGradient>
            <linearGradient id={`${id}_b`} x1="33.417%" x2="67.165%" y1="49.9%" y2="50.459%">
                <stop offset="0%" stopColor="#23ADE5"/>
                <stop offset="32.85%" stopColor="#0091D2"/>
                <stop offset="100%" stopColor="#0054A7"/>
            </linearGradient>
            <linearGradient id={`${id}_c`} x1="30.769%" x2="70.483%" y1="49.853%" y2="50.511%">
                <stop offset="0%" stopColor="#8EC31F"/>
                <stop offset="14.65%" stopColor="#87C124"/>
                <stop offset="33.83%" stopColor="#73B82F"/>
                <stop offset="55.52%" stopColor="#4BAB3C"/>
                <stop offset="78.87%" stopColor="#009B48"/>
                <stop offset="100%" stopColor="#008D50"/>
            </linearGradient>
        </defs>
        <g fill="none">
            <path fill={`url(#${id}_a)`} d="M6.324 10.314C5.599 9.648 4.719 9.1 3.657 8.727c-.534-.188-1.413-.462-2.163-.462-.644 0-1.195.204-1.333.846-.268 1.225-.141 11.75-.047 12.967.066.896.445 1.419 1.494 1.397 7.318-.12 9.238-8.987 4.716-13.16z"/>
            <path fill={`url(#${id}_b)`} d="M14.707 1.861c-.658-.605-1.463-1.103-2.42-1.44C11.8.248 11.004 0 10.323 0c-.589 0-1.087.19-1.217.772-.24 1.109-.127 10.665-.041 11.774.063.81.403 1.284 1.355 1.27 6.647-.113 8.392-8.165 4.287-11.955z"/>
            <path fill={`url(#${id}_c)`} d="M17.642 10.743c-.824-.76-1.842-1.389-3.043-1.809-.614-.218-1.618-.528-2.47-.528-.738 0-1.369.235-1.53.968-.306 1.394-.16 13.4-.052 14.792.08 1.024.504 1.613 1.701 1.596 8.353-.133 10.552-10.256 5.394-15.019z"/>
        </g>
    </svg>
);

export default BiDbStock;