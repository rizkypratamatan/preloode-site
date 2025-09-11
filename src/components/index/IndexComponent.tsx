import useEmblaCarousel from "embla-carousel-react";
import Lottie from "lottie-react";
import {useCallback, useEffect, useState} from "react";
import {Link} from "react-router";
import Astronaut from "../../assets/json/astronaut.json";
import CpuProcessor from "../../assets/json/cpu-processor.json";
import SolarSystem from '../../assets/json/solar-system.json';


export default function IndexComponent() {
    const [emblaCarousel, emblaApi] = useEmblaCarousel({align: 'start'});
    const [emblaSelected, setEmblaSelected] = useState<number>(0);
    const [emblaScrollSnaps, setEmblaScrollSnaps] = useState<number[]>([]);

    const dotClick = (index: number) => {
        if(emblaApi) {
            emblaApi.scrollTo(index);
            setEmblaSelected(index);
        }
    }

    const onSelect = useCallback((emblaApi: any) => {
        setEmblaSelected(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if(emblaApi) {
            setEmblaScrollSnaps(emblaApi.scrollSnapList());
            emblaApi.on('select', onSelect);
        }
    }, [emblaApi, onSelect]);

    return (
        <>
            <section className="pt-[6.25rem] bg-dark-gradient overflow-hidden">
                <div className="container relative flex items-center py-16 text-white">
                    <Lottie className="absolute top-[50%] left-0" animationData={SolarSystem}/>
                    <div className="relative z-10 p-8 basis-2/3">
                        <h2 className="mb-5 leading-large-xl font-brand text-large-xl font-extrabold">Software
                            Development
                            Agency</h2>
                        <p className="my-[3.125rem] text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>
                        <Link className="block w-[10.625rem] mb-16 bg-blue rounded-lg leading-13 font-semibold text-center" to="/contact/">Get
                            in Touch</Link>
                        <div className="flex items-center ml-[-1.875rem]">
                            <div className="hero-customer">
                                <p>782K Customers</p>
                                <p>Loyality</p>
                            </div>
                            <div className="hero-separator"></div>
                            <div className="hero-customer">
                                <p>98% Satisfaction</p>
                                <p>Our Service</p>
                            </div>
                            <div className="hero-separator"></div>
                            <div className="hero-customer">
                                <p>4,862 Experts</p>
                                <p>Around the World</p>
                            </div>
                        </div>
                    </div>
                    <Lottie className="basis-1/3 absolute top-[10%] right-0" animationData={Astronaut}/>
                </div>
                <div className="h-[4.063rem] rotate-180">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path fill="white" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"></path>
                    </svg>
                </div>
            </section>
            <section className="container">
                <div className="flex justify-center items-center">
                    <Lottie className="basis-[3.25rem] h-[3.25rem]" animationData={CpuProcessor}/>
                    <h2 className="font-bold">Our Hero Team</h2>
                </div>
                <h3 className="mb-13 font-brand text-[3.125rem] font-extrabold text-center">Expert with Tons of
                    Experience</h3>
                <div className="flex gap-8 items-center">
                    <div className="basis-1/2 flex">
                        <div className="team-profile">
                            <img src="/resources/images/team-profile-1.jpg" alt="Rizky Pratama Picture"/>
                            <div className="bg-dark-transparent">
                                <div>
                                    <h3>Rizky Pratama</h3>
                                    <p>Fullstack Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-profile">
                            <img src="/resources/images/team-profile-2.jpg" alt="Cindy Nur Fajrin Picture"/>
                            <div className="bg-dark-transparent">
                                <div>
                                    <h3>Cindy Nur Fajrin</h3>
                                    <p>Frontend Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2 flex flex-col gap-9">
                        <p className="pl-6 border-l-2 border-white-dark">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="team-skill">
                            <h3>Web Development</h3>
                            <div className="percentage">
                                <div className="w-1/2"></div>
                                <p className="left-[50%]">50%</p>
                            </div>
                        </div>
                        <div className="team-skill">
                            <h3>Mobile & Desktop App Development</h3>
                            <div className="percentage">
                                <div className="w-1/2"></div>
                                <p className="left-[50%]">50%</p>
                            </div>
                        </div>
                        <div className="team-skill">
                            <h3>IOT Development</h3>
                            <div className="percentage">
                                <div className="w-1/2"></div>
                                <p className="left-[50%]">50%</p>
                            </div>
                        </div>
                        <div className="team-skill">
                            <h3>Network Development</h3>
                            <div className="percentage">
                                <div className="w-1/2"></div>
                                <p className="left-[50%]">50%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="embla py-28">
                    <div className="embla-viewport" ref={emblaCarousel}>
                        <div className="embla-container">
                            <div className="embla-slide">
                                <img src="/resources/images/logo-brand-dummy-1.png" alt="Partner Logo"/>
                            </div>
                            <div className="embla-slide experience">
                                <img src="/resources/images/logo-brand-dummy-2.png" alt="Partner Logo"/>
                            </div>
                            <div className="embla-slide experience">
                                <img src="/resources/images/logo-brand-dummy-3.png" alt="Partner Logo"/>
                            </div>
                            <div className="embla-slide experience">
                                <img src="/resources/images/logo-brand-dummy-4.png" alt="Partner Logo"/>
                            </div>
                            <div className="embla-slide">
                                <img src="/resources/images/logo-brand-dummy-1.png" alt="Partner Logo"/>
                            </div>
                            <div className="embla-slide experience">
                                <img src="/resources/images/logo-brand-dummy-2.png" alt="Partner Logo"/>
                            </div>
                            <div className="embla-slide experience">
                                <img src="/resources/images/logo-brand-dummy-3.png" alt="Partner Logo"/>
                            </div>
                            <div className="embla-slide experience">
                                <img src="/resources/images/logo-brand-dummy-4.png" alt="Partner Logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="embla-dots">
                        {emblaScrollSnaps.map((_, index) => (
                            <button key={index} className={index === emblaSelected ? 'selected' : ''} onClick={() => dotClick(index)}></button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}