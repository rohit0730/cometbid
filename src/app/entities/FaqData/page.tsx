"use client";

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
    {
        question: "How do I update our address andor member representative and other contact information?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How do I edit our Membership Pages?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "Why can&#39t I see the changes I have made?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How do I promote my organization products and services?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How do I get involved in CSF Projects?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How do I get involved in CSF Projects?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How do I get involved in CSF Projects?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How do I get involved in CSF Projects?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    }
];

function FaqData() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <div className="wrapper">
                <div className="page-title-faq">
                    <h3>FAQs</h3>
                </div>

                <div className="card-section mt-20">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="faq-section">
                                <div className="">
                                    <div className="space-y-4">
                                        {faqs.map((faq, index) => (
                                            <div
                                                key={index}
                                                className="border rounded-lg shadow-sm"
                                            >
                                                <button
                                                    onClick={() => toggleFAQ(index)}
                                                    className="w-full flex justify-between items-center px-4 py-3 text-left bg-white hover:bg-gray-200"
                                                >
                                                    <span className="font-medium">{faq.question}</span>
                                                    {openIndex === index ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
                                                </button>
                                                {openIndex === index && (
                                                    <div className="px-4 py-3 text-gray-700 bg-white border-t">
                                                        {faq.answer}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FaqData;