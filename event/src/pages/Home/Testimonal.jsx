import React from 'react';
import "./testtimonal.css";

const Testimonial = () => {
    const testimonialData = [
        {
            name: "Vinay Gone",
            username: "@gonevinay",
            rating: 4,
            comment: "I can still feel the energy buzzing from yesterday's event. What a wonderful success it was and that is in great part due to you! I wanted to reach out to you, on behalf of the NEARC Board of Directors, to say thank you. Thank you for all that you did to make this Spring Virtual Conference run so smoothly. We could not do it without you and the whole FUSION Crew!"
        },
        {
            name: "Shrushti Shetty",
            username: "@sheetyshrushti",
            rating: 5,
            comment: "Aditya, Harsh, and the team were excellent to work with. Professional, friendly, and technically very knowledgeable. I wouldn't hesitate to work with them again. Thank you for helping us with our event!"
        },
        {
            name: "Om Gupta",
            username: "@OmGupta",
            rating: 4,
            comment: "Great - reliable service, highly recommend."
        },
        {
            name: "Neha Jagtap",
            username: "@jagtapNeha",
            rating: 4,
            comment: "Great from start to finish!"
        }
    ];

    return (
        <div className="py-5">
            <div className="flex justify-center gap-2 pb-10">
                <p className="text-secondary-50 text-6xl font-semibold">CLIENT'S</p>
                <p className="text-primary-50 text-6xl font-semibold">COMMENTS</p>
            </div>
            <section id="testimonials">
                <div className="testimonial-box-container">
                    {testimonialData.map((testimonial, index) => (
                        <div className="testimonial-box" key={index}>
                            <div className="box-top">
                                <div className="profile">
                                    <div className="profile-img"></div>
                                    <div className="name-user">
                                        <strong>{testimonial.name}</strong>
                                        <span>{testimonial.username}</span>
                                    </div>
                                </div>
                                <div className="reviews">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <i key={i} className={i < testimonial.rating ? "fas fa-star" : "far fa-star"}></i>
                                    ))}
                                </div>
                            </div>
                            <div className="client-comment">
                                <p>{testimonial.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
