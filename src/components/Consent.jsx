import React from 'react'
import HyperVerge from '../Images/hyperVerge.svg'
import AngelOne from '../Images/AngelOne.svg'
import BlueTick from '../Images/BlueTick.svg'
import { useNavigate } from 'react-router-dom'

function Consent() {

    const navigate = useNavigate()
    return (
        <div className='w-[1157px] h-[822px] relative'>
            <div className='w-[567px] h-[696px] absolute top-[64px] flex flex-col items-center left-[295px] gap-[24px]'>
                <div className='w-[567px] h-[651px] rounded-[8px] border-b-[1px] bg-white border-[#E6E6E6] shadow-[0px_8px_16px_rgba(0,0,0,0.12),_0px_0px_2px_rgba(0,0,0,0.12)]'>
                    <div className='w-[567px]  h-[96px] rounded-t-[8px] border-b-[1px] py-[24px] px-[32px] flex gap-[20px] bg-[rgba(255,255,255,0.03)] border-[rgba(5,5,82,0.1)]'>
                        <div className='w-[88.8px] h-[48px] relative rotate-[-180deg]'>
                            <img className='w-[48px] h-[48px] rounded-[75px] border-[0.75px] border-[rgba(5,5,2,0.1)] rotate-[180deg] ' src={AngelOne} alt="" />
                            <div className='w-[48px] h-[48px] absolute top-0 left-[38px] rounded-[75px] border-[0.75px] rotate-[180deg]  bg-[rgba(255,255,255,1)] border-[rgba(5,5,82,0.1)] '>
                                <img className='w-[35.25px] h-[35.25px] absolute top-[6px] left-[6.38px]' src={HyperVerge} alt="" />
                            </div>


                        </div>
                        <div className='w-[394.2px] h-[46px] flex flex-col gap-[4px]'>
                            <h3 className='w-[163px] h-[21px] font-inter leading-[21px] tracking-[-0.002em] text-[16px] text-[rgba(5,5,82,0.8)] font-[600]'>Johndoe@gmail.com</h3>
                            <h4 className='w-[111px] h-[21px] font-inter font-[400] text-[14px] leading-[21px] tracking-[-0.4px] text-[rgba(5,5,82,0.6)]'>{"<Policy Version>"}</h4>
                        </div>
                    </div>
                    <div className='w-[567px] h-[409px] py-[24px] px-[32px] flex  justify-center gap-[33px]'>
                        <div className='w-[495px] h-[210px] flex flex-col items-center justify-center gap-[36px]'>
                            <div className='w-[495px] h-[87px] flex flex-col gap-[12px]'>
                                <h3 className='w-[487px] h-[21px] font-inter font-[500] text-[16px] leading-[21px] tracking-[-0.4px] text-[rgba(5,5,82,0.8)]'>The following details will be collected from you by {'<XYZ_name>'}</h3>
                                <div className='w-[495px] h-[54px] px-[2px] flex flex-col gap-[12px]'>
                                    <div className='w-[491px] h-[21px]  flex items-center gap-[10px]'>
                                        <div className='w-[16px] h-[16px] flex items-center justify-center gap-[10px] bg-[rgba(255,255,255,1)]'>
                                        <input type="checkbox" className='w-full h-full cursor-pointer' defaultChecked/>
                                        </div>
                                        <h3 className='w-[465px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.0028em] text-[rgba(5,5,82,0.6)]'>
                                            Facial scan
                                        </h3>
                                    </div>
                                    <div className='w-[491px] h-[21px]  flex items-center gap-[10px]'>
                                        <div className='w-[16px] h-[16px] flex items-center justify-center gap-[10px] bg-[rgba(255,255,255,1)]'>
                                           
                                            <input type="checkbox" className='w-full h-full cursor-pointer' defaultChecked />
                                        </div>
                                        <h3 className='w-[465px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.0028em] text-[rgba(5,5,82,0.6)]'>
                                            Location access
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[495px] h-[87px] flex flex-col items-center justify-center gap-[12px]'>
                                <h3 className='w-[495px] h-[21px] gap-[10px] font-inter font-[500] text-[16px] leading-[21px] tracking-[-0.002em] text-[rgba(5,5,82,0.8)]'>
                                    Purpose
                                </h3>
                                <h3 className='w-[495px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.002em] text-[rgba(5,5,82,0.6)]'>
                                    Fraud prevention and compliance checks
                                </h3>
                                <h3 className='w-[495px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.002em] text-[rgba(5,5,82,0.6)]'>
                                    Fraud prevention and compliance checks
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-[567px] h-[146px] border-t-[1px] py-[24px] px-[32px] flex flex-col gap-[20px] border-[rgba(5,5,82,0.1)]'>
                        <h3 className='w-[503px] h-[42px] font-roboto font-[400] text-[14px] leading-[21px] tracking-[-0.002em] text-[rgba(65,65,65,1)]'>By clicking Allow, you allow the app to use your information in accordance to their respective <span className='text-[rgba(124,58,237,1)] font-roboto font-[400] text-[14px] leading-[21px] tracking-[-0.4px] cursor-pointer'>terms of serve</span> and <span className='text-[rgba(124,58,237,1)] font-roboto font-[400] text-[14px] leading-[21px] tracking-[-0.4px] cursor-pointer'>privacy policies</span>.</h3>
                        <div className='w-[503px] h-[36px] flex items-center justify-center gap-[12px]'>
                            <button onClick={()=>navigate('/')} className='w-[245.5px] h-[36px] cursor-pointer min-w-[64px] rounded-[6px] border-[1px] py-[11.5px] px-[16px] flex items-center justify-center gap-[4px] bg-white border-[rgba(217,219,221,1)]'>
                                <h3 className='w-[213.5px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.4px] text-center text-[rgba(68,68,68,1)]'>Deny</h3>
                            </button>
                            <button onClick={()=>navigate('/token')} className='w-[245.5px] h-[36px] cursor-pointer min-w-[64px] rounded-[6px] border-[1px] py-[11.5px] px-[16px] flex items-center justify-center gap-[4px] bg-[rgba(85,78,241,1)] border-[rgba(217,219,221,1)]'>
                                <h3 className='w-[213.5px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.4px] text-center text-[rgba(255,255,255,1)]'>Allow</h3>
                            </button>
                        </div>
                    </div>

                </div>
                <h3 className='w-[105px] h-[21px] font-inter font-[400] text-[12px] leading-[21px] tracking-[-0.4px] text-center text-[rgba(5,5,82,0.6)]'>
                    SDK Version {'<VX>'}
                </h3>
            </div>
        </div>
    )
}

export default Consent
