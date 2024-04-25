import React, { useState } from 'react'
import { fnjakai, gk, ke, uk, et, drc, it, pt, es, bh, ht, rw, ru, ug, maori, zi, xhosa, zulu, igbo, chewa } from '../assets'
import { Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
    {
        id: 1,
        src: gk,
        alt: "Gĩkũyũ",
        msg: "Ndekera oro rĩrĩ ndĩraagĩria rũrenda rũrũ",
    },
    {
        id: 2,
        src: ke,
        alt: "Kiswahili",
        msg: "Samahani, ninakarabati tovuti hii",
    },
    {
        id: 3,
        src: uk,
        alt: "English",
        msg: "Please bear with me as I renovate this site",
    },
    {
        id: 4,
        src: et,
        alt: "አማርኛ",
        msg: "ይህን ድረ ገጽ ሳድስ እባክህ ታገሰኝ",
    },
    {
        id: 5,
        src: it,
        alt: "Italiano",
        msg: "Vi prego di avere pazienza con me mentre rinnovo questo sito",
    },
    {
        id: 6,
        src: es,
        alt: "Español",
        msg: "Por favor, tengan paciencia conmigo mientras renuevo este sitio",
    },
    {
        id: 7,
        src: ru,
        alt: "Русский",
        msg: "Пожалуйста, наберитесь терпения, пока я буду обновлять этот сайт",
    },
    {
        id: 8,
        src: bh,
        alt: "ਪੰਜਾਬੀ",
        msg: "ਜਦੋਂ ਮੈਂ ਇਸ ਸਾਈਟ ਨੂੰ ਅੱਪਡੇਟ ਕਰਦਾ ਹਾਂ ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਮੇਰੇ ਨਾਲ ਸਹਿਣ ਕਰੋ",
    },
    {
        id: 9,
        src: pt,
        alt: "Portugues",
        msg: "Por favor, tenha paciência comigo enquanto atualizo este site",
    },
    {
        id: 10,
        src: ht,
        alt: "Krio (Ayiti)",
        msg: "Tanpri kenbe avè m pandan m ap repare sit sa a",
    },
    {
        id: 11,
        src: rw,
        alt: "Kinyarwanda",
        msg: "Nyamuneka munyihanganire mugihe mvugurura uru rubuga",
    },
    {
        id: 12,
        src: ug,
        alt: "Luganda",
        msg: "Nsaba kungumiikiriza nga bwe ntereeza omukutu guno",
    },
    {
        id: 13,
        src: maori,
        alt: "Maori",
        msg: "Tena koa kia mau ki ahau i taku whakahou i tenei pae",
    },
    {
        id: 14,
        src: zi,
        alt: "Shona",
        msg: "Ndokumbirawo mundiitire moyo murefu pandinovandudza saiti ino",
    },
    {
        id: 15,
        src: xhosa,
        alt: "isiXhosa",
        msg: "Nceda undinyamezele njengoko ndihlaziya le sayithi",
    },
    {
        id: 16,
        src: zulu,
        alt: "isiZulu",
        msg: "Ngicela ungibekezelele njengoba ngibuyekeza le sayithi",
    },
    {
        id: 17,
        src: igbo,
        alt: "Igbo",
        msg: "Biko nagide m ka m na-emelite saịtị a",
    },
    {
        id: 18,
        src: chewa,
        alt: "Chichewa",
        msg: "Chonde ndipirireni pamene ndikusintha tsamba ili",
    },
    {
        id: 19,
        src: drc,
        alt: "Lingala",
        msg: "Svp bo supporter ngai tango nazo mettre à jour site oyo",
    },
]

const MsgCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [animating, setAnimating] = useState(false)

    const next = () => {
        if (animating) return
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
        setActiveIndex(nextIndex)
    }

    const previous = () => {
        if (animating) return
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
        setActiveIndex(nextIndex)
    }

    const goToIndex = (newIndex) => {
        if (animating) return
        setActiveIndex(newIndex)
    }

    const slides = items.map(item => {
        return (
            <CarouselItem
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img src={item.src} alt={item.alt} className='w-[750px] h-[750px] rounded-full'/>
                <CarouselCaption
                    captionText={item.msg}
                    // captionHeader={item.alt}
                    className='text-3xl text-white'
                />
            </CarouselItem>
        )
    })

    return (
        <Carousel activeIndex={activeIndex}
            next={next}
            previous={previous}
            dark
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction='prev'
                directionText='Previous'
                onClickHandler={previous}
            />
            <CarouselControl
                direction='next'
                directionText='Next'
                onClickHandler={next}
            />
        </Carousel>
    )
}

const UnderRenovation = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-8'>
            <div className={`flex-1 flex flex-col justify-start mr-10`}>
                <a href={`#home`}>
                    <img src={fnjakai} alt="logo" className={`w-[288px] h-[288px] object-contain`} />
                </a>
            </div>
            {/* {items.map(item => (
        <div key={item.id} className='flex flex-col items-center justify-center gap-4'>
          <div >
            <img src={item.src} alt={item.alt} width={`80%`} height={`90%`} className='rounded-xl object-contain'/>
          </div>
          <div className='text-3xl text-dimWhite'>
            <p>{item.msg}</p>
          </div>
        </div>
      ))} */}

            <div>
                <MsgCarousel />
            </div>
        </div>
    )
}

export default UnderRenovation