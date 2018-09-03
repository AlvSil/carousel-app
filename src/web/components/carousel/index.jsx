
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
            <div className='ArrowContainer' onClick={isPreviousScrollable ? (event) => scrollTo(event, 'previous') : null}>
                <a href={isPreviousScrollable ? `#item_${previousItem}` : null}>
                    <i className='arrow left'></i>
                </a>
            </div>
            
            <div className='SlidesContainer'>
                {itemList.map((item => (
                    <Box id={`item_${item.id + 1}`} key={item.id} title={item.title} />
                )))}
            </div>
            <div className='ArrowContainer' onClick={isNextScrollable ? (event) => scrollTo(event, 'next') : null}>
                <a href={isNextScrollable ? `#item_${nextItem}` : null}>
                    <i className='arrow right'></i>
                </a>
            </div>
        </div>
    )
}
