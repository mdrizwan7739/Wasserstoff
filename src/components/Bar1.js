import React from 'react'
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Java',
        fee: 4000,
        count: 1,
        sales: 25

    },
    {
        count: 2,
        name: 'PHP',
        fee: 3000,
        sales: 10

    },
    {
        count: 3,
        name: 'Python',
        fee: 2000,
        sales: 15

    },
    {
        count: 4,
        name: 'Django',
        fee: 2780,
        sales: 5

    },
    {
        count: 5,
        name: 'React',
        fee: 1890,
        sales: 10
    },
    {
        count: 6,
        name: 'React',
        fee: 1890,
        sales: 15
    },
    {
        count: 7,
        name: 'React',
        fee: 1890,
        sales: 35
    },
    {
        count: 8,
        name: 'React',
        fee: 1890,
        sales: 15
    },
    {
        count: 9,
        name: 'React',
        fee: 1890,
        sales: 25
    },
    {
        count: 10,
        name: 'React',
        fee: 1890,
        sales: 35
    },
    {
        count: 11,
        name: 'React',
        fee: 1890,
        sales: 25
    },
    {
        count: 12,
        name: 'React',
        fee: 1890,
        sales: 15
    },


];
function Bar1() {
    return (
       
            <div className='h-20  mb-5 flex mx-14  bg-white rounded-md'>
                <div className='mt-2 mx-4'>
                    <p className='text-indigo-900'>Sales Figures</p>
                    <p className='text-indigo-900 font-bold'>$10,430</p>
                </div>
                <ResponsiveContainer width="15%" height="70%">
                    <BarChart width={20} height={50} data={data}>


                        <Bar dataKey="sales" fill="#a8a29e" />
                    {/*Importing Bar chart */}
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="15%" height="70%">
                    <BarChart width={20} height={50} data={data}>


                        <Bar dataKey="sales" fill="#f87171" />
                        {/*Importing Bar chart */}
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="15%" height="70%">
                    <BarChart width={20} height={50} data={data}>
                        <Bar dataKey="sales" fill="#a8a29e" />
                             {/*Importing Bar chart */}
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="15%" height="70%">
                    <BarChart width={20} height={50} data={data}>
                        <Bar dataKey="sales" fill="#a8a29e" />
                     {/*Importing Bar chart */}
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="15%" height="70%">
                    <BarChart width={20} height={50} data={data}>
                        <Bar dataKey="sales" fill="#a8a29e" />
                    {/*Importing Bar chart */}
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="15%" height="70%">
                    <BarChart width={20} height={50} data={data}>
                        <Bar dataKey="sales" fill="#a8a29e" />
                        {/*Importing Bar chart */}
                    </BarChart>
                </ResponsiveContainer>
           
        </div>
    )
}

export default Bar1
