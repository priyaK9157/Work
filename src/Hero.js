import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdForwardToInbox } from "react-icons/md";
import { IoContrast } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { FaBatteryFull } from "react-icons/fa6";
import { GoAlertFill } from "react-icons/go";
import { GoGoal } from "react-icons/go";
import { GiTortoise } from "react-icons/gi";
import { MdKeyboardArrowUp } from "react-icons/md";

const Hero = () => {
  return (
    <div className='flex border border-gray-500 shadow-md bg-black text-white text-sm font-sans w-screen h-[47rem] pt-3'>
        <div className='flex flex-col border-r-2 border-gray-400 gap-8 w-[15%]'>
            <div  className=' ml-1 mt-2 border-b-2 pb-10'>
                <p className=' text-2xl font-semibold flex items-center justify-center'>KDISP</p>
                <p className='font-semibold flex items-center justify-center'>Indors & Architechture</p>
            </div>
            <div className='flex flex-col gap-3 p-4'>
                <p className='flex items-center gap-2 bg-white text-black rounded-xl px-5 p-2  -translate-x-7'>     <IoHomeOutline />Home</p>
                <p className='flex items-center gap-2 bg-yellow-500 py-2 px-5 text-white rounded-xl  -translate-x-7'><VscGraph />My Space<MdKeyboardArrowUp /></p>
                <div className='flex flex-col gap-3 text-md font-semibold'>
                    <p>Leave</p>
                    <p className='text-yellow-500'>Attendance</p>
                    <p>Performance</p>
                    <p>Expenses & Travel</p>
                    <p>Help Desk</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-4 mt-2 justify-around  w-screen ml-10'>
            <div className='flex items-center justify-center gap-4'>
            {/* Search Box */}
            <div className='flex justify-center relative bg-white rounded-md '>
                <input
                    className='px-40 py-5 focus:outline-none rounded-md flex justify-center  '
                    type='text'
                    placeholder='Search'
                    className='bg-black'
                />
            </div>

            {/* Icons */}
                 <div className='flex items-center gap-4  text-1xl'>
                    <IoIosNotificationsOutline className='text-gray-600 text-2xl border border-gray-400 rounded-md'/>
                    <MdForwardToInbox className='text-gray-600 text-2xl border border-gray-400 rounded-md' />
                    <IoContrast className='text-gray-600 text-2xl border border-gray-400 rounded-md' />
                    <FaRegUserCircle className='text-gray-600 text-2xl border border-gray-400 rounded-md' />
                </div>
            </div>

            <div className='flex text-2xl font-semibold'>
               <p className =' text-2xl font-semibold flex items-center'>My Space/</p><span className='text-yellow-500 flex items-center text-2xl font-semibold'>Attendance</span>
            </div>

            <div className='flex flex-col gap-4   '>
                <div className='border border-white w-10/12 gap-2 '>
                <div className='flex justify-between gap-5'>
                    <p className=' text-xl'>Attendance Status</p>
                    <p className=' text-xl -ml-72'>Timings</p>
                    <p className=' text-xl -ml-40'>Action</p>
                </div>
                <div className='flex justify-between gap-5 mt-3  w-8/12'>
                    <p className='flex items-center'>Last Week<IoIosArrowDown /></p>
                    <div className='flex gap-2'>
                    <div className='flex gap-2 -ml-64'>
                        <p className='border border-gray-400 rounded-full w-5 text-center text-sm'>M</p>
                        <p className='border border-gray-400 rounded-full w-5  text-center text-sm'>T</p>
                        <p className='border border-gray-400 rounded-full w-5 text-center text-sm text-yellow-500'>W</p>
                        <p className='border border-gray-400 rounded-full w-5 text-center text-sm'>T</p>
                        <p className='border border-gray-400 rounded-full w-5 text-center text-sm'>F</p>
                        <p className='border border-gray-400 rounded-full w-5 text-center text-sm'>F</p>
                        <p className='border border-gray-400 rounded-full w-5 text-center text-sm text-green-500'>S</p>
                        <p className='border border-gray-400 rounded-full w-5 text-center text-sm text-red-500'>S</p>
                    </div>
                    </div>
                </div>
                <div>
                    <div className='flex gap-3 mt-4'>
                        <div className='border shadow-3xl w-[35%] flex gap-5  p-2 border border-gray-400 '>
                           <div className='max-w-[40%]'>
                            <p className='flex items-center'><FaRegClock  className=' mr-2'/>Avg hrs/Day</p>
                                <p className=' text-md items-center ml-5'>(6 hrs 48m)</p>
                       
                           </div>
                           <div className='max-w-[40%]'>
                            <p  className='flex items-center'><IoIosTimer  className='p-0 text-green-400 mr-2'/>On Time Arrival</p>
                            <p className=' text-md items-center ml-12'>95%</p>
                            </div>
                        </div>
                        <div className='border shawdow-3xl p-2 w-[25%]'>
                            <p className='flex items-center justify-center'>Today(09:30AM - 06:30PM)</p>
                            <p className='flex items-center justify-center'>Duration: 9h 0m  Break:Om</p>
                        </div>
                        <div className='border shawdow-3xl p-2 w-[20%]'>
                            <p className='text-2xl flex items-center justify-center -mt-1'>04:04:39 PM</p>
                            <p className='flex items-center justify-center'>Wed 06, Dec 2023</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <button className='bg-yellow-500 text-black rounded-md px-2 p-1'>Leave Request</button>
                            <button className='bg-yellow-500 text-black rounded-md px-2 p-1'>Work From Home</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className=' font-semibold text-xl'>Logs & Request</div>
                    <div className=' flex '>
                      <button className='bg-yellow-500 border-r-2 border-white text-black rounded-md px-4 p-2'>Attendance Log</button>
                        <button className='border border-gray-400 px-2 p-2 rounded-md'>Attendance Request</button>
                    </div>
                    <div className=' mt-2 border-2 border-gray-400'>
                        <div className='flex justify-around p-1 border-2 border-gray-400'>
                            <p className=' flex items-center text-lg font-semibold '>December, 2023</p>
                            <div className='flex border border-gray-400 gap-3'>
                                <button className=' p-3 px-5 bg-yellow-500 '>30 Days</button>
                                <button className='p-3 px-5 border-r-2 border-gray-400 flex items-center'>Nov</button>
                                <button className='p-3 px-5 border-r-2 border-gray-400'>Oct</button>
                                <button  className='p-3 px-5 border-r-2 border-gray-400'>Sep</button>
                                <button  className='p-3 px-5 border-r-2 border-gray-400'>Aug</button>
                                <button  className='p-3 px-5 border-r-2 border-gray-400'>July</button>
                                <button  className='p-3 px-5 border-r-2 border-gray-400'>Jun</button>
                            </div>
                            <div className='flex border-2 border-gray-400 '>
                                <button className='bg-yellow-500 p-2 px-5'><FaBars /></button>
                                <button className='p-2 px-5'><CiCalendar /></button>
                            </div>
                        </div>
                        <div className=' w-12/13 gap-5  border border-gray-400 p-3 text-lg font-semibold flex justify-around'>
                            <p>Date</p>
                            <p>Attendance Visual</p>
                            <p>Effective Hours</p>
                            <p>Gross Hours</p>
                            <p>Extra Hours</p>
                            <p>Arrival</p>
                            <p>Log</p>
                        </div>
                        <div className=' w-12/13 gap-5  border border-gray-400 p-3 text-lg font-semibold flex justify-around'>
                            <p className='-ml-3'>Dec 04, Mon</p>
                            <p className='text-green-400  -translate-x-7'><FaBatteryFull /></p>
                            <p className='flex items-center translate-x-6 '><IoIosTimer className='text-green-400'/> 9h 15m</p>
                            <p className='flex items-center translate-x-6'>9h 59m</p>
                            <p className='translate-x-6'>0h 59m</p>
                            <p className='translate-x-6'>On Time</p>
                            <p className='flex items-center'><GoAlertFill /></p>
                        </div>
                        <div className=' w-12/13 gap-5  border border-gray-400 p-3 text-md font-semibold flex '>
                            <p className=' translate-x-10'>Dec 03, Sun<button className='bg-yellow-500 p-1 translate-x-3 rounded-lg'>W-OFF</button></p>
                            <p className=' translate-x-4 text-md font-semibold flex justify-center ml-[30%]'>Full day weekly-off</p>
                        </div>
                        <div className=' w-12/13 gap-5  border border-gray-400 p-3 text-lg font-semibold flex justify-around'>
                            <p  className='-ml-3'>Dec 02, Sat</p>
                            <p className='text-green-400  -translate-x-7'><FaBatteryFull className='text-green-400' /></p>
                            <p className='flex items-center translate-x-6 '><IoIosTimer className='text-green-400'/> 9h 15m</p>
                            <p  className='flex items-center translate-x-6'>9h 59m</p>
                            <p className='translate-x-6'>0h 59m</p>
                            <p  className='translate-x-6'>On Time</p>
                            <p className='flex items-center'><GoAlertFill /></p>
                        </div>
                        <div className=' w-12/13 gap-5  border border-gray-400 p-3 text-lg font-semibold flex justify-around'>
                            <p  className='-ml-3'>Dec 02, Sat</p>
                            <p className='text-green-400  -translate-x-7'><FaBatteryFull className='text-green-400' /></p>
                            <p className='flex items-center translate-x-6 '><IoIosTimer className='text-green-400'/> 9h 15m</p>
                            <p  className='flex items-center translate-x-6'>9h 59m</p>
                            <p className='translate-x-6'>0h 59m</p>
                            <p  className='translate-x-6'>On Time</p>
                            <p className='flex items-center'><GoAlertFill /></p>
                        </div>
                         <div className=' w-12/13 gap-5  border border-gray-400 p-3 text-lg font-semibold flex justify-around'>
                            <p  className='-ml-3'>Dec 02, Sat</p>
                            <p className='text-green-400  -translate-x-7'><FaBatteryFull className='text-green-400' /></p>
                            <p className='flex items-center translate-x-6 '><IoIosTimer className='text-green-400'/> 9h 15m</p>
                            <p  className='flex items-center translate-x-6'>9h 59m</p>
                            <p className='translate-x-6'>0h 59m</p>
                            <p  className='translate-x-6'>On Time</p>
                            <p className='flex items-center'><GoAlertFill /></p>
                        </div>
                        {/* <div className='flex gap-5'>
                            <p>Nov 29, Wed<button>Leave</button></p>
                            <p>Sick Leave</p>
                        </div> */}
                        
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Hero