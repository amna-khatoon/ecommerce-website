

import ShopCategory from '@/components/navbar/CollectionCart'
import FestivalSection from '@/components/navbar/FestivalSection'
import HeroSlider from '@/components/navbar/Hero'
import NewCollection from '@/components/navbar/NewCollection'
import PosterBanner from '@/components/navbar/Poster'
import RecentlySection from '@/components/navbar/RecentlySection'



const page = () => {
  return (
    <div>
      
     <HeroSlider/>
    <RecentlySection/>
     <NewCollection/>
     <ShopCategory/>
     <FestivalSection/>
     <PosterBanner/>
     
    </div>
  )
}

export default page
