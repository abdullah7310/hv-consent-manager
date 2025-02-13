import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function MainDiv() {

    const navigate = useNavigate()

    const [customer, setCustomer] = useState("")
    const [redirect, setRedirect] = useState("")
    const [policy, setPolicy] = useState("")
    const [purpose, setPurpose] = useState("")
    const [scope, setScope] = useState("")

    let allInputFills = false;
    if(customer && redirect && policy && purpose && scope){
        allInputFills= true;
    }

    const handleRequestConsent = async () => {
        const requestData = {
            transactionId: "sample-consent-txn-id-1",
            workflowId: "b9861928-7898-4343-9ecc-d03682932b5f",
            userId: "sample-user-id-1",
            consentExpiryInDays: 30
        };
    
        try {
            const response = await fetch("http://13.201.216.164/v1/request_consent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestData)
            });
    
            const data = await response.json();  // API ka response JSON me convert karo
            console.log("Consent Response:", data);  // Response ko console me print karo
            alert(data.message);  // User ko confirmation dikhane ke liye alert
    
        } catch (error) {
            console.error("Error in consent request:", error);
            alert("Something went wrong! Please try again.");
        }
    };

    return (
        <div className='w-[1156px] relative h-[822px]'>
            <div className='w-[567px] h-[438px] absolute top-[120px] left-[294px] flex gap-[24px] flex-col'>
                <div className='w-[203px] h-[30px] text-center m-auto flex items-center justify-center gap-[4px]'><h3 className='w-[203px] h-[30px] font-inter font-[600] text-[20px] leading-[30px] text-[rgba(5,5,82,0.8)] tracking-[-0.028em]' >Enter Consent Details</h3>
                </div>
                <div className='w-[567px] h-[384px]  border-b-[1px] p-[32px] rounded-[8px] bg-white border-b-[#E6E6E6] shadow-[0px_8px_16px_rgba(0,0,0,0.12),_0px_0px_2px_rgba(0,0,0,0.12)]'>
                    <div className='w-[503px] h-[320px] flex flex-col gap-[24px]'>
                        <div className='w-[503px] h-[260px]  flex flex-col gap-[20px] '>
                            <div className='w-[503px] h-[36px] flex items-center justify-center gap-[16px]'>
                                <div className='w-[180px] h-[21px] px-[2px] '>
                                    <h2 className='w-[72px] h-[21px] font-inter font-[500] text-[12px] leading-[21px] tracking-[-0.002em] text-center text-[rgba(5,5,82,0.6)]'>Customer ID</h2>
                                </div>
                                <div className='w-[317px]  h-[36px] rounded-[6px] border-[1px] py-[5.5px] px-[12px] flex items-center justify-center gap-[12px] bg-white border-[rgba(217,219,221,1)]'>
                                    <input value={customer} onChange={(e)=>setCustomer(e.target.value)} type="text" className='w-[293px] h-[21px] text-[14px] outline-none' />
                                </div>
                            </div>
                            <div className='w-[503px] h-[36px] flex items-center justify-center gap-[16px]'>
                                <div className='w-[180px] h-[21px] px-[2px] '>
                                    <h2 className='w-[71px] h-[21px] font-inter font-[500] text-[12px] leading-[21px] tracking-[-0.002em] text-center text-[rgba(5,5,82,0.6)]'>Redirect URI</h2>
                                </div>
                                <div className='w-[317px]  h-[36px] rounded-[6px] border-[1px] py-[5.5px] px-[12px] flex items-center justify-center gap-[12px] bg-white border-[rgba(217,219,221,1)]'>
                                    <input value={redirect} onChange={(e)=>setRedirect(e.target.value)} type="text" className='w-[293px] h-[21px] text-[14px] outline-none' />
                                </div>
                            </div>
                            <div className='w-[503px] h-[36px] flex items-center justify-center gap-[16px] '>
                                <div className='w-[180px] h-[21px] px-[2px] '>
                                    <h2 className='w-[81px] h-[21px] font-inter font-[500] text-[12px] leading-[21px] tracking-[-0.002em] text-center text-[rgba(5,5,82,0.6)]'>Policy Version</h2>
                                </div>
                                <div className='w-[317px]  h-[36px] rounded-[6px] border-[1px] py-[5.5px] px-[12px] flex items-center justify-center gap-[12px] bg-white border-[rgba(217,219,221,1)]'>
                                    <input value={policy} onChange={(e)=>setPolicy(e.target.value)}  type="text" className='w-[293px] h-[21px] text-[14px] outline-none' />
                                </div>
                            </div>
                            <div className='w-[503px] h-[36px] flex items-center justify-center gap-[16px] '>
                                <div className='w-[180px] h-[21px] px-[2px] '>
                                    <h2 className='w-[48px] h-[21px] font-inter font-[500] text-[12px] leading-[21px] tracking-[-0.002em] text-center text-[rgba(5,5,82,0.6)]'>Purpose</h2>
                                </div>
                                <div className='w-[317px]  h-[36px] rounded-[6px] border-[1px] py-[5.5px] px-[12px] flex items-center justify-center gap-[12px] bg-white border-[rgba(217,219,221,1)]'>
                                    <input value={purpose} onChange={(e)=>setPurpose(e.target.value)}  type="text" className='w-[293px] h-[21px] text-[14px] outline-none' />
                                </div>
                            </div>
                            <div className='w-[503px] h-[36px] flex items-center justify-center gap-[16px] '>
                                <div className='w-[180px] h-[21px] px-[2px] '>
                                    <h2 className='w-[37px] h-[21px] font-inter font-[500] text-[12px] leading-[21px] tracking-[-0.002em] text-center text-[rgba(5,5,82,0.6)]'>Scope</h2>
                                </div>
                                <div className='w-[317px]  h-[36px] rounded-[6px] border-[1px] py-[5.5px] px-[12px] flex items-center justify-center gap-[12px] bg-white border-[rgba(217,219,221,1)]'>
                                    <input value={scope} onChange={(e)=>setScope(e.target.value)}  type="text" className='w-[293px] h-[21px] text-[14px] outline-none' />
                                </div>
                            </div>

                        </div>
                        <div className='w-[503px] h-[36px] flex items-center justify-center gap-[12px] '>
                            <button onClick={()=> (navigate("/consent"))} className={`w-[503px] h-[36px] min-w-[64px] flex items-center justify-center py-[11.5px] px-[16px] ${allInputFills?'bg-[#554EF1]':'bg-[rgba(85,78,241,0.2)]'} hover:bg-[#554EF1] cursor-pointer rounded-[6px]`}><h3 className='w-[471px] h-[21px] font-inter font-[500] text-[14px] leading-[21px] tracking-[-0.002em] text-center text-[rgba(255,255,255,1)]'>Request Consent</h3></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainDiv
