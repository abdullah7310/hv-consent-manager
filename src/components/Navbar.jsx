import React from 'react'
import HVLogo from '../Images/hv_logo_horizontal 3.png'
import HomeLogo from '../Images/Frame (1).svg'
import Application from '../Images/Frame 1000004587.svg'
import Analytics from '../Images/Analytics.svg'
import Workflow from '../Images/Frame 1000004587 (1).svg'
import Devhub from '../Images/Dev_hub.svg'
import Account from '../Images/Account.svg'
import Frame from '../Images/Frame.svg'

function Navbar() {
    return (
        <div className=' w-[68px] h-[822px]  bg-[#000342] py-[20px] px-[4px] flex items-center justify-center'>
            <div className='w-[66px] h-[782px] flex flex-col items-center gap-[16px]'>
                <div className='h-[48px] w-[48px] flex items-center justify-center mb-[10px]'><img className='w-[28px] h-[31.11px]' src={HVLogo} alt="" /></div>
                <div className='w-auto max-w-[66px] h-auto max-h-[414px] flex flex-col items-center justify-center gap-[12px]'>
                    <div className='flex flex-col justify-center items-center gap-[2px]  h-auto max-h-[54px] w-auto max-w-[66px] py-[8px] px-[4px] rounded-[4px] cursor-pointer'>
                        <div className='w-[24px] h-[24px] '><img src={HomeLogo} alt="" /></div>
                        <div className='w-[29px] h-[12px]'><h3 className='text-[#B2B3CA] text-center  text-[10px] font-inter font-[500] leading-[12.1px] tracking-0'>Home</h3></div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[2px]  h-auto max-h-[46px] w-auto max-w-[66px] cursor-pointer'>
                        <div className='w-[32px] h-[32px] '><img className='w-full' src={Application} alt="" /></div>
                        <div className='w-[60px] h-[12px]'><h3 className='w-[60px] h-[12px] text-[#D9D9DD] text-center text-[10px] font-inter font-[500] leading-[12.1px] tracking-0'>Applications</h3></div>
                    </div>
                    <div className='flex flex-col  justify-center gap-[2px] items-center h-auto max-h-[46px] w-auto max-w-[66px] pt-[8px] pb-[8px] px-[4px] cursor-pointer'>
                        <div className='w-[32px] h-[32px] flex items-center justify-center'><img className='w-[24px] h-[24px]' src={Analytics} alt="" /></div>
                        <div className='w-[44px] h-[12px]'><h3 className='text-[#D9D9DD] text-center text-[10px] font-inter font-[500] leading-[12.1px]'>Anlaytics</h3></div>
                    </div>
                    <div className='flex flex-col justify-center gap-[2px] items-center h-auto max-h-[46px] w-auto max-w-[66px] pt-[8px] pb-[8px] px-[4px] cursor-pointer'>
                        <div className='w-[32px] h-[32px] flex items-center justify-center'><img className='w-[24px] h-[24px]' src={Workflow} alt="" /></div>
                        <div className='w-[51px] h-[12px]'><h3 className='text-[#D9D9DD] text-center text-[10px] font-inter font-[500] leading-[12.1px]'>Workflows</h3></div>
                    </div>
                    <div className='flex flex-col justify-center gap-[2px] items-center h-auto max-h-[46px] w-auto max-w-[66px] pt-[8px] pb-[8px] px-[4px] cursor-pointer'>
                        <div className='w-[32px] h-[32px] flex items-center justify-center'><img className='w-[24px] h-[24px]' src={Devhub} alt="" /></div>
                        <div className='w-[41px] h-[12px]'><h3 className='text-[#D9D9DD] text-center text-[10px] font-inter font-[500] leading-[12.1px]'>Dev Hub</h3></div>
                    </div>
                    <div className='flex flex-col justify-center gap-[2px] items-center h-auto max-h-[46px] w-auto max-w-[66px] pt-[8px] pb-[8px] px-[4px] cursor-pointer'>
                        <div className='w-[32px] h-[32px] flex items-center justify-center'><img className='w-[24px] h-[24px]' src={Account} alt="" /></div>
                        <div className='w-[40px] h-[12px]'><h3 className='text-[#D9D9DD] text-center text-[10px] font-inter font-[500] leading-[12.1px]'>Account</h3></div>
                    </div>
                    <div className='flex flex-col justify-center gap-[2px] items-center h-auto max-h-[58px] w-auto max-w-[66px] pt-[8px] pb-[8px] px-[4px] cursor-pointer'>
                        <div className='w-[32px] h-[32px]  flex items-center justify-center bg-[rgba(255,255,255,0.2)] rounded-[4.8px]'><img className='w-[24px] h-[24px]' src={Frame} alt="" /></div>
                        <div className='w-[66px] h-[24px]'><h3 className='text-[#D9D9DD] text-center text-[10px] font-inter font-[500] leading-[12.1px]'>Consent Manager</h3></div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar
