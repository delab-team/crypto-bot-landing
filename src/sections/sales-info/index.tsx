'use client';

import Image from 'next/image';

import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import { v1 } from 'uuid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import Container from '@/components/container';
import Title from '@/components/ui/title';
import Text from '@/components/ui/text';
import Button from '@/components/ui/button';
import { NavRef } from '@/components/header';

import { useCasesArr } from '@/mockup/use-cases';

import { useMediaQuery } from '@/hooks/use-media-query';

import 'swiper/css';
import 'swiper/css/pagination';

import s from './sales-info.module.scss';

export const casesRef: NavRef = { current: null };

export default function SalesInfo() {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const totalSlides = useCasesArr.length;

    useEffect(() => {
        const pagination = document.querySelector('.swiper-pagination');
    
        if (pagination) {
            const activeSlideNumber = (activeIndex + 1).toString().padStart(2, '0');
            const totalSlidesNumber = totalSlides.toString().padStart(2, '0');
    
            const beforeStyle = document.createElement('style');
            beforeStyle.textContent = `
            .swiper-pagination::before {
              content: '${activeSlideNumber}';
            }
          `;
    
            const afterStyle = document.createElement('style');
            afterStyle.textContent = `
            .swiper-pagination::after {
              content: '${totalSlidesNumber}';
            }
          `;
    
            pagination.appendChild(beforeStyle);
            pagination.appendChild(afterStyle);
    
            return () => {
                pagination.removeChild(beforeStyle);
                pagination.removeChild(afterStyle);
            };
        }
    }, [activeIndex, totalSlides]);

    const isMobile = useMediaQuery(1024);

    return (
        <section className={s.useCasesSection} ref={casesRef}>
            <Container>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    onActiveIndexChange={(index) => setActiveIndex(index.activeIndex)}
                    className={s.useCasesSwiper}
                    direction={!isMobile ? 'vertical' : 'horizontal'}
                >
                    {useCasesArr.map((el) => (
                        <SwiperSlide className={s.useCasesItem} key={v1()}>
                            <div className={s.useCasesBlockImg}>
                                <Image src={el.img} alt="slider-image" />
                            </div>
                            <div>
                                <Title variant="h2" className={s.useCasesBlockTitle}>
                                    {el.title}
                                    <Text className={s.textBlue}>{el.subtitle}</Text>
                                </Title>
                                <Text className={s.useCasesBlockText}>{el.text}</Text>
                                <a href={el.link} className={s.useCasesBlockBtn}>
                                    <Button>Open API Docs</Button>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
}
