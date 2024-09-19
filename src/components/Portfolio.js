import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const pakBank = "Our Banking Chatbot Solutions provide a seamless and interactive customer service experience for one of Pakistan's leading banks. This conversational AI chatbot automates responses to common queries, enhancing user satisfaction and reducing wait times. With intuitive design and real-time capabilities, our solution ensures customers receive timely assistance anytime, anywhere.";
    const internTax = "The International Tax Chatbot is a sophisticated tool designed to simplify complex tax inquiries for users across the globe. This AI-driven assistant offers accurate, real-time responses, helping individuals and businesses navigate tax regulations with ease. Our solution not only enhances user experience but also streamlines tax-related communication for greater efficiency.";
    const automation = "Our Automation & Scraping Tools are designed to enhance business efficiency by automating data collection from platforms like Google Maps, email, WhatsApp, and LinkedIn. These advanced solutions enable businesses to gather insights quickly, reduce manual effort, and make informed decisions based on accurate data.";
    const foodDelivery = "The Food Delivery App is a practice project where we developed a clone of the popular Food Panda app to refine our skills. This application features user-friendly login and signup processes, comprehensive restaurant data management, and add-to-cart functionality, all built using React, Firebase, and Redux. It showcases our capability to create engaging and functional mobile applications.";

    const portfolioCards = [
        {
            cardTitle: 'Banking Chatbot Solutions',
            desc: pakBank,
        },
        {
            cardTitle: 'International Tax Chatbot',
            desc: internTax,
        },
        {
            cardTitle: 'Automation & Scraping Tools',
            desc: automation,
        },
        {
            cardTitle: 'Food Delivery App (Clone)',
            desc: foodDelivery,
        }
    ]

    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold" id='portfolio-id'>Portfolio</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            portfolioCards.map((card, index) => {
                                return (
                                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                                        <div className="m-2 text-justify text-sm">
                                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{card.cardTitle}</h4>
                                            <p className="text-md font-medium leading-5 h-auto md:h-48">{card.desc}</p>
                                            <div className="flex justify-center my-4">
                                                <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                                    Schedule Demo
                                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;