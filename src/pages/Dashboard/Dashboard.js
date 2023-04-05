import React from 'react'
import SideBar2 from '../../components/SideBar2'
import { SyncOutlined,PlusOutlined ,MinusOutlined,PullRequestOutlined,BranchesOutlined ,InfoCircleOutlined} from '@ant-design/icons';
import { FloatButton } from 'antd';
import DemoScatter from '../../components/DemoScatter';



function Dashboard() {
  return (

    
    <div className='flex'>
      <SideBar2 />
       <div className='w-4/5 bg-slate-100 rounded-l-3xl ml-5'>
       

        <div className='flex bg-white w-fit mt-10  ml-[550px] absolute rounded-xl'>
        
          <button className='ml-3 text-sm'>1W</button>
          <button className='ml-3 text-sm'>1M</button>
          <button className='ml-3 text-sm'>3M</button>
          <button className='ml-3 text-sm'>1Y</button>
          <button className='mr-3 ml-3 text-sm'>ALL</button>
        </div>
        <div className='w-[500px] h-[500px] bg-white rounded-full mt-16 ml-96 absolute'>
          <div className='w-[450px] h-[450px] bg-slate-100 rounded-full m-6  relative'>
            <div className='bg-white rounded-full w-[350px] h-[350px] m-12 absolute'>
              <div className='w-96'>
       {/* Importing bubble chart */}
         <DemoScatter   /> 
         </div> </div>
          </div>
        </div>
        <div className='flex mt-[590px] ml-[450px]'>
          <div>
          <p className='text-indigo-900 text-xs text-center'>Trend Goods</p>
          <p className='text-indigo-900 text-5xl text-center'>204</p>
          </div>
          <div className='ml-10'>
            <p className='text-indigo-900 text-xs text-center'>Shopping Views</p>
            <p className='text-indigo-900 text-5xl text-center'>65,540</p>
          </div>
          <div className='ml-10'>
            <p className='text-indigo-900 text-xs text-center'>Store Dynamics</p>
            <p className='text-indigo-900 text-5xl text-center'>324</p>
          </div>

        </div>
      </div>
    
    <FloatButton.Group shape="square" style={{   right: 90,bottom:400, }} >
     <FloatButton icon={<PlusOutlined /> } />
      <FloatButton icon={<MinusOutlined />} />
      
    </FloatButton.Group>
    <FloatButton.Group shape="square" style={{   right: 90,bottom:340, }} >
     <FloatButton icon={<InfoCircleOutlined /> } />      
    </FloatButton.Group>

    <FloatButton.Group shape="square" style={{   right: 90, bottom:200, }} >
     <FloatButton icon={<BranchesOutlined />} />
      <FloatButton icon={<SyncOutlined />} />
      <FloatButton icon={<PullRequestOutlined />} />
    </FloatButton.Group>
    </div>
  )
}

export default Dashboard
