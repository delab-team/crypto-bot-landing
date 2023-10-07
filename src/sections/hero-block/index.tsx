'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import Title from '@/components/ui/title';
import Button from '@/components/ui/button';
import Text from '@/components/ui/text';
import Container from '@/components/container';

import { bots } from '@/mockup/hero';

import { useMediaQuery } from '@/hooks/use-media-query';

import s from './hero-block.module.scss';

import PHONE from 'public/img/hero-block/phone.svg';

export default function HeroBlock() {
    const isMobile = useMediaQuery(500);

    return (
        <motion.section className={s.heroBlock}>
            <Container>
                <motion.div
                    // initial={{ y: 20, opacity: 0 }}
                    // animate={{ y: 0, opacity: 1 }}
                    // transition={{ duration: 0.2, delay: 0.1 }}
                    className={s.heroBlockRow}
                >
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        className={s.heroBlockLeft}
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.3 }}
                        >
                            <Title className={s.heroBlockTitle} variant="h1">
                                Crypto payments for <span>telegram bots</span>
                            </Title>
                        </motion.div>
                        <Text className={s.heroBlockSubtitle} variant="base">
                            Seamlessly accept crypto payments in your Telegram bots and services.
                        </Text>
                        <Button variant="general">Get started</Button>
                        <div className={s.bots}>
                            <div className={s.botsList}>
                                {bots.map((bot, index) => (
                                    <motion.div
                                        key={bot.alt}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.2 }}
                                        className={s.botsListItem}
                                    >
                                        <Image src={bot.src} alt={bot.alt} />
                                    </motion.div>
                                ))}
                            </div>
                            <Text variant="base" className={s.info}>
                                Popular bots use Crypto Pay
                            </Text>
                        </div>
                    </motion.div>
                    {isMobile ? (
                        <div className={s.heroBlockRight}>
                            <Image src={PHONE} alt="iphone" />
                        </div>
                    ) : (
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                            className={s.heroBlockRight}
                        >
                            <Image src={PHONE} alt="iphone" />
                        </motion.div>
                    )}
                </motion.div>
            </Container>
        </motion.section>
    );
}
