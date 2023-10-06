'use client';

import Image from 'next/image';

import Title from '@/components/ui/title';
import Text from '@/components/ui/text';
import { NavRef } from '@/components/header';

import Container from '@/components/container';

import s from './instruction-block.module.scss';

import IMG1 from 'public/img/intstruction-block/step-1.svg';
import IMG2 from 'public/img/intstruction-block/step-2.svg';
import IMG3 from 'public/img/intstruction-block/step-3.svg';

export const startRef: NavRef = { current: null };

export default function InstructionBlock() {
    return (
        <section className={s.instructionBlock} ref={startRef}>
            <Container>
                <Title variant="h2" className={s.title}>
                    Quick start using <span className={s.titleSpan}>Crypto Pay</span>
                </Title>
                <div className={s.inner}>
                    <div className={s.item}>
                        <div className={s.itemContent}>
                            <div className={s.itemHeading}>
                                <div className={s.itemStep}>1</div>
                                <Title variant="h3">Authorizing your app</Title>
                            </div>
                            <div className={s.body}>
                                <ol className={s.list}>
                                    <li className={s.listItem}>
                                        <Text className={s.listText}>
                                            Open{' '}
                                            <a href="#" className={s.itemLink} target="_blank">
                                                @CryptoBot
                                            </a>
                                        </Text>
                                    </li>
                                    <li className={s.listItem}>
                                        <Text className={s.listText}>
                                            Go to{' '}
                                            <a href="#" className={s.itemLink} target="_blank">
                                                Crypto Pay
                                            </a>
                                        </Text>
                                    </li>
                                    <li className={s.listItem}>
                                        <Text className={s.listText}>
                                            Tap{' '}
                                            <a href="#" className={s.itemLink} target="_blank">
                                                Create App
                                            </a>
                                        </Text>
                                    </li>
                                    <li className={s.listItem}>
                                        <Text className={s.listText}>
                                            Get{' '}
                                            <a href="#" className={s.itemLink} target="_blank">
                                                API Token
                                            </a>
                                        </Text>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className={s.img}>
                            <Image src={IMG1} alt="img" />
                        </div>
                    </div>
                    <div className={`${s.item} ${s.itemReverse}`}>
                        <div className={s.itemContent}>
                            <div className={s.itemHeading}>
                                <div className={s.itemStep}>2</div>
                                <Title variant="h3">Crypto Pay API Request</Title>
                            </div>
                            <Text className={s.itemDescription} variant="base">
                                Requests are only served over HTTPS To pass parameters use:
                            </Text>
                            <div className={s.body}>
                                <ul className={s.list}>
                                    <li className={s.listItem}>
                                        <a href="#" className={s.itemLink} target="_blank">
                                            URL query string
                                        </a>
                                    </li>
                                    <li className={s.listItem}>
                                        <a href="#" className={s.itemLink} target="_blank">
                                            application/json
                                        </a>
                                    </li>
                                    <li className={s.listItem}>
                                        <a href="#" className={s.itemLink} target="_blank">
                                            application/x-www-form-urlencoded
                                        </a>
                                    </li>
                                    <li className={s.listItem}>
                                        <a href="#" className={s.itemLink} target="_blank">
                                            multipart/form-data
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.img}>
                            <Image src={IMG2} alt="img" />
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.itemContent}>
                            <div className={s.itemHeading}>
                                <div className={s.itemStep}>3</div>
                                <Title variant="h3">Getting updates</Title>
                            </div>
                            <Text className={s.itemDescription}>
                                There are two ways of receiving updates for your app:
                            </Text>
                            <div className={s.body}>
                                <ul className={s.list}>
                                    <li className={s.listItem}>
                                        <Text className={s.listText}>
                                            <a href="#" className={s.itemLink} target="_blank">
                                                getInvoices
                                            </a>{' '}
                                            method to get a list of created invoices.
                                        </Text>
                                    </li>
                                    <li className={s.listItem}>
                                        <Text className={s.listText}>
                                            <a href="#" className={s.itemLink} target="_blank">
                                                Webhooks
                                            </a>{' '}
                                            to receive updates in realtime.
                                        </Text>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.img}>
                            <Image src={IMG3} alt="img" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
