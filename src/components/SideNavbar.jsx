import React from 'react'
import Frame2 from '../Images/DemoIcon.svg'
import settingIcon from '../Images/settingIcon.svg'
import hiddenImage from '../Images/image.jpg'
import searchIcon from '../Images/searchIcon.svg'

function SideNavbar() {
    return (
        <div className='w-[216px] h-[822px] py-[24px] pr-[12.5px] pl-[12px] border-[0.5px] border-[rgba(5,5,82,0.1)] bg-[#FAFAFA]'>
            <div className='w-[191.5px] h-[46px] pb-[22px]'>
                <h2 className='w-full h-[24px] font-inter text-[20px] font-[500] text-[#050552] leading-[24.2px]'>Consent Manager</h2>
            </div>
            <div className='w-[191.5px] h-[129px] pb-[15px]'>
                <button className="w-[191.5px] h-[36px] rounded-[5px] cursor-pointer border border-[rgba(5,5,82,0.08)] p-[12.5px] bg-[rgba(85,78,241,0.1)] flex items-center">
                    <div className='w-[61px] h-[20px] flex gap-[4px] items-center '>
                        <img src={Frame2} className='w-[20px] h-[20px]' alt="" />
                        <h3 className='w-[37px] h-[16px] font-inter text-[13px] leading-[15.73px] font-[500] text-[#554EF1]'>Demo</h3>
                    </div>
                   
                </button>
                <button className="w-[191.5px] h-[36px]  p-[12.5px]  flex items-center justify-between cursor-pointer">
                    <div className='w-[126px] h-[20px] flex gap-[4px] items-center'>
                        <img src={settingIcon} className='w-[20px] h-[20px]' alt="" />
                        <h3 className='w-[98px] h-[17px] font-inter text-[14px] leading-[16.94px] font-[400] text-[rgba(5,5,82,0.8)]'>Configurations</h3>
                    </div>
                    <div className='w-[16px] h-[16px]'><img src={hiddenImage} alt="" /></div>
                   
                </button>
                <button className="w-[191.5px] h-[36px]  p-[12.5px]  flex items-center justify-between cursor-pointer">
                    <div className='w-[71px] h-[20px] flex gap-[4px] items-center'>
                        <img src={searchIcon} className='w-[20px] h-[20px]' alt="" />
                        <h3 className='w-[98px] h-[17px] font-inter text-[14px] leading-[16.94px] font-[400] text-[rgba(5,5,82,0.8)]'>Search</h3>
                    </div>
                    <div className='w-[16px] h-[16px]'><img src={hiddenImage} alt="" /></div>
                   
                </button>
            </div>

        </div>
    )
}

export default SideNavbar
