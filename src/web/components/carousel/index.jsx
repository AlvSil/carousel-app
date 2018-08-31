
import React from 'react';

import { Box } from '../box';

import './carousel.css';

export const Carousel = ({
  itemList,
  scrollTo,
  previousItem,
  nextItem,
  isPreviousScrollable,
  isNextScrollable
}) => {
    if (!itemList) return null;
    return (
        <div className='CarouselContainer'>
            <a href={isPreviousScrollable ? `#item_${previousItem}` : null}>
                <div onClick={isPreviousScrollable ? (event) => scrollTo(event, 'previous') : null}>
                    <i className='arrow left'></i>
                </div>
            </a>
            
            <div className='SlidesContainer'>
                {itemList.map((item => (
                    <Box id={`item_${item.id + 1}`} key={item.id} title={item.title} />
                )))}
            </div>
            <a href={isNextScrollable ? `#item_${nextItem}` : null}>
                <div onClick={isNextScrollable ? (event) => scrollTo(event, 'next') : null}>
                    <i className='arrow right'></i>
                </div>
            </a>
        </div>
    )
}
