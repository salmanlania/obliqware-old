import React, {useEffect} from 'react';
// import img from '../images/web.svg';
// import img2 from '../images/app.svg';
// import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';
import webApp from "../images/services/WebApp-illustration.png"
import mobileApp from "../images/services/Mobile-App-illustration.png"
import artificialIntelligence from "../images/services/Ai-solutions-illustration.png"
import uiUxDesgining from "../images/services/ui-ux-illustration.png"
import graphicDesign from "../images/services/graphic-design-illustration.png"
import specializedOfferings from "../images/services/specialized-offerings-illustration.png"
import ServiceCard from './ServiceCard';

const Services = () => {

    const webDesc = 'Our team builds dynamic and responsive web applications that enhance user engagement and drive business success. From robust e-commerce platforms to efficient internal tools, we tailor each solution to meet your unique needs.';

    const mobileDesc = 'We create innovative, user-friendly mobile apps designed to help your business thrive in today’s fast-paced digital landscape. Whether it’s iOS or Android, our team delivers seamless and scalable solutions that bring your vision to life.';

    const aiDesc = 'Harness the power of AI with Obliqware. Our AI-driven solutions streamline processes, optimize decision-making, and unlock new opportunities for growth and efficiency, keeping your business ahead of the curve.';

    const uiUxDesgin = 'We design clean, user-friendly interfaces that make navigating your app or website a breeze. Our focus is on creating experiences that not only look great but also feel natural for users, ensuring they enjoy every interaction with your product.';
   
    const gdDesc = 'We provide creative and impactful graphic design services that resonate with your audience. From logos to marketing materials, our designs are crafted to communicate your brand’s story effectively.';

    const otherDesc = 'At Obliqware, we offer a range of services, from software consulting to system integration. Whatever your business challenge, we’re here to provide solutions that fit.';

    const cards = [
        {
            image: webApp,
            cardTitle: 'Web App Development',
            desc: webDesc,
        },
        {
            image: mobileApp,
            cardTitle: 'Mobile App Development',
            desc: mobileDesc,
        },
        {
            image: artificialIntelligence,
            cardTitle: 'Artificial Intelligence Solutions',
            desc: aiDesc,
        },
        {
            image: uiUxDesgining,
            cardTitle: 'UI/UX Design',
            desc: uiUxDesgin,
        },
        {
            image: graphicDesign,
            cardTitle: 'Graphic Design',
            desc: gdDesc,
        },
        {
            image: specializedOfferings,
            cardTitle: 'Specialized Offerings',
            desc: otherDesc,
        },
    ]

    useEffect(() => {
        document.title = 'Obliqware';
    }, []);

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>

                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        {
                            cards.map((card, index) => {
                                return (
                                    <ServiceCard
                                        key={index}
                                        image={card.image}
                                        title={card.cardTitle}
                                        description={card.desc}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 
                            font-bold">We <span className='font-black'>Build</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    With a keen understanding of the latest IT trends and solutions, we offer tailored recommendations and strategies to enhance your operations, reduce costs, and boost efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 font-bold">We <span className='font-black'>Collaborate</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We work alongside you to enhance your existing software or create custom applications that simplify your everyday processes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;