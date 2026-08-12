'use client'

import { useState } from "react";

export default function PopUp(props : {className: string}) {
    const [isPopupOpen, setPopupOpen] = useState(false);

    return (
        <>
      <div className={props.className}>
        <button
        type="button"
          onClick={() => setPopupOpen(true)}
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
                Lisää vastaus serveriltä
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