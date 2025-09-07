import Lottie from "lottie-react";
import {Link} from "react-router";
import Astronaut from "../../assets/json/astronaut.json";
import SolarSystem from '../../assets/json/solar-system.json';


export default function IndexComponent() {
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
        </>
    );
}