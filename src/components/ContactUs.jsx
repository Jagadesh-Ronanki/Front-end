import React from 'react';
import svg1 from '../assets/svg1.jsx';
import svg2 from '../assets/svg2.jsx';

const ContactUs = () => {
  return (
  <section className="bg-[#07001B] px-40 py-20 lg:py-[120px] overflow-hidden relative" id='contact'>
    <div className="container text-white">
        <div className="flex flex-wrap lg:justify-between -mx-4">
          <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <span className="block mb-4 text-base text-primary font-semibold">
                Contact Us
                </span>
                <h2
                    className="
                    text-dark
                    mb-6
                    uppercase
                    font-bold
                    text-[32px]
                    sm:text-[40px]
                    lg:text-[36px]
                    xl:text-[40px]
                    "
                    >
                    GET IN TOUCH WITH US
                </h2>
                <p className="text-base text-body-color leading-relaxed mb-9">
                    We will contact you asap :) 
                </p>
              </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
              <div className="bg-[#262A55] text-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form>
                  <div className="mb-6">
                    <input type="text" placeholder="Your Name" className="w-full rounded py-3 px-[14px] bg-[#07001B] focus:border-primary focus-visible:shadow-none"/>
                  </div>
                  <div className="mb-6">
                    <input type="email" placeholder="Your Email" className="w-full rounded py-3 px-[14px] bg-[#07001B] focus:border-primary focus-visible:shadow-none"/>
                  </div>
                  <div className="mb-6">
                    <input type="text" placeholder="Your Phone" className="w-full rounded py-3 px-[14px] bg-[#07001B] focus:border-primary focus-visible:shadow-none"/>
                  </div>
                  <div className="mb-6">
                    <textarea rows="6" placeholder="Your Message" className="w-full rounded py-3 px-[14px] bg-[#07001B] focus:border-primary focus-visible:shadow-none"></textarea>
                  </div>
                  <div className='flex justify-center'>
                    <button
                      type="submit"
                      className="w-[12rem] text-yellow-400 bg-[#07001B] border-2 border-yellow-400 rounded-[10px] p-3 hover:bg-yellow-400 hover:text-black" >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    {svg1}
                  </span>
                  <span className="absolute -left-7 -bottom-7 z-[-1]">
                    {svg2}
                  </span>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
  )
}

export default ContactUs