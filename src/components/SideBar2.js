import React from 'react'
import { RadialBarChart, RadialBar,  ResponsiveContainer } from 'recharts';
import { Card } from 'antd';


function SideBar2() {

    const data = [
        {
          name: '18-24',
          uv: 31.47,
          pv: 2400,
          fill: '#8884d8',
        },
        {
          name: '25-29',
          uv: 26.69,
          pv: 4567,
          fill: '#83a6ed',
        },
        {
            name: 'unknow',
            uv: 6.67,
            pv: 4800,
            fill: '#fb7185',
          },
      ];
      
  return (
    <div >
      {/* <h1 className='font-mono text-xl ml-14'>Design Faster</h1> */}
      
      <Card className='w-60  ml-14 '  >
      <div className='h-32 '>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={7} data={data}>
          <RadialBar
            minAngle={15}
          
            background
            clockWise
            dataKey="uv"
          />

                   {/* Importing radial bar chart*/}
        </RadialBarChart>
      </ResponsiveContainer>
      </div>
    <p className='text-center text-indigo-900'>Total Earning</p>
    <p className='text-center text-indigo-900'>$12,875</p>
    <p className='text-xs text-center text-indigo-900'>Compared to $21,504 last year</p>
    <div className='flex'>
    <p className='mr-8 text-indigo-900'>Presentation </p>
    <p className='text-indigo-900 ml-1'>    862</p>
    </div>
    <div className='flex'>
    <p className='mr-8 text-indigo-900'>Development </p>
    <p className='text-indigo-900 '>    379</p>
    </div>
    <div className='flex'>
    <p className='mr-8 text-indigo-900'>Research</p>
    <p className='text-indigo-900 ml-7'>    862</p>
    </div>
  
  </Card>
  <Card className='bg-indigo-500 w-60 ml-14 text-white mt-5 mb-5'>
    <p >Total Earning</p>
    <p className='font-semibold text-xl '>$12,875</p>
    <p className='text-xs '>Compared to $12,875 last year</p>
    <p>Sales</p>
    <p  className='font-semibold text-xl '>$43,123</p>
    <p className='text-xs '>Compared to $21,490 last year</p>

  </Card>
  <Card className=' w-60 ml-14'>
  <div className='flex'>
    <p className='mr-8 text-indigo-900'>Travel </p>
    <p className='text-indigo-900 ml-10'>    784</p>
    </div>
    <div className='flex'>
    <p className='mr-8 text-indigo-900'>Presentation</p>
    <p className='text-indigo-900'>    862</p>
    </div>
    <div className='flex'>
    <p className='mr-8 text-indigo-900'>Business</p>
    <p className='text-indigo-900 ml-6'>    456</p>
    </div>
  </Card>
 
    </div>
  )
}



export default SideBar2

