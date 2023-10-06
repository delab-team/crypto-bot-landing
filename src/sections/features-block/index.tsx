'use client';

import { useTheme } from 'next-themes';

import Container from '@/components/container';
import FeaturesCurrencies from '@/components/features-currencies';
import Title from '@/components/ui/title';
import Text from '@/components/ui/text';
import { NavRef } from '@/components/header';

import s from './features-block.module.scss';

export const featuresRef: NavRef = { current: null };

export default function FeaturesBlock() {
    const { theme } = useTheme();

    return (
        <section className={s.features} ref={featuresRef}>
            <Container>
                <FeaturesCurrencies />
                <div className={s.featuresTopInner}>
                    <div className={s.featuresTop}>
                        <div className={s.start}>
                            <div className={s.startVideo}>
                                {theme === 'light' ? (
                                    <video key="light" playsInline autoPlay loop muted>
                                        <source src={'/videos/start.mp4'} type="video/mp4" />
                                    </video>
                                ) : (
                                    <video key="dark" playsInline autoPlay loop muted>
                                        <source src={'/videos/start-dark.mp4'} type="video/mp4" />
                                    </video>
                                )}
                            </div>
                            <Title variant="h3" className={s.startTitle}>
                                One click to start
                            </Title>
                            <Text className={s.text}>
                                Open{' '}
                                <a href="#" className={s.link}>
                                    @CryptoBot
                                </a>
                                , go to{' '}
                                <a href="#" className={s.link}>
                                    Crypto Pay
                                </a>{' '}
                                and tap Create App to get API Token
                            </Text>
                        </div>
                        <div className={s.exchange}>
                            <div className={s.exchangeVideo}>
                                {theme === 'light' ? (
                                    <video key="light" playsInline autoPlay loop muted>
                                        <source src={'/videos/exchange.mp4'} type="video/mp4" />
                                    </video>
                                ) : (
                                    <video key="dark" playsInline autoPlay loop muted>
                                        <source
                                            src={'/videos/exchange-dark.mp4'}
                                            type="video/mp4"
                                        />
                                    </video>
                                )}
                            </div>
                            <Title variant="h3" className={s.exchangeTitle}>
                                Real-time exchange rates
                            </Title>
                            <Text className={s.text}>
                                Request up to date currency rate with the{' '}
                                <a href="#" className={s.link}>
                                    getExchangeRates
                                </a>{' '}
                                API method
                            </Text>
                        </div>
                    </div>
                    <div className={s.stats}>
                        <div className={s.statsVideo}>
                            <video playsInline autoPlay loop muted>
                                <source src={'/videos/stats.mp4'} type="video/mp4" />
                            </video>
                        </div>
                        <Title variant="h3" className={s.statsTitle}>
                            Payment statistics
                        </Title>
                        <Text className={s.text}>
                            Open{' '}
                            <a href="#" className={s.link}>
                                @CryptoBot
                            </a>
                            , go to Crypto Pay and{' '}
                            <a href="#" className={s.link}>
                                My Apps
                            </a>
                            , App Name to get Statistics
                        </Text>
                    </div>
                </div>
                <div className={s.featuresBottom}>
                    <div className={s.commission}>
                        <div className={s.commissionVideo}>
                            {theme === 'light' ? (
                                <video key="light" playsInline autoPlay loop muted>
                                    <source src={'/videos/send.mp4'} type="video/mp4" />
                                </video>
                            ) : (
                                <video key="dark" playsInline autoPlay loop muted>
                                    <source src={'/videos/send-black.mp4'} type="video/mp4" />
                                </video>
                            )}
                        </div>
                        <Title variant="h3" className={s.commissionTitle}>
                            Send coins to users
                        </Title>
                        <Text className={s.text}>
                            Automate payouts to users with{' '}
                            <a href="#" className={s.link}>
                                transfer
                            </a>{' '}
                            API method
                        </Text>
                    </div>
                    <div className={s.payments}>
                        <div className={s.paymentsVideo}>
                            <video playsInline autoPlay loop muted>
                                <source src={'/videos/payments.mp4'} type="video/mp4" />
                            </video>
                        </div>
                        <Title variant="h3" className={s.paymentsTitle}>
                            Anonymous payments
                        </Title>
                        <Text className={s.text}>
                            Use allow_anonymous parameter in <a href="#">createInvoice</a> method to
                            give user an option to remain private
                        </Text>
                    </div>
                </div>
            </Container>
        </section>
    );
}
