import Block1 from '@/components/Block1'
import Block2 from '@/components/Block2'
import Block3 from '@/components/Block3'
import Block4 from '@/components/Block4'
import Block5 from '@/components/Block5'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
    return (
        <div className='grid grid-rows-[auto_1fr_auto] items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]'>
            <Header />
            <div className='flex flex-col gap-0 w-full'>
                <Block1 />
                <Block2 />
                <Block3 />
                <Block4 />
                <Block5 />
            </div>
            <Footer />
        </div>
    )
}
