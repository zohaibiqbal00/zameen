"use client"
import React, { useState} from 'react';
import {BiArrowToRight} from 'react-icons/bi'

const page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const setActive = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='w-[100%] bg-white p-[70px] text-black'>
        <h1 className='font-bold text-2xl'>Popular Location</h1>
        <div className="w-[100%] mx-auto mt-8">
            <div className="flex mb-4">
                <button
          onClick={() => setActive(1)}
          className={`flex-1 p-4 text-center font-bold ${
            activeTab === 1 ? ' text-green-700' : 'bg-transparent'
          }`}
        >
          For Sale
        </button>
        <button
          onClick={() => setActive(2)}
          className={`flex-1 p-4 text-center font-bold ${
              activeTab === 2 ? 'text-green-600' : 'bg-transparent'
            }`}
            >
          For Rent
        </button>
      </div>
        <hr/>

      {/* Tab content */}
      <div className='w-[100%]'>
        
        {activeTab === 1 && <div className="p-4 w-[100%] text-black">
            <h2 className='font-semibold text-2xl'>Most Popular Locations for Plots</h2>
            <div className='w-[100%] mt-5 flex justify-between'>
                <div className='w-[33%]'>
                    <h2 className='font-bold'>Lahore</h2>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in DHA Defence (8731)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Raiwind Road (4013)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Park Veiw City (2557)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Bahria Orchard (2312)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Bahria Town (1931)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Central Park (1414)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in G.T Road (1326)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in LDA Avenue (1241)</span></div>
                </div>



                <div className='w-[33%]'>
                    <h2 className='font-bold'>Karachi</h2>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Scheme 33 (2212)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in DHA Defence (1550)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Gadap Town (1257)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Bahria Karachi (1182)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in DHA City Karachi (1167)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Naya Nazimabad (385)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Cantt (204)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Malir (194)</span></div>
                </div>




                <div className='w-[33%]'>
                    <h2 className='font-bold'>Islamabad</h2>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in DHA Defence (4131)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Bahria Town (2024)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Gulberg (1755)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in B-17 (961)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Top City 1 (896)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in Faisal Town (606)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in PECHS (582)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Plots for sale in I-12 (563)</span></div>
                </div>

            </div>
            
            
            </div>}
        {activeTab === 2 && <div className="p-4 text-black">
        <h2 className='font-semibold text-2xl'>Most Popular Locations for Rent</h2>
            <div className='w-[100%] mt-5 flex justify-between'>
                <div className='w-[33%]'>
                    <h2 className='font-bold'>Lahore</h2>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Bahria Town (476)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Askari (450)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in DHA Defence (176)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Gulberg (164)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Johar Town  (133)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Raiwind Road (62)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Pak Arab (44)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Punjab Soceity (34)</span></div>
                </div>
                <div className='w-[33%]'>
                    <h2 className='font-bold'>Karachi</h2>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in DHA Defence (1079)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Clifton (417)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Culistan-e-Jauhar (304)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Gulshan-e-Iqbal (234)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Cantt (184)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Scheme 33 (145)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in North Nazimabad (134)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Sd Millat Road (134)</span></div>
                </div>




                <div className='w-[33%]'>
                    <h2 className='font-bold'>Islamabad</h2>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in E-11 (672)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in DHA Defence (386)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Gulberg (225)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Bahria Town (225)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in G-15 (219)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in G-11 (216)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in F-11 (204)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Diplomatic Enclave(120)</span>
                    </div>
                </div>

            </div>
            
            
            </div>}
        {/* {activeTab === 3 && <div className="p-4 bg-gray-100">Tab 3 content</div>} */}
      </div>
    </div>




<div style={{marginTop:'50px'}} className='mt-3'>

    <h2 className='font-semibold text-2xl'>Most Popular Locations for Houses</h2>
            <div className='w-[100%] mt-5 flex justify-between'>
                <div className='w-[33%]'>
                    <h2 className='font-bold'>Lahore</h2>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in DHA Defense (2730)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Bahria Town (595)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Gulberg (400)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Johar Town (250)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Askari  (246)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Raiwind Road (210)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in DHA 11 Rahbar (161)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Bahria Orchard (139)</span></div>
                </div>
                <div className='w-[33%]'>
                    <h2 className='font-bold'>Karachi</h2>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in DHA Defence (1056)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Bahria Karachi (205)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Milar (169)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Scheme 33 (134)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Gulshan-e-Iqbal (130)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Jamshed Town (118)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Clifton (93)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Cantt (85)</span></div>
                </div>




                <div className='w-[33%]'>
                    <h2 className='font-bold'>Islamabad</h2>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in DHA Defence (546)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in f-7 (328)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Bahria Town (292)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in G-13 (238)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in F-8 (233)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in F-6 (224)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Bani Gala (191)</span></div>
                    <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in E-11 (167)</span>
                    </div>
                </div>
</div>

            </div>






            <div style={{marginTop:'50px'}} className='mt-3'>
                <h2 className='font-semibold text-2xl'>Popular Cities to Rent Properties</h2>
                <div className='w-[100%] mt-5 flex justify-between'>
                    <div className='w-[33%]'>
                <h2 className='font-bold'>Houses</h2>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Lahore (7167)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Islamabad (3725)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Karachi (2472)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Rawalpindi (1548)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Multan (392)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Faisalabad (303)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Gujranwala (200)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Peshawar (184)</span></div>
            </div>
            <div className='w-[33%]'>
                <div style={{marginTop:'37px'}} className='flex items-center gap-2'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Sialkot (183)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Bahawalpur (25)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Abbottabad (17)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Quetta (2)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Houses to rent in Attock (184)</span></div>
                <button className='mt-4 text-blue-700 hover:underline'>Veiw all Cities</button>
            </div>




            <div className='w-[33%]'>
                <h2 className='font-bold'>Flats and Apartments</h2>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in E-11 (672)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Karachi (3581)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Islamabad (3100)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Lahore (1904)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Rawalpindi (714)</span></div>
                <div className='flex items-center gap-2 mt-4'><BiArrowToRight className="text-green-700"/><span className='cursor-pointer hover:underline'>Flats to rent in Peshawar (31)</span></div>
                <button className='mt-4 text-blue-700 hover:underline'>Veiw all Cities</button>
            </div>
            </div>
            </div>






    
              </div>
  );
};

// Export the Tab component
export default page;
