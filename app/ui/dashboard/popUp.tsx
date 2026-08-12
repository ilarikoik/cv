'use client'

import { useState } from "react";

interface PopUpProps {
    className: string;
    message: string;
    setMessage: (message: string) => void;
    }

export default function PopUp(props: PopUpProps) {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const handleSubmit = async (teksti: string) => {
        try {
          const response = await fetch("/api/comments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: props.message }),
          });
          if (!response.ok) {
              throw new Error("Error ");
            }
        props.setMessage('');
        console.log(response.status);

        } catch (error) {
          console.error(error);
        }
      };
    

    return (
        <>
      <div className={props.className}>
        <button
        type="button"
          onClick={() => {handleSubmit(props.message),setPopupOpen(true)}}
          >
          Send Message
        </button>
        </div>
  
        {isPopupOpen && (
            <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setPopupOpen(false)}
            >
            <div
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-neutral-900"
              onClick={(e) => e.stopPropagation()}
              >
              <h2 className="text-xl font-bold">Thank you for message!</h2>
  
              <p className="mt-2 opacity-60">
                {`I will get back to you as soon as possible. If you don't hear from me within a week, please try again or reach out via email.`}
              </p>
  
              <button
                onClick={() => setPopupOpen(false)}
                className="mt-6 rounded-xl bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
                >
                Close
              </button>
            </div>
          </div>
        )}
        </>
    );
}