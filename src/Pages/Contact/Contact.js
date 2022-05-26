import React from 'react';
import { MdLocationPin } from 'react-icons/md'
import { IoCall } from 'react-icons/io5'
import { SiMinutemailer } from 'react-icons/si'
const Contact = () => {
    return (
        <section className='flex flex-col md:flex-row items-center justify-between w-3/4 mx-auto'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">CONTACT INFO</h2>
                    <div className="divider"></div>
                    <div>
                        <p><MdLocationPin></MdLocationPin>Seventh Road. North-West - London.</p>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p><IoCall></IoCall>+96969696</p>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p><SiMinutemailer></SiMinutemailer>elite@domain.com</p>
                    </div>
                </div>
            </div>
            <div>
                <input type="text" placeholder="Name" class="input  block mb-2 input-bordered w-full max-w-xs" />
                <input type="text" placeholder="email" class="input  block mb-2 input-bordered w-full max-w-xs" />
                <input type="text" placeholder="subject" class="input  block mb-2 input-bordered w-full max-w-xs" />
                <textarea class="textarea textarea-bordered w-full max-w-xs block mb-2 " placeholder="Message"></textarea>
                <button className='btn btn-primary'>Send</button>
            </div>
        </section>
    );
};

export default Contact;