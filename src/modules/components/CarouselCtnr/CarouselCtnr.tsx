
import React, { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    // CarouselCaption
} from 'reactstrap';

import photo1 from 'assets/images/photo_3.webp';
import photo2 from 'assets/images/photo_4.webp';
import photo3 from 'assets/images/photo_5.webp';
// import styles from './CarouselCtnr.module.scss';

interface CarouselCtnrProps {
}


const items = [
    {
        src: `${photo2}`,
        altText: 'Slide 1',
        caption: 'Music, dance and much more'
    },
    {
        src: `${photo1}`,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: `${photo3}`,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];


const CarouselCtnr: React.FC<CarouselCtnrProps> = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                {/* <CarouselCaption captionText={item.caption}  /> */}
            </CarouselItem>
        );
    });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        );
}

export default CarouselCtnr;