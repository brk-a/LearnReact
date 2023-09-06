import Image from 'next/image'
import { zalishaGold } from '../app/assets'

const partners = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
        <Image src={zalishaGold} width={288} height={288} alt='zalisha-logo'/>
        <p className='text-white font-semibold text-lg'>
            Partners will be here soon.
        </p>
    </div>
  )
}

export default partners