import React, { useState } from 'react'
import GreenTick from '../Images/GreenTick.svg'

function Token() {

    const [increaseDiv, setIncreaseDiv] = useState(false);

    return (
        <div className='w-[1156px] relative h-[822px] '>
            <div className={`w-[503px] ${increaseDiv ? "h-[745px]" : "h-[156px]"} absolute top-[40px] left-[327px] rounded-[8px] bg-white border-[#E6E6E6] border 
                ${increaseDiv ? "shadow-[0px_8px_16px_rgba(0,0,0,0.12),_0px_0px_2px_rgba(0,0,0,0.12)]" : "shadow-md"} flex flex-col`}>
                <div className='w-[503px]  min-h-[156px] h-auto p-[32px] flex flex-col items-center justify-center gap-[20px] '>
                    <div className='w-[439px] h-[36px] flex items-center justify-between gap-[32px] border-green-400'>
                        <div className='w-[39px] h-[21px] px-[2px] flex items-center justify-center'>
                            <h3 className='w-[35px] h-[21px] font-inter font-[500] text-[12px] leading-[21px] tracking-[-0.4px] text-center text-[rgba(5,5,82,0.6)]'>Token</h3>
                        </div>
                        <div className='w-[344px] h-[36px] rounded-[6px] border-[1px] py-[5.5px] px-[12px] flex items-center gap-[12px] bg-white border-[#D9DBDD]'>
                            {/* <h3 className='w-[320px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[#333333]'>{'<Token Value>'}</h3> */}
                            <input type="text" className='w-[320px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[#333333] outline-none' placeholder={'<Token Value>'} />
                        </div>
                    </div>
                    <div className='w-[439px] h-[36px] flex items-center gap-[12px]'>
                        <button onClick={() => setIncreaseDiv(!increaseDiv)} className='w-[439px] h-[36px] min-w-[64px] rounded-[6px] py-[11.5px] px-[16px] flex items-center justify-center gap-[4px] hover:bg-blue-700 bg-[#554EF1]'>
                            <h3 className='w-[407px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.4px] text-center text-white cursor-pointer '>Validate Token</h3>
                        </button>
                    </div>

                </div>
                {increaseDiv && <div className="w-full h-[1px] bg-[rgba(5,5,82,0.1)]"></div>}

                {increaseDiv && (
                    <div className="w-full overflow-auto p-[32px] grid grid-cols-1 gap-[36px] h-[1394px]  custom-scrollbar">
                        <div className='w-[full] h-[32px] flex items-center justify-between'>
                            <h3 className='w-[105px] h-[21px] font-inter font-[600] text-[14px] leading-[21px] tracking-[-0.28px] text-center text-[rgba(5,5,82,0.8)]'>Consent Status</h3>
                            <div className='w-[102px] h-[32px] rounded-[6px] border-[1px] py-[6px] pr-[12px] pl-[8px] gap-[10px] bg-[rgba(240,250,245,1)] border-[rgba(0,102,68,1)]'>
                                    <div className='w-[82px] h-[20px] flex gap-[2px]'>
                                        <div className='w-[20px] h-[20px] '>
                                            <img src={GreenTick} alt="" />
                                            
                                        </div>
                                        <h3 className='font-inter font-[500] text-[13px] leading-[20px] tracking-[0px] text-[rgba(0,102,68,1)] cursor-pointer'>Accepted</h3>
                                    </div>
                            </div>
                        </div>
                        <div className='w-[439px] h-[381px] flex flex-col gap-[20px]'>
                            <h3 className='w-[108px] h-[21px] font-inter font-[600] text-[14px] leading-[21px] tracking-[-0.4px] text-center text-[rgba(5,5,82,0.8)]'>Consent Details</h3>
                            <div className='w-[439px] h-[340px] flex flex-col items-center gap-[20px]'>
                                <div className='w-[439px] h-[340px] flex flex-col items-center gap-[16px]'>
                                    <div className='w-[439px] h-[42px] flex justify-between'>
                                        <h3 className='w-[190px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.6)]'>Device ID</h3>
                                        <h3 className='w-[249px] h-[42px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.8)]'>b9f8e2d4-9c3a-4571-ae84-3c9df20297a1</h3>

                                    </div>
                                    <div className='w-[439px] h-[63px] flex justify-between'>
                                        <h3 className='w-[190px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.6)]'>hashedUserId</h3>
                                        <h3 className='w-[249px] h-[42px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.8)] break-words'>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</h3>

                                    </div>
                                    <div className='w-[439px] h-[21px] flex items-center justify-between'>
                                        <h3 className='w-[190px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.6)]'>timestamp</h3>
                                        <h3 className='w-[249px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.8)]'>2024-06-12T14:35:22Z</h3>

                                    </div>
                                    <div className='w-[439px] h-[21px] flex items-center justify-between'>
                                        <h3 className='w-[190px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.6)]'>ipAddress</h3>
                                        <h3 className='w-[249px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.8)]'>192.168.1.15</h3>

                                    </div>
                                    <div className='w-[439px] h-[21px]  flex items-center justify-between'>
                                        <h3 className='w-[190px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.6)]'>Scope</h3>
                                        <h3 className='w-[249px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.8)]'>facial scan, Location Access</h3>

                                    </div>
                                    <div className='w-[439px] h-[92px] flex justify-between'>
                                        <h3 className='w-[190px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.6)]'>Purpose</h3>
                                        <div className='w-[249px] h-[92px] gap-[8px]'>
                                            <h3 className='w-[249px] h-[42px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.8)]'>User onboarding and identity verification</h3>
                                            <h3 className='w-[249px] h-[42px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.8)]'>Fraud prevention and compliance checks</h3>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='w-[439px] h-[99px] flex flex-col gap-[20px]'>
                            <h3 className='w-[47px] h-[21px] font-inter font-[600] text-[14px] leading-[21px] tracking-[-0.028px] text-center text-[rgba(5,5,82,0.8)]'>Tenure</h3>
                            <div className='w-[439px] h-[58px] flex items-center gap-[20px]'>
                                <div className='w-[439px] h-[58px] flex flex-col gap-[16px]'>
                                    <div className='w-[439px] h-[21px] flex justify-between'>
                                        <h3 className='w-[190px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.28px] text-[rgba(5,5,82,0.6)]'>humanReadable</h3>
                                        <h3 className='w-[249px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.8)]'>2025-06-12T14:35:22Z</h3>

                                    </div>
                                    <div className='w-[439px] h-[21px] flex justify-between'>
                                        <h3 className='w-[190px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.28px] text-[rgba(5,5,82,0.6)]'>machineTimestamp</h3>
                                        <h3 className='w-[249px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.8)]'>1755022522</h3>

                                    </div>
                                    

                                </div>
                            </div>
                        </div>

                        <div className='w-[439px] h-[120px] flex flex-col gap-[20px]'>
                            <h3 className='w-[84px] h-[21px] font-inter font-[600] text-[14px] leading-[21px] tracking-[-0.028px] text-center text-[rgba(5,5,82,0.8)]'>SDK Version</h3>
                            <div className='w-[439px] h-[79px] flex items-center gap-[20px]'>
                                <div className='w-[439px] h-[79px] flex flex-col gap-[16px]'>
                                    <div className='w-[439px] h-[21px] flex justify-between'>
                                        <h3 className='w-[190px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.6)]'>Version</h3>
                                        <h3 className='w-[249px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] trackin-[-0.028px] text-[rgba(5,5,82,0.8)]'>v1.3.2</h3>
                                    </div>
                                    <div className='w-[439px] h-[21px] flex justify-between'>
                                        <h3 className='w-[190px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.6)]'>link</h3>
                                        <h3 className='w-[249px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] trackin-[-0.03px] text-[rgba(5,5,82,0.8)] break-words'>https://example.com/sdk/releases/v1.3.2</h3>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className='w-[439px] h-[136px] flex flex-col gap-[20px]'>
                            <h3 className='w-[95px] h-[21px] font-inter font-[600] text-[14px] leading-[21px] tracking-[-0.028px] text-center text-[rgba(5,5,82,0.8)]'>Privacy Policy</h3>
                            <div className='w-[439px] h-[95px] flex items-center gap-[20px]'>
                                <div className='w-[439px] h-[95px] flex flex-col gap-[16px]'>
                                    <div className='w-[439px] h-[21px] flex justify-between'>
                                        <h3 className='w-[190px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.6)]'>privacyPolicy</h3>
                                        <h3 className='w-[249px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] trackin-[-0.028px] text-[rgba(5,5,82,0.8)]'>https://example.com/privacy/v1.3.2</h3>
                                    </div>
                                    <div className='w-[439px] h-[21px] flex justify-between'>
                                        <h3 className='w-[190px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.6)]'>User Action</h3>
                                        <h3 className='w-[249px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] trackin-[-0.03px] text-[rgba(5,5,82,0.8)]'>accept</h3>
                                    </div>
                                    <div className='w-[439px] h-[21px] flex justify-between'>
                                        <h3 className='w-[190px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.028px] text-[rgba(5,5,82,0.6)]'>actionTimestamp</h3>
                                        <h3 className='w-[249px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] trackin-[-0.03px] text-[rgba(5,5,82,0.8)]'>2024-06-12T14:35:22Z</h3>
                                    </div>

                                </div>
                            </div>

                        </div>



                        

                    </div>
                )}
            </div>

        </div>
    )
}

export default Token




