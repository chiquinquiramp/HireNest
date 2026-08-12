import { useState } from "react";

function FAQ () {
    const [openQuestion, setOpenQuestion] = useState(null);
    const faq = [
        {
            question: "How are providers verified?",
            answer:""
        },
        {
            question: "How does payment work?",
            answer:""
        },
        {
        question: "What happens if a provider doesn't show up?",
            answer:""
        }, 
        {
        question: "Can I see reviews and ratings?",
            answer:""
        },
        {
         question: "Can I get help from a real person?",
            answer:""
        },  
    ]

    return (
        <>
        {faq.map((question, index) => (
        <div key={index}>
            <button type="button"
            onClick={()=> setOpenQuestion(openQuestion === index ? null : index)}>
            {question.question}
            </button>
        {openQuestion === index && (<p>{question.answer}</p>)}
     </div>
    ))}
    </>
);
}
export default FAQ;