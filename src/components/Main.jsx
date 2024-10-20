import ic from '../img/ic.svg'
import phone from '../img/phone.svg'

import { useTranslation } from "react-i18next"; // To'g'ri import

function Main() {
    const { t } = useTranslation(); // Tarjima qilish uchun t funksiyasini olish

    return (
        <div className="mainn w-[1388px] mx-auto flex items-center justify-center max-w-[1588px] h-auto py-20 rounded-[52px]">
            <div className="w-[1126px] relative flex justify-center gap-x-28">

                <div className="w-[547px] flex flex-col gap-8">
                    <p className='text-[#676767] text-base font-bold'>{t('A SECURITY SOLUTION')}</p> {/* Tarjima qilingan matn */}
                    <h1 className='mainH1Color font-black text-[46px] leading-[62px]'>{t('Keep track of your loved ones in real time!')}</h1>
                    <div className='flex gap-5'>
                        <img className='w-12 h-20' src={ic} alt="" />
                        <p className='text-xl font-medium mainH1Color'>{t("We noticed the high level of insecurity in the world, and we thought of how technology could be used to combat these insecurities.")}</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1  className='headerr text-4xl font-extrabold'>{t("Join Our Waitlist!")}</h1>
                        <p className=' main-p text-base font-medium'>{t("Be the first to get notified when the product is ready!")}</p>
                    </div>
                    <div className='relative w-[524px]  h-[77px] inputbg px-3 py-2 flex items-center rounded-full'>
                        <input className=' inputbg rounded-full leading-7 text-xl h-full px-3 outline-none font-medium w-[350px]'  type="text" placeholder="Your email address"/>
                        <button className='h-full w-[152px] bg-[#0B56E8] text-white font-bold rounded-full'>Join List!</button>
                    </div>
                </div>

                <div className='relative'>
                    <img className="w-[452px] h-[546px]" src={phone} alt="" /> {/* Rasm manzilini qo'shing */}
                </div>
                    <div className='absolute bottom-[-70px] right-[-110px] w-20 h-20 rounded-full bgdark nextbtn flex items-center justify-center text-4xl'><h1 className='absolute top-[14px]'>{"->"}</h1></div>

            </div>
        </div>
    );
}

export default Main;
