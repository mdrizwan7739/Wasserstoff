import React from 'react'
import { FcBullish } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import { Progress, Space } from 'antd';


function SideBar() {

    return (
        <div className=' overflow-y-hidden'>
            <p className='font-medium ml-14 pb-16' >WSTF FRONT-END HACKATHON</p>
            <div className='ml-14 flex-col'>
                <div className='flex '>
                    <p className='font-semibold mr-5'>All user</p>
                    <p>Detail</p>

                </div>
                <p className='text-indigo-900 font-semibold text-4xl  pb-14'>2,431,340</p>
            </div>

            <div className='ml-14 flex mb-5'>
                <FcBullish className='h-12 w-12 ' />
                <div>
                    <p className='text-indigo-900 ml-4' >Total Earning</p>
                    <p className='text-indigo-900 ml-4 font-bold'>540,549</p>
                </div>
            </div>
            <div className='ml-14 flex  mb-5'>
                <FcShipped className='h-12 w-12 ' />
                <div>
                    <p className='text-indigo-900 ml-4'>Sales</p>
                    <p className='text-indigo-900 ml-4 font-bold'>1,205,677</p>
                </div>
            </div>
            <div className='ml-14 flex'>
                <FcBarChart className='h-12 w-12 ' />
                <div>
                    <p className='text-indigo-900 ml-4 font-sans'>Purchase</p>
                    <p className='text-indigo-900 ml-4 font-bold'>48,430,039</p>
                </div>
            </div>
            <div className='flex ml-14 mt-12 '>
                <div className='flex mr-8'>
                    <Space wrap>
                        <Progress type="circle" percent={27} size={50} />
                    </Space>
                    <div>
                        <p className='ml-4 text-indigo-900'>92,980</p>
                        <p className='ml-4 text-indigo-900'>Active Users</p>
                    </div>
                </div>
                <div className='flex'>
                    <Space wrap>
                        <Progress type="circle" percent={67} size={50} />
                    </Space>
                    <div>
                        <p className='ml-4 text-indigo-900'>22,652</p>
                        <p className='ml-4 text-indigo-900'>New Users</p>
                    </div>
                </div>
            </div>
           
        </div>

    )
}

export default SideBar
