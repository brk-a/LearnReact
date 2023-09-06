import Image from 'next/image'
import { zalishaGold } from '../app/assets'

const helpCentre = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
        <Image src={zalishaGold} width={288} height={288} alt='zalisha-logo'/>
        <p className='text-white font-semibold text-lg'>
            Help Centre will be here soon.
        </p>
    </div>
  )
}

export default helpCentre